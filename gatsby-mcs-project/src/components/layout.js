/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import { css } from "theme-ui"
import { useState } from "react"

import Navigation from "./navigation"


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

  const {siteMetadata: {menuItems}} = data.site;
  
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleLogin = () => {
    setUserLoggedIn(true);
  }

  const handleLogout = () => {
    setUserLoggedIn(false);
  }

  return (
    <div>
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
          position: "relative",
          height: "screenHeight",
          overflow: "hidden",
        }}
      >
        <Navigation menuItems={menuItems} isUserLoggedIn={userLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
        {props.children}
      </div>
    </div>
  )
}

export default Layout
