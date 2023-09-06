import {Dispatch, FC, SetStateAction} from "react";
import {useNavigate} from "react-router-dom";

import {ICar} from "../interfaces";
import css from './Car.module.css';
import {carService} from "../services";

interface IProps {
    car: ICar;
    setTrigger: Dispatch<SetStateAction<boolean>>
}

const Car: FC<IProps> = ({car, setTrigger}) => {
    const {id, brand} = car;

    const navigate = useNavigate();

    const deleteById = async (id: number): Promise<void> => {
        await carService.deleteById(id);
        setTrigger(prevState => !prevState);
    };

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <button onClick={() => navigate(id.toString(), {state: car})}>Details</button>
            <button onClick={() => deleteById(id)}>Delete</button>
        </div>
    );
};

export {Car};