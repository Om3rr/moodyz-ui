import React from 'react';
import './App.scss';
import ClassPage from "./pages/classPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import UploadPage from "./pages/uploadPage";
function App() {
    return (
        <div className="App" id="main">
            <Router>
                <Switch>
                    <Route path="/classes/:id" children={<ClassPage/>} />
                    <Route path="/upload" children={<UploadPage/>} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
