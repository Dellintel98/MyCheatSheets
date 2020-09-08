/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import AvatarIcon from "../../images/avatar-icons/person.svg"

const ForumAuthorContainer = ({authorName, authorAvatar}) => {
    const avatarIcon = (authorAvatar === '') ? AvatarIcon : authorAvatar;

    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                // backgroundColor: "wheat",
                width: "100%",
                //minHeight: "100%",
                height: "30%",
                color: "primary",
                cursor: "pointer",
                textAlign: "right",
            }}
        >
            <img
                src={avatarIcon}
                alt="Question author avatar"
                sx={{
                    height: "32px",
                    width: "32px",
                    borderRadius: "50%",
                    marginRight: "5px",
                    marginLeft: "15px",
                    '&:hover': {
                        backgroundColor: "alternateGrey",
                    }
                }}
            />
            <Styled.p sx={{color: "primary", fontSize: 0, '&:hover':{color: "highlight2"}}} >{authorName}</Styled.p>
        </div>
    )
}

export default ForumAuthorContainer