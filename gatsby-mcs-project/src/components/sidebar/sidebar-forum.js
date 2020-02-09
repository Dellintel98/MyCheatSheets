/** @jsx jsx */
import { jsx } from "theme-ui"
import SideBar from "../sidebar/sidebar"
import SidebarCard from "../sidebar/sidebar-card"
import SidebarCardText from "../sidebar/sidebar-card-text"
import SideBarContainer from "../sidebar/sidebar-container"
import SideBarIcon from "../sidebar/sidebar-icon"
import questionIcon from "../../images/question-icon.png"
import sheetIcon from "../../images/sheet-icon.png"
import articleIcon from "../../images/article-icon.png"
import Title from "../sidebar/sidebar-title"

const SideBarForum = () => {
    return (
        <SideBar
            sx={{
                height: "100%",
                justifyContent: "top",
            }}
        >
            <SideBarContainer>
                <Title>Popular questions</Title>
                <SidebarCard>
                    <SideBarIcon iconSrc={questionIcon} />
                    <SidebarCardText>
                        Question no. 1 jdshfias ioa sjo aoj foiajf ofvjaspfo as...
                    </SidebarCardText>
                </SidebarCard>
                <SidebarCard>
                    <SideBarIcon iconSrc={questionIcon} />
                    <SidebarCardText>
                        Questionaa no.1jdshf iasi oasjoa
                    </SidebarCardText>
                </SidebarCard>

                <SidebarCard>
                    <SideBarIcon iconSrc={questionIcon} />
                    <SidebarCardText>
                        Question no. 1 jdshfias ioasjoa ojfoiajf ofvjaspfo ?
                    </SidebarCardText>
                </SidebarCard>
            </SideBarContainer>

            <SideBarContainer>
                <Title>Latest news</Title>
                <SidebarCard>
                    <SideBarIcon iconSrc={articleIcon} />
                    <SidebarCardText>These are News1</SidebarCardText>
                </SidebarCard>
                <SidebarCard>
                    <SideBarIcon iconSrc={articleIcon} />
                    <SidebarCardText>These are News2</SidebarCardText>
                </SidebarCard>
                <SidebarCard>
                    <SideBarIcon iconSrc={articleIcon} />
                    <SidebarCardText>These are News3</SidebarCardText>
                </SidebarCard>
            </SideBarContainer>

            <SideBarContainer>
                <Title>Top sheets</Title>
                <SidebarCard>
                    <SideBarIcon iconSrc={sheetIcon} />
                    <SidebarCardText>JS cheet sheet</SidebarCardText>
                </SidebarCard>
                <SidebarCard>
                    <SideBarIcon iconSrc={sheetIcon} />
                    <SidebarCardText>JS cheet sheet</SidebarCardText>
                </SidebarCard>
                <SidebarCard>
                    <SideBarIcon iconSrc={sheetIcon} />
                    <SidebarCardText>JS cheet sheet</SidebarCardText>
                </SidebarCard>
            </SideBarContainer>
        </SideBar>
    )
}

export default SideBarForum
