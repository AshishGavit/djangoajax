$(document).ready(function() {
    // Define regular expressions for name, email, and phone fields
    var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;

    // Add custom methods to validate name, email, and phone fields
    $.validator.addMethod("validName", function(value, element) {
        return this.optional(element) || nameRegex.test(value);
    }, "Please enter a valid name");

    $.validator.addMethod("validEmail", function(value, element) {
        return this.optional(element) || emailRegex.test(value);
    }, "Please enter a valid email address");

    $.validator.addMethod("validPhone", function(value, element) {
        return this.optional(element) || phoneRegex.test(value);
    }, "Please enter a valid phone number");

    // Initialize form validation
    $("#formid").validate({
        rules: {
            name: {
                required: true,
                validName: true
            },
            email: {
                required: true,
                validEmail: true
            },
            phone: {
                required: true,
                validPhone: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name"
            },
            email: {
                required: "Please enter your email"
            },
            phone: {
                required: "Please enter your phone number"
            }
        },
        errorPlacement: function(error, element) {
            // display error message in red
            error.css({
                color: 'red',
            }); 
            error.insertAfter(element);

            // change field border on error
            element.css({
                borderColor: 'red',
            })
        }
    });
});