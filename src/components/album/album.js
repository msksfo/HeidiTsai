import React from "react"
import albumStyles from "./album.module.scss"

const Album = props => {
  return (
    <article className={albumStyles.albumWrapper}>
      <figure className={albumStyles.albumImageWrapper}>
        <img src={props.imageUrl} alt="Album front cover" />

        <figcaption className={albumStyles.figcaption}>
          {props.caption}
        </figcaption>
      </figure>

      <div className={albumStyles.albumDetails}>{props.pieces}</div>
    </article>
  )
}

export default Album
