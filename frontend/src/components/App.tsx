import React, { FC } from 'react';
import axios from 'axios';
import Demo from './Demo/Demo';

const App: FC = () => {
  const makeRequest = async () => {
    const response = await axios.get('http://backend:80/app/');

    console.log(response);
    return response;
  };

  return (
    <>
      <button onClick={makeRequest} type="button">
        {makeRequest}
      </button>
      <h1>Hello World</h1>
      <Demo />
    </>
  );
};

export default App;
