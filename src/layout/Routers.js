import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from "./main";
import Players from "./Players";

export default function App() {
    return (
        <Router>


                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/Players">
                   <Players/>
                    </Route>
                    <Route path="/users">
                     <div>wedwe</div>
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
           
        </Router>
    );
}
