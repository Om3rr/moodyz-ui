import React from 'react';
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import ClassForm from "./classForm";
import {teacherMe} from "../../services/api_service";
import PageHeader from "./PageHeader";
import ClassesBody from "./ClassesBody";
import {withRouter} from "react-router";


const initTeacher = ({setTeacher, setKlasses}) => async () => {
    const {teacher, klasses} = await teacherMe();
    setTeacher(teacher);
    setKlasses(klasses);

}
const onMenuChange = ({history, setCurrentMenu}) => (menuValue) => {
    history.push(`/${menuValue}`)
    setCurrentMenu(menuValue)
}

const onExit = () => () => {
    document.cookie = ''
    window.location = "/signin"
}

const ehnance = compose(
    withState("teacher", "setTeacher", {}),
    withState("klasses", "setKlasses", []),
    withState("currentMenu", "setCurrentMenu", ({match: {params: {path}}}) => path),
    withHandlers({initTeacher, onMenuChange, onExit}),
    lifecycle({
        componentDidMount() {
            const {setCurrentMenu, initTeacher, match: {params: {path}}} = this.props;
            initTeacher();
            setCurrentMenu(path)
        }
    }));
const CreateClassPage = ({klasses, teacher, onMenuChange, currentMenu, initTeacher, onExit}) => {
    return (<div className={"createClassPage"} >
        <PageHeader teacher={teacher}
                    onExit={onExit}
                    currentMenu={currentMenu}
                    onAnalytics={() => onMenuChange("analytics")}
                    onClasses={() => onMenuChange("classes")}
        />

        <ClassesBody {...{klasses, initTeacher, currentMenu}}/>

    </div>)
}

export default ehnance(withRouter(CreateClassPage))






