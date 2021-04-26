// Write your code here.
import {Component} from 'react'
import './index.css'

const winBallonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseBallonImg =
  'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const YouWon = props => {
  const {score, resetGame} = props
  return (
    <>
      <div className="score-card">
        <h1 className="result">You Won</h1>
        <h1 className="result no-padding">Score</h1>
        <h1 className="result-score">{score}/12</h1>
        <button className="play-again-button" type="button" onClick={resetGame}>
          Play Again
        </button>
      </div>
      <div className="score-card">
        <img className="score-card-image" src={winBallonImg} alt="you won" />
      </div>
    </>
  )
}

const YouLose = props => {
  const {score, resetGame} = props
  return (
    <>
      <div className="score-card">
        <h1 className="result">You Lose</h1>
        <h1 className="result no-padding">Score</h1>
        <h1 className="result-score">{score}/12</h1>
        <button className="play-again-button" type="button" onClick={resetGame}>
          Play Again
        </button>
      </div>
      <div className="score-card">
        <img className="score-card-image" src={loseBallonImg} alt="you lose" />
      </div>
    </>
  )
}

class WinLoseCard extends Component {
  render() {
    const {win, resetGame, score} = this.props
    return (
      <div className="result-card">
        {win && <YouWon score={score} resetGame={resetGame} />}
        {!win && <YouLose score={score} resetGame={resetGame} />}
      </div>
    )
  }
}

export default WinLoseCard
