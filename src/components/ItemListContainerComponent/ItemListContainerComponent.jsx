import React from 'react'

const ItemListContainerComponent = ({greeting}) => {
  const cssStyles={
    color: "black",
    fontSize: "3rem",
    margin: "0",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"80vh",
    widsht:"100vh"
  }

  return (
    <div style={cssStyles}>
      {greeting}
    </div>
  )
}

export default ItemListContainerComponent

