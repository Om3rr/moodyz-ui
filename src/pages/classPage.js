import React from 'react';
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import {getStudents, studentMe, vote, getChoices} from "../services/api_service";
import VoteBoard from "../components/classPage/VoteBoard";
import ClassPageHeader from "../components/classPage/classPageHeader";
import ClassPageFooter from "../components/classPage/classPageFooter";
import {
  useParams
} from "react-router";

const ClassPage = ({students, student, choices, loading, onChoice}) => {
    return (
        <div className={"classPage"}>
            <ClassPageHeader student={student}/>
            {!loading ? <VoteBoard students={students} choices={choices}/> : <div className="voteboard">
                <div className="loader">Loading...</div></div> }
            <ClassPageFooter choices={choices} onChoice={onChoice}/>
        </div>
    )
};

const onChoice = ({setStudents}) => async (choice) => {
    console.log("ON CHOICE!");
    const votes = await vote(choice);
    setStudents(votes)
}

const init = ({setChoices, setStudent, setStudents}) => async () => {
    const promiseRes = await Promise.all([getChoices(), studentMe(), getStudents()]);
    console.log(promiseRes)
    setChoices(promiseRes[0]);
    setStudent(promiseRes[1]);
    setStudents(promiseRes[2]);
}


const enhance = compose(
    withState("choices", "setChoices", []),
    withState("student", "setStudent", {}),
    withState("students", "setStudents", []),
    withState("loading", "setLoading", true),
    withState("classId", "setClassId", null),
    withHandlers({
        onChoice, init
    }),
    lifecycle({
        async componentDidMount() {
            const {setLoading, init, setClassId, id} = this.props;
            setClassId(id);
            await init();
            setLoading(false)
        }
    })
)


export default enhance(ClassPage)