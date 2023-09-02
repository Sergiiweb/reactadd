import {useEffect, useState} from "react";

import {carService} from "../../services";
import {Car} from "../Car/Car";
import css from './Cars.module.css';

const Cars = ({trigger, setCarForUpdate, setTrigger}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [trigger]);

    return (
        <div className={css.Cars}>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)}
        </div>
    );
};

export {Cars};