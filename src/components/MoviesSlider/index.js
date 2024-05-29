import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const {details} = props
  return (
    <div>
      <Slider {...settings}>
        {details.map(eachMovie => (
          <MovieItem data={eachMovie} key={eachMovie.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
