import './App.css';
import Header from './components/Header';
import imgUrl from './img/img.jpeg'
import Home from './pages/Home';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Sidebar/>
    </div>
  );
}

export default App;
