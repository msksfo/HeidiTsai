import React from "react"
import albumStyles from "./album.module.scss"

const Album = props => {
  return (
    <div>
      <div className={albumStyles.albumWrapper}>
        <figure className={albumStyles.albumImageWrapper}>
          <img src={props.imageUrl} alt="Album front cover" />

          <figcaption className={albumStyles.figcaption}>
            {props.caption}
          </figcaption>
        </figure>

        <div className={albumStyles.albumDetails}>{props.pieces}</div>
      </div>
    </div>
  )
}

export default Album
