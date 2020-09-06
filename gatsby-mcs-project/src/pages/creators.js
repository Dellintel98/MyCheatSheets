/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import Body from "../components/body"
import BodyContent from "../components/body-content"
import SideBarCreators from "../components/sidebar/sidebar-creators"
import BodyContentHeader from "../components/body-content/body-content-header"
import BodySearchBar from "../components/body-content/body-search-bar"
import CreatorsContainer from "../components/creators-components/creators-container"
import CreatorsCard from "../components/creators-components/creator-card"
import CreatorsIcon from "../components/creators-components/creators-icon"
import CreatorAvatar from "../images/avatar.svg"

const sortingOptions = [
    { value: 'sort-by', label: 'Sort by' },
    { value: 'date-oldest', label: 'Date (oldest)' },
    { value: 'date-newest', label: 'Date (newest)' },
    { value: 'views-most', label: 'Views (most)' },
    { value: 'views-least', label: 'Views (least)' }
]

const Creators = () => (
    <Layout>
        <Body sx={{ overflow: "scrollbar", }}>
            <BodyContent sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "transparent",
            }}>
                <BodyContentHeader
                    sx={{
                        marginTop: "1em",
                        marginBottom: "1em",
                        height: "20%",
                        width: "80%",
                        justifyContent: "space-between",
                    }}>
                    <h1>Creators</h1>
                    <BodySearchBar sortingOptions={sortingOptions} />
                </BodyContentHeader>
                <CreatorsContainer>
                    <h2>C</h2>
                    <CreatorsCard>
                        <CreatorsIcon iconImage={CreatorAvatar} iconName="avatar" username="creator01" />
                        <CreatorsIcon iconImage={CreatorAvatar} iconName="avatar" username="creator0123" />
                    </CreatorsCard>
                </CreatorsContainer>
            </BodyContent>
            <SideBarCreators />
        </Body>
    </Layout>
)

export default Creators