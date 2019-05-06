import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'

import PageLayout from 'components/PageLayout'
import FooterMenu from 'components/FooterMenu'

import styles from './Layout.module.scss'

const Layout = ({ children }) => (
  <ParallaxProvider>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description
              },
              {
                name: 'keywords',
                content:
                  'pies, kot, psy, koty, aplikacja, petpit, pet, app, weterynarz, behawiorysta, hotel dla zwierząt, weterynarze, hodowla, hodowle, aplikacja'
              }
            ]}
          >
            <html lang="en" />
          </Helmet>
          <PageLayout>
            {children}
            <FooterMenu />
          </PageLayout>
        </>
      )}
    />
  </ParallaxProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
