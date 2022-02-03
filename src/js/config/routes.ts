import { FunctionComponent } from "react";
import { Location } from "react-router-dom";
import Card from "../components/Card";
import CardRequests from "../components/CardRequests";
import Index from "../components/Index";
import Login from "../components/Login";
import Account from "../components/Account";
import Register from "../components/Register";
import RfidReader from "../components/RfidReader";
import Subscription from "../components/Subscription";
import SubscriptionRequests from "../components/SubscriptionRequests";
import TravelHistory from "../components/TravelHistory";
import { SessionType } from "../utils/session";

export type Route = {
  path: string;
  element: (session: SessionType) => FunctionComponent<any>;
  index?: boolean;
  auth?: boolean | ((session: SessionType) => boolean);
};

const routes: Record<string, Route> = {
  index: {
    path: '/',
    element: (session) => session.isLoggedIn ? Index : Login,
  },

  login: {
    path: '/login',
    element: () => Login,
    auth: (session) => !session.isLoggedIn
  },

  register: {
    path: '/register',
    element: () => Register,
    auth: (session) => !session.isLoggedIn
  },

  home: {
    path: '/home',
    element: () => Index,
    auth: true,
  },

  card: {
    path: '/card',
    element: () => Card,
    auth: true,
  },

  subscription: {
    path: '/subscription',
    element: () => Subscription,
    auth: true,
  },

  travels: {
    path: '/travels',
    element: () => TravelHistory,
    auth: true,
  },

  // a simulator page, since we didn't get the opportunity to work with actual equipement
  rfid: {
    path: '/rfid-reader',
    element: () => RfidReader,
  },

  "card-requests": {
    path: '/card-requests',
    element: () => CardRequests
  },

  "subscription-requests": {
    path: '/subscription-requests',
    element: () => SubscriptionRequests
  },

  account: {
    path: '/account',
    element: () => Account
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
