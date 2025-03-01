import React, { useMemo, useState } from 'react'
import Button from './Button';

const LargeNumbers = ({ number }) => {
  const result = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 2380372; i++) {
        sum += number;
    }
    return sum;
  }, [number]);

  return (
    <div className='m-4 text-white'>
        <p>current result: {result}</p>
    </div>
  )
}

export default LargeNumbers