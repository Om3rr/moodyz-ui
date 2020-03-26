import React from 'react';
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import {getVotes, studentMe, vote, getChoices} from "../services/api_service";
import VoteBoard from "../components/classPage/VoteBoard";
import ClassPageHeader from "../components/classPage/classPageHeader";
import ClassPageFooter from "../components/classPage/classPageFooter";

const ClassPage = ({votes, choices, loading, onChoice}) => {
    return (
        <div className={"classPage"}>
            <ClassPageHeader/>
            {!loading ? <VoteBoard votes={votes} choices={choices}/> : null }
            <ClassPageFooter choices={choices} onChoice={onChoice}/>
        </div>
    )
};

const onChoice = ({setVotes}) => async (choice) => {
    console.log("ON CHOICE!");
    const votes = await vote(choice);
    setVotes(votes)
}

const init = ({setChoices, setStudent, setVotes}) => async () => {
    const promiseRes = await Promise.all([getChoices(), studentMe(), getVotes()]);
    console.log(promiseRes)
    setChoices(promiseRes[0]);
    setStudent(promiseRes[1]);
    setVotes(promiseRes[2]);
}


const enhance = compose(
    withState("choices", "setChoices", []),
    withState("student", "setStudent", {}),
    withState("votes", "setVotes", {}),
    withState("loading", "setLoading", true),
    withHandlers({
        onChoice, init
    }),
    lifecycle({
        async componentDidMount() {
            const {setLoading, init} = this.props;
            await init();
            setLoading(false)
        }
    })
)


export default enhance(ClassPage)