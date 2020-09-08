/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import SideBarCreators from "../components/sidebar/sidebar-creators"
import MainHeader from "../components/main-header"
import BodyContentHeader from "../components/body-content/body-content-header"
import BodySearchBar from "../components/body-content/body-search-bar"
import CreatorsContainer from "../components/creators-components/creators-container"
import CreatorsCard from "../components/creators-components/creator-card"
import CreatorsIcon from "../components/creators-components/creators-icon"
import CreatorAvatar from "../images/avatar-icons/person.svg"

const sortingOptions = [
    {value: 'a-z', label: 'A-Z'},
    {value: 'z-a', label: 'Z-A'},
]


const Creators = () => (
    <Layout>
        <Body sx={{ overflowY: "scroll", }}>
            <BodyContent sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "transparent",
            }}>
                <MainHeader>
                    <BodyContentHeader
                        sx={{
                            height: "70%",
                            justifyContent: "left",
                            borderBottom: "1px solid",
                            borderColor: "iconGrey",
                            // backgroundColor: "transparent",
                        }}>
                        <Styled.h3>Creators</Styled.h3>
                        <BodySearchBar sortingOptions={sortingOptions} />
                    </BodyContentHeader>
                </MainHeader>
                <div 
                    sx={{
                        width: "80%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div
                        sx={{
                            width: "30%", 
                            height: "100%",
                            display: "flex",
                            flexFlow: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <CreatorsContainer>
                            <h2>C</h2>
                            <CreatorsCard>
                                <CreatorsIcon iconImage={CreatorAvatar} iconName="avatar" username="creator01" />
                            </CreatorsCard>
                        </CreatorsContainer>
                    </div>
                    <div 
                        sx={{
                            width: "33%",
                            height: "100%",
                            display: "flex",
                            flexFlow: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <CreatorsContainer>
                            <h2>C</h2>
                            <CreatorsCard>
                                <CreatorsIcon iconImage={CreatorAvatar} iconName="avatar" username="creator01" />
                            </CreatorsCard>
                        </CreatorsContainer>
                    </div>
                    <div 
                        sx={{
                            width: "30%",
                            height: "100%",
                            display: "flex",
                            flexFlow: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <CreatorsContainer>
                            <h2>C</h2>
                            <CreatorsCard>
                                <CreatorsIcon iconImage={CreatorAvatar} iconName="avatar" username="creator01" />
                            </CreatorsCard>
                            <CreatorsCard>
                                <CreatorsIcon iconImage={CreatorAvatar} iconName="avatar" username="creator01" />
                            </CreatorsCard>
                        </CreatorsContainer>
                    </div>
                </div>
            </BodyContent>
            <SideBarCreators />
        </Body>
    </Layout>
)

export default Creators