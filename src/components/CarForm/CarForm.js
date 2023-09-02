import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {carService} from "../../services";
import {carValidator} from "../../validators";
import css from './CarForm.module.css';

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {
        reset,
        register,
        handleSubmit,
        formState: {errors, isValid},
        setValue
    } = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate]);

    const save = async (car) => {
        try {
            await carService.create(car);
            setTrigger(prev => !prev);
            reset();
        } catch (e) {
            console.log(e.response.data);
        }
    }

    const update = async (car) => {
        try {
            await carService.updateById(carForUpdate.id, car);
            setTrigger(prev => !prev);
            setCarForUpdate(null);
            reset();
        } catch (e) {
            console.log(e.response.data);
        }
    }

    return (
        <form className={css.CarForm} onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <div><input type="text" placeholder={'brand'} {...register('brand')}/></div>
            {errors.brand && <div>{errors.brand.message}</div>}
            <div><input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/></div>
            {errors.price && <div>{errors.price.message}</div>}
            <div><input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/></div>
            {errors.year && <div>{errors.year.message}</div>}
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};