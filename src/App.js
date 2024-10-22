import "./App.css";
import Layout from "./Components/Layout";
import Vapt from "./Components/Vapt";
import NetworkInfrastructure from "./Components/NetworkInfrastructure"
import WebAndMobile from "./Components/WebAndMobile";
import CloudInfrastructure from "./Components/CloudInfrastructure";
import ApiVapt from "./Components/ApiVapt";
import Siem from "./Components/Siem";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ScrollToTop from "./Components/ScrollToTop"
import Contact from "./Components/Contact";
import Awards from "./Components/Awards";
import Blogs from "./Components/Blogs";
import Blog1Detail from "./Components/Blog1Detail";
import Blog2Detail from "./Components/Blog2Detail";
import Blog3Detail from "./Components/Blog3Detail";
import Blog4Detail from "./Components/Blog4Detail";
import Blog5Detail from "./Components/Blog5Detail";
import Blog6Detail from "./Components/Blog6Detail";
import ProductPage from "./Components/products/Product";
import AboutPage from "./About/About"

function App() {
  
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="/vapt" element={<Vapt/>}/>
          <Route path="/network-infrastructure" element={<NetworkInfrastructure/>}/>
          <Route path="/web-and-mobile-app" element={<WebAndMobile/>}/>
          <Route path="/cloud-infrastructure" element={<CloudInfrastructure/>}/>
          <Route path="/api-vapt" element={<ApiVapt/>}/>
          <Route path="/siem" element={<Siem/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/awards" element={<Awards/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/fortifying-mobile-app-security" element={<Blog1Detail/>}/>
          <Route path="/why-strong-passwords-matter-and-how-to-create" element={<Blog2Detail/>}/>
          <Route path="/phishing-beware-of-fake-emails-and-messages" element={<Blog3Detail/>}/>
          <Route path="/strengthening-your-digital-fortress" element={<Blog4Detail/>}/>
          <Route path="/elevating-security-with-firewalls" element={<Blog5Detail/>}/>
          <Route path="/top-5-effective-website-security-tips-for-2024" element={<Blog6Detail/>}/>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
