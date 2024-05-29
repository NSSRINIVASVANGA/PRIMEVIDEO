import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl} = data

  return (
    <Popup
      modal
      trigger={
        <button className="button" type="button">
          <img src={thumbnailUrl} alt="thumbnail" className="movie" />
        </button>
      }
    >
      {close => (
        <div className="popup-con">
          <button
            type="button"
            data-testid="closeButton"
            className="button"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
          <div className="video-con">
            <ReactPlayer controls url={videoUrl} />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
