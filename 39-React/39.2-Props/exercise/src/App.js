import './App.css';
import Part1 from './Components/Part1';
import { Tweet } from './Components/Tweet';
import Person from './Components/Person';
import BsButton from './Components/BsButton';
import BsCard from './Components/BsCard';

function App() {
  return (
    <>
      <h1> Exercise 39.1 </h1>
      <Part1 name="shiva" />

      <Tweet
        id={2}
        username='shivajreddy'
        name='shiva'
        message='hello world'
      />

      <Person
      />

      <BsButton
        color="primary"
        text="woaw"
      />

      <BsCard
        title="title"
        body="body of the card"
      />

    </>
  );
}

export default App;
