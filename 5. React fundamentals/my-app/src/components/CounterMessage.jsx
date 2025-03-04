import React from 'react'
import { useSelector } from 'react-redux'
import { selectCounterValue } from '../redux/counterSlice'

const CounterMessage = () => {
  const count = useSelector(selectCounterValue);

  let message = "It is countingggg ";
  if (count > 5) {
    message = "You are doing so great! 🔥";
  } else if (count < 0) {
    message = "The number is getting so weird 👀"
  }

  return <h2>{message}</h2>;
};

export default CounterMessage