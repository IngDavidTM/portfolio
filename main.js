function myFunction() { const x = document.getElementById('hide-menu'); const y = document.querySelector('.toolbar'); if (x.style.display === 'flex') { x.style.display = 'none'; y.style.display = 'flex'; } else { x.style.display = 'flex'; y.style.display = 'none'; } }
document.getElementById('but').addEventListener('click', myFunction);