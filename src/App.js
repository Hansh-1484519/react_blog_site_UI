import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar.jsx"
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Setting from "./pages/setting/Setting.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/setting">
          <Setting />
        </Route>
        <Route path="/Post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
