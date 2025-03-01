import React from 'react'

const Button = ({ title, className, onClick = () => {}, disabled = false }) => {
    const classes = `mt-4 text-white bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${className | ""}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick} disabled={disabled}>
        {title}
    </button>
  );

  return renderButton();
}

export default Button