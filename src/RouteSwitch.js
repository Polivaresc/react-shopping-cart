import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"
import Shoppage from "./components/Shoppage";

const RouteSwitch = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/shop" element={<Shoppage/>}/>
            </Routes>
        </Router>
    )
}

export default RouteSwitch;