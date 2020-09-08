(() => {
  'use strict';

  const EMPS_SELECTOR = '#content > table > tbody > tr > td > fieldset > table td';

  const hideAllEmps = () => {
    const empElems = document.querySelectorAll(EMPS_SELECTOR);
    empElems.forEach(empElem => {
      empElem.style.visibility = 'hidden';
    });
  };

  const showByPost = post => {
    const empElems = document.querySelectorAll(EMPS_SELECTOR);
    empElems.forEach(empElem => {
      const empPostTxt = empElem.querySelector('span').textContent;
      console.log(empElem);
      if (empPostTxt.endsWith(post)) {
        empElem.style.visibility = 'visible';
      }
    });
  };

  const createCheckboxElem = (name, val) => {
    const elem = document.createElement('input');
    elem.type = 'checkbox';
    elem.id = name;
    elem.name = name;
    elem.value = val;
    elem.checked = true;
    return elem;
  };

  const createLabelElem = name => {
    const elem = document.createElement('label');
    elem.htmlFor = name;
    elem.textContent = name;
    return elem;
  };

  const checkboxConfs = [
    {
      name: '社長',
      value: '社長',
    },
    {
      name: '部長',
      value: '部長',
    },
    {
      name: 'M',
      value: 'M',
    },
    {
      name: 'TL',
      value: 'TL',
    },
    {
      name: 'L',
      value: 'L',
    },
    {
      name: 'S',
      value: 'さん',
    },
  ];

  checkboxConfs.forEach(conf => {
    const checkboxElem = createCheckboxElem(conf.name, conf.value);

    checkboxElem.addEventListener('change', evt => {
      hideAllEmps();

      const checkboxElem_SHACHO = document.querySelector('#社長');
      const checkboxElem_BUCHO = document.querySelector('#部長');
      const checkboxElem_M = document.querySelector('#M');
      const checkboxElem_TL = document.querySelector('#TL');
      const checkboxElem_L = document.querySelector('#L');
      const checkboxElem_S = document.querySelector('#S');

      if (checkboxElem_SHACHO.checked) {
        showByPost(checkboxElem_SHACHO.value);
      }
      if (checkboxElem_BUCHO.checked) {
        showByPost(checkboxElem_BUCHO.value);
      }
      if (checkboxElem_M.checked) {
        showByPost(checkboxElem_M.value);
      }
      if (checkboxElem_TL.checked) {
        showByPost(checkboxElem_TL.value);
      }
      if (checkboxElem_L.checked) {
        showByPost(checkboxElem_L.value);
      }
      if (checkboxElem_S.checked) {
        showByPost(checkboxElem_S.value);
      }
    });

    document.body.insertAdjacentElement('beforeend', checkboxElem);

    const labelElem = createLabelElem(conf.name);
    document.body.insertAdjacentElement('beforeend', labelElem);
  });
})();
