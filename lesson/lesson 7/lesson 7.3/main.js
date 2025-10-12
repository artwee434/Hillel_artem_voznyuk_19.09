function removeElement(array, item) {
  const index = array.indexOf(item); 
  if (index !== -1) { 
    array.splice(index, 1); 
  }
  console.log(array); 
}
