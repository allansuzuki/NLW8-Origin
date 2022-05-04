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
