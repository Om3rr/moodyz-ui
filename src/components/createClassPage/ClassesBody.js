import React from 'react';
import {compose, lifecycle, withHandlers, withState, withPropsOnChange} from 'recompose'
import ClassSelector from "./ClassSelector";
import ClassForm from "./classForm";

const ClassesBody = ({currentClass, setCurrentClass, klasses, initTeacher}) => {
    return (
        <div className={"ClassesBody"}>
            <ClassSelector {...{currentClass, setCurrentClass, klasses, initTeacher}}/>
            {currentClass.slug ? <ClassForm slug={currentClass.slug}/> : null}
        </div>
    )
}

const enhance = compose(
    withState("currentClass", "setCurrentClass", {}),
    withPropsOnChange(['klasses'], ({klasses, currentClass, setCurrentClass}) => {
        console.log("ON KLASS CHANGE", klasses, currentClass)
        if (klasses.length > 0 && currentClass && !currentClass.slug) {
            setCurrentClass(klasses[0])
        }
    })
);

export default enhance(ClassesBody)