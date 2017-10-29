
function theBeatlesPlay(musicians, instruments) {
  var sent = new Array();
  for (let i = 0; i < musicians.length; i++) {
    sent[i] = `${musicians[i]} plays ${instruments[i]}`;
  }

  return sent;
}

function johnLennonFacts(array) {
  let i = array.length;
  while (i >= 0) {
    array[i] += "!!!";
    i--;
  }
  return array;
}
