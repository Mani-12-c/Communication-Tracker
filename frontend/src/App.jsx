import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Sidebar from './components/Shared/Sidebar';
import CompanyManagement from './components/Admin/CompanyManagement';
import AddCompany from './components/Admin/AddCompany';
import CommunicationMethod from './components/Admin/CommunicationMethod';
import AddMethod from './components/Admin/AddMethod'
import Dashboard from './components/User/Dashboard';
import CalendarView from './components/User/CalendarView';
import Login from './components/Forms/Login';
import AuthProvider from './utils/AuthContext'; 
import Register from './components/Forms/Register';
import LandingPage from './components/Shared/Landing';
import CalendarProvider from './utils/CalendarContext';
import About from './components/Shared/Abot';
import { useState } from 'react';
import './styles/main1.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <CalendarProvider>
      <AuthProvider>
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} />
          <div className="content">
              <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path="/admin/companies" element={<CompanyManagement />} />
                <Route path="/admin/methods" element={<CommunicationMethod />} />
                <Route path='/admin/addmethod' element={<AddMethod/>} />
                <Route path='/admin/companyform' element={<AddCompany/>} />
                <Route path='/about' element={<About/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/calendar" element={<CalendarView />} />
              </Routes>
          </div>
      </AuthProvider>
      </CalendarProvider>
    </Router>
  );
}

export default App;
