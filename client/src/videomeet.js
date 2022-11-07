import './videomeet.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { useEffect } from 'react';
import { connectWithWebSocket } from './utils/wssConnection/wssConnection';
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './LoginPage/LoginPage';

function App() {
    useEffect(() => {
        connectWithWebSocket();
    }, []);
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <div>Nothing here go to /vidcall</div>
                </Route>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route path='/vidcall'>
                    <LoginPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
