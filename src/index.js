module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0) return false;
  let coupleBrackets = [];

  bracketsConfig.flat().forEach((element, index) => {
    if((index + 1) % 2 !== 0) {
      coupleBrackets.push(bracketsConfig.flat()[index] + bracketsConfig.flat()[index + 1]);
    };
  });


  for(let i = 0; i < str.length; i++) {
    coupleBrackets.forEach(element => { 
      if(str.includes(element)) {
        str = str.replace(element, '');
        i--;
      };
    });
  };
  return str === '';
};