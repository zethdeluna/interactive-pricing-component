import React, { useState, useEffect, createContext, useContext } from 'react';
import './App.scss';
import { Desktop, Mobile } from './components';

const viewportContext = createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

const Webpage = () => {
  const { width } = useViewport();
  const breakpoint = 600;

  // FOR NOW, CHANGE LATER
  return width > breakpoint ? <Desktop/> : <Mobile/>
};

function App() {
  return (
    <div className="App">
      <ViewportProvider>
        <Webpage/>
      </ViewportProvider>
    </div>
  );
}

export default App;
