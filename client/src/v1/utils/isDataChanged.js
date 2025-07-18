const isDataChanged = (originalData, newData) => {
  return JSON.stringify(originalData) !== JSON.stringify(newData);
};
export default isDataChanged;
