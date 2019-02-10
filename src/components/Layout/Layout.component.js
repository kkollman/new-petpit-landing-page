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
              test
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.test}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' }
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
