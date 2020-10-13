(function () {
  'use strict';

  const getRandom1Digit = () => {
    return Math.floor(Math.random() * 10);
  };

  const dararara = (elem, toNum, { dararaCount = 20, delay = 50 } = {}) => {
    const chars = [...toNum.toString()];
    const len = chars.length;

    const dararaInterval = setInterval(() => {
      const randomNum = chars
        .map(c => (c === '.' ? c : getRandom1Digit()))
        .join('');
      elem.textContent = randomNum;

      dararaCount--;
      if (dararaCount < 0) {
        clearInterval(dararaInterval);
        elem.textContent = toNum;
      }
    }, delay);
  };

  window.addEventListener('load', () => {
    dararara(document.querySelector('#Target1'), 100);
    dararara(document.querySelector('#Target2'), 200);
    dararara(document.querySelector('#Target3'), 1000);
    dararara(document.querySelector('#Target4'), 2000);
    dararara(document.querySelector('#Target5'), 123.456);
  });
})();
