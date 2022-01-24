import React from 'react'
import Subscription from '../models/Subscription'

function SubscriptionSelector(props: {
  choices: Subscription[],
  onChange: (id: number) => void
}) {
  return (
    <div className="SubscriptionSelector">
      <div className="SubscriptionSelector-container">
        {props.choices.map((item, index) => (
          <div className="SubscriptionSelector-item" key={index}>
            <input
              id={`subscription[${item.id}]`}
              value={item.id}
              type="radio"
              name="subscription"
              className="sr-only"
              aria-label={`${item.name} ${item.reduction}% Reduction`}/>

            <label
              htmlFor={`subscription[${item.id}]`}
              className="SubscriptionSelector-label" aria-hidden="true"
              onClick={() => props.onChange(item.id)}>

              <h4 className="SubscriptionSelector-title">{item.name}</h4>
              <p className="SubscriptionSelector-desc">{item.reduction}% Reduction</p>

            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubscriptionSelector
