import React from 'react';
import Choice from "./footer/Choice";


const ClassPageFooter = ({onChoice, choices}) => {
    return (<div className={"footer"}>
        {
            choices.map((choice) => (
                <Choice
                    key={choice.id}
                    onChoice={onChoice}
                    {...choice}
                />
            ))
        }
    </div>)
}


export default ClassPageFooter;