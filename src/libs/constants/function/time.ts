import moment from "moment";

export const convertDate = (date?: Date) => {
  moment.locale("vi");
  return moment(date).format("MMMM Do YYYY");
};
