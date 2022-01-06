import clsx from 'clsx';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { getCurrentRouteName } from '../../config/routes'
import SessionContext from '../../utils/session';
import Footer from './Footer'
import Header from './Header'

function Scaffolding(props: React.HTMLProps<any>) {
  const user = React.useContext(SessionContext);
  const routeName = getCurrentRouteName(useLocation(), user);

  return (
    <div className={clsx('App', `App--${routeName}`)}>
      <Header />

        {props.children}

      <Footer />
    </div>
  )
}

export default Scaffolding
