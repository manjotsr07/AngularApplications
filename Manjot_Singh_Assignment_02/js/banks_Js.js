$(function(){

    $('#bt_Royal_Bank_Of_Canada').on("click", function(){

        $('#div-default').css("display", "none");
        $('#div-default-small-screen').css("display", "none");

        if($(window).width()>600)
        {
            $('.result-grid-container').css("display", "grid");
        }
        else
        {
            $('.result-grid-container').css("display", "block");
        }

        $.ajax({
            url: "data/banks_information.json",
            data: {},
            type: "GET",
            success: function(response_bank){

                var banks = response_bank.banks;

                $('#display_bank_name').html("Bank Name: "+ banks[0].name);
                $('#display_bank_city').html("Bank City: "+ banks[0].city);
                $('#display_bank_province').html("Bank Province: " + banks[0].province);
                $('#display_bank_image').prop("src", banks[0].image);
            }
        });

    });

    $('#bt_HSBC_Bank_Canada').on("click", function(){

        $('#div-default').css("display", "none");
        $('#div-default-small-screen').css("display", "none");

        if($(window).width()>600)
        {
            $('.result-grid-container').css("display", "grid");
        }
        else
        {
            $('.result-grid-container').css("display", "block");
        }

        $.ajax({
            url: "data/banks_information.json",
            data: {},
            type: "GET",
            success: function(response_bank){

                var banks = response_bank.banks;
                    
                $('#display_bank_name').html("Bank Name: "+ banks[1].name);
                $('#display_bank_city').html("Bank City: "+ banks[1].city);
                $('#display_bank_province').html("Bank Province: " + banks[1].province);
                $('#display_bank_image').prop("src", banks[1].image);
            }
        });

    });

    $('#bt_Bank_Of_Montreal').on("click", function(){

        $('#div-default').css("display", "none");
        $('#div-default-small-screen').css("display", "none");

        if($(window).width()>600)
        {
            $('.result-grid-container').css("display", "grid");
        }
        else
        {
            $('.result-grid-container').css("display", "block");
        }
        
        $.ajax({
            url: "data/banks_information.json",
            data: {},
            type: "GET",
            success: function(response_bank){

                var banks = response_bank.banks;

                $('#display_bank_name').html("Bank Name: "+ banks[2].name);
                $('#display_bank_city').html("Bank City: "+ banks[2].city);
                $('#display_bank_province').html("Bank Province: " + banks[2].province);
                $('#display_bank_image').prop("src", banks[2].image);
            }
        });

    });

});