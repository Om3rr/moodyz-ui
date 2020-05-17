import React from 'react';


const ClassPageHeader = ({student}) => {
    return (
        <div className={"header"}>
            <div className={"header--body"}>
                Hey {student.name}, How do you feel today?
            </div>
        </div>
    )
}


export default ClassPageHeader;