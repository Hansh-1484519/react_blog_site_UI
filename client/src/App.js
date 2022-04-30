import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar.jsx"
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Setting from "./pages/setting/Setting.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import About from "./pages/about/About.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext( Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={"/about"}>{user ? <About/> : <Home/>}</Route>
        <Route path="/register">{user ? <Home /> :<Register />}</Route>
        <Route path="/login">{ user ? <Home/> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register/>}</Route>
        <Route path="/setting">{ user ? <Setting /> : <Register/>}</Route>
        <Route path="/Post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
