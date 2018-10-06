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

/**
 * Method for sorting the disciplines based on tags, names, individuality
 * @param {object} tagsFromState discipline tags from the state
 * @param {object} discipline object which contains all info about discipline
 */
export const setFiltering = (tagsFromState, discipline) => {
    // Array for storing active sorting buttons
    let activeTags = []
    // Defining whether it is indivual sport or not
    if (tagsFromState.isIndividual == discipline.isIndividual) {
        // pushing all active tags from the state to the array (except individual and name sorting)
        for (let [key, value] of Object.entries(tagsFromState)) {
            if (key == "isIndividual" || key == "sortByName") {
                null
            } else {
                value ? activeTags.push(key) : null
            }
        }
        // Filtering out disciplines that don't match active tags
        let total = activeTags.filter((item) => discipline.tags.includes(item))
        if (total.length == activeTags.length) {
            return true
        } else {
            return false
        }
    }
}

export const sortByName = (sorting ,disciplines) => {
    var sortable = [];
    console.log(disciplines[1])
    
    /* if (sorting == true) {
        return disciplines.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            } else if (b.name < a.name) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return disciplines.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            } else if (b.name < a.name) {
                return 1
            } else {
                return 0
            }
        })
    } */
}