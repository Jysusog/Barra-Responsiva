$(document).ready(main);
var contador = 1;
function main(){
    $('.bi-list-nested').click(function(){
        if(contador == 1){
            $('.barra-navegacion').animate({
                left:'0'
            });
            contador=0;
        }else{
            $('.barra-navegacion').animate({
                left:'-100%'
            });
            contador=1;
        }
    });
}