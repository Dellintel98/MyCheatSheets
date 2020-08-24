/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import { css } from "theme-ui"

import useGlobalState from "../hooks/global-state-storage"
import useWindowDimensions from "../hooks/get-screen-width"
import Navigation from "./navigation"
import Footer from "./footer"


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
  
  // const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [globalState, globalActions] = useGlobalState();

  const userLoggedIn = globalState.isUserLoggedIn;

  const handleLogin = () => {
    if(!userLoggedIn){
      globalActions.setUserLoggedIn(true);
    }
  }

  const handleLogout = () => {
    if(userLoggedIn){
      globalActions.setUserLoggedIn(false);
    }
  }

  const windowWidth = useWindowDimensions();

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

      {(windowWidth > 230) ?
      <div
        sx={{
          position: "relative",
          height: "screenHeight",
          overflow: "hidden",
        }}
      >
        <Navigation menuItems={menuItems} isUserLoggedIn={userLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} windowWidth={windowWidth} />
        {props.children}
        <Footer />
      </div> : null}
    </div>
  )
}

export default Layout
