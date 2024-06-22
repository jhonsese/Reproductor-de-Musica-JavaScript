
const btnToggle = document.querySelector('.layout');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
}); 

/*
const ButtonlayList = document.querySelector(".layout")
const myPlaylist = document.querySelector(".playlist")

ButtonlayList.addEventListener('click', ()=>{

myPlaylist.classList.toggle("active-playlist")


})*/
