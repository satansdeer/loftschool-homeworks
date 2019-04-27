function load(localStorageKey) {
  const stringData = window.localStorage.getItem(localStorageKey);
  let data = null;

  try {
    console.log('TryParse');
    data = JSON.parse(stringData);
    console.log(data);
  } catch (e) {
    console.warn(e);
  }

  return data;
}

function save(localStorageKey, data) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(data));
}

export { load, save };
