import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./i18n";

import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'
import List from './components/List'
import { Link, Router } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Button from './components/Button'
import FetchComponents from './components/FetchComponents'
import LargeNumbers from './components/LargeNumbers'
import ChildComponent from './components/ChildComponent'
import Form from './components/CustomForm'
import CustomForm from './components/CustomForm'
import LanguageSwitcher from './components/LanguageSwitcher'
import CounterMessage from './components/CounterMessage';
import testApiCall from './api/testApiCall.js';

function App() {
  const [count, setCount] = useState(0);
  const [showComponent, setShowComponent] = useState(true);
  
  const [number, setNumber] = useState(2);

  const [parentCount, setParentCount] = useState(0);
  const [ childCount, setChildCount] = useState(0);
  const handleChildClick = useCallback(() => {
    setChildCount((c) => c + 1);
  })

  useEffect(() => {
    testApiCall();
  }, [])

  return (
    <div className="h-full w-full">
      <div className="flex flex-row justify-center">
        <AppRouter />
      </div>
      <div className="flex flex-row justify-between">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <div className='h-full m-10 flex flex-col justify-center'>
        <HelloWorld name="Focus Bear" />
      </div>
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      
      <div className='h-full m-10 items-center'>
        <Counter />
        <CounterMessage />
      </div>
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <div className='h-full m-10 items-center'>
        <List />
      </div>
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <div className='m-4 flex flex-col justify-between'>
        <Button 
          title={showComponent ? "Unmounted Component" : "Mount Component"} 
          onClick={() => setShowComponent(!showComponent)}
        />
        {showComponent && <FetchComponents />}
      </div>
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <div className='m-4 justify-center'>
        <h2>Method for useMemo</h2>
        <Button title="Click to view useMemo example" onClick={() => setNumber(number + 1)} />
        <LargeNumbers number={number} />
      </div>
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <div className='mx-[40rem] justify-center text-white'>
        <h2>useCallBack Example</h2>
        <Button 
          onClick={() => setParentCount(parentCount + 1)}
          title="Increase parent count"
          className=""
        />
        <p>Parent count: {parentCount} | Child count: {childCount}</p>
        <ChildComponent onClick={handleChildClick} />
      </div>
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <div className='m-4 justify-center text-white'>
        <CustomForm />
      </div>
      <hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

      <div className='mx-[40rem] items-center text-white'>
        <LanguageSwitcher />
      </div>
    </div>
  )
}

export default App
