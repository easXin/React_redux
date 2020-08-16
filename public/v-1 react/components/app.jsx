import React, {Component} from 'react'

export default class App extends Component{
    state={
        count:0
    }
    increment = () => {
        // 1. 得到选择器 增加数量, *1 把字符串转成数字
        const number = this.select.value*1
        // 2，得到count的状态，并计算新的count
        const count = this.state.count + number
        // 3. 更新状态
        this.setState({count})
    }
    decrement = () =>{
        // 1. 得到选择器 增加数量, *1 把字符串转成数字
        const number = this.select.value * 1
        // 2，得到count的状态，并计算新的count
        const count = this.state.count === 0 ? 0 : this.state.count-number
        // 3. 更新状态
        this.setState({ count });
    }
    incrementIfOdd = () =>{
        const number = this.select.value*1
        const count = this.state.count
        if(count%2===1){
            this.setState({count:count+1})
        }
    }
    incrementAsync =()=>{
        const number = this.select.value*1
        const count = this.state.count
        // 异步更新， 我一定时间内往一个方向更新
        setTimeout((
            this.setState({count:count+number})
        ),1000)
    }
    render(){
        const { count } = this.state;
        debugger
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