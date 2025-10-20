import './App.css';
import Home from './pages/Home.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SearchAppBar from './components/Appbar.jsx';
import Tour from './pages/Tour.jsx';

function App() {
  
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
