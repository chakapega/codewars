function high(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const arrayWords = [];
  const arrayNumbers = [];
  let j = 0;
  let counter;
  let maximumNumber;
  let maximumWeightWordNumber;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      j++;
    } else {
      arrayWords[j] ? arrayWords[j] += string[i] : arrayWords[j] = string[i];
    };
  };

  for (let i = 0; i < arrayWords.length; i++) {
    const word = arrayWords[i];
    counter = 0;

    for (let k = 0; k < word.length; k++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (word[k] === alphabet[j]) {
          counter += j + 1;
        };
      };
    };

    arrayNumbers.push(counter);
  };

  maximumNumber = Math.max(...arrayNumbers);

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] === maximumNumber) {
      maximumWeightWordNumber = i;
    };
  };

  for (let i = 0; i < arrayWords.length; i++) {
    if (i === maximumWeightWordNumber) {
      return arrayWords[i];
    };
  };
};








function high(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const arrayWords = [];
  const arrayNumbers = [];
  let j = 0;
  let counter;
  let maximumNumber;
  let maximumWeightWordNumber;

  if (string !== ' ') {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        j++;
      } else {
        arrayWords[j] ? arrayWords[j] += string[i] : arrayWords[j] = string[i];
      };
    };
  
    for (let i = 0; i < arrayWords.length; i++) {
      const word = arrayWords[i];
      counter = 0;
  
      for (let k = 0; k < word.length; k++) {
        for (let j = 0; j < alphabet.length; j++) {
          if (word[k] === alphabet[j]) {
            counter += j + 1;
          };
        };
      };
  
      arrayNumbers.push(counter);
    };
  
    maximumNumber = Math.max(...arrayNumbers);
  
    for (let i = 0; i < arrayNumbers.length; i++) {
      if (arrayNumbers[i] === maximumNumber) {
        maximumWeightWordNumber = i;
      };
    };
  
    for (let i = 0; i < arrayWords.length; i++) {
      if (i === maximumWeightWordNumber) {
        return arrayWords[i];
      };
    };
  } else if (string === ' ') {
    return ' ';
  };
};