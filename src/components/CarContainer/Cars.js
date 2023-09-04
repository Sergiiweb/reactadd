import {useAppReducer} from "../../hooks";
import {useEffect} from "react";

import {carService} from "../../services";
import {carActions} from "../../reducers";
import {Car} from "./Car";
import css from './Cars.module.css';

const Cars = () => {
    const [carInitialState, dispatch] = useAppReducer(state => state.cars);

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carActions.setCars(data)));
    }, [carInitialState.trigger, dispatch]);

    return (
        <div className={css.Cars}>
            {carInitialState.cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};