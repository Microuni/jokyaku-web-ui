import React, { ComponentProps } from 'react';

interface CardBoxProps extends ComponentProps<any> {
  card: any
  details?: any[]
  controls?: any[]
}

function CardBox(props: CardBoxProps) {
  return (
    <div className="CardBox">
      <div className="CardBox-card">{props.card}</div>
      <div className="CardBox-content">
        {props.details && (
          <ul className="CardBox-details">
            {props.details.map(d => (
              <li>{d}</li>
            ))}
          </ul>
        )}

        <div className="CardBox-controls">
          {props.controls}
        </div>
      </div>
    </div>
  );
}

export default CardBox;
