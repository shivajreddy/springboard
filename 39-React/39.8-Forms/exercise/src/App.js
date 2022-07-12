import './App.css';
import BoxList from './BoxList';
import ToDoList from './ToDoList';

function App() {
  return (
    <div style={{ textAlign: "center" }}>

      <h2>CBM</h2>
      <BoxList />

      <h2> TDL </h2>
      <ToDoList />


    </div>
  );
}

export default App