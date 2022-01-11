const toggle = () => {
  const navBarBtn = document.querySelector('.input-btn-label');

  if (document.querySelector('#input-btn').checked === true) {
    navBarBtn.style.transform = 'rotate(45deg)';
    document.querySelector('.nav-bar-tools').style.height = '100vh';
    document.querySelector('.nav-bar-tools').style.paddingLeft = '2.8rem';
    document.querySelector('.nav-bar-tools').style.paddingTop = '2rem';
    document.querySelector('.tools-separator').innerText = '-';
    document.body.style.overflowY = 'hidden';
    return;
  }

  navBarBtn.style.transform = 'rotate(0)';
  document.querySelector('.nav-bar-tools').style.height = '0';
  document.querySelector('.nav-bar-tools').style.paddingLeft = '0rem';
  document.querySelector('.nav-bar-tools').style.paddingTop = '0rem';
  document.body.style.overflowY = 'auto';
  return;
}


