

var fs = require("fs");
var people = require("../data/friends.json");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        return res.json(friendList);
    });



    app.post('/api/friends', function (req, res) {



        var userData = req.body;
        var userTotal = 0;

        userData.scores.forEach(score => {
            
            userTotal+=parseInt(score);
        });


       

        var smallesDiff;
        var closestMatch;
        people.forEach(function(person){

            var compareScore = 0 
            person.scores.forEach(score => {
                compareScore+=parseInt(score);
            });
            var newDiff=Math.abs(userTotal - compareScore);
            if(closestMatch === undefined|| newDiff<smallesDiff){
                smallesDiff = newDiff;

                closestMatch = person;
            }
            
            
        });
        


        res.json(closestMatch);
    });


};





























        // res.send(userTotal);






        // var totals = [];

        // // Iterate through possible people
        // for (currentPerson of friendList){

        //     var itemName = currentPerson.name;

        //     var difference = 0;

        //     // Check the difference between each individual answer
        //     for (answer in currentPerson.answers){
        //         difference += Math.abs(parseInt(currentPerson.answers[answer]) - parseInt(user.answers[answer]));
        //     }

        //     // Create an object with the current person and the total differnce betwen their answers and the users
        //     var matchTotal = {
        //         person: currentPerson,
        //         difference: difference
        //     };

        //     totals.push(matchTotal);
        // };

        // // Chose and initial person
        // var matchValue = totals[0].difference;
        // var closestMatch = totals[0];

        // // Iterate over all objects created prior and locate lowest difference
        // for (match of totals){

        //     if (parseInt(match.difference) < parseInt(matchValue)){
        //         matchValue = match.difference;
        //         closestMatch = match;

        //     }
        // }

        // // Send the match back to client

  