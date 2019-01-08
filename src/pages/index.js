import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout/Layout.component.js'
import Topbar from 'components/Topbar'
import PetpitLogo from 'components/PetpitLogo'
import TopbarMenu from 'components/TopbarMenu'

const IndexPage = () => (
  <Layout>
    <Topbar>
      <PetpitLogo size={52} colored />
      <TopbarMenu/>
    </Topbar>
    hej ho
  </Layout>
)

export default IndexPage
