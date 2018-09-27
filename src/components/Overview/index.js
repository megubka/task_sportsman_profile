/**
 * Component for displaying basic info about the provided athlete.
 */

import React from 'react'
import PropTypes from 'prop-types'
import './index.styl'
import { setIcon, setColor } from '../../libs/skillset'

import upperBody from '../../../assets/upperBody.png'
import lowerBody from '../../../assets/lowerBody.png'
import endurance from '../../../assets/endurance.png'
import agility from '../../../assets/agility.png'
import aesthetics from '../../../assets/aesthetics.png'

export default class Overview extends React.Component {
 
    render() {
        // Setting a global array to store these values and pass it
        var item = []
        for (let [key, value] of Object.entries(this.props.skillset)) {
            item.push(value)
        }
        var maxValue = Math.max(...item)
        var minValue = Math.min(...item)
        return (
            <section className="l-section c-overview" >
                <h2 className="header" >Overview</h2>
                <div className="content"> 
                    <span className="label">Bio</span>
                    <p className="bio">{this.props.bio}</p>
                    <span className="label">Skillset</span>
                    <div className="skillset">
                        {Object.keys(this.props.skillset).map((skill) => {
                            return (
                                <div className="skill" key={skill}>
                                    <div className="list-item">{ setIcon(skill) }</div>
                                    { setColor(this.props.skillset, skill, maxValue, minValue) }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

Overview.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    skillset: PropTypes.objectOf(PropTypes.number).isRequired,
    nativeDisciplines: PropTypes.arrayOf(PropTypes.string).isRequired,
}