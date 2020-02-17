import { roboto } from "@theme-ui/presets"

const theme = {
    ...roboto,
    sizes: {
        ...roboto.sizes,
        navLogo: "36px",
        navTitle: "24px",
        screenWidth: "100vw",
        screenHeight: "100vh",
        navContainerWidth: "80%",
        navContainerHeight: "44px",
        navLinksHeight: "38px",
        siteContainer: "60%",
    },
    colors: {
        ...roboto.colors,
        text: roboto.colors.text, // Website text color
        background: roboto.colors.background, // Background color
        primary: "#181c32", // Primary button and link color
        secondary: "#141729", // Secondary color for hover states
        accent: "#dd270f", // Color for emphasizing UI elements, e.g. delete button
        accentHover: "#a11d0b", // Color for hover state of accented elements
        muted: roboto.colors.muted, // Grey color for decorative purposes, e.g. button's shadow
        codeBackground: "#e5e5e5", // Grey background color for code container
        backgroundGrey: "#f2f2f2", // Grey background color for sidebar or other elements, e.g. search input highlighted
        alternateGrey: "#fafafa", // Grey color for use as background color for components
        iconGrey: "#acacac", // Grey color for use in icons
        scrollBarGrey: "#c4c4c4", // Grey background color for scrollbar
        highlight1: "#bfd3df", // Highlight color for input field
        highlight2: "#77a1ba", // Highlight color for input field
        alternate: "#5d73b0", // Alternate color for regular buttons
        alternateHover: "#333f60", // Hover color for alternate
        slogan: "#232325", //Color for slogan on index page
    },
    fontWeights: {
        ...roboto.fontWeights,
        body: 300,
        heading: 400,
        bold: 400,
        subtitle: 200,
    },
    buttons: {
        primary: {
            color: '#fff',
            bg: 'primary',
        },
        secondary: {
            color: '#fff',
            bg: 'accent',
        },
        regular: {
            color: 'primary',
            bg: 'white',
        },
    },
    styles: {
        h1: {
            ...roboto.styles.h1,
            fontSize: 7,
        },
        h2: {
            ...roboto.styles.h2,
            fontSize: 6,
        },
        h3: {
            ...roboto.styles.h3,
            fontSize: 5,
        },
        h4: {
            ...roboto.styles.h4,
            fontSize: 4,
        },
        h5: {
            ...roboto.styles.h5,
            fontSize: 3,
        },
        h6: {
            ...roboto.styles.h6,
            fontSize: 2,
        },
        p: {
            ...roboto.styles.p,
            fontSize: [0, 1, 2, 3, 4, 5, 6],
        },
        pre: {
            ...roboto.styles.pre,
            fontFamily: "consolas",
        },
        code: {
            ...roboto.styles.code,
            fontFamily: "consolas",
        },

    }

}

export default theme