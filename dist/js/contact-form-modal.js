$(function () {

    $("#contact-form-modal input,#contact-form-modal textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            // Gets the values of each field in our form. This is the data we'll send to our Lambda function.
            var formEmail = $(".form-email").val();
            var formSubject = $(".form-subject").val();
            var formMessage = $(".form-message").val();
            var formName = $(".form-name").val();
            var formPhone = $(".form-phone").val();
            // This is the endpoint we created in our API Gateway. This is where we make our POST request, which calls our Lambda function.
            var endpoint = 'https://5rzdj14qhl.execute-api.eu-west-1.amazonaws.com/prod/ContactFormLambda';
            // Remember those form values we just grabbed? We're going to put them into an object here.
            var body = {
                email: formEmail,
                subject: formSubject,
                message: formMessage,
                name: formName,
                phone: formPhone
            };
            // Here, we instantiate our Request. This is a special object used by the Fetch API so it knows where to send data, what data to send, and how to send it.
            var lambdaRequest = new Request(endpoint, {
                headers: {
                    "content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify(body)
            });
            // Call the Fetch API to make our request
            fetch(lambdaRequest)
            // This is where you can handle errors. This is just an example, so we won't cover that.
                .then(function () {
                    // Success message
                    $('#success-modal').html("<div class='alert alert-success'>");
                    $('#success-modal > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success-modal > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success-modal > .alert-success')
                        .append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                })
                .catch(function () {
                    // Fail message
                    $('#success-modal').html("<div class='alert alert-danger'>");
                    $('#success-modal > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success-modal > .alert-danger').append($("<strong>").text("Sorry, we have some technical problems. Please try again later or write us another way."));
                    $('#success-modal > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
    $('#success-modal').html('');
});
