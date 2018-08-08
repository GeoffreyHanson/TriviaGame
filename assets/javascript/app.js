$(document).ready(function() {

    // VARIABLES
    var score = 0;
    var stillTime = true;
    var timeLeft = 60;
    var intervalId;

    $("#start").html("<button>Start quiz</button>");
    
    // FUNCTIONS
    $("#start").on("click", function () {
        console.log("game started");
        $("#start").html(""); 
        $("#submit").html("<button>Submit answers</button>");

        
        // Questions & answers
        $("#q1").append("<p>1. Which car served as the Doc's time machine in Back to the Future?</p>");      
        $("#q1").append("<input type='radio' name='aq' id='no'>Fusion");
        $("#q1").append("<input type='radio' name='aq' id='no'>Rio"); 
        $("#q1").append("<input type='radio' name='aq' id='delorean'>Delorean"); 
        $("#q1").append("<input type='radio' name='aq' id='no'>Countach");
        
        $("#q2").append("<p>2. What platform did Toyota and Subaru most recently collaborate on?</p>");
        $("#q2").append("<input type='radio' name='bq' id='no'>4U-GSE");
        $("#q2").append("<input type='radio' name='bq' id='no'>BMW");
        $("#q2").append("<input type='radio' name='bq' id='no'>MR2");
        $("#q2").append("<input type='radio' name='bq' id='86'>86");
        
        $("#q3").append("<p>3. Which all wheel drive system propelled Audi to motorsport prominence?</p>");
        $("#q3").append("<input type='radio' name='cq' id='no'>HTRAC");
        $("#q3").append("<input type='radio' name='cq' id='no'>4-motion");
        $("#q3").append("<input type='radio' name='cq' id='quattro'>Quattro");
        $("#q3").append("<input type='radio' name='cq' id='no'>Symmetrical AWD");
        
        $("#q4").append("<p>4. Which era of Rally racing is legendary for both its speed and danger?</p>");
        $("#q4").append("<input type='radio' name='dq' id='no'>Group A");
        $("#q4").append("<input type='radio' name='dq' id='groupB'>Group B");
        $("#q4").append("<input type='radio' name='dq' id='no'>Formula 1");
        $("#q4").append("<input type='radio' name='dq' id='no'>Rallycross");
        
        $("#q5").append("<p>5. What car does Takumi Fujiwara slide through corners of Mount Akina with in Initial D?</p>");
        $("#q5").append("<input type='radio' name='eq' id='ae86'>Toyota AE 86");
        $("#q5").append("<input type='radio' name='eq' id='no'> Nissan GTR");
        $("#q5").append("<input type='radio' name='eq' id='no'>Mazda RX7");
        $("#q5").append("<input type='radio' name='eq' id='no'>A motorized shopping cart");


        // Countdown timer
        function timer() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        function decrement() {
            timeLeft--;
            $("#timer").html("<p>Time left: "+timeLeft+"</p>") 
            if (timeLeft === 0) {            
                // Scoring
                if (document.getElementById('delorean').checked) {
                    score ++;
                }
    
                if (document.getElementById('86').checked) {
                    score ++;
                }
                
                if (document.getElementById('quattro').checked) {
                    score ++;
                }
    
                if (document.getElementById('groupB').checked) {
                    score ++;
                }
    
                if (document.getElementById('ae86').checked) {
                    score++;
                }
                console.log(score);
    
    
                // Clearing
                $("#q1").html("");
                $("#q2").html("");
                $("#q3").html("");
                $("#q4").html("");
                $("#submit").html("");
                clearInterval(intervalId);
                $("#timer").html("");
    
    
                // Results
                $("#start").html("All done!");
                $("#questions").html("<p>Score: "+ score + "</p>")
            }           
        }

        timer();
        decrement();
            
        // Scoring
        $("#submit").on("click", function() {
            if (document.getElementById('delorean').checked) {
                score ++;
            }

            if (document.getElementById('86').checked) {
                score ++;
            }
            
            if (document.getElementById('quattro').checked) {
                score ++;
            }

            if (document.getElementById('groupB').checked) {
                score ++;
            }

            if (document.getElementById('ae86').checked) {
                score++;
            }
            console.log(score);


            // Clearing
            $("#q1").html("");
            $("#q2").html("");
            $("#q3").html("");
            $("#q4").html("");
            $("#submit").html("");
            clearInterval(intervalId);
            $("#timer").html("");


            // Results
            $("#start").html("All done!");
            $("#questions").html("<p>Score: "+ score + "</p>")


            
            
        })
        
    });



        

        
        
});