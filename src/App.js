import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ScrollTop from './Components/Scrolltop'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Affiliate from './Pages/Affiliate/Affiliate';
import Vendor from './Pages/Vendor/Vendor';
import Faq from './Pages/Faq/Faq';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Terms from './Pages/Terms/Terms';
import Privacy from './Pages/Privacy/Privacy';
import Disclaimer from "./Pages/Disclaimer/Disclaimer";
import Refund from "./Pages/Refund/Refund";
import './App.css';


const Layout = () =>{
  return(
    <div className="main">
      <ScrollTop />
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },

      {
        path:"/affiliate",
        element:<Affiliate/>,
      },  

      {
        path:"/vendor",
        element:<Vendor/>,
      },  

      {
        path:"/faq",
        element:<Faq/>,
      },  

      {
        path:"/contact",
        element:<Contact/>,
      },   

      {
        path:"/about",
        element:<About/>,
      },  

      {
        path:"/terms",
        element:<Terms/>,
      },

      {
        path:"/privacy",
        element:<Privacy/>,
      },  

      {
        path:"/disclaimer",
        element:<Disclaimer/>,
      },  

      {
        path:"/refund",
        element:<Refund/>,
      },    
    ]
  },

])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />    
    </div>
  );
}

export default App;

