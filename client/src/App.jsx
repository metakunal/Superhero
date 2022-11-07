import TextEditor from "./components/TextEditor"
import Apptemp from "./Apptemp"
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './LoginPage/LoginPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"
import { useEffect } from 'react';
import { connectWithWebSocket } from './utils/wssConnection/wssConnection';

import { v4 as uuidV4 } from "uuid"

import './videomeet.css'
function App() {
    useEffect(() => {
        connectWithWebSocket();
    }, []);
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Apptemp />
                </Route>
                <Route path="/documents" exact>
                    <Redirect to={`/documents/${uuidV4()}`} />
                </Route>
                <Route path="/documents/:id">
                    3
                </Route>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route path='/vidcall'>
                    <LoginPage />
                </Route>

            </Switch>
        </Router>
    )
}

export default App
