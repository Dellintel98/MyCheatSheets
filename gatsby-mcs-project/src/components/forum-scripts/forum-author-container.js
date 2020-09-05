/** @jsx jsx */
import { jsx } from "theme-ui"
import AvatarIcon from "../../images/avatar-icons/male.svg"

const ForumAuthorContainer = () => {
    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: "saddlebrown",
                width: "100%",
                //minHeight: "100%",
                height: "30%",
                
            }}
        >
            <img
                src={AvatarIcon}
                alt="Question author avatar"
                sx={{
                    height: "90%",
                    width: "auto",
                    border: "0px hidden transparent",
                    borderRadius: "50%",
                    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.28)',
                    '&:hover': {
                        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.38)',
                        backgroundColor: "alternateGrey",
                    }
                }}
            />
            <p>Name</p>
        </div>
    )
}

export default ForumAuthorContainer