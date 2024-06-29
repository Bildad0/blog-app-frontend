import moment from "moment";


export function formatedDate(date: string) {
    return moment(date).calendar();
}