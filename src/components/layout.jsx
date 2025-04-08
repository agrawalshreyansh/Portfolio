import Contact from "./contact";
import Timeline from "./education";
import MyImage from "./imgcontainer";
import NameSlider from "./nameSlider";
import Projects from "./projects";

const Layout = () => {
    return (
        <>  
            <MyImage/>
            <NameSlider/>
            <Projects/>
            <Timeline/>
            <Contact/>
        </>
    )
}

export default Layout;