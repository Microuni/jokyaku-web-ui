import { FunctionComponent } from "react";
import { Location } from "react-router-dom";
import Card from "../components/Card";
import Index from "../components/Index";
import Login from "../components/Login";
import Register from "../components/Register";
import Splash from "../components/Splash";
import Subscription from "../components/Subscription";
import TravelHistory from "../components/TravelHistory";
import { SessionType } from "../utils/session";

export type Route = {
  path: string;
  element: (session: SessionType) => FunctionComponent<any>;
  index?: boolean;
};

const routes: Record<string, Route> = {
  index: {
    path: '/',
    element: (session) => session.isLoggedIn ? Index : Login,
  },

  login: {
    path: '/login',
    element: () => Login,
  },

  register: {
    path: '/register',
    element: () => Register,
  },

  home: {
    path: '/home',
    element: () => Index,
  },

  card: {
    path: '/card',
    element: () => Card,
  },

  subscription: {
    path: '/subscription',
    element: () => Subscription,
  },

  travels: {
    path: '/travels',
    element: () => TravelHistory,
  }
};

export function getCurrentRouteName(location: Location, user: SessionType): string {
  let path = location.pathname;

  if (path === '/') {
    const key = Object.keys(routes).filter(key => routes[key].element(user) === routes.index.element(user)).pop()!;
    path = routes[key].path;
  }

  return Object.keys(routes)
    .filter(key => routes[key].path === path)
    .pop()!;
}

export default routes;
