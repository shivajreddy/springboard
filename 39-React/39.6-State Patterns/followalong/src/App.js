import './App.css';
import Counter from './Counter';

import RemoveNumber from './RemoveNumber';

import NumberList from './NumberList';
const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];


function App() {
  return (
    <>
      {/* <h1>React</h1> */}
      {/* <Counter/>

      <NumberList
        all_numbers = {nums}
        remove_number={10}
      /> */}

      <RemoveNumber
        all_numbers = {nums}
      /> 
      
    </>
  );
}

export default App