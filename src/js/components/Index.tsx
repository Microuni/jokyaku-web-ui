import { HomeIcon } from '@heroicons/react/outline'
import React from 'react'
import Page from './layout/Page'
import PlaceholderScreen from './layout/PlaceholderScreen'

function Index() {
  return (
    <Page className="Index" title="Home" sidebar={true}>

      <PlaceholderScreen
        icon={<HomeIcon />}
        title="Welcome To Your Personal Jokyaku Space"/>

    </Page>
  )
}

export default Index
