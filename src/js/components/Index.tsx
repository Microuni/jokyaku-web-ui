import { HomeIcon } from '@heroicons/react/outline'
import React from 'react'
import Page from './layout/Page'
import PlaceholderScreen from './layout/PlaceholderScreen'
import HomeVector from './vectors/HomeVector'

function Index() {
  return (
    <Page className="Index" sidebar="true">

      <PlaceholderScreen
        icon={<HomeVector />}
        title="Welcome To Your Personal Jokyaku Space"/>

    </Page>
  )
}

export default Index
