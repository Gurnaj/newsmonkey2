import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default function App() {
  let apiKey = process.env.REACT_APP_API_KEY;

  let [progress, setProgress] = useState(0);

  const updateProgress = (progress_) => {
    setProgress(progress_);
  }

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress} waitingTime={800} />
          <Routes>    {/* React ko lagega ki component toh phele se hi mount ho chuka hai toh phir se kyun krna hai -> Woh replace nahi karega component ko(update nahi karega) */}
            {/* Toh main forced re-mount kr sakta hun -> By giving a unique key to each */}
            <Route exact path="/" element={<News updateProgress={updateProgress} key="general" pageSize={12} apiKey={apiKey} country="in" category="general" />} />
            <Route exact path="/science" element={<News updateProgress={updateProgress} key="science" pageSize={12} apiKey={apiKey} country="in" category="science" />} />
            <Route exact path="/business" element={<News updateProgress={updateProgress} key="business" pageSize={12} apiKey={apiKey} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News updateProgress={updateProgress} key="entertainment" pageSize={12} apiKey={apiKey} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News updateProgress={updateProgress} key="health" pageSize={12} apiKey={apiKey} country="in" category="health" />} />
            <Route exact path="/sports" element={<News updateProgress={updateProgress} key="sports" pageSize={12} apiKey={apiKey} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News updateProgress={updateProgress} key="technology" pageSize={12} apiKey={apiKey} country="in" category="technology" />} />
          </Routes>
        </Router>
      </>
    )
}