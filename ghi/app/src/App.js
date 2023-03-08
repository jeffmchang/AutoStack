import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManuForm from './ManuForm';
import ManuList from './ManuList';
import ModelList from './ModelList';
import ModelForm from './ModelForm';
import AutoMobileForm from './AutoMobileForm';
import AutoList from './AutoMobileList';
import TechnicianForm from './TechnicianForm';
import SalesPersonForm from './SalesPersonForm';

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

          <Route path='models'>
            <Route path="" element={<ModelList />} />
            <Route path="new" element={<ModelForm />} />
          </Route>

          <Route path='automobiles'>
            <Route path="" element={<AutoList />} />
            <Route path="new" element={<AutoMobileForm />} />
          </Route>

          <Route path='technicians'>
            <Route path="new" element={<TechnicianForm />} />

          </Route>

          <Route path='salesperson'>
            <Route path="new" element={<SalesPersonForm />} />

          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
