import TextEditor from "./components/TextEditor"
import Apptemp from "./Apptemp"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import VidCall from "./vidCall"

function App() {
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
                    <TextEditor />
                </Route>
                <Route path="/vidcall" exact>
                    <VidCall />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
