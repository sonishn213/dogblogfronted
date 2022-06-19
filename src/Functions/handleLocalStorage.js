import { v4 as uuid } from "uuid";

export const addToStorage = (tablename, data, uploadDate) => {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 10);

  data = { ...data, id: small_id, dateAdded: uploadDate };
  if (localStorage.getItem(tablename)) {
    console.log("Table Exist");
    const DataArray = JSON.parse(localStorage.getItem(tablename));
    DataArray.push(data);
    localStorage.setItem(tablename, JSON.stringify(DataArray));
  } else {
    console.log("Table does not exist");
    const DataArray = [data];
    localStorage.setItem(tablename, JSON.stringify(DataArray));
  }
  console.log(localStorage.getItem(tablename));
};
export const getFromStorage = (tablename, id) => {
  const DataArray = JSON.parse(localStorage.getItem(tablename));
  if (!id) {
    return DataArray;
  } else {
    if (DataArray) {
      return DataArray.find((item) => {
        return item.id == id;
      });
    } else {
      return DataArray;
    }
  }
};
