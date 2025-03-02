import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "../redux/counterSlice"

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
        <h2>This is the Count components: {count}</h2>
        <Button onClick={() => dispatch(increment())} title="Increase + " />
        <Button onClick={() => dispatch(decrement())} title="Decrease - " />
        <Button onClick={() => dispatch(reset())} title="Reset - " />
    </div>
  )
}

export default Counter