/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import MySheetIcon from "../sheets-components/mysheet-icon"
import CreatorIcon from "../creators-components/creators-icon"


const SheetCard = ({ sheetOptions }) => {

    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "thistle",
                backgroundColor: "transparent",
                width: "100px",
                height: "100%",
            }}
        >
            <MySheetIcon iconImage={sheetOptions.sheetIcon} iconName={sheetOptions.iconName} number={sheetOptions.voteCounter} />
            <Styled.h6>
                {sheetOptions.title}
            </Styled.h6>
            <CreatorIcon iconImage={sheetOptions.creatorAvatar} username={sheetOptions.creator} />
        </div>
    )
}

export default SheetCard