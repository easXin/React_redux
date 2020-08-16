import { createStore， applyMiddlware} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-dev-tools-extension'
import { counter } from "./reducers";
// 生成一个reducer的store对象   dispatch(action)
const store = createStore(counter, 
 composeWithDevTools( applyMiddleware(thunk))
); // 多态? ......... 就是reducer 对象

/*
        中间件： 扩展当前功能的插件
*/


export default store