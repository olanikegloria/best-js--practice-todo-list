const updateLocalStorage = (newListStore) => {
  localStorage.setItem('Lists', JSON.stringify(newListStore.lists));
};

export default updateLocalStorage;