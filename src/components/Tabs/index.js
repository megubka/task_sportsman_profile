/*
 * Tabs is the stateful component.
 * You can pass an index in the `selected` prop
 * to specify which tab is active by default.
 *
 * This component handles the entire tabs system.
 * It transforms its own children (if they are Tab or TabPanel) to pass the
 * required props in order to run automatically the system.
 */

import React, { Component } from 'react'

import './index.styl'
 
export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: this.props.selected};
    }
 
    setSelected(selected) {
        if (selected !== this.state.selected) {
            this.setState({ selected })
        }
    }
 
    handleClick(tab) {
        return () => this.setSelected(tab)
    }
 
    renderTabList(child) {
        let tab = 0
 
        return React.cloneElement(child, {
            children: React.Children.map(child.props.children, (childTab) => {
                if (childTab.type.name === "Tab") {
                    const _isActive = (tab === this.state.selected)
                    const _onClick = this.handleClick(tab)
                    tab++
                    return React.cloneElement(childTab, { _isActive, _onClick })
                }
                return childTab
            }),
        })
    }
 
    renderChildren(children) {
        let panel = 0
        return React.Children.map(children, (child) => {
            if (child.type.name === "TabList") {
                return this.renderTabList(child)
            }
            if (child.type.name === "TabPanel") {
                const _isActive = (panel === this.state.selected)
                panel++
                return React.cloneElement(child, { _isActive })
            }
            return child
        })
    }
 
    render() {
        return (
            <div className="Tabs">
                {this.renderChildren(this.props.children)}
            </div>
        )
    }
}
 
export const TabList = ({ children }) => (
    <ul className="TabList">
        {children}
    </ul>
)
 
export const Tab = ({
    _onClick,
    _isActive,
    children,
}) => (
        <li
            className={`Tab  ${_isActive ? "is-active" : ""}`}
            onClick={_onClick}>
            {children}
        </li>
    )
 
export const TabPanel = ({
    _isActive,
    children,
}) => (
        <div className={`TabPanel  ${_isActive ? "is-active" : ""}`}>
            {children}
        </div>
    )
 
/* --- */

export const Button = ({ children }) => (
    <button className="Button">
        {children}
    </button>
)