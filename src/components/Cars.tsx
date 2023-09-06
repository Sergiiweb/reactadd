import {useEffect, useState} from "react";

import {ICar} from "../interfaces";
import {carService} from "../services";
import {Car} from "./Car";
import css from './Cars.module.css';
import {CarForm} from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [trigger, setTrigger] = useState<boolean>(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [trigger]);

    return (
        <div>
            <CarForm setTrigger={setTrigger}/>
            <hr/>
            <div className={css.Cars}>
                {cars.map(car => <Car key={car.id} car={car} setTrigger={setTrigger}/>)}
            </div>
        </div>
    );
};

export {Cars};