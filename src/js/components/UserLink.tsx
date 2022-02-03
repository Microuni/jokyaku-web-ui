import Avatar from "boring-avatars"
import React from "react"
import User from "../models/User"

function UserLink({ user }: { user: User }) {
  return (
    <div className="UserLink flex items-center gap-2">
      <Avatar
        name={`${user.firstName} ${user.lastName}`}
        variant="beam"
        size={30}
      />
      <span className="UserLink-name">
        {user.firstName} {user.lastName}
      </span>
    </div>
  )
}

export default UserLink
