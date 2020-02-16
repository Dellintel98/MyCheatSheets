/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import SideBar from "../sidebar/sidebar"
import SideBarContainer from "../sidebar/sidebar-container"
import Subtitle from "../sidebar/sidebar-subtitle"
import Title from "../sidebar/sidebar-title"
import Button from "../button"
import Label from "../label"


const SideBarEditor = () => {
    return (
        <SideBar
            sx={{
                height: "100%",
                justifyContent: "top",
            }}>
            <SideBarContainer sx={{
                alignItems: "center",
            }}>
                <Title>Editing options</Title>
                <Subtitle>
                    Cheat sheet title*
                    </Subtitle>
                <Label>JS Cheat Sheet!!!</Label>

                <Subtitle>
                    Cheat sheet thumbnail
                    </Subtitle>
                <Label>Load Image... </Label>
                <Subtitle>
                    Cheat sheet category*
                    </Subtitle>
            </SideBarContainer>

            <SideBarContainer sx={{
                //backgroundColor: "pink",
                alignItems: "center",
                height: 60,
            }}>
                <Button>SAVE</Button>
                <Button variant="secondary">DELETE</Button>
            </SideBarContainer>
        </SideBar>
    )
}

export default SideBarEditor