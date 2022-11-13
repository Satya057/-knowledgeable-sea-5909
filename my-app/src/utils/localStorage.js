/**
 *
 * @param {string} key
 * @param {any} data
 */
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function loadData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch {
    return false;
  }
}

export { loadData, saveData };
