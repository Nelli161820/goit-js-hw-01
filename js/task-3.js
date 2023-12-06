
'use strict';

function getElementWidth(content, padding, border) {
  
    // переведення рядка в число:
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);

    // розрахунoк загальної ширини:
    
    const boxSizing = contentWidth + (2 * paddingWidth) + (2 * borderWidth); 
    return boxSizing;
    
};

    // Значення всіх параметрів:

  getElementWidth('50px', '8px', '4px');
  getElementWidth('60px', '12px', '8.5px');
  getElementWidth('200px', '0px', '0px');

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
   