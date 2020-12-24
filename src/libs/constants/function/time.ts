import moment from "moment";

export const convertDate = (date?: Date) => {
  let dateConvert = moment(date).format("DD/MM/YYYY");
  let today = moment(Date()).format("DD/MM/YYYY");
  return dateConvert === today ? "Hôm nay" : dateConvert;
};
export const compareDate = (date?: Date, date2 = Date()) => {
  let date1 = moment(date);
  let date2Moment = moment(date2);

  return date1.isAfter(date2Moment);
};
export const compareDateNumber = (date?: Date, date2 = new Date()) => {
  if (!date) return 1;
  console.log(date);

  let dateMoment = moment(date);

  if (!dateMoment.isAfter(moment(date2))) return 0;

  var duration = moment.duration(dateMoment.diff(moment(date2)));
  var days = duration.days();
  console.log(days);

  return days + 1;
};
