export const openLoader = () => {
    console.log("openloader is working");
    return {
    type:"addloader",
}
}
export const closeLoader = () => {
    console.log("closeLoader is working");
    return {
    type:"removeloader",
}
}