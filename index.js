//Arabic numbers (example 10) to roman  (example X)

function romanToInt(num){
    var unity = 0;
    var tens = 0;
    var hundred = 0;
    var thousand = 0;
    
    const give_unity = {
        0: '',
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX'
    };
    
    const give_tens = {
        0: '',
        1: 'X',
        2: 'XX',
        3: 'XXX',
        4: 'XL',
        5: 'L',
        6: 'LX',
        7: 'LXX',
        8: 'LXXX',
        9: 'XC'
    };
    
    const give_hundred = {
        0: '',
        1: 'C',
        2: 'CC',
        3: 'CCC',
        4: 'CD',
        5: 'D',
        6: 'DC',
        7: 'DCC',
        8: 'DCCC',
        9: 'CM'
    };
    
    const give_thousand = {
        0: '',
        1: 'M',
        2: 'MM',
        3: 'MMM',
    };

  if(num <= 3999){
    if(num >= 1000)
      thousand = Math.floor(num/1000);

    if(num >= 100 && num >= 1000)
      hundred = Math.floor((num % 1000)/100);
    else if(num >= 100)
      hundred = Math.floor(num / 100);

    if(num >= 10)
      tens = Math.floor((num % 100) / 10);

    if(num > 0)
      unity = (num % 100) % 10;

    return give_thousand[thousand] + give_hundred[hundred] + give_tens[tens] + give_unity[unity];
  } else {
    return "Escolha outro número, o máximo romano é 3999.";
  }
}

//Roman numbers (example X) to arabic (example 10)

function intToRoman(int){
    var roman_unity = "";
    var roman_tens = "";
    var roman_hundred = "";
    var roman_thousand = "";
    
    const give_runity = {
        '': 0,
        'I': 1,
        'II': 2,
        'III': 3,
        'IV': 4,
        'V': 4,
        'VI': 6,
        'VII': 7,
        'VIII': 8,
        'IX': 9
    };
    
    const give_rtens = {
        '': 0,
        'X': 1,
        'XX': 2,
        'XXX': 3,
        'XL': 4,
        'L': 5,
        'LX': 6,
        'LXX': 7,
        'LXXX': 8,
        'XC': 9
    };
    
    const give_rhundred = {
        '': 0,
        'C': 1,
        'CC': 2,
        'CCC': 3,
        'CD': 4,
        'D': 5,
        'DC': 6,
        'DCC': 7,
        'DCCC': 8,
        'CM': 9
    };
    
    const give_rthousand = {
        '': 0,
        'M': 1,
        'MM': 2,
        'MMM': 3,
    };

}

module.exports = romanToInt, intToRoman;