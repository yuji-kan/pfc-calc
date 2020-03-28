import React from "react"

function List(props) {
  return (
    <ul>
      {/* {console.log(props.list)} */}
      {console.log(props.list.length)}
      {props.list.map(listItem => (
        <li key={listItem.itemName}>
          {listItem.title} : {listItem.value}
        </li>
      ))}
    </ul>
  )
}

export default List
