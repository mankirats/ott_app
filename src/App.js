import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import HomeCarosuel from "./components/HomeCarosuel";
function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <HomeCarosuel></HomeCarosuel>
                <Switch>
                    <Route exact path="/">
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
