// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore} = this.props
    return (
      <div className="nav-bar">
        <div className="nav-score-card">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="logo"
          />
          <h1 className="logo-text">Emoji Game</h1>
        </div>
        <div className="nav-score-card">
          <h1 className="score">Score: {score}</h1>
          <h1 className="score">High Score: {topScore}</h1>
        </div>
      </div>
    )
  }
}

export default NavBar
