/**
 * Component displaying and managing list of disciplines with calculated athlete score.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { disciplineScore } from '../../libs/calculate'
import { setFilterName } from '../../libs/sorting'
import './index.styl'

export default class Predictions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isIndividual: false,
            ball: false,
            riding: false,
            martialArts: false,
            oneOnOne: false,
            water: false,
            sortByName: false
        }
    }

    renderFilters() {
        //all tags from the state
        const tags = ["isIndividual", "ball", "riding", "martialArts", "oneOnOne", "water", "sortByName"]
        return (
            <div className="filters">
            <h3>Sort By</h3>
                {tags.map((tag) => {
                    return (
                        <div>
                            <div className={`filter-btn  ${this.state[tag] ? "active" : ""}`} key={tag} onClick={(e) => this.setState(prevState =>
                            ({
                                [tag]: !prevState[tag]
                            }))}>
                            <div className={`filter-inner-circle  ${this.state[tag] ? "active" : ""}`}></div></div>
                            <p>{setFilterName(tag, this.state[tag])}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <section className="l-section c-predictions" >
                <h2 className="header" >Predictions</h2>
                <div className="content">
                    {this.renderFilters()}
                    {this.props.disciplines.map((discipline) => {
                        return (
                            <div key={discipline.name} className="c-discipline">
                                <span className="name">{discipline.name}</span> - <span className="score">{disciplineScore(this.props.athlete.skillset, discipline.requirements)}</span>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}

Predictions.propTypes = {
    athlete: PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        skillset: PropTypes.objectOf(PropTypes.number).isRequired,
        nativeDisciplines: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    disciplines: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        isIndividual: PropTypes.bool.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        requirements: PropTypes.objectOf(PropTypes.number).isRequired,
    })).isRequired
}