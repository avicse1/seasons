import './SeasonDisplay.css';
import React from 'react';
const seasonConfig = {
    Winter : {
        text: "Burr, It is chilly",
        iconName : "snowflake"
    },
    Summer : {
        text : "Let's hit the beach",
        iconName : "sun"
    }
};
const getSeason = (lat, month) => {
    if(month > 3 && month < 7) {
        return lat > 0 ? 'Summer' : 'Winter';
    }else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;