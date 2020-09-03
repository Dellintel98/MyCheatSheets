/** @jsx jsx */
import {jsx} from "theme-ui"

const MenuIcon = () => {
    return(
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width='24'
                height='24'
                fill="currentcolor"
                viewBox="0 0 24 24"
                sx={{
                  display: 'block',
                  margin: 0,
                  color: "primary",
                }}>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
        </div>
    )
}

export default MenuIcon