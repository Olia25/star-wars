import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';
import {Divider} from 'antd'
import HomePage from "./pages/homePage";

function App() {
  return (
    <Router>
        <Divider orientation="left">
            <Link to="/">
                <img className="logo" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG7.png"/>
            </Link>
        </Divider>
        <Switch>
            <Route path="/planets/:planetsId">
                <Planet />
            </Route>

            <Route path="/">
                <HomePage />
            </Route>

        </Switch>



    </Router>
  );
}

export default App;
