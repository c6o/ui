// From: https://stackoverflow.com/questions/6842795/dynamic-deep-setting-for-a-javascript-object
export const setValueImp = (obj, path, value) => {
    const a = path.split('.')
    while (a.length - 1) {
        const n = a.shift()
        if (!(n in obj)) obj[n] = {}
        obj = obj[n]
    }
    obj[a[0]] = value
}

export const getValueImp = (obj, path) => {
    if (!path)
        return
    if (!obj)
        return ''
    path = path.replace(/\[(\w+)\]/g, '.$1')
    path = path.replace(/^\./, '')
    const a = path.split('.')
    while (a.length) {
        const n = a.shift()
        if (!(n in obj)) return
        obj = obj[n]
    }
    return obj
}