let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Aprendo de progamacion con TecnolochicasPro y me encantan las áreas STEAM')
  .pauseFor(200)
  .deleteChars(10)
  .start();
