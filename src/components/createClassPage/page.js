import React from 'react';
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import ClassForm from "./classForm";
import {teacherMe} from "../../services/api_service";
import PageHeader from "./PageHeader";
import ClassesBody from "./ClassesBody";


const initTeacher = ({setTeacher, setKlasses}) => async () => {
    const {teacher, klasses} = await teacherMe();
    setTeacher(teacher);
    setKlasses(klasses);

}

const ehnance = compose(
    withState("teacher", "setTeacher", {}),
    withState("klasses", "setKlasses", []),
    withState("currentMenu", "setCurrentMenu", 'classes'),
    withHandlers({initTeacher}),
    lifecycle({
        componentDidMount() {
            this.props.initTeacher();
        }
    }));
const CreateClassPage = ({klasses, teacher, setCurrentMenu, currentMenu, initTeacher}) => {
    return (<div className={"createClassPage"} >
        <PageHeader teacher={teacher}
                    currentMenu={currentMenu}
                    onAnalytics={() => setCurrentMenu("analytics")}
                    onClasses={() => setCurrentMenu("classes")}
        />

        { currentMenu === 'classes' ? <ClassesBody {...{klasses, initTeacher}}/> : null}

    </div>)
}

export default ehnance(CreateClassPage)






