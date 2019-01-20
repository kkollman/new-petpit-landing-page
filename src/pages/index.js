import React from 'react'
import profileView from 'images/profile_view.png'

import Layout from 'components/Layout/Layout.component.js'
import Topbar from 'components/Topbar'
import PetpitLogo from 'components/PetpitLogo'
import TopbarMenu from 'components/TopbarMenu'
import PageLayout from 'components/PageLayout'
import PhoneMock from 'components/PhoneMock'
import Story from 'components/Story'

const IndexPage = () => (
  <Layout>
    <PageLayout>
      <Topbar>
        <PetpitLogo size={52} colored />
        <TopbarMenu />
      </Topbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <PhoneMock>
        <img src={profileView} alt="user profile" />
      </PhoneMock>
      <Story
        header={'Elo komora'}
        copy={
          'Tak jak Ty, kochamy zwierzęta. Ta aplikacja jest dla Was – dla Ciebie i Twojego futrzaka – żeby Wasze życie razem było jeszcze lepsze <3'
        }
      />
    </PageLayout>
  </Layout>
)

export default IndexPage
