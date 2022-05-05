function onscroll() {
  // if (scrollY>0) {
  //   nav.classList.add('scroll')
  // }
  // else {
  //   nav.classList.remove('scroll')
  // }

  scrollY > 0 ? nav.classList.add('scroll') : nav.classList.remove('scroll')
}

function onclickclosemenu() {
  body.classList.remove('opened-menu')
}

function onclickopenmenu() {
  body.classList.add('opened-menu')
}

ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:700
}).reveal(`
#home,
#home .img,
#home .stat,
#services,
#services .header,
#services .card`);

