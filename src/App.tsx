import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from "./view/home";
import Stake from "./view/stake";
import NotFound from "./view/404";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to={"/stake"} />} />
                <Route path="/home" element={<Home />} />
                <Route path="/stake" element={<Stake />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
