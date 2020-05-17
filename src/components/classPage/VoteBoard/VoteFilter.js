import React from 'react';

const VoteFilter = ({filter}) => (
    <>
        {filter.color}
        <div className={"overlay"} style={{backgroundImage: `linear-gradient(transparent, ${filter.color})`}}/>
        <div className={"emoji"}>{filter.moji}</div>
    </>

)

export default VoteFilter