const btnInfo = document.querySelector('.info');
const modal = document.querySelector('.modal');
const btnCerrar = document.querySelector('.m__cerrar');

btnInfo.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('m__mostrar');
});

btnCerrar.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('m__mostrar');
});

