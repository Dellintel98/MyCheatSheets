/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import { css } from "theme-ui"

import Navigation from "./navigation"


//isAdmin = true
//style={isAdmin ? myStyles1 : myStyles2}

const Layout = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuItems {
            link
            text
          }
        }
      }
    }
  `)

  const {siteMetadata: {menuItems}} = data.site

  return (
    <>
      <Global 
        styles={css({
          "*": {
            margin: 0,
            padding: 0,
          },
          body: {
            boxSizing: `border box`,
            textRendering: `optimizeLegibility`,
            MozOsxFontSmoothing: `grayscale`,
            WebkitFontSmoothing: `antialiased`,
            backgroundColor: `background`,
            color: `text`,
            lineHeight: `body`,
            fontFamily: `body`,
            fontWeight: `body`,
          },
          a: {
            textDecoration: "none",
          },
        })}
      />

      <div
        sx={{
          height: "screenHeight",
          overflow: "hidden",
        }}
      >
        <Navigation menuItems={menuItems} />
        {props.children}
      </div>
    </>
  )
}

export default Layout
