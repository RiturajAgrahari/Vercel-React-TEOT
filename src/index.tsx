import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tos from './components/termsAndServices/tos'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NotFoundPage from './components/notFoundPage/404';
import Pp from './components/privacyPolicy/pp';
import Support from './components/support/support';
import Admin from './admin';
import SliderOperation from './components/admin/sliderOperations';
import DashboardSidebar from './components/admin/dashboardSidebar';
import Dashboard from './components/admin/main';
import DevblogOperations from './components/admin/devblogsEditing';
import NewsDetail from './components/home_page/newsDetail/newsdetail';
import NewsPage from './components/home_page/newsPage/news';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define your routes using Route component */}
        <Route path="/" element={<App />} />
        <Route path="/Terms Of Conditions" element={<Tos />} />
        <Route path="/Privacy Policy" element={<Pp />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/slider" element={<div><DashboardSidebar /><SliderOperation /></div>} />
        <Route path="/admin/devblog" element={<div><DashboardSidebar /><DevblogOperations /></div>} />
        <Route path="/admin/dashboard" element={<div><DashboardSidebar /><Dashboard /></div>} />
        <Route path="/news/:id" element={<div><NewsDetail /></div>} />
        <Route path="/news/" element={<div><NewsPage /></div>} />
        {/* Add a catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

