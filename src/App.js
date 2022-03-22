import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Shoppage from "./components/Shoppage";
import Nav from "./components/Nav";

const App = () => {
    return (
        <Router>
            <Nav/>
            <Routes>
              <Route path="/" exact element={<Homepage />}/>
              <Route path="shop" element={<Shoppage />}/>
            </Routes>
        </Router>
    )
}

export default App;