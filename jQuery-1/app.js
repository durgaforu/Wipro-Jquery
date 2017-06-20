$(document).ready(function () {

   $('button').on('click',function(){

         var vacation=$(this).closest('.vacation');
       //var amount=$(this).closest('.vacation').data('price');
       var amount=vacation.data('price');
       var price=$(`<p>&#8377;${amount}</p1>`);
       //$('.vacation').append(price);
       //$('button').remove();

       vacation.append(price);

       $(this).remove();

   });

});