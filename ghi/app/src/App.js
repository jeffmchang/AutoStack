import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManuForm from './ManuForm';
import ManuList from './ManuList';
import VehicleList from './VehicleList';
import VehicleForm from './VehicleForm';
import AutoMobileForm from './AutoMobileForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route path="" element={<ManuList />} />
            <Route path="new" element={<ManuForm />} />
          </Route>
          <Route path='vehicles'>
            <Route path="" element= {<VehicleList />} />
            <Route path="new" element={<VehicleForm />} />
          </Route>

          <Route path='automobiles'>
            {/* <Route path="" element= {<AutoList />} /> */}
            <Route path="new" element={<AutoMobileForm />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
