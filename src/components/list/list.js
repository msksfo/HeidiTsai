import React from "react"

import listStyles from "../list/list.module.scss"

const UnorderedList = props => {
  let listItems

  /* logic to determine what type of list is being passed in 
    - the price list is an array of strings

    - The testimonials list is an array of arrays. The nested array has two string values: one for the figure, the other for the figcaption

  */

  if (!Array.isArray(props.listType[0])) {
    listItems = props.listType.map(value => <li key={value}>{value}</li>)
  } else {
    listItems = props.listType.map(value => {
      return (
        <li key={value[1]}>
          <figure>
            <q>{value[0]}</q>
            <figcaption>{value[1]}</figcaption>
          </figure>
        </li>
      )
    })
  }

  return <ul className={listStyles[props.listStyle]}>{listItems}</ul>
}

export default UnorderedList
