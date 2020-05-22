import React from 'react';
import {compose, lifecycle, withHandlers, withState, withPropsOnChange} from 'recompose'
import ClassSelector from "./ClassSelector";
import ClassForm from "./classForm";
import AnalyticsBody from "./AnalyticsBody";


const renderBody = ({refreshTeacher}) => (slug, currentMenu) => {
    if(!slug) {
        return null
    }
    return currentMenu === "classes" ? (<ClassForm slug={slug} refreshTeacher={refreshTeacher}/>) : (<AnalyticsBody slug={slug}/>)
}

const refreshTeacher = ({initTeacher}) => () => {
    initTeacher()
}

const ClassesBody = ({currentClass, currentMenu, setCurrentClass, klasses, initTeacher, renderBody}) => {
    return (
        <div className={"ClassesBody"}>
            <ClassSelector {...{currentClass, setCurrentClass, klasses, initTeacher}}/>
            {renderBody(currentClass.slug, currentMenu)}
        </div>
    )
}

const enhance = compose(
    withState("currentClass", "setCurrentClass", {}),
    withHandlers({renderBody}),
    withHandlers({
        refreshTeacher
    }),
    withPropsOnChange(['klasses'], ({klasses, currentClass, setCurrentClass}) => {
        console.log("ON KLASS CHANGE", klasses, currentClass)
        if (klasses.length > 0 && currentClass && !currentClass.slug) {
            setCurrentClass(klasses[0])
        }
    })
);

export default enhance(ClassesBody)