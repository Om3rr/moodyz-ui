import React from 'react';
import {compose} from 'recompose'
import ClassForm from "./classForm";




const ehnance = compose();
const CreateClassPage = ({}) => {
    return (<div className={"createClassPage"}>
        <ClassForm/>

    </div>)
}

export default ehnance(CreateClassPage)






