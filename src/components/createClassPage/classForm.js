import React from 'react';
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import StudentForm from "./studentForm";
import StudentEntry from "./studentEntry";
import {getStudents} from "../../services/api_service";


const addStudent = ({setStudents, students}) => async (newStudent) => {
    setStudents([newStudent, ...students])
}

const init = ({setStudents}) => async () => {
    const students = await getStudents()
    setStudents(students.reverse())
}

const ehnance = compose(
    withState("title", "setTitle", "new class 🎉"),
    withState("students", "setStudents", []),
    withHandlers({
        init,
        addStudent,
        removeStudent: ({setStudents, students}) => (studentToDelete) => {
            const idx = students.findIndex(student => student.name === studentToDelete.name);
            students.splice(idx, 1);
            setStudents(students);
        }
    }),
    lifecycle({
        componentDidMount() {
            this.props.init()
        }
    })
);
const ClassForm = ({title, setTitle, students, removeStudent, addStudent}) => (
    <div className={"newClass"}>
        <div>
            <span>Title</span> <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <div className={"students"}>
                <div className={"lines-container"}>
                    <StudentForm addStudent={addStudent}/>
                {
                    students.map(student => (
                        <StudentEntry key={student.name} student={student} onDelete={() => removeStudent(student)}/>
                    ))
                }
                </div>
            </div>
        </div>

    </div>
)

export default ehnance(ClassForm)






