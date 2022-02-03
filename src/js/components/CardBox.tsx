import { Alert } from "@vechaiui/react"
import React, { ComponentProps } from "react"

interface CardBoxProps extends ComponentProps<any> {
  card: any
  details?: string[][]
  controls?: any[]
  top?: any
  topColor?: string
}

function CardBox(props: CardBoxProps) {
  return (
    <div className="CardBox">
      {props.top && (
        <Alert className="CardBox-header" variant="subtle" color={props.topColor || 'neutral'}>
          {props.top}
        </Alert>
      )}
      <div className="CardBox-container">
        <div className="CardBox-card">{props.card}</div>
        <div className="CardBox-content">
          {props.details && (
            <ul className="CardBox-details">
              {props.details.map((item, index) => (
                <li key={index} className="CardBox-item">
                  <span className="CardBox-item-label">{item[0]}</span>
                  <span className="CardBox-item-value">{item[1]}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="CardBox-controls">{props.controls}</div>
        </div>
      </div>
    </div>
  )
}

export default CardBox
