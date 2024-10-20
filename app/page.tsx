import Link from "next/link";
import './home.css'


const Home = () => {
    return (
        <>
            <h1 id='title'>Directory of my cool stuff</h1>
            <p>Hello World! This is the Home page</p>
            Visit the <Link href="/about">About</Link> page.
        </>
    );
};


export default Home;
