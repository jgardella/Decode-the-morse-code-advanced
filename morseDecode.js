String.prototype.times = function(n) {
  return new Array(n + 1).join(this);
}

String.prototype.replaceAll = function(find, replace) {
  return this.replace(new RegExp(find, 'g'), replace);
}

var decodeBits = function(bits){
    bits = bits.substring(bits.indexOf('1'), bits.lastIndexOf('1') + 1); // remove leading/trailing 0's
    timeUnit = Math.floor(longestZeroSequence(bits) / 7);
    console.log("timeUnit: " + timeUnit);
    return bits.replaceAll('0000000'.times(timeUnit), '   ')
               .replaceAll('000'.times(timeUnit), ' ')
               .replaceAll('111'.times(timeUnit), '-')
               .replaceAll('1'.times(timeUnit), '.')
               .replaceAll('0'.times(timeUnit), '');
}

var longestZeroSequence = function(s){
  ret = 0;
  current = 0;
  for (i = 0; i < s.length; i++){
    if (s[i] === '0'){
      current += 1;
    }
    else {
      ret = current > ret ? current : ret;
      current = 0;
    }
  }
  return ret;
}

var decodeMorse = function(morseCode){
 return morseCode.trim().split('   ')
 .map(function(w) {
   return w.split(' ')
   .map(function(c) {
     return MORSE_CODE[c];
   }).join('');
 }).join(' ');
}
