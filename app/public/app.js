$(document).ready(function () {

    function validateInput() {


        if ($("#userName").val() === '') {
            return false;
        }
        else if ($("#userImage").val() === '') {
            return false
        }


        $('.surveyQuestions').each(function () {
            if ($(this).val() === 'null') {
                return false
            }
        })

        return true;
    }



    $('.close').on('click', function () {
        $('.chosen').val('');
        $('.form-control').val('');
    });




    $('.submit').on('click', function () {

        event.preventDefault();



        if (validateInput()) {

            var userData = {
                name: $('#userName').val().trim(),
                photo: $('#userImage').val().trim(),
                scores: [
                    $('#question1').val(),
                    $('#question2').val(),
                    $('#question3').val(),
                    $('#question4').val(),
                    $('#question5').val(),
                    $('#question6').val(),
                    $('#question7').val(),
                    $('#question8').val(),
                    $('#question9').val(),
                    $('#question10').val(),
                ]
            };

            $.post('/api/friends', userData, function (data) {
               
                    console.log(data);
                    $('#matchTitle').text(data.name);
                    $('#matchImage').attr('src', data.photo);
                    $('#matchModel').modal('toggle');
            })


        } else {
            alert('Must fill out required fields')
        }
    });



    

});