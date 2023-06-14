(function () {
  const phone = document.querySelectorAll(
    '.header__center-col--3 .header__center-text'
  );
  const imgWrap = document.querySelector(
    '.header__center-col--3 .header__center-img-wrap'
  );

  phone.forEach(item => {
    item.addEventListener('mouseover', () => {
      imgWrap.classList.add('hover');
    });
    item.addEventListener('mouseout', () => {
      imgWrap.classList.remove('hover');
    });
  });
})();

AOS.init({
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  },
});
