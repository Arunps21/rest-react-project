import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Restaurant from './Restaurant';
import RestView from './RestView';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Restaurant/>}/>
        <Route path='/RestView/:id' element={<RestView/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
