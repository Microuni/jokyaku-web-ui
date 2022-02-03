import clsx from "clsx"
import React, { FormEventHandler } from "react"

function RfidCard({
  number,
  simulate,
  onInput,
}: {
  number: string
  simulate: boolean
  onInput?: FormEventHandler
}) {
  return (
    <div className={clsx("RfidCard", simulate && "RfidCard--play")}>
      <span
        className="RfidCard-number"
        contentEditable={onInput && "true"}
        suppressContentEditableWarning={onInput && true}
        onInput={onInput}
      >
        {number.replace(/(.{2})/g, "$1 ")}
      </span>
    </div>
  )
}

export default RfidCard
