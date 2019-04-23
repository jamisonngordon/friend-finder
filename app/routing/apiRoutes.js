

let friendData = require("../data/friends");


module.exports = function(app) {

    app.post("/api/friends", function(req, res) {

        let pref = req.body.data;
        let friend = {};

        //loop through each friend
        for(let count = 0; count < friendData.length; count++) {

            let score = 0;
            let current = friendData[count].scores;

            //loop through scores of friend and compare
            for(let x = 0; x < current.length; x++) {
                score += Math.abs(parseInt(pref[x]) - current[x]);
            }

            if(count === 0) {
                friend = friendData[count];
                friend.similarity = score;
            }
            else if (score < friend.similarity) {
                friend = friendData[count];
                friend.similarity = score;
            }

        }

        //respond with the friend with the least difference
        res.json(friend);

    });
};