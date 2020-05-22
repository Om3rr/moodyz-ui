import React from 'react';
import {compose, lifecycle, withHandlers, withPropsOnChange, withState} from 'recompose'
import StudentForm from "./studentForm";
import StudentEntry from "./studentEntry";
import {apiDeleteStudent, teacherGetClass} from "../../services/api_service";
import {FormattedMessage} from "react-intl";


const addStudent = ({setStudents, students}) => async (newStudent) => {
    setStudents([newStudent, ...students])
}

const init = ({slug, setStudents}) => async () => {
    const {students} = await teacherGetClass(slug);
    setStudents(students.reverse())
}

const ehnance = compose(
    withState("title", "setTitle", "new class 🎉"),
    withState("students", "setStudents", []),
    withHandlers({
        init,
        addStudent,
        removeStudent: ({setStudents, students}) => (studentToDelete) => {
            if (!window.confirm("Are you sure you want to delete this student?")) {
                return
            }
            const idx = students.findIndex(student => student.name === studentToDelete.name);
            students.splice(idx, 1);
            apiDeleteStudent(studentToDelete);
            setStudents(students);
        }
    }),
    withPropsOnChange(["slug"], ({init}) => init()),
);

const renderClassesHeaderFields = () => (
    <>
        <div><FormattedMessage id={"table.gender"}/></div>
        <div><FormattedMessage id={"table.link"}/></div>
        <div></div>
    </>
)

const ClassForm = ({currentMenu, students, removeStudent, addStudent, slug, init}) => (
    <div className={"Rtable"}>
        <div className={"Rtable--head Rtable--row"}>
            <div className={"ten"}></div>
            <div className={"no-grow"}></div>
            <div><FormattedMessage id={"table.name"}/></div>
            {renderClassesHeaderFields()}
        </div>
        <StudentForm addStudent={addStudent} klassSlug={slug}/>
        {
            students.map((student, idx) => (
                <StudentEntry key={idx} idx={idx} student={student} onDelete={() => removeStudent(student)} refresh={init}/>
            ))
        }
        <div className={"Rtable--row last"}></div>

    </div>
)

export default ehnance(ClassForm)






