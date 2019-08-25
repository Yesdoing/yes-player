import React, {useState, useEffect} from 'react';

const useLocalStorage = () => {
  const [storageData, setStorageData] = useState([]);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('yes-player')); 
    
    
    arr && setStorageData(arr);

    return () => {
      localStorage.setItem('yes-player', JSON.stringify(storageData));
      console.log(`data: ${storageData}`);
      console.log(localStorage('yes-player'));
    }
  }, []);

  const addList = item => {
    const data = [...storageData, item];
    setStorageData(data);
    localStorage.setItem('yes-player', JSON.stringify(data));
  }

  const removeList = id => {
    const data = storageData.filter(data => data.id !== id);
    setStorageData(data);
    localStorage.setItem('yes-player', JSON.stringify(data));
  }

  return [storageData, addList, removeList];
}

export default useLocalStorage;