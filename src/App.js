// import logo from './logo.svg';
// import './App.css';
import Bill from './components/Bill'
import Input from './components/Input'

function App() {
  let active = 0
  return (
    <div>
      {active == 0 ? <Input /> :
        <Bill></Bill>}
    </div>
  );
}

export default App;
