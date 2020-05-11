import React from "react"
import pieceStyles from "../piece/piece.module.scss"

const Piece = props => {
  return (
    <div className={pieceStyles.piece}>
      <h2 className={pieceStyles.pieceTitle}>
        {props.composer}
        <br /> {props.title}
      </h2>
      {props.movements}
    </div>
  )
}

export default Piece
