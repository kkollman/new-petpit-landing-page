import React, { Fragment } from 'react'
import cls from 'classnames'
import { Parallax } from 'react-scroll-parallax'
// import images
import appStoreLogo from 'images/appstore.png'
import googlePlayLogo from 'images/google_play.png'
import mapView from 'images/map1.png'
import filtersView from 'images/filters.png'
import profileView from 'images/profile_view.png'
import pinnedMap from 'images/pinnedmap.png'
import googleStoreLongLogo from 'images/googleStore.png'
import appStoreLongLogo from 'images/appleStore.png'
import doggyImg from 'images/doggy.png'
import doggyImgL from 'images/doggy_large.png'
import doggyImgM from 'images/doggy_medium.png'
import doggyImgS from 'images/doggy_small.png'

import PageLayout from 'components/PageLayout'
import Layout from 'components/Layout/Layout.component.js'
import Topbar from 'components/Topbar'
import PetpitLogo from 'components/PetpitLogo'
import TopbarMenu from 'components/TopbarMenu'
import PhoneMock from 'components/PhoneMock'
import Story from 'components/Story'
import Feature from 'components/Feature'
import FiltersList from 'components/FiltersList'
import FooterMenu from 'components/FooterMenu'
import Blob from 'components/Blob'

import messages from './PageMessages/main.messages'
import styles from '../components/PageLayout/PageLayout.module.scss'

const IndexPage = () => (
  <Layout>
    <section className={cls(styles.intro, styles.section)}>
      <Feature
        padded
        centerContent={false}
        leftPanel={
          <Fragment>
            <div className={styles.doggoWrapper}>
              <Parallax
                offsetYMax="150px"
                offsetYMin="-400px">
                <img
                  className={styles.doggoImage}
                  src={doggyImg}
                  srcSet={`
        ${doggyImgL} 535w,
        ${doggyImgM} 321w,
        ${doggyImgS} 270w
        `}
                  sizes={`
          (max-width: 768px) 270px,
          (max-width: 1180px) 321px,
          (max-width: 1920px) 423px,
        `}
                  alt={messages.imageAlts.doggo}
                />
              </Parallax>
            </div>
            <PhoneMock>
              <img src={mapView} alt={messages.imageAlts.map} />
            </PhoneMock>
          </Fragment>
        }
        rightPanel={
          <Fragment>
            <div className={styles.badge}>
              <PetpitLogo colored size={65} />
            </div>
            <Story header={messages.intro.header} copy={messages.intro.copy} />
            <div className={styles.introIconWrapper}>
              <a
                className={styles.iconLink}
                href="https://itunes.apple.com/pl/app/petpit/id1420457577"
                target="_blank"
              >
                <img src={appStoreLogo} alt={messages.imageAlts.appStoreLogo} />
              </a>
              <a
                className={styles.iconLink}
                href="https://play.google.com/store/apps/details?id=co.petpit.petpit"
                target="_blank"
              >
                <img
                  src={googlePlayLogo}
                  alt={messages.imageAlts.googlePlayLogo}
                />
              </a>
            </div>
          </Fragment>
        }
      />
    </section>
    <section className={cls(styles.friendlyPlaces, styles.section)}>
      <div className={styles.skewedBackgroundWrapper}>
        <div className={styles.skewedBackground} />
      </div>
      <Feature
        leftPanel={
          <Story
            header={messages.friendlyPlaces.header}
            copy={messages.friendlyPlaces.copy}
          />
        }
        rightPanel={
          <PhoneMock>
            <img src={filtersView} alt={messages.imageAlts.map} />
          </PhoneMock>
        }
      />
    </section>
    <section className={cls(styles.detailsView, styles.section)}>
      <Feature
        leftPanel={
          <PhoneMock>
            <img src={profileView} alt={messages.imageAlts.profileView} />
          </PhoneMock>
        }
        rightPanel={
          <Story
            header={messages.detailsView.header}
            copy={messages.detailsView.copy}
          />
        }
      />
    </section>
    <section className={cls(styles.filters, styles.section)}>
      <div className={styles.filtersSectionContent}>
        <div className={styles.filtersList}>
          <FiltersList />
        </div>
        <div className={styles.filterStory}>
          <Story
            header={messages.filters.header}
            copy={messages.filters.copy}
          />
        </div>
      </div>
    </section>
    <section className={cls(styles.pinnedMap, styles.section)}>
      <Feature
        leftPanel={
          <Story
            header={messages.pinnedMap.header}
            copy={messages.pinnedMap.copy}
          />
        }
        rightPanel={
          <PhoneMock>
            <img src={pinnedMap} alt={messages.imageAlts.pinnedMap} />
          </PhoneMock>
        }
      />
    </section>
    <section className={cls(styles.section, styles.appLinksSection)}>
      <div className={styles.container}>
        <Story
          header={messages.appLinksSection.header}
          classname={styles.extendedStory}
        >
          <div className={styles.appLinks}>
            <a
              href="https://play.google.com/store/apps/details?id=co.petpit.petpit"
              target="_blank"
              className={styles.store}
            >
              <img
                src={googleStoreLongLogo}
                alt={messages.imageAlts.googlePlayLogo}
              />
            </a>
            <a
              href="https://itunes.apple.com/pl/app/petpit/id1420457577"
              target="_blank"
              className={styles.store}
            >
              <img
                src={appStoreLongLogo}
                alt={messages.imageAlts.appStoreLogo}
              />
            </a>
          </div>
          <Story
            classname={styles.extendedStory}
            copy={messages.appLinksSection.copy}
          />
        </Story>
      </div>
    </section>
  </Layout>
)

export default IndexPage
