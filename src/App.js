import { BrowserRouter, Routes, Route } from "react-router-dom";
import Design_1 from "./pages/Design_1";
import Design_2 from "./pages/Design_2";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/design1" element={<Design_1 />}></Route>
          <Route path="/design2" element={<Design_2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
