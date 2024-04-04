import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/admin/sliderOperations';
import Dashboard from './components/admin/dashboardSidebar';

function Admin() {
  return (
    <div className="App">
        <Main />
        <Dashboard />
    </div>
  );
}

export default Admin;
