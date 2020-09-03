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
import CImage from "../images/quick-access-icons/quick-c-lang.svg"
import CPlusPlusImage from "../images/quick-access-icons/quick-cpp-lang.svg"
import JSImage from "../images/quick-access-icons/quick-js-lang.svg"
import ReactJSImage from "../images/quick-access-icons/quick-react-js.svg"
import PythonImage from "../images/quick-access-icons/quick-python-lang.svg"
import IndexPageBackgroundImage from "../images/background-images/laptop-and-notebook.png"


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
                    backgroundColor: "transparent",
                    backgroundImage: `url(${IndexPageBackgroundImage})`, // Ovo napraviti s gatsby slikom kako bi bilo brže i radi onog
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <LogoTitle logoTitle={LogoTitleImage} />
                <Slogan sloganText="FIND. MAKE. CHEAT. REPEAT." />
                <IndexPageSearchBar />
                <QuickAccessIconContainer>
                    <QuickAccessIcon iconImage={CImage} iconName="C quick access icon" />
                    <QuickAccessIcon iconImage={PythonImage} iconName="Python quick access icon" />
                    <QuickAccessIcon iconImage={CPlusPlusImage} iconName="C++ quick access icon" />
                    <QuickAccessIcon iconImage={ReactJSImage} iconName="ReactJS quick access icon" />
                    <QuickAccessIcon iconImage={JSImage} iconName="Javascript quick access icon" />
                </QuickAccessIconContainer>
            </BodyContent>
        </Body>
    </Layout>
)

export default IndexPage