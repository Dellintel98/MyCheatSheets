/** @jsx jsx */
import { jsx } from "theme-ui"
import SideBar from "../sidebar/sidebar"
import Card from "../sidebar/sidebar-card"
import SideBarContainer from "../sidebar/sidebar-container"
import SideBarIcon from "../sidebar/sidebar-icon"
import questionIcon from "../../images/question-icon.png"
import sheetIcon from "../../images/sheet-icon.png"
import articleIcon from "../../images/article-icon.png"
import Title from "../sidebar/sidebar-title"

const SideBarForum = () => {
    return (
        <div
            sx={{
                height: "100%",
            }}
        >

            <SideBar
                sx={{
                    justifyContent: "space-between"
                }}
            >

                <SideBarContainer>
                    <Title>Popular questions</Title>
                    <Card>
                        <SideBarIcon iconSrc={questionIcon} />
                        Question no. 1 jdshfias ioasjoa ojfoiajf ofvjaspfo ?
                    </Card>
                    <Card>
                        <SideBarIcon iconSrc={questionIcon} />
                        Question no. 2 sdijsahd akjd jafoia incob  aosinfoihn?
                    </Card>

                    <Card>
                        <SideBarIcon iconSrc={questionIcon} />
                        Question no. 3 fshaof oiasfjoa oisfj osfnolvdciodnifn n ifos?
                    </Card>
                    <hr></hr>
                </SideBarContainer>


                <SideBarContainer>
                    Latest news
                    <Card>
                        <SideBarIcon iconSrc={articleIcon} />
                        News1
                    </Card>
                    <Card>
                        <SideBarIcon iconSrc={articleIcon} />
                        News2
                    </Card>
                    <Card>
                        <SideBarIcon iconSrc={articleIcon} />
                        News3
                    </Card>
                    <hr>
                    </hr>
                </SideBarContainer>

                <SideBarContainer>
                    Top sheets
                    <Card>
                        <SideBarIcon iconSrc={sheetIcon} />
                        JS cheet sheet
                    </Card>
                    <Card>
                        <SideBarIcon iconSrc={sheetIcon} />
                        JS cheet sheet
                    </Card>
                    <Card>
                        <SideBarIcon iconSrc={sheetIcon} />
                        JS cheet sheet
                    </Card>

                </SideBarContainer>
            </SideBar>
        </div>
    )
}

export default SideBarForum
