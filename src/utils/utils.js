/**
 * 
 * @param {Array} currentBackgroundColor 
 * Return new RGB Array random color
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