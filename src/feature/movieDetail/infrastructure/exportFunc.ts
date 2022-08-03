
export const convertMinsToTime = (mins:any) => {
    let hours = Math.floor(mins / 60);
    let minutes:any = mins % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}j ${minutes}min`;
}
