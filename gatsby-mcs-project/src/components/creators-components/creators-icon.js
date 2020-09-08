/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import CreatorAvatar from "../../images/avatar-icons/person.svg"


const CreatorIcon = ({ iconImage, username, iconSize="32px"}) => {
    const avatarIcon = (iconImage === "") ? CreatorAvatar : iconImage;

    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                // backgroundColor: "wheat",
                width: "70%",
                height: iconSize,
                cursor: "pointer",
            }}
        >
            <img
                src={avatarIcon}
                alt="Creator avatar"
                sx={{
                    height: "100%",
                    width: "auto",
                    borderRadius: "50%",
                    border: "1px solid black",
                    '&:hover': {
                        backgroundColor: "alternateGrey",
                    }
                }}
            />
            <Styled.h6 sx={{color: "primary", '&:hover':{color: "highlight2"}}}>
                {username}
            </Styled.h6>
        </div>
    )
}

export default CreatorIcon