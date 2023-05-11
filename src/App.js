import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Clients from "./components/Clients/Clients";

import "aos/dist/aos.css";
import Messages from "./components/Messages/Messages";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Testimonials from "./components/Testimonials/Testimonials";
import AddMessage from "./components/AddMessage/AddMessage";
import Gallery from "./components/Gallery/Gallery";
import GalleryFolder from "./components/GalleryFolder/GalleryFolder";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/addMessage">
          <AddMessage></AddMessage>
        </Route>
        <Route path="/message">
          <Messages></Messages>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/serviceDetail/:serviceId">
          <ServiceDetail></ServiceDetail>
        </Route>
        <Route path="/gallery/:galleryId">
          <GalleryFolder></GalleryFolder>
        </Route>
        <Route path="/testimonials">
          <Testimonials></Testimonials>
        </Route>
        <Route path="/clients">
          <Clients></Clients>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
