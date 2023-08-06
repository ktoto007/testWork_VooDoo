const save = (key, value) => {
  try {
    const arr = load(key) || [];
    if (!arr.find((el) => el[1].id === value[1].id)) {
      arr.push(value);
    } else {
      const ind = arr.findIndex((el) => el[1].id === value[1].id);
      arr[ind] = [Number(arr[ind][0]) + 1, arr[ind][1]];
    }

    const serializedState = JSON.stringify(arr);

    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const minus = (key, ind) => {
  try {
    const arr = load(key);
    arr[ind][0] = arr[ind][0] - 1;
    if (arr[ind][0] === 0) {
      arr.splice(ind, 1);
    }

    const serializedState = JSON.stringify(arr);

    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const remove = (key, ind) => {
  try {
    const arr = load(key);
    arr.splice(ind, 1);

    const serializedState = JSON.stringify(arr);

    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

export { save, load, minus, remove };
