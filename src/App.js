import { Route,Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";

function App() {
  return (
    <div>
      <Routes>
      <Route path='/*' element={<FrontPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
