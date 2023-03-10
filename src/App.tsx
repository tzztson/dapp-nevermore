import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { UseWalletProvider } from "use-wallet2";
import { ToastContainer, Flip } from "react-toastify";

// Global StyleCSS
import "./assets/style/style.css";
import "react-toastify/dist/ReactToastify.css";

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
                <UseWalletProvider autoConnect={true}>
                    <Router>
                        <Suspense fallback={<Loading />}>
                            <Provider>
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
                            </Provider>
                            <Footer />
                        </Suspense>
                        <ToastContainer theme="dark" transition={Flip} />
                    </Router>
                </UseWalletProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
