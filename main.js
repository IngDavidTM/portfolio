window.addEventListener('DOMContentLoaded', () => {
  function myFunction() {
    const x = document.getElementById('hide-menu');
    const y = document.querySelector('.toolbar');
    if (x.style.display === 'flex') {
      x.style.display = 'none'; y.style.display = 'flex';
    } else {
      x.style.display = 'flex';
      y.style.display = 'none';
    }
  }
  const boxes = document.querySelectorAll('.but');
  boxes.forEach((box) => { box.addEventListener('click', myFunction); });
  const projects = [
    {
      title: 'Keeping track of hundreds of components 1',
      image: 'images/d0d9d4_solid_color_background_icolorpalette.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'https:taldr27.github.io',
      button2: 'https:github.com/IngDavidTM/portfolio',
      buttonCardID: 'btnPopup1',
      classC: 'cardinf c1',
    },
    {
      title: 'Keeping track of hundreds of components 2',
      image: 'images/d0d9d4_solid_color_background_icolorpalette.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'https:taldr27.github.io',
      button2: 'https:github.com/IngDavidTM/portfolio',
      buttonCardID: 'btnPopup2',
      classC: 'cardinf c2',
    },
    {
      title: 'Keeping track of hundreds of components 3',
      image: 'images/d0d9d4_solid_color_background_icolorpalette.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'https:taldr27.github.io',
      button2: 'https:github.com/IngDavidTM/portfolio',
      buttonCardID: 'btnPopup3',
      classC: 'cardinf c3',
    },
    {
      title: 'Keeping track of hundreds of components 4',
      image: 'images/d0d9d4_solid_color_background_icolorpalette.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'https:taldr27.github.io',
      button2: 'https:github.com/IngDavidTM/portfolio',
      buttonCardID: 'btnPopup4',
      classC: 'cardinf c4',
    },
    {
      title: 'Keeping track of hundreds of components 5',
      image: 'images/d0d9d4_solid_color_background_icolorpalette.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'https:taldr27.github.io',
      button2: 'https:github.com/IngDavidTM/portfolio',
      buttonCardID: 'btnPopup5',
      classC: 'cardinf c5',
    },
    {
      title: 'Keeping track of hundreds of components 6',
      image: 'images/d0d9d4_solid_color_background_icolorpalette.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'https:taldr27.github.io',
      button2: 'https:github.com/IngDavidTM/portfolio',
      buttonCardID: 'btnPopup6',
      classC: 'cardinf c6',
    },
  ];
  const bodyEl = document.getElementById('portfolio');
  const aboveSec = document.getElementById('mainpage');
  function mainSections() {
    const section1 = document.createElement('section');
    section1.id = 'mobile-popup-section';
    section1.className = 'mobile-popup-section';
    bodyEl.appendChild(section1);
    aboveSec.insertAdjacentElement('afterend', section1);
    const section2 = document.createElement('section');
    section2.id = 'wk';
    section2.className = 'works';
    bodyEl.appendChild(section2);
    aboveSec.insertAdjacentElement('afterend', section2);
  }
  window.onload = mainSections();
  const worksContainer = document.getElementById('wk');
  function worksHTML() {
    const header = document.createElement('header');
    worksContainer.appendChild(header);
    const hH1 = document.createElement('h1');
    hH1.innerHTML = 'My Recent works';
    hH1.className = 'headblack';
    header.appendChild(hH1);
    const div = document.createElement('div');
    div.className = 'cards';
    worksContainer.appendChild(div);
    for (let j = 0; j < 6; j += 1) {
      const article1 = document.createElement('article');
      article1.className = projects[j].classC;
      div.appendChild(article1);
      const img1 = document.createElement('img');
      img1.src = projects[j].image;
      img1.alt = 'Theme 2/Neutral 9';
      article1.appendChild(img1);
      const h21 = document.createElement('h2');
      h21.className = 'cardtitle';
      h21.innerHTML = 'Multi-Post Stories Gain+Glory';
      article1.appendChild(h21);
      const ul1 = document.createElement('ul');
      ul1.className = 'categories';
      article1.appendChild(ul1);
      const li1 = document.createElement('li');
      li1.className = 'ruby';
      li1.innerHTML = projects[j].badge1;
      ul1.appendChild(li1);
      const li2 = document.createElement('li');
      li2.className = 'css';
      li2.innerHTML = projects[j].badge2;
      ul1.appendChild(li2);
      const li3 = document.createElement('li');
      li3.className = 'js';
      li3.innerHTML = projects[j].badge3;
      ul1.appendChild(li3);
      const li4 = document.createElement('li');
      li4.className = 'html';
      li4.innerHTML = projects[j].badge4;
      ul1.appendChild(li4);
      const buttonCard = document.createElement('button');
      buttonCard.className = 'seeproject';
      buttonCard.innerHTML = 'See Project';
      buttonCard.id = projects[j].buttonCardID;
      article1.appendChild(buttonCard);
    }
  }
  window.onload = worksHTML();
  const mainContainer = document.getElementById('mobile-popup-section');
  function newHTML() {
    const main = document.createElement('div');
    main.id = 'mobile-popup';
    main.className = 'mobile-popup';
    mainContainer.appendChild(main);
    const img = document.createElement('img');
    img.id = 'img-pop';
    img.className = 'img-pop';
    main.appendChild(img);
    const li = document.createElement('li');
    li.className = 'close-popup';
    main.appendChild(li);
    const liI = document.createElement('i');
    liI.className = 'fa-solid fa-xmark';
    liI.id = 'x-but';
    li.appendChild(liI);
    const mainDiv1 = document.createElement('div');
    mainDiv1.className = 'content-popup-desktop divPop';
    main.appendChild(mainDiv1);
    const div1Div1 = document.createElement('div');
    div1Div1.className = 'content-head-desktop';
    mainDiv1.appendChild(div1Div1);
    const divDiv1Div = document.createElement('div');
    div1Div1.appendChild(divDiv1Div);
    const divDivH3 = document.createElement('h3');
    divDivH3.id = 'h3-popup';
    divDivH3.className = 'h3-popup';
    divDiv1Div.appendChild(divDivH3);
    const div1Div2 = document.createElement('div');
    div1Div2.className = 'btn-container-desktop';
    mainDiv1.appendChild(div1Div2);
    const divDiv2A1 = document.createElement('a');
    divDiv2A1.id = 'btn-1';
    divDiv2A1.className = 'button btn-popup-desktop seeproject';
    divDiv2A1.innerHTML = 'See live     ';
    div1Div2.appendChild(divDiv2A1);
    const div2A1I = document.createElement('i');
    div2A1I.className = 'fa-solid fa-arrow-up-right-from-square';
    divDiv2A1.appendChild(div2A1I);
    const divDiv2A2 = document.createElement('a');
    divDiv2A2.id = 'btn-2';
    divDiv2A2.className = 'button btn-popup-desktop seeproject';
    divDiv2A2.innerHTML = 'See source     ';
    div1Div2.appendChild(divDiv2A2);
    const div2A2I = document.createElement('i');
    div2A2I.className = 'fa-brands fa-github';
    divDiv2A2.appendChild(div2A2I);
    const mainDiv2 = document.createElement('div');
    mainDiv2.className = 'details-popup divPop';
    main.appendChild(mainDiv2);
    const div2Ul = document.createElement('ul');
    div2Ul.className = 'ulPop';
    mainDiv2.appendChild(div2Ul);
    const ulLi1 = document.createElement('li');
    div2Ul.appendChild(ulLi1);
    const li1A = document.createElement('a');
    li1A.id = 'badge1';
    ulLi1.appendChild(li1A);
    const ulLi2 = document.createElement('li');
    div2Ul.appendChild(ulLi2);
    const li2A = document.createElement('a');
    li2A.id = 'badge2';
    ulLi2.appendChild(li2A);
    const ulLi3 = document.createElement('li');
    div2Ul.appendChild(ulLi3);
    const li3A = document.createElement('a');
    li3A.id = 'badge3';
    ulLi3.appendChild(li3A);
    const ulLi4 = document.createElement('li');
    div2Ul.appendChild(ulLi4);
    const li4A = document.createElement('a');
    li4A.id = 'badge4';
    ulLi4.appendChild(li4A);
    const mainP = document.createElement('p');
    mainP.id = 'p-pop';
    mainP.className = 'p-pop';
    main.appendChild(mainP);
    const mainDiv3 = document.createElement('div');
    mainDiv3.className = 'btn-container divPop';
    main.appendChild(mainDiv3);
    const div3A1 = document.createElement('a');
    div3A1.id = 'btn-1';
    div3A1.className = 'button btn-popup-desktop seeproject';
    div3A1.innerHTML = 'See live     ';
    mainDiv3.appendChild(div3A1);
    const div3A1I = document.createElement('i');
    div3A1I.className = 'fa-solid fa-arrow-up-right-from-square';
    div3A1.appendChild(div3A1I);
    const div3A2 = document.createElement('a');
    div3A2.id = 'btn-2';
    div3A2.className = 'button btn-popup-desktop seeproject';
    div3A2.innerHTML = 'See source     ';
    mainDiv3.appendChild(div3A2);
    const div3A2I = document.createElement('i');
    div3A2I.className = 'fa-brands fa-github';
    div3A2.appendChild(div2A2I);
  }
  window.onload = newHTML();
  function popInformation(number) {
    const i = number;
    document.getElementById('img-pop').src = projects[i].image;
    document.getElementById('h3-popup').innerHTML = projects[i].title;
    document.getElementById('badge1').innerHTML = projects[i].badge1;
    document.getElementById('badge2').innerHTML = projects[i].badge2;
    document.getElementById('badge3').innerHTML = projects[i].badge3;
    document.getElementById('badge4').innerHTML = projects[i].badge4;
    document.getElementById('p-pop').innerHTML = projects[i].description;
    document.getElementById('btn-1').href = projects[i].button1;
    document.getElementById('btn-2').href = projects[i].button2;
    document.getElementById('x-but').addEventListener('click', () => { mainContainer.style.display = 'none'; });
    if (mainContainer.style.display === 'flex') {
      mainContainer.style.display = 'none';
    } else {
      mainContainer.style.display = 'flex';
    }
  }
  const b1 = document.getElementById('btnPopup1');
  b1.addEventListener('click', () => { popInformation(0); });
  const b2 = document.getElementById('btnPopup2');
  b2.addEventListener('click', () => { popInformation(1); });
  const b3 = document.getElementById('btnPopup3');
  b3.addEventListener('click', () => { popInformation(2); });
  const b4 = document.getElementById('btnPopup4');
  b4.addEventListener('click', () => { popInformation(3); });
  const b5 = document.getElementById('btnPopup5');
  b5.addEventListener('click', () => { popInformation(4); });
  const b6 = document.getElementById('btnPopup6');
  b6.addEventListener('click', () => { popInformation(5); });
  const form = document.querySelector('form');
  const inputName = form.elements['user-name'];
  const inputEmail = form.elements['user-email'];
  const error = document.getElementById('error');
  inputName.addEventListener('input', (e) => {
    if (inputName.value.length > 30) {
      e.preventDefault();
      error.innerHTML = 'Please do not enter more than 30 characters';
    }
  });
  form.addEventListener('submit', (event) => {
    if (inputEmail.value.toLowerCase() !== inputEmail.value) {
      event.preventDefault();
      error.innerHTML = 'Set the email in lower case';
    }
  });
  const formid = document.getElementById('form-mobile');
  let objGet = {};
  const mainObj = {
    input: '',
    input2: '',
    input3: '',
  };
  function stored() {
    const obj1 = document.getElementById('name-mobile').value;
    const obj2 = document.getElementById('email-mobile').value;
    const obj3 = document.getElementById('textarea-mobile').value;
    mainObj.input = obj1;
    mainObj.input2 = obj2;
    mainObj.input3 = obj3;
    const mainObjString = JSON.stringify(mainObj);
    localStorage.setItem('main', mainObjString);
  }
  formid.addEventListener('input', stored);
  function setData() {
    objGet = JSON.parse(localStorage.getItem('main'));
    document.getElementById('name-mobile').value = objGet.input;
    document.getElementById('email-mobile').value = objGet.input2;
    document.getElementById('textarea-mobile').value = objGet.input3;
  }
  window.onload = setData();
});
