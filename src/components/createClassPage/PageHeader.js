import React from 'react';
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import {FormattedMessage} from "react-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from "classnames";


const enhance = compose();

const pageHeader = ({teacher, onExit, onAnalytics, onClasses, currentMenu}) => {
    return (
        <div className={"admin--header"}>
            <div className={"admin--header--right--block"}>
                <div className={"logout-icon menu"} onClick={onExit}>
                    <FontAwesomeIcon icon={['fas', 'door-open']} />
                </div>
                <div className={"hello"}>
                    <FormattedMessage id={"header.hello"} values={{name: teacher.name}}/>
                </div>
            </div>
            <div className={"admin--header--left--block"}>
                <div className={classNames({menu: true, selected: currentMenu === 'analytics'})} onClick={onAnalytics}>
                    <FontAwesomeIcon icon={['fas', 'chart-bar']} />
                    <FormattedMessage id={"analytics"}/>
                </div>
                <div className={classNames({menu: true, selected: currentMenu === 'classes'})} onClick={onClasses}>
                    <FontAwesomeIcon icon={['fas', 'folder-open']} />
                    <FormattedMessage id={"classes"}/>
                </div>
            </div>
        </div>
    )
}



export default enhance(pageHeader)