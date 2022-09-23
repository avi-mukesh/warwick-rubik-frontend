class execImage {
    constructor(src, alt) {
        this.src = src
        this.alt = alt
    }
}

const execImageAlts = ["alt0", "alt1", "alt2"]

function importAll(r) {
    let images = {}
    r.keys().forEach((item) => {
        images[item.replace("./", "")] = r(item)
    })
    return images
}
const execImagePaths = importAll(
    require.context("../images/exec", false, /\.(jpg)$/)
)

export const execImages = new Array(execImageAlts.length)
    .fill(0)
    .map((_, i) => new execImage(execImagePaths[`${i}.jpg`], execImageAlts[i]))
