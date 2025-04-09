import './Home.styles.scss';
import Navbar from './Navigation';
import About from '../components/home-components/about';


const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="homepagecontent">
                <About></About>
            </div>
        </div>
    );

}

export default Home;