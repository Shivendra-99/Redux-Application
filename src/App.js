import './App.css';
import { getUsers } from './reduxSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={()=>dispatch(getUsers())}>click to Load the data</button>
      {state.isLoading && <><b>Loading...</b></>}
      {state.error && <h1>Error...</h1>}
      {state.users.map((user) => {
        return <h1>{user.name} </h1>
      })}
    </div>
  );
}                                                                                                                                                                     
export default App;

