const wipe = document.querySelector('.wipe-transition');

const tl = new TimelineMax();

const delay = (n) => {
  return new Promise( done => {
    setTimeout(() => {
      done();
    }, n)
  })
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave() {

        const done = this.async();

        tl.to(wipe, {left: '0%', ease: "power2.out", duration:.5});

        await delay(1000);
        done();
      },
      enter(){

        tl
        .to(wipe, {left: '100%', ease: "power2.out", duration:.5})
        .set(wipe, {left: '-100%'})


      }
    }
  ]
})