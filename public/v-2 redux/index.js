import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app.jsx'

import store from './redux/stores'


// 管理state 和 reducer：返回新的状态 给store
// 内部会第一次调用reducer 函数得到初始state

function render(){
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

render()

// 订阅监听
store.subscribe(render)