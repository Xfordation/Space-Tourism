import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/styles/Global";
import { PageProvider } from "./context/PageContext";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Notfound404 from "./pages/Notfound404";

function App() {
  // Custom Theme
  const theme = {
    colors: {
      primary: "hsl(230deg, 35%, 7%)",
      secondary: "hsl(231deg, 77%, 90%)",
      white: "hsl(0deg, 0%, 100%)",
    },
    fonts: {
      Bellefair: "Bellefair",
      Barlow: "Barlow Condensed",
    },
    fontTypes: {
      subHeading1: ["Bellefair", "28px"],
      subHeading2: ["Barlow Condensed", "14px", "2.35"],
      navText: ["Barlow Condensed", "16px", "2.7"],
    },
  };
  return (
    <React.Fragment>
      <Router>
        <PageProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Nav />
            <Routes>
              <Route path="*" element={<Notfound404 />} />
              <Route path="/" element={<Home />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/crew" element={<Crew />} />
              <Route path="/technology" element={<Technology />} />
            </Routes>
          </ThemeProvider>
        </PageProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
