import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Project from "./components/project/Project";
import Skill from "./components/skill/Skill";

import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <div>
            <ToastContainer position="top-left" theme="colored" />
            <Header />
            <Skill />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;