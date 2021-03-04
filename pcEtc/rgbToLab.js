export default class rgbToLab {
    D65 = [95.047, 100, 108.883]

    constructor(hex) {
        return this.xyzToLab(this.rgbToXyz(hex))
    }
    sRGBtoLinearRGB(color) {
        // Send this function a decimal sRGB gamma encoded color value
        // between 0.0 and 1.0, and it returns a linearized value.
        if (color <= 0.04045) {
            return color / 12.92
        } else {
            return Math.pow((color + 0.055) / 1.055, 2.4)
        }
    }
    xyzToLab([x, y, z]) {
        [x, y, z] = [x, y, z].map((v, i) => {
            v = v / this.D65[i]
            return v > 0.008856 ? Math.pow(v, 1 / 3) : v * 7.787 + 16 / 116
        })
        const l = 116 * y - 16
        const a = 500 * (x - y)
        const b = 200 * (y - z)
        return [l, a, b]
    }
    rgbToXyz(hex) {
        const [r, g, b] = hex.map(_ => _ / 255).map(this.sRGBtoLinearRGB)
        const X = 0.4124 * r + 0.3576 * g + 0.1805 * b
        const Y = 0.2126 * r + 0.7152 * g + 0.0722 * b
        const Z = 0.0193 * r + 0.1192 * g + 0.9505 * b
        // For some reason, X, Y and Z are multiplied by 100.
        return [X, Y, Z].map(_ => _ * 100)
    }
}