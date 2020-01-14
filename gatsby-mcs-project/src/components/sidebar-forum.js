/** @jsx jsx */
import { jsx } from "theme-ui"
import SideBar from "../components/sidebar"
import Card from "./sidebar-card"
import SideBarContainer from "../components/sidebar-container"

const SideBarForum = props => {
    return (
        <div>
            <SideBar>
                Popular questions
                <SideBarContainer>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                </SideBarContainer>
                Latest news
                <SideBarContainer>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                </SideBarContainer>
                Top sheets
                <SideBarContainer>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                    <Card>

                    </Card>
                </SideBarContainer>
            </SideBar>
        </div>
    )
}

export default SideBarForum
