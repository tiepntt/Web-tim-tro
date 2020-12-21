import moment from "moment";

export const convertDate = (date?: Date) => {
  let convert = moment.locale("vi");
  let dateConvert = moment(date).format("DD/MM/YYYY");
  let today = moment(Date()).format("DD/MM/YYYY");
  return dateConvert === today ? "Hôm nay" : dateConvert;
};
