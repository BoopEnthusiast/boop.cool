import Link from "next/link";
import './home.css'
import Header from "./components/header";
import ThreeCanvas from "./components/three";


const Home = () => {
    return (
        <>  
            <div>
                <Header />
                <ThreeCanvas />
            </div>
        </>
    );
};


export default Home;
