import { useEffect, useReducer, useState } from "react";
import { Header, Main, Footer } from "./components/Layout";
function App() {

  // Handle theme functionality
  const [theme, setTheme] = useState({light: true});
  const handleThemeChange = () => {
    setTheme((state) => {
      return {
        light: !state.light
      }
    });
  }

  /**
   * Add theme to the body tag of document.
   * I used module css so every css class (e.g., .body-img) 
   * transform to unique name like (.Header_body-img__w5LA7)
   * so if add a class like .theme-light to body and in a module
   * use (.theme-light .body-img) both classes transform but
   * in body tag still have .theme-light and app doesn't work
   * instead by using (body[data-theme="theme-light"] .body-img)
   * first we don't need to pass theme to every component and
   * second (body[data-theme="theme-light"]) doesn't transform.
   * Check src/components/Layout/Header.module.css for this approch.
   */
  useEffect(() => {
    if(theme.light){
      document.body.dataset["theme"] = "theme-light";
    } else {
      document.body.dataset["theme"] = "theme-dark";
    }
  }, [theme.light])

  return (
    <>
      <Header onThemeChange={handleThemeChange} theme={theme} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
