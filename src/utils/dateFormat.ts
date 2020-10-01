export const dateFormat = (date: number) => {
    const d = new Date(date * 1000);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    let result = (day < 10 ? '0' + day : day) + '.' + (month < 10 ? '0' + month : month) + '.' + d.getFullYear();

    return result;
}