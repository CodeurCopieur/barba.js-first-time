const wipe = document.querySelector('.wipe-transition');
const allLayer = document.querySelectorAll('.layer');

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

        //tl.to(wipe, {left: '0%', ease: "power2.out", duration:.5});

        tl
        .to(allLayer, {height: '100%', stagger: 0.15})

        await delay(1500);
        done();
      },
      enter(){

        tl
        .to(allLayer, {height: '0%', stagger: 0.15})

        /*tl
        .to(wipe, {left: '100%', ease: "power2.out", duration:.5})
        .set(wipe, {left: '-100%'})*/
      }
    }
  ]
})