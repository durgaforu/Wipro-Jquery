$(document).ready(function () {

   $('button').on('click',function(){

    //var amount=$(this).closest('.vacation').data('price');
    var vacation=$(this).closest('.vacation');
    console.log(vacation);
    var amount=vacation.data('price');
       console.log(amount);
    var price=$(`<p>&#8377;${amount}</p>`);
    vacation.append(price);




   });

});