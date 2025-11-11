import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  if (!key) {
    console.log("Enter Key and Initial values");
  }

  const [data, setData] = useState(initialValue);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    if (existingData) setData(existingData);
    else {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }, []);

  function updateLocalStorage(newData) {
    typeof newData === "function"
      ? localStorage.setItem(key, JSON.stringify(newData(data)))
      : localStorage.setItem(key, JSON.stringify(newData));

    setData(newData);
  }
  return [data, updateLocalStorage];
}
