import React from 'react';
import {compose, lifecycle, withHandlers, withState, withPropsOnChange} from 'recompose'
import {apiGetAnalytics, getChoices} from "../../services/api_service";
import {FormattedMessage} from "react-intl";
import AnalyticsEntry from "./AnalyticsEntry";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const AnalyticsBody = ({choices, students, fromTs, setFromTs, setToTs, toTs, getAnalytics}) => (
        <div className={"Rtable"}>
            <div className={"Rtable--head Rtable--row"}>
                <div className={"Rtable--cell ten"}></div>
                <div className={"Rtable--cell ten"}></div>
                <div className={"Rtable--cell no-grow"}><FormattedMessage id={"table.name"}/></div>
                <div className={"Rtable--cell"}>
                    <DatePicker selected={fromTs} maxDate={toTs} onChange={date => {setFromTs(date)}} />
                    <DatePicker selected={toTs} minDate={fromTs} onChange={date => {setToTs(date)}} />
                    <span style={{cursor: 'pointer', margin: "5px"}} onClick={() => getAnalytics()}>
                        <FontAwesomeIcon icon={['fas', 'sync']} />
                    </span>

                </div>
            </div>
            <>
                {students.map(s => <AnalyticsEntry {...s} choices={choices} key={s.student.id}/>)}
            </>
            <div className={"Rtable--row last"}></div>
        </div>
)


const getAnalytics = ({setStudents, fromTs, toTs, slug}) => async (from=fromTs, to=toTs) => {
    const data = await apiGetAnalytics(slug, from, to);
    setStudents(data)
};
const init = ({getAnalytics, setToTs, setFromTs, setChoices}) => async () => {
    let today = new Date();
    let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)

    setFromTs(lastWeek);
    setToTs(today);
    const choices = await getChoices();
    setChoices(choices);
    await getAnalytics(lastWeek, today);
}


const enhance = compose(
    withState("fromTs", "setFromTs", null),
    withState("toTs", "setToTs", null),
    withState("students", "setStudents", []),
    withState("choices", "setChoices", []),
    withHandlers({getAnalytics}),
    withHandlers({init}),
    lifecycle({
        async componentDidMount() {
            await this.props.init();
        }
    })
)


export default enhance(AnalyticsBody)
