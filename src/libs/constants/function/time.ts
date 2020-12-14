import moment from "moment";

export const convertDate = (date?: Date) => {
  let convert = moment.locale("vi");
  return moment(date).format("DD/MM/YYYY");
};
