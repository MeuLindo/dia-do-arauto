$(document).ready(function(){

  $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
});


// var contador = function(){
// 	var c = 0.021; // Constante de seguidores ganhos em média nos últimos 30 dias baseado na média aritimética entre as médias mensais dos nossos perfis
// 	var contador = $("#contador");
// 	var numero = parseInt(contador.text());
//     numero ++;
//     contador.text(numero);
//
// };

setInterval(contador, 47619);

function validateForm() {
if (isEmpty(document.getElementById('data_4').value.trim())) {
alert('EMAIL is required!');
return false;
}
if (!validateEmail(document.getElementById('data_4').value.trim())) {
alert('EMAIL must be a valid email address!');
return false;
}
return true;
}
function isEmpty(str) { return (str.length === 0 || !str.trim()); }
function validateEmail(email) {
var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
return isEmpty(email) || re.test(email);
}
