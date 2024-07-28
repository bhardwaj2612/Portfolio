import Home from "../pages/Home"
import Education from "../pages/Education"
import Project from "../pages/Project"
import Tools from "../pages/Tools"
import Resume from "../pages/Resume"
import Nav from "./Nav"
import Footer from "./Footer"
import '../css/home.css'
import '../css/Header.css'
import ScrollTop from "./ScrollTop"

const Main = () => {
    return <>
        <main >
            <Nav />
            <Home />
            <Education />
            <Project />
            <Tools />
            <Resume />
            <Footer />
            <ScrollTop />
        </main >

    </>
}
export default Main
