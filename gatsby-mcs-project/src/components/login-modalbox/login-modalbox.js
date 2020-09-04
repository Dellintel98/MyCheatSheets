/** @jsx jsx */
import {jsx} from "theme-ui"
import LoginHeader from "./login-header"
import LoginTab from "./login-tab"
import LoginContent from "./login-content"
import LoginButton from "./login-button"
import LoginText from "./login-text"
import LoginContentContainer from "./login-content-container"
import SignupUsernameInput from "./signup-input"
import CloseButton from "../close-button"

import FacebookLogo from "../../images/button-icons/facebook-round-color.svg"
import LinkedInLogo from "../../images/button-icons/linkedin-round-color.svg"
import GitHubLogo from "../../images/button-icons/github.svg"
import GoogleLogo from "../../images/button-icons/google-color.svg"
import CloseSvg from "../../images/button-icons/close-round.svg"
import { useState } from "react"

const LoginModal = ({handleClosing, handleLogin, windowWidth}) => {
    const [selectedTab, setSelectedTab] = useState(true);
    const handleSelectionOfLogin = () => {
        if(!selectedTab){
            setSelectedTab(true);
        }
    }
    const handleSelectionOfSignup = () => {
        if(selectedTab){
            setSelectedTab(false);
        }
    }

    const modalText = selectedTab ? "Log in with" : "Sign up with";
    const buttonDivHeight = selectedTab ? "50%" : "50%";

    const handleLoginAndSignup = () => {
        handleLogin();
        handleClosing();
    }

    console.log(windowWidth); // dummy using of varable windowWidth
    
    return (
        <div
            sx={{
                position: "absolute",
                width: "screenWidth",
                height: "screenHeight",
                top: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                userSelect: "none", /* supported by Chrome and Opera */
                webkitUserSelect: "none", /* Safari */
                khtmlUserSelect: "none", /* Konqueror HTML */
                mozUserSelect: "none", /* Firefox */
                msUserSelect: "none", /* Internet Explorer/Edge */
            }}
        >
            <div
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    width: "40%",
                    height: "60%",
                    margin: "auto",
                    marginTop: "7%",
                    borderRadius: 10,
                    backgroundColor: "background",
                    zIndex: 5,
                }}
            >
                <LoginHeader>
                    <LoginTab isSelected={selectedTab} tabTitle="Log in" onclick={handleSelectionOfLogin} />
                    <LoginTab isSelected={!selectedTab} tabTitle="Sign up" onclick={handleSelectionOfSignup} />
                </LoginHeader>
                <LoginContent>
                    <LoginText text={modalText} />
                    {!selectedTab && <SignupUsernameInput placeholder="Username" inputwidth="100%" backgroundcolor="inherit" fontsize="3" />}
                    <LoginContentContainer bgrcolor="inherit" divHeight={buttonDivHeight} >
                        <LoginButton buttonImage={LinkedInLogo} buttonName="LinkedIn" onclick={handleLoginAndSignup} />
                        <LoginButton buttonImage={FacebookLogo} buttonName="Facebook" onclick={handleLoginAndSignup} />
                        <LoginButton buttonImage={GitHubLogo} buttonName="GiHub" onclick={handleLoginAndSignup} />
                        <LoginButton buttonImage={GoogleLogo} buttonName="Google" onclick={handleLoginAndSignup} />
                    </LoginContentContainer>
                </LoginContent>
            </div>
            <CloseButton 
                buttonPosition="absolute"
                buttonHeight="50px"
                buttonWidth="auto"
                buttonImage={CloseSvg}
                buttonTop={3}
                buttonRight={3}
                divTop="0"
                divRight="0"
                divHeight="screenHeight"
                divWidth="screenWidth"
                alignButton="start"
                justifyButton="end"
                buttonMargin="10px"
                onclick={handleClosing}
            />
        </div>
    )
}

export default LoginModal