/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import SideBarCreators from "../components/sidebar/sidebar-creators"
import MainHeader from "../components/main-header"
import BodyContentHeader from "../components/body-content/body-content-header"
import BodySearchBar from "../components/body-content/body-search-bar"
import SheetsCardContainer from "../components/sheets-components/sheets-card-container"
import SheetsContainer from "../components/sheets-components/sheets-container"

import SheetsCard from "../components/sheets-components/sheets-card"
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

const Sheets = () => (
    <Layout>
        <Body sx={{ overflow: "scrollbar", }}>
            <BodyContent sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                //backgroundColor: "lightgreen",
            }}>
                <MainHeader>
                    <BodyContentHeader
                        sx={{
                            marginTop: "1em",
                            marginBottom: "1em",
                            height: "20%",
                            width: "80%",
                            justifyContent: "space-between",
                            backgroundColor: "lightgray",
                        }}
                    >
                        <h1>Sheets</h1>
                        <BodySearchBar currentPage="sheets" sortingOptions={sortingOptions} />
                    </BodyContentHeader>
                </MainHeader>
                <SheetsContainer>
                    <h2>C</h2>
                    <SheetsCardContainer>
                        <SheetsCard IconImage={CFileIcon} IconName="cFileIcon" Number="88" SheetTitle="C cheat sheet" Username={"creator01"} />
                        <SheetsCard IconImage={CppFileIcon} IconName="cppFileIcon" Number="88" SheetTitle="C++ cheat sheet" Username={"creator013"} />
                    </SheetsCardContainer>
                    More...
                </SheetsContainer>
            </BodyContent>
            <SideBarCreators />
        </Body>
    </Layout>
)

export default Sheets
