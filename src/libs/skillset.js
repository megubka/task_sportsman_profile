import React from 'react';

import upperBody from '../../assets/upperBody.png'
import lowerBody from '../../assets/lowerBody.png'
import endurance from '../../assets/endurance.png'
import agility from '../../assets/agility.png'
import aesthetics from '../../assets/aesthetics.png'

/**
 * Method for setting an icon for a particular skill
 * @param {object} skill object with an athlete skillset
 */
export const setIcon = ( skill ) => {
    switch (skill) {
        case "upperBody":
            return (
                <img className="icon" src={`${upperBody}`} />
            )
            break;
        case "lowerBody":
            return (
                <img className="icon" src={`${lowerBody}`} />
            )
            break;
        case "endurance":
            return (
                <img className="icon" src={`${endurance}`} />
            )
            break;
        case "agility":
            return (
                <img className="icon" src={`${agility}`} />
            )
            break;
        case "aesthetics":
            return (
                <img className="icon" src={`${aesthetics}`} />
            )
            break;
    }
}

/**
 * Method for setting an icon for a particular skill
 * @param {object} skillset object with an athlete skillset
 * @param {object} skill object with a particular athlete's skill
 */
export const setColor = (skillset, skill) => {
    
    // Setting an array to store all skill values and define the max and min
    let item = []
    for (let [key, value] of Object.entries(skillset)) {
        item.push(value)
    }
    const maxValue = Math.max(...item)
    const minValue = Math.min(...item)

    if (maxValue == skillset[skill]) {
        return (
            <div style={{ color: "green" }}>{skillset[skill]}</div> 
        )
    }
    if (minValue == skillset[skill]) {
        return (
            <div style={{ color: "red" }}>{skillset[skill]}</div> 
        )
    } else {
        return (
            <div>{skillset[skill]}</div> 
        )
    }
}