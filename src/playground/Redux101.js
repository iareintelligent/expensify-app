import { createStore } from "redux";

const add = ({ a, b }, c) => {
    return a + b + c;
};

console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1 }) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 }) => ({
    type: "DECREMENT",
    decrementBy
});

const resetCount = () => ({
    type: "RESET"
});

const setCount = ({ count = 0 }) => ({
    type: "SET",
    count
});

// Reducers
// 1. Pure functions (no external scope)
// 2. Never change state or action


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.incrementBy };
            break;
        case "DECREMENT":
            return { count: state.count - action.decrementBy };
            break;
        case "RESET":
            return { count: 0 };
            break;
        case "SET":
            return { count: action.count };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 15 }));
store.dispatch(resetCount());
store.dispatch(setCount({}));
