/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import MainHeader from "../components/main-header"
import BodyContentHeader from "../components/body-content/body-content-header"
import SideBarEditorText from "../components/sidebar/sidebar-editor-text"
import EmptySheetIcon from "../images/file-icons/empty-sheet.svg"


const Sheet = () => (
    <Layout>
        <Body sx={{ overflowY: "scroll", }}>
            <BodyContent
                sx={{
                    height: "98%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    // backgroundColor: "transparent",
                }}
            >
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
                        <Styled.h3>Sheet</Styled.h3>
                    </BodyContentHeader>
                </MainHeader>
            </BodyContent>
            <SideBarEditorText />
        </Body>
    </Layout>
)

export default Sheet