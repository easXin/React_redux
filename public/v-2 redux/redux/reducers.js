/**
 *     包含 N 个reducer 的模块
 *     Reducer ：  返回新的状态 给store
 */
import{INCREMENT,DECREMENT,INCREMENTIFODD,INCREMENTASYNC} from './action-types'
//   action: （type, data）
// action : type        形参默认值  (previous state, action)
export function counter(state=0,action){
    // 返回新的状态 给store
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        case INCREMENTIFODD:
            return state + action.data;
        case INCREMENTASYNC:
            return state + action.data;
        default:
            return state;
    }
    // returns as store object
}
