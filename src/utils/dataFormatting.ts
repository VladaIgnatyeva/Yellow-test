export const dateFormat = (date: number) => {
    const d = new Date(date);

    const day = d.getDate();
    const month = d.getMonth() + 1;
    let result = (day < 10 ? '0' + day : day) + '.' + (month < 10 ? '0' + month : month) + '.' + d.getFullYear();

    return result;
};

export const distanceFormat = (distance: number) => {
    const km = distance / 1000;
    return Number(km.toFixed(2));
};

export const timeFormat = (time: number) => {
    return Math.round(time / 60);
};

export const speedFormat = (distance: number, time: number) => {
    return (distanceFormat(distance) / timeFormat(timeFormat(time))).toFixed(2);
};

