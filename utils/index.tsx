import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios('/api/data');
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    // <div>
    //   <h1>API data:</h1>
    //   <ul>
    //     {data.map((item) => (
    //       <li key={item.id}>{item.name}</li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default MyComponent;