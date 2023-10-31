// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {selectedEmojilist, highScore} = this.props
    const score = selectedEmojilist.length
    return (
      <nav className="nav-cont">
        <div className="nav-cont-inner">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="image-emojigame"
          />
          <h1 className="nav-hed">Emoji Game</h1>
        </div>

        <div className="nav-cont-inner">
          <p className="nav-para">Score: {score}</p>
          <p className="nav-para">Top Score: {highScore}</p>
        </div>
      </nav>
    )
  }
}

export default NavBar
