import React, { useEffect, useState } from 'react'
import Button from './Button';

const FetchComponents = () => {
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  // Log message to know is the component mounted or not
  useEffect(() => {
    console.log("Component mounted");

    return () => {
        console.log("Component unmounted");
    };
  }, []);

  // Function to fetch data from API
  const fetchData = async () => {
    setLoading(true);
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const result = await response.json();
        setData(result);
    } catch (error) {
        console.error("Problem fetching data: ", error);
    }
    setLoading(false);
  }

  return (
    <div className='w-full justify-center m-4 text-white'>
        <h2>Fetch Data Component</h2>
        <Button title="Fetch Data" onClick={fetchData} className=""/>

        {loading && <p>Loading...</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default FetchComponents