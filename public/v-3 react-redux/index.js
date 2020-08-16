import React from 'react'
import ReactDOM from 'react-dom'

// 有了他以后就不需要订阅 监听了
import {Provider} from 'react-redux'

import App from './components/app.jsx'
import store from './redux/stores'



 ReactDOM.render(（

    <Provider store={store}>
    </Provider>
 ）, document.getElementById('root'))


// 管理state 和 reducer：返回新的状态 给store
// 内部会第一次调用reducer 函数得到初始state

// function render(){
//     ReactDOM.render(<App store={store}/>, document.getElementById('root'))
// }

// render()

// 订阅监听
// store.subscribe(render)