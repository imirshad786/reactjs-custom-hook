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
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

🧾 License
This project is licensed under the MIT License — feel free to use and modify.

Author: Arshad
Tech Stack: React.js, JavaScript (ES6+)
**Deploy Project Link:** [Netlify Poject Link ](https://arshcoder-react-customhook.netlify.app/)
---

Would you like me to add a **code sandbox example or preview section** (so users can try it live) at the bottom of this README?
