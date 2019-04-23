const load = localStorageKey => {
  if (localStorage.items && localStorage.items !== 'undefined') {
    return JSON.parse(localStorage.items);
  }
  return [];
};

const save = data => {
  if (localStorage) {
    localStorage.items = JSON.stringify(data);
  }
};

export { load, save };
