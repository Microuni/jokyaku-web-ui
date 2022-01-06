import React from "react"
import User from "../models/User"

const token = localStorage.getItem('token');

export type SessionType = {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
};

const SessionContext = React.createContext<SessionType>({
  user: null,
  token,
  isLoggedIn: !!token
})

export default SessionContext
