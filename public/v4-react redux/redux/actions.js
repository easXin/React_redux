
import{INCREMENT,DECREMENT,INCREMENTIFODD,INCREMENTASYNC} from '../redux/action-types'


export const increment = (number) => ({
    type: INCREMENT,
    data: number,
});

export const decrement= (number) => ({
    type: DECREMENT,
    data: number,
});

export const incrementIfOdd = (number) => ({
    type: INCREMENTIFODD,
    data: number,
});

export const incrementAsync = (number) => ({
    type: INCREMENTASYNC,
    data: number,
});