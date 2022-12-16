import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { UseWalletProvider } from "use-wallet2";

// Global StyleCSS
import "./assets/style/style.css";

// Layouts Components
import Loading from "./components/loading";
import { theme } from "./components/theme";
import Provider from "./context";
const Header = React.lazy(() => import("./components/layouts/header"));
const Footer = React.lazy(() => import("./components/layouts/footer"));

// Main Components
const Home = React.lazy(() => import("./view/home"));
const Stake = React.lazy(() => import("./view/stake"));
const NotFound = React.lazy(() => import("./view/404"));

function App() {
    return (
        <div className="main">
            <ThemeProvider theme={theme}>
                <UseWalletProvider>
                    <Provider>
                        <Router>
                            <Suspense fallback={<Loading />}>
                                <Header />
                                <Routes>
                                    <Route
                                        path="/"
                                        element={<Navigate to={"/home"} />}
                                    />
                                    <Route path="/home" element={<Home />} />
                                    <Route path="/stake" element={<Stake />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                                <Footer />
                            </Suspense>
                        </Router>
                    </Provider>
                </UseWalletProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
