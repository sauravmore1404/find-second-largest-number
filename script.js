const findSecLrgNum = (array) => {
    let large = array[0];
    let secLarge = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > large) {
        secLarge = large;
        large = array[i];
      } else if (array[i] > secLarge) {
        secLarge = array[i];
      }
    }
    return (document.getElementById('demo').innerHTML = secLarge);
  };
  