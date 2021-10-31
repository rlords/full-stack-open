import logo from './logo.svg';
import './App.css';

function App() {

  const now = new Date()
  const a = 10
  const b = 20
  const name = "Peter"
  const age = 23

  const Hello = (props) => {
    return(
      <div>
        <p>Hello {props.name}, you are {props.age} years old</p>
      </div>
    )
  }

  return (
    <div className="App">
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello name="George" age={a+b} />
      <Hello name="Daisy" age="34"/>
      <Hello name={name} age={age} />
    </div>
  );
}

export default App;
