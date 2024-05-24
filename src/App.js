import {Component} from 'react'
import ConfigurationContext from './context/configurationContext'
import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = () =>
    this.setState(prevState => ({showContent: !prevState.showContent}))

  onToggleShowRightNavbar = () =>
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))

  onToggleShowLeftNavbar = () =>
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowRightNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}
export default App
