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

