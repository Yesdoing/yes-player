import React, { useState, useEffect } from "react";

const useLocalStorage = () => {
  const [storageData, setStorageData] = useState(null);

  useEffect(() => {
    if (!storageData) {
      const arr = JSON.parse(localStorage.getItem("yes-player"));
      arr && setStorageData(arr);
    }
    
    localStorage.setItem("yes-player", JSON.stringify(storageData));
  }, [storageData]);

  const addList = item => {
    setStorageData(previousData => previousData ? [...previousData, item] : [item]);
  };

  const removeList = (e, id) => {
    e.stopPropagation();
    setStorageData(previousData => previousData.filter(data => data.id != id));
  };

  return [storageData, addList, removeList];
};

export default useLocalStorage;
