export default function updateList(array, id) {
  array.map((item) => {
    if (item.id === id) {
      if (item.completed === false) {
        item.completed = true;
      } else {
        item.completed = false;
      }
    }
    return item;
  });
}