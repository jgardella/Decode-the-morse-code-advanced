"use strict"

function unmultiplyString (str, factor) {
	ret = [];
	str.split('').reduce(function (prev, current) {
		if (prev === 0) {
			ret.push(current);
			return factor - 1;
		}
		return prev - 1;
	}, factor - 1)
	return ret.join('');
}

function shortestSequenceLength (str) {
	return str.split('').reduce(function (prev, current) {
		if (current === prev.character) {
			prev.length = prev.length + 1;
		} else {
			if (prev.length < prev.shortestLength) {
				prev.shortestLength = prev.length;
			}
			prev.character = current;
			prev.length = 1;
		}
		return prev;
	}, {
		character: null,
		length: Infinity,
		shortestLength: Infinity
	}).shortestLength;
}

function decodeBits (bits) {
    bits = bits.substring(bits.indexOf('1'), bits.lastIndexOf('1') + 1); // remove leading/trailing 0's
    bits = unmultiplyString(bits, shortestSequenceLength(bits));
    return bits.replace(/0000000/g, '   ')
               .replace(/000/g, ' ')
               .replace(/111/g, '-')
               .replace(/1/g, '.')
               .replace(/0/g, '');
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
