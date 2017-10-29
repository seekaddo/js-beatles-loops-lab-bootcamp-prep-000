
function theBeatlesPlay(musicians, instruments) {
  var sent = new Array();
  for (let i = 0; i < musicians.length; i++) {
    sent[i] = `"${musicians[i]} plays ${instruments[i]}"`;
  }

  return sent;
}
