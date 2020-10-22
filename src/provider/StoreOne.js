import React, {useState, useEffect} from 'react';

const StoreOneContext = React.createContext();
const StoreOne = (props) => {
  const [name, setName] = useState('');
  const [apiData, dataSet] = useState([]);

  const setApidata = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await result.json();
    dataSet(jsonData);
  };
  useEffect(() => {
    console.log('api run');
    setApidata();
  }, []);

  return (
    <StoreOneContext.Provider
      value={{
        name,
        setName,
        apiData,
      }}>
      {props.children}
    </StoreOneContext.Provider>
  );
};

export {StoreOne, StoreOneContext};
