const addAction = data => {
  // console.log(data);
  return {type: 'ADD', payload: data};
};
const startAction = data => {
  // console.log(data);
  return {type: 'START', payload: data};
};
export {addAction, startAction};
