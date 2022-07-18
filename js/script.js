// burger menu
const burgerMenu = document.querySelector('.burger__menu');

if(burgerMenu){
  const bodyMenu = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.header__nav-link');


  burgerMenu.addEventListener('click', function(){
  document.body.classList.toggle('_lock');
  burgerMenu.classList.toggle('_active');
  bodyMenu.classList.toggle('_active');

  if(menuLinks.length > 0) {

    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuClick)
    })

    function onMenuClick() {
      if(burgerMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        burgerMenu.classList.remove('_active');
        bodyMenu.classList.remove('_active');
      }
    }
  }

  });
}
