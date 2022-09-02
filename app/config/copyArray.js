export const copyArray = (array) => {
    const res = [];
    for (let i = 0; i < 3; i++) {
        res.push(array[i].slice())
    }
    return res;
}
// export function copyArray(array) { .. } also works