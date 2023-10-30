const menu = document.querySelector('.menu');
const logoLink = menu.querySelector('.logo');
const select = document.querySelector('.build__form-select');

window.addEventListener('scroll', function () {
  window.scrollY > 450 ? menu.classList.add('sticky') : menu.classList.remove('sticky');
  window.scrollY > 450 ? logoLink.setAttribute('href', '#top') : logoLink.removeAttribute('href', '#top');
});

select.addEventListener('click', function () {
  Array.from(select.children).forEach(function (item) {
    item.style.color="#1B1F2B";
  })
});

select.addEventListener('change', function () {
  select.classList.add('build__form-select--black');
});
