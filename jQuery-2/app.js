$(document).ready(function () {

    $('.vacation').on('click','button', function (e) {


        // var price= $('<p>&#8377;84684648</p>');
        var vacation = $(this).closest('.vacation');

        //var amount=$(this).closest('.vacation').data('price');

        var amount = vacation.data('price');

        var price = $(`
        <p>&#8377;${amount}</p><hr/>
        <p>Tickets: <input value="1" class="quantity" type="number"/> </p>
        <p>Total: <span class="total">&#8377;${amount} </span></p>
        `);

        //$('.vacation').append(price);
        // $(this).closest('.vacation').append(price);
        //vacation.append(price);
        // $('button').remove();
        $(this).before(price);
        $(this).remove();
    });

    //-------------------------------------------------------------


    // Load Ajax Data 
    //------------------------

    $('.btn-warning').click(function(respText,obj1,obj2){
      
    //    $("#test").load("demo.txt");
    //    $('#test').append(respText);

     $.get("http://localhost:1981/App/one.jsp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });

    });


    $('.vacation').on('keyup change','.quantity',function(){
        var price=$(this).closest('.vacation').data('price');
        var quantity=$(this).val();
        //$('.total').text(price*quantity);
        $(this).parent().parent().find('.total').text(price*quantity);
     });

    
    $('#filters').on('click','.btn-primary',function(){
        $('.bg-danger').removeClass('bg-danger');
        $('.vacation').filter('.onsale').addClass('bg-success');
    });

     $('#filters').on('click','.btn-danger',function(){
       $('.bg-success').removeClass('bg-success');
        $('.vacation').filter('.expiring').addClass('bg-danger');
    });


});
