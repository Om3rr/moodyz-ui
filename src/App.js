import React from 'react';
import './App.scss';
import {getVotes} from './services/api_service'
import ClassPage from "./pages/classPage";

function App() {

    getVotes(2).then(votes => console.log(votes));
    return (
        <div className="App" id="main">
            <ClassPage classId={2}/>
        </div>
    );
}

export default App;
