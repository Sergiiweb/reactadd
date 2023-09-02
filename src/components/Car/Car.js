import css from './Car.module.css';
import {carService} from "../../services";

const Car = ({car, setCarForUpdate, setTrigger}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        try {
            await carService.deleteById(id);
            setTrigger(prev => !prev);
        } catch (e) {
            console.log(e.response.data);
        }
    }

    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};