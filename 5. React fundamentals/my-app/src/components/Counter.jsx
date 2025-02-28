import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h2>This is the Count components: {count}</h2>
        <button className='mt-4 text-white bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={() => setCount(count + 1)}>Count up!</button>
    </div>
  )
}

export default Counter