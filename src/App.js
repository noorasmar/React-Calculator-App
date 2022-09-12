import ScreenData from './components/ScreenData/index';
import ButtonsList from './components/ButtonsList/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScreenData data='123 + 5 ='/>
      <ScreenData data='127' type='result'/>
      <ButtonsList />
      
    </div>
  );
}

export default App;
