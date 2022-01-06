import { CreditCardIcon, HomeIcon, LogoutIcon, StarIcon, TicketIcon } from '@heroicons/react/outline'
import { Button } from '@vechaiui/react'
import clsx from 'clsx'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import routes, { getCurrentRouteName } from '../../config/routes'
import SessionContext from '../../utils/session'

type SidebarItem = {
  title: string
  icon: React.ReactElement
};

type NavItem = SidebarItem & {
  route: string
}

type ActionItem = SidebarItem & {
  onClick: () => void
}

const navItems: NavItem[] = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    route: 'home',
  },
  {
    title: 'Card',
    icon: <CreditCardIcon />,
    route: 'card',
  },
  {
    title: 'Subscription',
    icon: <StarIcon />,
    route: 'subscription',
  },
  {
    title: 'Travel History',
    icon: <TicketIcon />,
    route: 'travels',
  },
]

const actionItems = [
  {
    title: 'Logout',
    icon: <LogoutIcon />,
    onClick: () => {
      localStorage.removeItem('token');
      window.location.reload();
    }
  }
]

function Sidebar() {
  const currentRouteName = getCurrentRouteName(useLocation(), React.useContext(SessionContext));
  const navigate = useNavigate();

  return (
    <div className="Sidebar">
      <nav className="Sidebar-nav">
        <ul className="Sidebar-nav-pages">
          {navItems.map((item, index) => (
            <li className={clsx({
              "Sidebar-nav-item": true,
              "Sidebar-nav-item--active": item.route === currentRouteName
            })} key={index}>
              <Button
                onClick={() => navigate(routes[item.route].path)}
                variant="ghost"
                leftIcon={(
                  <span className="btn-icon">
                    {item.icon}
                  </span>
                )}>
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
        <ul className="Sidebar-nav-actions">
          {actionItems.map((item, index) => (
           <li className="Sidebar-nav-item" key={index}>
             <Button
                onClick={item.onClick}
                variant="ghost"
                leftIcon={(
                  <span className="btn-icon">
                    {item.icon}
                  </span>
                )}>
                {item.title}
              </Button>
           </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
