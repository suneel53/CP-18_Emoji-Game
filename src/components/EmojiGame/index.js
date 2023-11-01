import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
// import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'
/* 
Quick Tip 
const shuffledEmojisList = () => {
    const {emojisList} = this.props
      emojisList.sort(() => Math.random() - 0.5)
    }
- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
*/

// Write your code here.
class EmojiGame extends Component {
  state = {
    selectedEmojilist: [],
    score: 0,
    highScore: 0,
    isPlaying: true,
  }

  checkIdinlist = id => {
    const {selectedEmojilist} = this.state
    return selectedEmojilist.includes(id)
  }

  finishGameandSetTopScore = length => {
    const {score, highScore} = this.state
    if (length === 12) {
      console.log('won')
      this.setState({
        highScore: 12,
        isPlaying: false,
      })
    } else {
      if (score > highScore) {
        this.setState({
          highScore: score,
          isPlaying: false,
        })
      }
      this.setState({
        isPlaying: false,
      })
    }
  }

  addSelectedEmoji = id => {
    /*
    const check = this.checkIdinlist(id)
    const {selectedEmojilist, highScore} = this.state
    if (!check) {
      this.setState(prevState => ({
        selectedEmojilist: [...prevState.selectedEmojilist, id],
        score: prevState.score + 1,
      }))
    } else {
      console.log('already exit in the list')
      if (selectedEmojilist.length > highScore) {
        this.setState({highScore: selectedEmojilist.length})
      }
      this.setState({selectedEmojilist: [], isPlaying: false})
    }
    */
    const {emojisList} = this.props
    const {selectedEmojilist} = this.state
    const selectedEmojilistLength = selectedEmojilist.length
    const check = this.checkIdinlist(id)
    if (check) {
      this.finishGameandSetTopScore(selectedEmojilistLength)
    } else {
      if (emojisList.length - 1 === selectedEmojilistLength) {
        this.finishGameandSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        selectedEmojilist: [...prevState.selectedEmojilist, id],
        score: prevState.score + 1,
      }))
    }
  }

  showplayingcont = emojisList => {
    console.log('showing playing view')
    return (
      <ul className="logoImages-cont">
        {emojisList.map(eachemoji => (
          <EmojiCard
            details={eachemoji}
            addSelectedEmoji={this.addSelectedEmoji}
            key={eachemoji.id}
          />
        ))}
      </ul>
    )
  }

  playAgain = () => {
    this.setState({
      score: 0,
      isPlaying: true,
      selectedEmojilist: [],
    })
  }

  render() {
    const {emojisList} = this.props
    const {selectedEmojilist, highScore, isPlaying, score} = this.state
    console.log(selectedEmojilist)
    return (
      <div className="bg-cont">
        <NavBar selectedEmojilist={selectedEmojilist} highScore={highScore} />

        <div className="bottom-cont">
          {isPlaying ? this.showplayingcont(emojisList) : ''}
          {isPlaying ? (
            ''
          ) : (
            <WinOrLoseCard score={score} playAgain={this.playAgain} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
