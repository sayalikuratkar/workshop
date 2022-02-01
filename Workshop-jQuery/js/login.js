let a;
$(document).ready(function() {



    $('button.login').click(function() {

        var name = $("input[name='username']").val();
        var password = $("input[name='password']").val();
        console.log(name)
        console.log(password)

        $.ajax({
            url: "https://mocki.io/v1/a1672761-b46a-4f87-9ec0-74983c5c38c5",
            type: "GET",
            success: function(result) {

                if (result.username == name && result.password == password) {
                    $(location).attr('href', "../html/registration.html")
                }
            },
            error: function(error) {
                alert("something went wrong")
            }
        })
    })

})