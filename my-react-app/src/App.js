import logo from './logo.svg';
import './App.css';
import { DogCard } from './DogCard';

function App() {
  return (
    <div className="App">
      <DogCard name="bruno" image="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg"/>
      <DogCard name="tiger" image="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg"/>

    </div>
  );
}

export default App;
