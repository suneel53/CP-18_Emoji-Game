// Write your code here.
import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {score, playAgain} = this.props
    const rematch = () => {
      playAgain()
    }
    const winorloss = score === 12 ? 'Won' : 'Lose'
    const pp = score === 12 ? 'Best ' : ''
    const url =
      score === 12
        ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    return (
      <div className="winorloss-cont">
        <div className="winorloss-details-cont">
          <h1 className="winorlose-hed">You {winorloss}</h1>
          <p className="winorloss-para">{pp}Score</p>
          <p className="winorloss-score">{score}/12</p>
          <button type="button" className="win-but" onClick={rematch}>
            Play Again
          </button>
        </div>
        <img src={url} alt="win or lose" className="winorlose-image" />
      </div>
    )
  }
}

export default WinOrLoseCard
