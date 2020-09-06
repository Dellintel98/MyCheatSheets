/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import BodyContentHeader from "../components/body-content/body-content-header"
import BodySearchBar from "../components/body-content/body-search-bar"
import SeeThroughContainer from "../components/sheets-components/See-through-container"
import SheetContainer from "../components/sheets-components/mysheet-container"

import IndexPageBackgroundImage from "../images/background-images/laptop-and-notebook.png"
import CreatorIcon from "../components/sheets-components/creator-icon"
import SheetIcon from "../components/sheets-components/mysheet-icon"
import CreatorAvatar from "../images/avatar.svg"
import CFileIcon from "../images/file-icons/c_file_icon.svg"
import CppFileIcon from "../images/file-icons/c++_file_icon.svg"

const sortingOptions = [
    { value: 'sort-by', label: 'Sort by' },
    { value: 'date-oldest', label: 'Date (oldest)' },
    { value: 'date-newest', label: 'Date (newest)' },
    { value: 'views-most', label: 'Views (most)' },
    { value: 'views-least', label: 'Views (least)' }
]

const Sheet = () => (
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
                }}>
                <SeeThroughContainer>
                    <BodyContentHeader
                        sx={{
                            marginTop: "1em",
                            marginBottom: "1em",
                            height: "20%",
                            width: "80%",
                            justifyContent: "space-between",
                        }}>
                        <CreatorIcon iconImage={CreatorAvatar} iconName="avatar" username="creator01" />
                        <h1>Sheets</h1>
                        <BodySearchBar sortingOptions={sortingOptions} />
                    </BodyContentHeader>
                    <SheetContainer>
                        <SheetIcon iconImage={CFileIcon} iconName="cFileIcon" number="88" />
                        <SheetIcon iconImage={CppFileIcon} iconName="cFileIcon" number="23" />
                    </SheetContainer>
                </SeeThroughContainer>
            </BodyContent>
        </Body>
    </Layout>
)

export default Sheet