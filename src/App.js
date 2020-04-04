import React from 'react';
import './App.scss';
import ClassPage from "./pages/classPage";
import './helpers/IconLoader'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import UploadPage from "./pages/uploadPage";
import CreateClassPage from "./components/createClassPage/page";
function App() {
    return (
        <div className="App" id="main">
            <Router>
                <Switch>
                    <Route exact path="/" children={<ClassPage/>} />
                    <Route exact path="/classes/new" children={<CreateClassPage/>} />
                    <Route path="/upload" children={<UploadPage/>} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
