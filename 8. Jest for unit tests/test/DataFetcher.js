import React, { useEffect, useState } from 'react';
import axios from "axios";

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((respone) => {
            setData(respone.data);
            setLoading(false);
        })
        .catch(() => {
            setData({ title: "Error fetching data" });
            setLoading(false);
        });
  }, []);

  if (loading) return <p>Loading...</p>

  return <h1>{data?.title}</h1>
}

export default DataFetcher