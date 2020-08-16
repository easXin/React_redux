import { createStore } from "redux";
import { counter } from "./reducers";
// 生成一个reducer的store对象   dispatch(action)
const store = createStore(counter); // 多态? ......... 就是reducer 对象


export default store