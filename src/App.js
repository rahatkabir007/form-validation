import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chart from './pages/Chart/Chart';
import RegistrationForm from './pages/RegistrationForm/RegistrationForm';


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationForm />}/>
          <Route path="/registrationform" element={<RegistrationForm />}/>
          <Route path="/chart" element={<Chart />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
