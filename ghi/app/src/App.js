import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManuWrapper from './Inventory/Manufacturer/ManuWrapper'
import ModelList from './Inventory/ModelList';
import ModelForm from './Inventory/ModelForm';
import AutoMobileForm from './Inventory/AutoMobileForm';
import AutoList from './Inventory/AutoMobileList';
import SalesWrapper from './Sales/Salesperson/SalesWrapper';
import CustomerForm from './Sales/Customer/CustomerForm';
import SalesList from './Sales/SalesList';
import AppointmentForm from './Service/AppointmentForm';
import AppointmentList from './Service/AppointmentList';
import ServiceList from './Service/ServiceHistory';
import SalesPersonHistory from './Sales/SalespersonHistory';
import CreateSaleForm from './Sales/CreateSaleForm';
import Footer from './footer';
import MainContent from './MainContent';
import TechnicianWrapper from './Service/Technician/TechWrapper';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainContent />} />

          <Route path="manufacturers">
            <Route path="" element={<ManuWrapper />} />
          </Route>

          <Route path='models'>
            <Route path="" element={<ModelList />} />
            <Route path="new" element={<ModelForm />} />
          </Route>

          <Route path='automobiles'>
            <Route path="" element={<AutoList />} />
            <Route path="new" element={<AutoMobileForm />} />
          </Route>

          <Route path="technicians" element={<TechnicianWrapper />} />

          <Route path='appointments'>
            <Route path="" element={<AppointmentList />} />
            <Route path="history" element={<ServiceList />} />
            <Route path="new" element={<AppointmentForm/>} />
          </Route>

          <Route path='salesperson'>
            <Route path="" element={<SalesWrapper />} />
            <Route path="history" element={<SalesPersonHistory />} />

          </Route>
          <Route path='customers'>
            <Route path="new" element={<CustomerForm />} />
          </Route>

          <Route path='sales'>
            <Route path="new" element={<CreateSaleForm />} />
            <Route path='' element={<SalesList />} />
          </Route>

        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
