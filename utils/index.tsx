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
    <div>

    </div>
  );
}

export default MyComponent;