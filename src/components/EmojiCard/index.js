// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {emojiData, addToClicked} = this.props
    return (
      <div
        className="card"
        role="button"
        tabIndex={emojiData.id}
        onClick={() => addToClicked(emojiData.id)}
      >
        <img
          src={emojiData.emojiUrl}
          alt={emojiData.emojiName}
          className="emoji"
        />
      </div>
    )
  }
}

export default EmojiCard
