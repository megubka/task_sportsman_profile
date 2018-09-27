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
 * @param {number} maxValue maximum value of the skillset array (should display in green color)
 * @param {number} minValue minimum value of the skillset array (should display in red color)
 */
export const setColor = (skillset, skill, maxValue, minValue) => {
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