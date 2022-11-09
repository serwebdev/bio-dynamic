(function () {
  const phone = document.querySelectorAll(
    '.header__center-col--3 .header__center-text'
  );
  const imgWrap = document.querySelector(
    '.header__center-col--3 .header__center-img-wrap'
  );

  phone.forEach(item => {
    item.addEventListener('mouseover', () => {
      console.log('over');
      imgWrap.classList.add('hover');
    });
    item.addEventListener('mouseout', () => {
      console.log('mouseout');
      imgWrap.classList.remove('hover');
    });
  });
})();
