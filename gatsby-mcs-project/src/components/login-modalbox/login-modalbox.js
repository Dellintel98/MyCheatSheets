/** @jsx jsx */
import {jsx} from "theme-ui"
import LoginHeader from "./login-header"
import LoginTab from "./login-tab"
import LoginContent from "./login-content"
import LoginButton from "./login-button"

import FacebookLogo from "../../images/facebook-round-color.svg"
import LinkedInLogo from "../../images/linkedin-round-color.svg"
import GitHubLogo from "../../images/github.svg"
import GoogleLogo from "../../images/google-color.svg"

const LoginModal = () => {
    return (
        <div
            sx={{
                position: "absolute",
                width: "screenWidth",
                height: "screenHeight",
                top: 0,
                right: 0,
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                zIndex: 2,
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
                }}
            >
                <LoginHeader>
                    <LoginTab isSelected={true} tabTitle="Sign in" />
                    <LoginTab isSelected={false} tabTitle="Log in" />
                </LoginHeader>
                <LoginContent>
                    <LoginButton buttonImage={LinkedInLogo} buttonName="LinkedIn" />
                    <LoginButton buttonImage={FacebookLogo} buttonName="Facebook" />
                    <LoginButton buttonImage={GitHubLogo} buttonName="GiHub" />
                    <LoginButton buttonImage={GoogleLogo} buttonName="Google" />
                </LoginContent>
            </div>
        </div>
    )
}

export default LoginModal