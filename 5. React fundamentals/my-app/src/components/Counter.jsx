import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, selectCounterValue } from "../redux/counterSlice"
import Button from './Button'

const Counter = () => {
  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  return (
    <div>
        <h2>This is the Count components: {count}</h2>
        <Button onClick={() => dispatch(increment())} title="➕ Increment" />
        <Button onClick={() => dispatch(decrement())} title="➖ Decrement" />
        <Button onClick={() => dispatch(reset())} title="🔄 Reset" />
    </div>
  )
}

export default Counter