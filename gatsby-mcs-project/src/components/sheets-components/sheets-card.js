/** @jsx jsx */
import { jsx } from "theme-ui"
import MySheetIcon from "../sheets-components/mysheet-icon"
import CreatorIcon from "../creators-components/creators-icon"
import CreatorAvatar from "../../images/avatar.svg"

const SheetCard = ({ IconImage, IconName, Number, SheetTitle, Username }) => {
    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
                backgroundColor: "transparent",
                width: "100px",
                height: "auto",
                overflow: "hidden",
            }}
        >
            <MySheetIcon iconImage={IconImage} iconName={IconName} number={Number} />
            <p>
                {SheetTitle}
            </p>
            <CreatorIcon iconImage={CreatorAvatar} iconName={"avatar"} username={Username} />
        </div>
    )
}

export default SheetCard