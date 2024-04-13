import './App.css';
import React, { useEffect, useState } from 'react';
import { getUsers } from './reduxSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const [userData , setUserData] =  useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
 useEffect(() => {
   dispatch(getUsers());
   setUserData(state.user.users);
 }, [dispatch,state.user.users])
  return (
    <div className="App">
      {state.user.isLoading && <><b>Loading...</b></>}
      {state.user.error && <h1>Error...</h1>}
      {userData.map((user) => {
        return <h1>{user.name} </h1>
      })}
    </div>
  );
}                                                                                                                                                                     
export default App;

