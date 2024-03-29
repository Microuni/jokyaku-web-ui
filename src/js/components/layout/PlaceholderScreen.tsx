import React from "react"

function PlaceholderScreen(props: {
  title?: string | null
  icon: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className="PlaceholderScreen">
      <div className="PlaceholderScreen-icon">{props.icon}</div>
      {props.title && (
        <h3 className="PlaceholderScreen-title">{props.title}</h3>
      )}
      <div className="PlaceholderScreen-content">{props.children}</div>
    </div>
  )
}

export default PlaceholderScreen
