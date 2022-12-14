import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

// Layouts Components
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import { theme } from "./components/theme";

// Main Components
import Home from "./view/home";
import Stake from "./view/stake";
import NotFound from "./view/404";

// Global StyleCSS
import "./assets/style/style.css";

function App() {
    return (
        <div className="main">
            <ThemeProvider theme={theme}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Navigate to={"/home"} />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/stake" element={<Stake />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
