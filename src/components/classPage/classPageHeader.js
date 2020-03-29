import React from 'react';


const ClassPageHeader = ({student}) => {
    return (
        <div className={"header"}>
            <div className={"header--body"}>
                היי {student.name}! איך אתה מרגיש היום?
            </div>
        </div>
    )
}


export default ClassPageHeader;