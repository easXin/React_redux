import React, {Component} from 'react'
import PropTypes from 'prop-types'
// 把redux 方法 和 react 组件 接起来
import {connect} from 'react-redux'


//import * as actions from '../redux/actions'
import {increment, decrement} from '../redux/actions'
export default class App extends Component{

    static propTypes = {
        count:PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }
    increment = () => {
        // 1. 得到选择器 增加数量, *1 把字符串转成数字
        const number = this.select.value*1
        // 2. 调用store 方法更新状态
        this.props.increment(number)
    }
    decrement = () =>{
        // 1. 得到选择器 增加数量, *1 把字符串转成数字
        const number = this.select.value * 1
        // 2. 调用store 方法更新状态
        this.props.decrement(number)
    }
    incrementIfOdd = () =>{
        const number = this.select.value*1
        const count = this.props.count
        if (count % 2 === 1) {
            this.props.increment(number)
        }
    }
    incrementAsync =()=>{
        const number = this.select.value*1
        // 异步更新， 我一定时间内往一个方向更新
        setTimeout(this.props.increment(number))), 1000);
    }
    render(){
        const count = this.props
        //debugger
        return (
            <div>
                <p>Click {count} times</p>
                <div>
                <select ref={ select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>&nbsp;
                </div>
            </div>
        );
    }
}
// 包装App
export default connect(
    // 数值
    state => ({count:state}),
    // 把他们解构 给App 传递
    {increment, decrement}
)(App)