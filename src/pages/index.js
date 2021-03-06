import React, { Fragment } from 'react'
import cls from 'classnames'
import { Parallax } from 'react-scroll-parallax'
import { Element, Link as Scroll } from 'react-scroll'

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
import cattoImgL from 'images/catto@2.png'
import cattoImg from 'images/catto.png'
import cattoImgM from 'images/catto_400.png'
import cattoImgS from 'images/catto_350.png'
import thinDoggoImg from 'images/thinDoggo.png'

// import components
import Layout from 'components/Layout/Layout.component.js'
import PetpitLogo from 'components/PetpitLogo'
import PhoneMock from 'components/PhoneMock'
import Story from 'components/Story'
import Feature from 'components/Feature'
import FiltersList from 'components/FiltersList'
import Blob from 'components/Blob'
import IconPin from 'components/IconPin'
import Button from 'components/Button'

import messages from '../messages/main.messages'
import styles from '../components/PageLayout/PageLayout.module.scss'
import PinIcon from '../components/IconPin/IconPin.component'

const IndexPage = () => (
  <Layout>
    <Scroll to="apps" smooth>
      <Button
        label={'Pobierz aplikację'}
        className={cls(styles.appButton, styles.mobile)}
      />
    </Scroll>
    <section className={cls(styles.intro, styles.section)}>
      <div className={styles.introSmallBlobWrapper}>
        <Blob size={170} />
      </div>
      <div className={styles.introBlobWrapper}>
        <Parallax offsetYMax="80px" offsetYMin="-80px">
          <Blob outline size={800} />
        </Parallax>
      </div>
      <Feature
        className={styles.mobileReversed}
        centerContent={false}
        leftPanel={
          <Fragment>
            <div className={styles.pawPinWrapper}>
              <IconPin name={'paw'} size={75} />
            </div>
            <div className={styles.doggoWrapper}>
              <Parallax offsetYMax="0px" offsetYMin="-380px">
                <img
                  className={styles.doggoImage}
                  src={doggyImg}
                  srcSet={`
        ${doggyImgL} 580w,
        ${doggyImgM} 321w,
        ${doggyImgS} 270w
        `}
                  sizes={`
          (max-width: 768px) 270px,
          (max-width: 1180px) 321px,
          (max-width: 1920px) 420px
        `}
                  alt={messages.imageAlts.doggo}
                />
              </Parallax>
            </div>
            <PhoneMock>
              <img src={mapView} alt={messages.imageAlts.map} />
            </PhoneMock>
            <Blob size={300} className={styles.mapBlob} />
          </Fragment>
        }
        rightPanel={
          <Fragment>
            <div className={styles.groomPinWrapper}>
              <IconPin name={'groomer'} size={45} />
            </div>
            <div className={styles.doggoPinWrapper}>
              <Parallax offsetYMax="-190px" offsetYMin="1000px">
                <IconPin name={'dog'} size={115} />
              </Parallax>
            </div>
            <div className={cls(styles.badge, styles.nonMobile)}>
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
      <div className={styles.friendlyPlacesBlobWrapper}>
        <Parallax offsetXMax="0px" offsetXMin="-80px">
          <Blob outline size={560} />
        </Parallax>
      </div>
      <Feature
        leftPanel={
          <Story
            header={messages.friendlyPlaces.header}
            copy={messages.friendlyPlaces.copy}
          />
        }
        rightPanel={
          <div className={styles.friendlyPlacesPhoneMock}>
            <PhoneMock>
              <img src={filtersView} alt={messages.imageAlts.map} />
            </PhoneMock>
          </div>
        }
      />
    </section>
    <section className={cls(styles.detailsView, styles.section)}>
      <div className={styles.cattoBlobWrapper}>
        <div className={styles.cattoBlob}>
          <Parallax offsetYMax="50px" offsetYMin="0px">
            <Blob outline size={500} />
          </Parallax>
        </div>
        <Blob
          className={cls(styles.cattoBlob, styles.cattoBlobTwo)}
          outline
          size={420}
        />
      </div>
      <Feature
        className={styles.detailsViewFeature}
        leftPanel={
          <PhoneMock>
            <img src={profileView} alt={messages.imageAlts.profileView} />
          </PhoneMock>
        }
        rightPanel={
          <Fragment>
            <Story
              header={messages.detailsView.header}
              copy={messages.detailsView.copy}
            />
            <div className={styles.cattoWrapper}>
              <Parallax offsetYMax="50px" offsetYMin="-250px">
                <picture className={styles.cattoImage}>
                  <source media={`(max-width: 768)`} srcSet={`${cattoImgM}`} />
                  <source
                    media={`(max-width: 1180px)`}
                    srcSet={`${cattoImgS}`}
                  />
                  <source
                    media={`(min-width: 1920px)`}
                    srcSet={`${cattoImgL}`}
                  />
                  <img
                    src={cattoImg}
                    srcSet={`${cattoImg}`}
                    alt={messages.imageAlts.catto}
                  />
                </picture>
              </Parallax>
            </div>
          </Fragment>
        }
      />
    </section>
    <section className={cls(styles.filters, styles.section)}>
      <div className={styles.filtersBlob}>
        <Blob outline size={380} />
      </div>
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
    <div className={styles.filterPinWrapper}>
      <IconPin name={'logo'} size={40} />
    </div>
    <section className={cls(styles.pinnedMap, styles.section)}>
      <img
        className={styles.thinDoggoImage}
        src={thinDoggoImg}
        alt={messages.imageAlts.thinDoggo}
      />
      <div className={styles.pinnedBlob}>
        <Parallax offsetYMax="80px" offsetYMin="-60px">
          <Blob outline size={600} />
        </Parallax>
      </div>
      <Feature
        leftPanel={
          <Story
            header={messages.pinnedMap.header}
            copy={messages.pinnedMap.copy}
          />
        }
        rightPanel={
          <Fragment>
            <div className={styles.housePinWrapper}>
              <Parallax offsetYMax="50px" offsetYMin="-250px">
                <IconPin name={'home'} size={70} />
              </Parallax>
            </div>
            <div className={styles.pinnedSectionMock}>
              <PhoneMock>
                <img src={pinnedMap} alt={messages.imageAlts.pinnedMap} />
              </PhoneMock>
            </div>
          </Fragment>
        }
      />
    </section>
    <div className={styles.bowlPinWrapper}>
      <PinIcon name={'bowl'} size={70} />
    </div>
    <section className={cls(styles.section, styles.appLinksSection)} id="apps">
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
