/** @jsx jsx */
import { jsx } from "theme-ui"
import SideBar from "../components/sidebar"
import Card from "./sidebar-card"
import SideBarContainer from "../components/sidebar-container"


const SideBarForum = props => {
    return (
        <div
            {...props}
            sx={{
                height: "100%",
            }}
        >
            <SideBar>

                <SideBarContainer>
                    Popular questions
                    <Card>
                        Question no. 1?
                    </Card>
                    <Card>
                        Question no. 2?
                    </Card>

                    <Card>
                        Question no. 3?
                    </Card>
                    <hr></hr>
                </SideBarContainer>


                <SideBarContainer>
                    Latest news
                    <Card>
                        News1
                    </Card>
                    <Card>
                        News2
                    </Card>
                    <Card>
                        News3
                    </Card>
                    <hr>
                    </hr>
                </SideBarContainer>

                <SideBarContainer>
                    Top sheets
                    <Card>
                        JS cheet sheet
                    </Card>
                    <Card>
                        JS cheet sheet
                    </Card>
                    <Card>
                        JS cheet sheet
                    </Card>

                </SideBarContainer>
            </SideBar>
        </div>
    )
}

export default SideBarForum
