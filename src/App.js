import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PostDetails from './pages/PostDetails';

import Header from "./components/Header";
import Footer from "./components/Footer";

const TEXTS = {
    HEADER: {
        TITLE: 'Blog napisany w React JS',
    },
    FOOTER: {
        COPY: 'Copyright'
    }
}

function App() {
  return (
      <>
          <BrowserRouter>
              <Header title={TEXTS.HEADER.TITLE} />
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/post/:id" component={PostDetails} />
              </Switch>
          </BrowserRouter>
          <Footer text={TEXTS.FOOTER.COPY}/>
      </>
  );
}

export default App;
