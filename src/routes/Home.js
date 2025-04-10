import './Home.styles.scss';
import Navbar from './Navigation';
import About from '../components/home-components/about';
import Experience from '../components/home-components/experience';
import Education from '../components/home-components/education';
import Projects from '../components/home-components/projects';
import OtherInfo from '../components/home-components/otherinfo';
import Contacts from '../components/home-components/contacts';


const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="homepagecontent">
                <About></About>
                <Experience></Experience>
                <Education></Education>
                <Projects></Projects>
                <OtherInfo></OtherInfo>
                <Contacts></Contacts>
            </div>
        </div>
    );

}

export default Home;