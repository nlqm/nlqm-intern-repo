import React from 'react'

const HelloWorld = ({name}) => {
  return (
    <div className="w-full justify-center ">
        <h1 className="text-4xl font-bold">Hello, {name}!</h1>
    </div>
  )
}

export default HelloWorld