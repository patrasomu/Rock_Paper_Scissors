function play(userChoice){

    //Step - 1 => Extracting the ID of userInput.
    var userInput = userChoice.id;

    //Step - 2 => Extracting botChoice value
    var botInputValue = botChoice();

    //Step - 3 => Getting a Random value for botChoice
    function botChoice(){
        return Math.floor(Math.random()*3);
    }

    //Step - 4 => Extracting Id to botInputValue
    var botInput = botChoiceId(botInputValue);

    //Step - 5 => Function to extract Id to botInputValue
    function botChoiceId(botId){
        return ['rock', 'paper', 'scissors'][botId];
    }

    //Step - 6 => Calculating Result
    var result = resultFun(userInput, botInput);
    console.log(result);

    //Step 7 => Extracting result value through the function
    function resultFun(user, bot){
        var result_value ={
            'rock': {'rock': 0.5,'paper':0,'scissors':1},
            'paper': {'rock':1,'paper':0.5,'scissors':0},
            'scissors': {'rock':0,'paper':1,'scissors':0.5}
        };

        var userScore = result_value[user][bot];
        var botScore = result_value[bot][user];

        return [userScore, botScore];
    }

    //Step 8 => Calling Message function according to the result.
    var message_value = message(result);
    console.log(message_value);

    //Step - 9 => Calling FrontEnd Function
    result_frontEnd(userInput, botInput, message_value);


    //Step - 9 => Defining Function Value
    function message([user, bot]){
        if(user === 1)
            return { 'message': 'You Won!', 'color': 'green'};
        if(user === 0.5)
            return { 'message': 'Its a Tie!', 'color': 'gold'};
        if(user === 0)
            return { 'message': 'You Lost!', 'color': 'red'};
    }

    //Step - 10 => Dealing With the Frontend Part

    function result_frontEnd(user, bot, message){

        //Creating Database for images
        var imageDataBase = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src
        };

        //Removing all the elements of div
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();

        //Creating divs to add images selected by User and Bot
        var userimg_div = document.createElement('div');
        var message_div = document.createElement('div');
        var botimg_div = document.createElement('div');

        //Extracting images
        userimg_div.innerHTML = "<img src='"+imageDataBase[user]+"'height=150 width=150 style='box-shadow: 5px 5px 20px rgba(30, 50, 233, 1);'>";
        message_div.innerHTML = "<h2 style='color: "+message['color']+"; padding: 2rem'>"+ message['message'] + "</h2>"
        botimg_div.innerHTML = "<img src='"+imageDataBase[bot]+"'height=150 width=150 style='box-shadow: 5px 5px 20px rgba(243, 38, 24, 1);'>";
      
        //Appending Images and message
        document.getElementById('flex-container-rps').appendChild(userimg_div);
        document.getElementById('flex-container-rps').appendChild(message_div);
        document.getElementById('flex-container-rps').appendChild(botimg_div);
    }
}