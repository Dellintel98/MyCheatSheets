/** @jsx jsx */
import { jsx } from "theme-ui"
import SideBar from "../sidebar/sidebar"
import SideBarContainer from "../sidebar/sidebar-container"
import SideBarIcon from "../sidebar/sidebar-icon"
import Title from "../sidebar/sidebar-title"
import sheetIcon from "../../images/sheet-icon.png"
import SidebarCardText from "../sidebar/sidebar-card-text"
import SidebarCard from "../sidebar/sidebar-card"

const SideBarCreators = () => {
    return (
        <SideBar>
            <SideBarContainer sx={{
                //bg: "red",
                height: "50%",
            }}>
                <Title>More Sheets From Creator 01</Title>
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
                <SidebarCard>
                    <SideBarIcon iconSrc={sheetIcon} />
                    <SidebarCardText>JS cheet sheet</SidebarCardText>
                </SidebarCard>
            </SideBarContainer>

            <SideBarContainer sx={{
                //bg: "pink",
                height: "50%",
            }}>
                <Title>Similar Sheets</Title>
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
                <SidebarCard>
                    <SideBarIcon iconSrc={sheetIcon} />
                    <SidebarCardText>JS cheet sheet</SidebarCardText>
                </SidebarCard>
            </SideBarContainer>
        </SideBar>
    )
}
export default SideBarCreators