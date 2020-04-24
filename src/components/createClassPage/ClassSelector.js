import React from 'react';
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import classNames from 'classnames';
import {apiCreateKlass} from "../../services/api_service";

const ClassSelector = ({currentClass, klasses, createKlass, setCurrentClass}) => {
    return (
        <div className={"classSelector"}>
            {
                klasses.map(k => {
                    return (
                        <div key={k.slug}
                             className={classNames({selected: (k.slug === currentClass.slug)})}
                             onClick={() => setCurrentClass(k)}
                        >{k.title}</div>
                    )
                })
            }
            <div className={"add-class"} onClick={createKlass}>+</div>
            <div className={"spacer"}></div>
        </div>
    )
}

const createKlass = ({initTeacher}) => async () => {
    const klassName = window.prompt("Class name:")
    if(!klassName) {
        return
    }
    const klass = await apiCreateKlass(klassName)
    initTeacher()
}
const enhance = compose(
    withHandlers({createKlass})
)

export default enhance(ClassSelector)