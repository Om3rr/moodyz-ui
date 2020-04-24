import React from 'react';
import './App.scss';
import ClassPage from "./pages/classPage";
import './helpers/IconLoader'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useParams
} from "react-router-dom";
import {compose, lifecycle, withState} from 'recompose'
import UploadPage from "./pages/uploadPage";
import CreateClassPage from "./components/createClassPage/page";
import AuthService from "./services/AuthService";
import LoginPage from "./components/loginPage/LoginPage";
import PrivateRoute, {StudentRoute, TeacherRoute} from "./components/PrivateRoute";
import WaitPage from "./components/waitPage";

const enhance = compose(
    withState("loading", "setLoading", true),
    withState("auth", "setAuth", false),
    lifecycle({
        async componentDidMount() {
            const auth = await AuthService.isAuthenticated();
            this.props.setLoading(false);
            this.props.setAuth(auth);
        }
    })
)

function App({loading}) {
    return (
        <div className="App" id="main">
            <Router>
                <Switch>
                    <Route exact path="/" component={ClassPage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route path="/upload" component={UploadPage}/>
                    <Route exact path="/wait" component={WaitPage}/>
                    <Route exact path="/:path" component={CreateClassPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default enhance(App);
