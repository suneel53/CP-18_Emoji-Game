// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {details, addSelectedEmoji} = this.props
    const {id, emojiName, emojiUrl} = details
    const addId = () => {
      addSelectedEmoji(id)
    }
    return (
      <li className="emojilist-cont">
        <button type="button" onClick={addId} className="emojicard-but">
          <img src={emojiUrl} alt={emojiName} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
