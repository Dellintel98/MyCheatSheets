/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Body from "../components/body"
import BodyContent from "../components/body-content"

import LogoTitle from "../components/index-page-scripts/index-logo-title"
import Slogan from "../components/index-page-scripts/slogan"
import IndexPageSearchBar from "../components/index-page-scripts/index-search-bar"
import QuickAccessIconContainer from "../components/index-page-scripts/quick-access-container"
import QuickAccessIcon from "../components/index-page-scripts/quick-access-icon"

import LogoTitleImage from "../images/mcs-title-transparent.png"

const IndexPage = () => (
    <Layout>
        <Body>
            <BodyContent
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <LogoTitle logoTitle={LogoTitleImage} />
                <Slogan sloganText="FIND. MAKE. CHEAT. REPEAT." />
                <IndexPageSearchBar />
                <QuickAccessIconContainer>
                    <QuickAccessIcon />
                    <QuickAccessIcon />
                    <QuickAccessIcon />
                    <QuickAccessIcon />
                    <QuickAccessIcon />
                </QuickAccessIconContainer>
            </BodyContent>
        </Body>
    </Layout>
)

export default IndexPage