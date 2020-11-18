(function () {
  'use strict';

  const getRandom1DigitNum = () => Math.floor(Math.random() * 10);

  const dararara = (elem, toNum) => {
    let dararaCount = 50;
    const chars = [...(toNum + '')];

    const dararaInterval = setInterval(() => {
      const randomNum = chars.map(c => isNaN(c) ? c : getRandom1DigitNum()).join('');
      elem.textContent = randomNum;

      dararaCount--;
      if (dararaCount === 0) {
        clearInterval(dararaInterval);

        elem.textContent = '';
        const dararaFinInterval = setInterval(() => {
          elem.textContent = chars.pop() + elem.textContent;
          if (chars.length === 0) {
            clearInterval(dararaFinInterval);
          }
        }, 300);
      }
    }, 50);
  };

  // Usage
  dararara(document.querySelector('#Target1'), 123456789);
  dararara(document.querySelector('#Target2'), '123,456.789');
})();
