import React from 'react';

const getSeason = (lat, month) => {
    if(month > 3 && month < 7) {
        return lat > 0 ? 'Summer' : 'Winter';
    }else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'Winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    return(
        <div><h1>{text}</h1></div>
    );
};

export default SeasonDisplay;