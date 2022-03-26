import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import { Shoppage } from "./components/Shoppage";
import { ItemDetail } from "./components/Items";
import Nav from "./components/Nav";

const App = () => {
    return (
        <Router>
            <Nav/>
            <Routes>
              <Route path="/" exact element={<Homepage />}/>
              <Route path="shop">
                  <Route index element={<Shoppage />}/>
                  <Route path=":id" element={<ItemDetail />}/>
              </Route>
            </Routes>
        </Router>
    )
}

export default App;