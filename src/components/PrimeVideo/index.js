import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  state = {actionMovies: [], comedyMovies: []}

  componentDidMount() {
    const {moviesList} = this.props
    this.getLists(moviesList)
  }

  getLists = moviesList => {
    const action = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )
    const comedy = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )
    this.setState({actionMovies: action, comedyMovies: comedy})
  }

  render() {
    const {actionMovies, comedyMovies} = this.state
    return (
      <div className="bg-container">
        <div className="img-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="image"
          />
        </div>
        <div className="movies-con">
          <h1 className="heading"> Action Movies </h1>
          <MoviesSlider details={actionMovies} />
          <h1 className="heading"> Comedy Movies </h1>
          <MoviesSlider details={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
