import React, { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import moment, { Moment } from 'moment'
import cs from 'classnames'

import {
  DatePicker,
} from 'antd'
import {
  useDispatch,
  useSelector
} from 'react-redux'

import styles from './index.module.scss'

export default function () {
  const dispatch = useDispatch()
  const [time, setTime] = useState(moment().month(2))

  return (
    <div className = { styles['wrap'] }>
      <Time />
    </div>
  )
}

function Time () {
  const [now, setNow] = useState(moment())  // 会返回当前状态的属性 和修改状态的方法

  useEffect(() => {  // 可以在函数组件内处理生命周期事件，默认情况，每次渲染都会调用该函数
    const t = setInterval(() => {
      setNow(moment())
    }, 1000)

    return () => {  // 每次卸载都执行此函数，清楚定时器
      clearTimeout(t)
    }
  }, [])

  return (
    <div className = { styles['time'] }>
      <span className = { styles['time-date'] }>{ now.format('YYYY-MM-DD') }</span>
      <span className = { styles['time-time'] }>{ now.format('HH:mm:ss') }</span>
    </div>
  )
}

