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
      button1: 'https://taldr27.github.io',
      button2: 'https://github.com/IngDavidTM/portfolio',
    },
    {
      title: 'Keeping track of hundreds of components 2',
      image: 'images/d0d9d4_solid_color_background_icolorpalette.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'https://taldr27.github.io',
      button2: 'https://github.com/IngDavidTM/portfolio',
    },
    {
      title: 'Keeping track of hundreds of components 3',
      image: 'images/d0d9d4_solid_color_background_icolorpalette.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'https://taldr27.github.io',
      button2: 'https://github.com/IngDavidTM/portfolio',
    },
    {
      title: 'Keeping track of hundreds of components 4',
      image: 'images/d0d9d4_solid_color_background_icolorpalette.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'https://taldr27.github.io',
      button2: 'https://github.com/IngDavidTM/portfolio',
    },
    {
      title: 'Keeping track of hundreds of components 5',
      image: 'images/d0d9d4_solid_color_background_icolorpalette.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'https://taldr27.github.io',
      button2: 'https://github.com/IngDavidTM/portfolio',
    },
    {
      title: 'Keeping track of hundreds of components 6',
      image: 'images/d0d9d4_solid_color_background_icolorpalette.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'https://taldr27.github.io',
      button2: 'https://github.com/IngDavidTM/portfolio',
    },
  ];
  function toggleBarWorks(workNumber) {
    const y = document.getElementById('mobile-popup-section');
    const i = workNumber;
    document.getElementById('img-pop').src = projects[i].image;
    document.getElementById('h3-popup').innerHTML = projects[i].title;
    document.getElementById('badge1').innerHTML = projects[i].badge1;
    document.getElementById('badge2').innerHTML = projects[i].badge2;
    document.getElementById('badge3').innerHTML = projects[i].badge3;
    document.getElementById('badge4').innerHTML = projects[i].badge4;
    document.getElementById('p-pop').innerHTML = projects[i].description;
    document.getElementById('btn-1').href = projects[i].button1;
    document.getElementById('btn-2').href = projects[i].button2;
    if (y.style.display === 'flex') {
      y.style.display = 'none';
    } else {
      y.style.display = 'flex';
    }
  }
  document.getElementById('xbut').addEventListener('click', () => { toggleBarWorks(0); });
  document.getElementById('btnPopup1').addEventListener('click', () => { toggleBarWorks(0); });
  document.getElementById('btnPopup2').addEventListener('click', () => { toggleBarWorks(1); });
  document.getElementById('btnPopup3').addEventListener('click', () => { toggleBarWorks(2); });
  document.getElementById('btnPopup4').addEventListener('click', () => { toggleBarWorks(3); });
  document.getElementById('btnPopup5').addEventListener('click', () => { toggleBarWorks(4); });
  document.getElementById('btnPopup6').addEventListener('click', () => { toggleBarWorks(5); });
});