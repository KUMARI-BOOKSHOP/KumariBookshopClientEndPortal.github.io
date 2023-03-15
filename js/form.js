$(document).ready(function () {
    $("customerDto").submit(function (event) {
        var formData = {
            cusName: $("#fullName-field").val(),
            address: $("#address-field").val(),
            nic: $("#nic-field").val(),
            email: $("#email-field").val(),
            contactNo: $("#contact-field").val(),
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/v1/customer/",
            data: formData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            encode: true,
        }).done(function (data) {
            console.log(data);
        });

        event.preventDefault();
    });
});