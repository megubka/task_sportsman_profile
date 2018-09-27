import React from 'react';

/**
 * Method for setting an output string for each discipline tag
 * @param {string} tagName tag name of the sport type
 * @param {boolean} tagState boolean of the state of sorting (whether active or not)
 */
export const setFilterName = (tagName, tagState) => {
    switch (tagName) {
        case "isIndividual":
            const output = tagState ? "Individual Sport" : "Team Sport"
            return output
            break;
        case "ball":
            return "Ball"
            break;
        case "riding":
            return "Riding"
            break;
        case "martialArts":
            return "Martial Arts"
            break;
        case "oneOnOne":
            return "One On One"
            break;
        case "water":
            return "Water"
            break;
        case "sortByName":
            return "Sort By Name"
            break;
    }
}