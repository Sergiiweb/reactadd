const baseURL = process.env.REACT_APP_API;

const cars = '/cars';

const urls = {
    cars: {
        base: cars,
        byId: (id) => `${cars}${cars}`
    }
}

export {
    baseURL,
    urls
}