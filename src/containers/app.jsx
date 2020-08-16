import React, {Component} from 'react'
// 把redux 方法 和 react 组件 接起来
import {connect} from 'react-redux'
//import * as actions from '../redux/actions'
import {increment, decrement,incrementAsync} from '../redux/actions'
import Counter from '../components/counter'


// 包装App
export default connect(
    // 数值  ACTIONS 
    state => ({count:state}),
    // 把他们解构 给App 传递
    {increment, decrement}
)(Counter))