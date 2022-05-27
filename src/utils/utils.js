/**
 * 
 * @param {Array} currentBackgroundColor 
 * @returns {Array} new RGB Array random color
 * Check if new random number isn't accidentally the same as input
 */
export const generateRandomRGB = (currentBackgroundColor = []) => {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
        let newColorSample = 0;
        do {
            newColorSample = Math.floor(Math.random() * 256);
        } while (currentBackgroundColor.length === 3 && newColorSample === currentBackgroundColor[i]);
        rgb.push(newColorSample);
    }
    return rgb;
}


/**
 * @param {string} rgbArray 
 * @returns {string}
 * Converts rgb array to style string [r,g,b] => r,g,b
 */
export const getRgbArrayAsString = (rgbArray = [170, 170, 170]) => {
    return rgbArray.join(',');
}

/**
 * 
 * @param {*} hex 
 * @returns {Array} RGB
 * Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 */
export const hexToRgb = hex => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const newHex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : []
}