// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.


function numberOfPairs(gloves) {

    var pairs = 0
    ,  counts = {};
    
    for (var color of gloves) {
    
      if (!counts.hasOwnProperty(color))
        counts[color] = 0;
  
      if (++counts[color] === 2) {
        counts[color] -= 2;
        pairs++;
      }
    }
      
    return pairs;
  }