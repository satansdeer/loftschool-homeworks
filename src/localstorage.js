function load(localStorageKey) {
  const stringData = window.localStorage.getItem(localStorageKey);
  let data = [];

  try {
    data = JSON.parse(stringData);
  } catch (e) {}

  return data;
}

function save(localStorageKey, data) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(data));
}

export { load, save };
