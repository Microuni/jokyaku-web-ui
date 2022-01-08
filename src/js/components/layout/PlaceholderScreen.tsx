import React from 'react'

function PlaceholderScreen(props: {
  title: string
  icon: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className="PlaceholderScreen">
      <div className="PlaceholderScreen-icon">{props.icon}</div>
      <h3 className="PlaceholderScreen-title">{props.title}</h3>
      <div className="PlaceholderScreen-content">{props.children}</div>
    </div>
  )
}

export default PlaceholderScreen
