/** @jsx jsx */
import { jsx } from "theme-ui"
// import React from "react"
import SideBar from "../sidebar/sidebar"
import SideBarContainer from "../sidebar/sidebar-container"
import Subtitle from "../sidebar/sidebar-subtitle"
import Title from "../sidebar/sidebar-title"
import Button from "../button"
import Input from "../sidebar/sidebar-input"
import Select from "../select"


const SideBarEditor = () => {
    return (
        <SideBar
            sx={{
                height: "100%",
                justifyContent: "top",
            }}>
            <SideBarContainer sx={{
                alignItems: "center",
                height: "35%",
            }}>
                <Title>Editing options</Title>
                <Subtitle>
                    Cheat sheet title*
                    </Subtitle>
                <Input placeholder="Input sheet title..." />

                <Subtitle>
                    Cheat sheet thumbnail
                    </Subtitle>
                <Input placeholder="Load Image... " />
                <Subtitle>
                    Cheat sheet category*
                </Subtitle>
                <Select>
                    <option value="" selected disabled hidden>Category</option>
                    <option>C++</option>
                    <option>C#</option>
                    <option>JavaScript</option>
                    <option>Python</option>
                    <option>React</option>
                </Select>
                <div
                    sx={{
                        width: "100%",
                        marginLeft: "4",
                    }}
                >
                    *Required
                    </div>

            </SideBarContainer>

            <SideBarContainer sx={{
                //backgroundColor: "pink",
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-end",
                height: "60%",
                paddingBottom: 0,
            }}>
                <Button>SAVE</Button>
                <Button variant="secondary">DELETE</Button>
            </SideBarContainer>

        </SideBar>
    )
}

export default SideBarEditor