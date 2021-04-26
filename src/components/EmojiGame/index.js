/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'
import WinLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, win: null, clicked: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  addToClicked = id => {
    this.setState(prev => {
      const {clicked, emojisList, score, topScore} = prev
      if (clicked.some(i => i === id)) {
        return {win: false}
      }
      clicked.push(id)
      this.shuffledEmojisList(emojisList)
      if (clicked.length === 12) {
        return {
          clicked,
          score: score + 1,
          topScore: score + 1 > topScore ? score + 1 : topScore,
          win: true,
        }
      }
      return {
        clicked,
        score: score + 1,
        topScore: score + 1 > topScore ? score + 1 : topScore,
      }
    })
  }

  resetGame = () => {
    this.setState({score: 0, win: null, clicked: []})
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, clicked, win} = this.state
    console.log(clicked, win)
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} />
        {win === null && (
          <div className="emoji-container">
            {emojisList.map(emojiData => (
              <EmojiCard
                emojiData={emojiData}
                addToClicked={this.addToClicked}
                key={emojiData.id}
              />
            ))}
          </div>
        )}
        {(win === false || win === true) && (
          <div className="win-lose-card">
            <WinLoseCard win={win} score={score} resetGame={this.resetGame} />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
