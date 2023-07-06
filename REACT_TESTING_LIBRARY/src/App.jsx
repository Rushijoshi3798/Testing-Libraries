import './App.css';
import Button from './components/Button';
// import User from './Pages/User';

function App() {
  return (
    <div className="App">
      <h1>Name</h1>
      <h2 data-testid='h2-tag-title'>Title</h2>
      <label htmlFor='username-input'>Username</label>
      <input type="text" id='username-input' placeholder='Enter Name'/>
      <Button color={'red'} size={'large'}>Button Component</Button>

      <br />

      {/* <User /> */}
    </div>
  );
}

export default App;
