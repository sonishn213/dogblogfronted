export const currentDate = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  const uploaddate =
    date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
  return uploaddate;
};
export const globStateInValue = {
  title: "",
  description: "",
  content: "",
  collection: "",
  tumbImage: "",
  postMainImage: "",
  published: "true",
};
