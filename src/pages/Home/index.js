/**
 * Component responsible for Home page layout.
 */

import React from 'react'
import PropTypes from 'prop-types'
import Profile from '../../components/Profile'
import Overview from '../../components/Overview'
import Predictions from '../../components/Predictions'
import Hints from '../../components/Hints'
import Tabs, { TabList, Tab, TabPanel, Button } from '../../components/Tabs';

import './index.styl'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeProfile: 0
        };
    }

    // Going to the next profile
    nextOne() {
        // If that is the end of the list, it will render the first profile.
        if (this.state.activeProfile < this.props.athletes.length - 1) {
            this.setState({
                activeProfile: this.state.activeProfile + 1
            });
        } else {
            this.setState({
                activeProfile: 0
            });
        }
    }
 
    // Going to the previous profile
    prevOne() {
        // If the activeProfile is already at the beginning of the list, it will render the last profile.
        if (this.state.activeProfile > 0) {
            this.setState({
                activeProfile: this.state.activeProfile - 1
            });
        } else {
            this.setState({
                activeProfile: this.props.athletes.length - 1
            });
        }
    }

    renderArrows() {
        return (
            <div>
                <button className='arrows prev' onClick={this.prevOne.bind(this)}>
                    <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                        <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
                        <path d='M0 0h24v24H0z' fill='none' />
                    </svg>
                </button>
                <button className='arrows next' onClick={this.nextOne.bind(this)}>
                    <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
                        <path d='M0 0h24v24H0z' fill='none' />
                    </svg>
                </button>
            </div>
        )
    }


    render() {
        let i = this.state.activeProfile
        const athlete = this.props.athletes ? this.props.athletes[i] : null
        const disciplines = this.props.disciplines ? this.props.disciplines : []
        if (athlete)
            return (
                <div className="p-home">
                    <Profile {...athlete} />
                    {this.renderArrows()}
                    <div className="TabContainer">
                        <Tabs selected={1}>
                            <TabList>
                                <Tab>
                                    <Button>Overview</Button>
                                </Tab>
                                <Tab>
                                    <Button>Predictions</Button>
                                </Tab>
                                <Tab>
                                    <Button>Hints</Button>
                                </Tab>
                            </TabList>
                            <TabPanel>
                                <Overview {...athlete} />
                            </TabPanel>
                            <TabPanel>
                                <Predictions athlete={athlete} disciplines={disciplines} />
                            </TabPanel>
                            <TabPanel>
                                <Hints athlete={athlete} disciplines={disciplines} />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            )
        else 
            return <span>No athlete data</span>
    } 
}

Home.propTypes = {
    athletes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        skillset: PropTypes.objectOf(PropTypes.number).isRequired,
        nativeDisciplines: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    disciplines: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        isIndividual: PropTypes.bool.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        requirements: PropTypes.objectOf(PropTypes.number).isRequired,
    })).isRequired
}