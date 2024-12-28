import './home.css'
import Header from "./components/header";
import dynamic from 'next/dynamic'

const ClientWrapper = dynamic(() => import('./components/ClientWrapper'), {
  ssr: false,
  loading: () => <div>Loading 3D scene...</div>
})

const Home = () => {
    return (
        <div className="layout-container">
            <Header />
            <div className="canvas-wrapper">
                <ClientWrapper />
            </div>
        </div>
    );
};

export default Home;
