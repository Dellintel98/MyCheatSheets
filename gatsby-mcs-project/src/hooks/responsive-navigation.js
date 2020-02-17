const calculateResponsivity = (currentWindowWidth, menuItems) => {
    const breakpoints = [900, 1000, 1060, 1120, 1180, 1250]; //dodati 600 za logo
    let navigationItems = Array.from(menuItems);
    let hiddenItems = [];

    for(let i = 0; i < breakpoints.length; i++) {
        if(currentWindowWidth < breakpoints[i]){
            for(let counter = 6; counter > i; counter--){
                hiddenItems.push(navigationItems.pop());
            }
            break;
        }
    }

    hiddenItems.reverse();

    return {
        navigationItems,
        hiddenItems
    };
}

export default calculateResponsivity