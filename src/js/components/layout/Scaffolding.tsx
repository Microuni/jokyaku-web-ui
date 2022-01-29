import clsx from 'clsx';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { getCurrentRouteName } from '../../config/routes'
import SessionContext from '../../utils/session';
import Footer from './Footer'
import Header from './Header'

function Scaffolding(props: React.HTMLProps<any> & { splash?: boolean }) {
  const user = React.useContext(SessionContext);
  const routeName = getCurrentRouteName(useLocation(), user);

  return (
    <div className={clsx({
      'App': true,
      [`App--${routeName}`]: true,
      'App--splash': props.splash
    })}>
      {props.children}
      <Footer />
    </div>
  )
}

export default Scaffolding
