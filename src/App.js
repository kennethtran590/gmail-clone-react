import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
        <SendMail />
      </div>
    </Router>
  );
}

export default App;
