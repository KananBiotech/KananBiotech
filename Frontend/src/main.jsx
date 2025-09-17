import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { UserContextProvider } from './context/UserContext.jsx';
import './index.css'
import { Contact } from './Components/Contact.jsx';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </UserContextProvider>
  </BrowserRouter>
)
