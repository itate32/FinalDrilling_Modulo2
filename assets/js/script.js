
/* EFECTO ÍCONOS REDES SOCIALES */
$(document).ready(function(){
  $(".social-icons a").hover(
    function() {
      $(this).find("i").css("transform", "scale(1.5)");
    }, function() {
      $(this).find("i").css("transform", "scale(1)");
    }
  );
});
 
 
 /* EFECTO MOUSE */
document.addEventListener('mousemove', (e) => {
  let dot = document.querySelector('.dot');
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  let correo = document.getElementById("correo").value;
  let comentario = document.getElementById("comentario").value;

  /* EXPRESIONES REGULARES */
  let nombreApellidoRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
  let telefonoRegex = /^\+\d{11}$/; // debe tener 1 a 3 números como código de país ({1,3}) y contener si o si 12 caracteres.
  let correoRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  // Validación de campos
  if (!nombreApellidoRegex.test(nombre)) {
      alert("El nombre no es válido");
      return;
  }
  if (!nombreApellidoRegex.test(apellido)) {
      alert("El apellido no es válido");
      return;
  }
  if (!telefonoRegex.test(telefono)) {
      alert("El teléfono no es válido");
      return;
  }
  if (!correoRegex.test(correo)) {
      alert("El correo electrónico no es válido");
      return;
  }

 /* Si todos los campos son correctos; muestra el alert, vacía los campos y resetea el formulario. */
  alert("¡Su información ha sido enviada con éxito! 😃");
  document.getElementById("contactForm").reset();
});
  