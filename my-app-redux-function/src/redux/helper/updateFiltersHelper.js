let updateFiltersHelper = (arr, name, value) => {
  if (arr) {
     arr.map((item) => {
      for (let key in item) {
        if (key === name) {
          item[key] = value;
        }
      }
    });
  }
  return arr;
};

export default updateFiltersHelper;
