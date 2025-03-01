import React from 'react'
import Button from './Button';

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child component render again!");

  return (
    <div className='mt-6'>
        <h2>Child component</h2>
        <Button 
            title="Click this child button"
            onClick={onClick}
            className=""
        />
    </div>
  );
});

export default ChildComponent