import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Nav/Header.js';
import Main from './Main.js';
import Footer from './components/Footer/Footer.js';



// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Productpage from "./Pages/Productpage/Productpage";
import Error from "./Pages/Four04/Four04";




function App() {

  return (
    <div className="App">
      <Router>

        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          <Route path="/" component={Error} />
        </Switch>
        <Footer />

      </Router>
    </div>

  );
}

export default App;
