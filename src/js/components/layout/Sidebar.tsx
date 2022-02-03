import { CreditCardIcon, HomeIcon, LogoutIcon, StarIcon, TicketIcon, UserIcon } from '@heroicons/react/outline'
import { CreditCardIcon as SolidCreditCardIcon, StarIcon as SolidStarIcon } from '@heroicons/react/solid'
import { Button } from '@vechaiui/react'
import clsx from 'clsx'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import routes, { getCurrentRouteName } from '../../config/routes'
import SessionContext, { SessionType } from '../../utils/session'

type SidebarItem = {
  title: string
  icon: React.ReactElement
  route?: string
  onClick?: () => void
}

type SidebarItemGroup = {
  title: string
  items: SidebarItem[]
  auth?: (session: SessionType) => boolean
}

const navItems: SidebarItem[] = [
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

const adminItems: SidebarItem[] = [
  {
    title: 'Card Requests',
    icon: <SolidCreditCardIcon />,
    route: 'card-requests'
  },
  {
    title: 'Sub Requests',
    icon: <SolidStarIcon />,
    route: 'subscription-requests'
  }
]

const actionItems: SidebarItem[] = [
  {
    title: 'Profile Info',
    icon: <UserIcon />,
    route: 'account'
  },
  {
    title: 'Logout',
    icon: <LogoutIcon />,
    onClick: () => {
      localStorage.removeItem('token');
      window.location.reload();
    }
  }
]

const itemGroups: SidebarItemGroup[] = [
  {
    title: "User Space",
    items: navItems
  },
  {
    title: "Administration",
    items: adminItems,
    auth: (session: SessionType) => session.isLoggedIn && session.user!.id === 1 // @TODO implement roles and permissions
  },
  {
    title: "Account",
    items: actionItems
  }
]

function Sidebar() {
  const session = React.useContext(SessionContext)
  const currentRouteName = getCurrentRouteName(useLocation(), React.useContext(SessionContext));
  const navigate = useNavigate();

  return (
    <div className="Sidebar">
      <nav className="Sidebar-nav">
        {itemGroups
          .filter((group) => group.auth && group.auth(session) || !group.auth)
          .map((group, index) => (
          <div className="Sidebar-nav-group" key={index}>
            <span className="Sidebar-nav-title">{group.title}</span>
            <ul className="Sidebar-nav-items">
              {group.items.map((item, index) => (
                <li className={clsx({
                  "Sidebar-nav-item": true,
                  "Sidebar-nav-item--active": item.route && item.route === currentRouteName
                })} key={index}>
                  <Button
                    onClick={item.route
                      ? () => navigate(routes[item.route!].path)
                      : item.onClick!}
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
          </div>
        ))}
        {/* <ul className="Sidebar-nav-pages">
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
        </ul> */}
      </nav>
    </div>
  )
}

export default Sidebar
