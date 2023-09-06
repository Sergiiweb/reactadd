import {useAppLocation} from "../hooks";
import {ICar} from "../interfaces";

const CarDetailsPage = () => {
    const {state: {id, year, price, brand}} = useAppLocation<ICar>();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {CarDetailsPage};