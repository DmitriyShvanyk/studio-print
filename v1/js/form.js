$('document').ready(function() {
    $('#form_order').validate({

        rules: {

            tel_order: {
                required: true,
                //number: true,
                minlength: 5,
                maxlength: 20
            }

        },

        messages: {           

            "tel_order": {
                required: "Заполните это поле",
                //number: "Только цифры",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            }


        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-form-order',


                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);

                    $("#form_order").clearForm();
                }
            });
        }

    });
});

$('document').ready(function() {
    $('#form_order_2').validate({

        rules: {

            tel_order_2: {
                required: true,
                //number: true,
                minlength: 5,
                maxlength: 20
            }

        },

        messages: {           

            "tel_order_2": {
                required: "Заполните это поле",
                //number: "Только цифры",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            }


        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-form-order-2',


                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);

                    $("#form_order_2").clearForm();
                }
            });
        }

    });
});


$('document').ready(function() {
    $('#form_order_call').validate({

        rules: {

            fname_order_call: {
                required: true,
                minlength: 2,
                maxlength: 50
            },

            tel_order_call: {
                required: true,                
                minlength: 5,
                maxlength: 20
            }

        },

        messages: {

            "fname_order_call": {
                required: "Заполните это поле",
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            },

            "tel_order_call": {
                required: "Заполните это поле",                
                minlength: "Заполните это поле",
                maxlength: "Заполните это поле"
            }


        },

        submitHandler: function(form) {
            $(form).ajaxSubmit({
                target: '#target-block-form-order-call',


                success: function(data) {

                    $.fancybox({
                        "content": $("#thnks").clone()
                    });

                    setTimeout(function() {
                        $.fancybox.close();
                    }, 5000);

                    $("#form_order_call").clearForm();
                }
            });
        }

    });
});