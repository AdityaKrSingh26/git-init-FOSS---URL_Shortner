import React, { useEffect } from 'react'
import "./App.css"
import { Toaster } from 'react-hot-toast'
import Home from './Components/Home'
import ReactGA from 'react-ga';
// import MetaTags from './MetaTags';

function App() {

  useEffect(() => {
    ReactGA.initialize('G-4PLEB4MYXD');
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);


  return (
    <div>
      {/* <MetaTags
        title="URL Shortener | Shorten Links and Get IP Address & Location Information"
        description="Shorten long URLs with our URL shortening service and get instant access to the IP address and location information of the target domain. Track clicks, analyze traffic, and manage your links efficiently."
        keywords="URL shortener, shorten links, link shortener, IP address lookup, domain location, track clicks, link analytics, URL management"
      /> */}


      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: "#48ed88",
            },
          },
        }}
      >
      </Toaster>


      <Home />
    </div>
  )
}

export default App