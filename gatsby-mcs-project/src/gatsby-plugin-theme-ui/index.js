import {roboto} from "@theme-ui/presets"

const theme = {
    ...roboto,
    sizes: {
        ...roboto.sizes,
        navLogo: "48px",
        screenWidth: "100vw",
        navContainerWidth: "80%",
        navContainerHeight: "50px",
        siteContainer: "60%",
    },
    colors: {
        ...roboto.colors,
        primary: "#181c32",
        secondary: "#333f60",
        accent: "#f2f2f2",
    },
    fontWeights: {
        ...roboto.fontWeights,
        body: 300,
        heading: 400,
        bold: 400,
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