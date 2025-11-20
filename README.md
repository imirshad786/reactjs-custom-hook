# 🪝 useFetch – Custom React Hook for Data Fetching

`useFetch` is a lightweight and reusable **custom React hook** built to simplify data fetching in your React applications.  
It efficiently manages **loading**, **error**, and **response states** while fetching JSON data from any API endpoint.

---

## 🚀 Features

✅ Fetches data from any API (GET request)  
✅ Automatically handles **loading**, **error**, and **success** states  
✅ Returns structured data for easy use in components  
✅ Clean and reusable hook logic  
✅ Supports dynamic URLs and dependency updates  

---

## 🧠 Hook Overview

```js
import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
    setError(err.message || 'Failed to fetch data.');
    setData(null);
    
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url, fetchData]);

  return { data, loading, error };
};

export default useFetch;

🧾 License
This project is licensed under the MIT License — feel free to use and modify.

Author: Arshad
Tech Stack: React.js, JavaScript (ES6+)

---

Would you like me to add a **code sandbox example or preview section** (so users can try it live) at the bottom of this README?
