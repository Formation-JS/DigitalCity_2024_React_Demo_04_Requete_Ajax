import './App.css'
import CatRequester from './containers/cat-requester/cat-requester';
import { getRandomCat } from './services/cat.service';

// getRandomCat().then(res => console.log(res));

function App() {

  return (
    <>
      <h1>Demo Ajax</h1>
      <CatRequester />
    </>
  )
}

export default App
