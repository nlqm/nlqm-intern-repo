import React, { useState } from 'react'
import Button from './Button';

const List = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.trim() !== "") {
        setItems([...items, text]);
        setText("");
    }
  }

  return (
    <div className='h-full m-4'>
        <h2>Simple List for you</h2>
        <input
            type='text'
            className='m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Enter your task'
            value={text}
            onChange={(event) => setText(event.target.value)}            
            required
        />
        <Button
          title="Add"
          className=""
          onClick={addItem}
        />

        <ul>
            {items.map((item, index) => (
                <li className='text-white font-regular p-2' key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default List