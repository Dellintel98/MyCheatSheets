/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
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
import EmptySheetIcon from "../images/file-icons/empty-sheet.svg"
import CreatorAvatar from "../images/avatar.svg"
// import CFileIcon from "../images/file-icons/c_file_icon.svg"
// import CppFileIcon from "../images/file-icons/c++_file_icon.svg"


const sortingOptions = [
    {value: 'a-z', label: 'A-Z'},
    {value: 'z-a', label: 'Z-A'},
    {value: 'date-newest', label: 'Date (newest)'},
    {value: 'date-oldest', label: 'Date (oldest)'},
    {value: 'most-votes', label: 'Most votes'},
]

const sheetOptions = [
    {sheetId: "0000", voteCounter: 88, title: "C cheat sheet", creator: "Creator01", creatorId: "0000", creatorAvatar: "", timestamp: "2020-09-06T13:29:38.830Z", sheetIcon: EmptySheetIcon, iconName: "EmptySheetIcon"},
]

const sheetOptionCategories = [
    {category: 'A', options: sheetOptions},
]


const Sheets = () => (
    <Layout>
        <Body sx={{ overflowY: "scroll" }}>
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
                            height: "70%",
                            justifyContent: "left",
                            borderBottom: "1px solid",
                            borderColor: "iconGrey",
                            // backgroundColor: "transparent",
                        }}
                    >
                        <div
                            sx={{
                                display: "flex",
                                height: "40%",
                                width: "3.1%",
                                marginRight: "15px",
                                backgroundSize: "cover",
                                backgroundImage: `url(${EmptySheetIcon})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "0px 0px",
                            }}
                        />
                        <Styled.h3>Sheets</Styled.h3>
                        <BodySearchBar currentPage="sheets" sortingOptions={sortingOptions} />
                    </BodyContentHeader>
                </MainHeader>
                {sheetOptionCategories.map((sheetCategory) => (
                    <SheetsContainer key={sheetCategory.category} >
                        <Styled.h3 sx={{alignSelf: "flex-start" }}>{sheetCategory.category}</Styled.h3>
                        <SheetsCardContainer>
                            {sheetCategory.options.map((sheetOption) => (
                                <SheetsCard sheetOptions={sheetOption} key={sheetOption.sheetId} />
                            ))}
                        </SheetsCardContainer>
                        <Styled.h5 sx={{cursor: "pointer", '&:hover': {color: "alternate"}}} >More...</Styled.h5>
                    </SheetsContainer>
                ))}
            </BodyContent>
            <SideBarCreators />
        </Body>
    </Layout>
)

export default Sheets
