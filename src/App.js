// src/App.js
import React from 'react';
import { Helmet } from 'react-helmet'; // Ensure this import is present
import Nav from './components/Nav'; // Case-sensitive, ensure it matches the file name
import Sec1 from './components/Sec1';
import Head from './components/Head';
import './App.css';


function App() {
  return (
    <div>
       <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your website description" />
        <meta name="keywords" content="React, SEO, Example" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Your Website Title" />
        <meta property="og:description" content="Your website description" />
        <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://example.com/styles.css" />
        <title> Krishibuddy </title>
      </Helmet>
    </div>

      <Nav /> {/* Use Nav component */}
      <Sec1 /> {/* Use Sec1 component */}
      {/* You can add more content or other components here */}
    </div>
  );
}

export default App;
