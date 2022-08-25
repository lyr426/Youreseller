import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import Category from "./pages/Category";
import Item from "./pages/Item"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element= { <Main/> } />
            <Route path="category" >
              <Route index element={ <Category/> } />
              <Route path=":categoryCode" element= {<Item/>}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
