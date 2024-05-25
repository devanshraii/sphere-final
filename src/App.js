import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/HomeHero/Hero';
import Home from './Screens/Home/Home';
import ServicesPage from './Screens/ServicesPage/ServicesPage';
import Footer from './Components/Footer/Footer';
import AimlScreen from './Screens/ServicesScreens/AimlScreen/AimlScreen';
import BlockChain from './Screens/ServicesScreens/GenerateAi/GenerateAi';
import DataAnalytics from './Screens/ServicesScreens/DataAnalytics/DataAnalytics';
import Qa from './Screens/ServicesScreens/Qa/Qa';
import DataEngi from './Screens/ServicesScreens/DataEngineering/DataEngi';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <>
    <NavBar />
    <Outlet />
    {/* <Home /> */}
    {/* <ServicesPage /> */}
    {/* <AimlScreen /> */}
    {/* <BlockChain /> */}
    {/* <Qa /> */}
    {/* <DataAnalytics /> */}
    {/* <DataEngi /> */}
    <Footer />
    </>
  );
}

export default App;

// Small Phones (e.g., iPhone SE, Pixel 4a):
// Screen Size: Approximately 320px width
// Resolution: 640x1136 pixels
// Medium-sized Phones (e.g., iPhone 11, Galaxy S20):
// Screen Size: Approximately 375px - 414px width
// Resolution: 828x1792 pixels (iPhone 11), 1080x2400 pixels (Galaxy S20)
// Large Phones / Phablets (e.g., iPhone 11 Pro Max, Galaxy Note series):
// Screen Size: Approximately 414px - 428px width
// Resolution: 1242x2688 pixels (iPhone 11 Pro Max), 1440x3040 pixels (Galaxy Note 20 Ultra)
