//basic calculations funciton
$("#ex1btn").click(function () {

    //taking input.
    var num1 = Number($("#ex1num1").val());
    var num2 = +($("#ex1num2").val());
    var num3 = +($("#ex1num3").val());
    var num4 = +($("#ex1num4").val());
    var num5 = +($("#ex1num5").val());

    //Validation to check if text boxes are empty
    if (num1 == "" || num2 == "" || num3 == "" || num4 == "" || num5 == "") {
        $("#ex1out1").text("Please enter a number value into every text box.");
        $("#ex1out2").text("");
        $("#ex1out3").text("");
        $("#ex1out4").text("");
        $("#ex1out5").text("");
    }
    //Validation to only allow the user to enter numbers
    else if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        $("#ex1out1").text("Please enter a number into every text box.");
        $("#ex1out2").text("");
        $("#ex1out3").text("");
        $("#ex1out4").text("");
        $("#ex1out5").text("");
    }

    else {

    //do the calculations and output
    var result = "Sum: " + (num1 + num2 + num3 + num4 + num5);
    var largest = "Largest: " + Math.max(num1, num2, num3, num4, num5);
    var smallest = "Smallest: " + Math.min(num1, num2, num3, num4, num5);
    var mean = "Mean/Average: " + (num1 + num2 + num3 + num4 + num5) / 5;
    var product = "Product: " + (num1 * num2 * num3 * num4 * num5);
    $("#ex1out1").text(result);
    $("#ex1out2").text(largest);
    $("#ex1out3").text(smallest);
    $("#ex1out4").text(mean);
    $("#ex1out5").text(product);
    }

})

//factorial function
$("#btnFact").click(function () {

    //take input
    var num = +($("#ex2in").val());

    //validation to only allow users to enter numeric values between 1 and 200
    if (isNaN(num) || num < 1 || num > 200 || num == "") {
        //document.getElementById("ex2out").innerHTML = "Please enter a number between 1 and 200.";
        $("#ex2out").text("Please enter a number between 1 and 200.");
    } else {
        //use the decrementing for loop to find the factorial. 
        //(for example, if the user enters 5, decreasing loops starts at 5 then goes 4, 3, 2....etc.
        //Multiplies each decrement by the starting value to find factorial)
        for (i = num - 1; i > 0; i--) {
            num = num * i;
        }

        $("#ex2out").text("The factorial is " + num + "!");

    }
})

//fizz buzz function
$("#btnFizzBuzz").click(function () {

    //Find the numbers for the fizz buzz
    var num1 = +($("#ex3in1").val());
    var num2 = +($("#ex3in2").val());

    //validation to only allow users to enter numeric values between 1 and 100, also checks if the user actually enters something
    if (isNaN(num1) || num1 < 1 || num1 > 100 || num1 == "") {
        document.getElementById("ex3out").innerHTML = "Please enter a number between 1 and 100.";
        document.getElementById("ex3out").style.display = "block";
    }
    else if (isNaN(num2) || num2 < 1 || num2 > 100 || num2 == "") {
        document.getElementById("ex3out").innerHTML = "Please enter a number between 1 and 100.";
        document.getElementById("ex3out").style.display = "block";
    }
    else {
       
        //create a string 
        var fizzbuzz = "";
        for (var i = 1; i <= 100; i++) {

            var fizz = i % num1;
            var buzz = i % num2;

            if (fizz == 0 && buzz == 0) {

                fizzbuzz = fizzbuzz + "<span class='fizzbuzz'>FizzBuzz, </span>";
            }

            else if (fizz == 0) {
                fizzbuzz = fizzbuzz + "<span class ='fizz'>Fizz, </span>";
            }

            else if (buzz == 0) {
                fizzbuzz = fizzbuzz + "<span class = 'buzz'>Buzz, </span>";
            }

            else {
                fizzbuzz = fizzbuzz + i + "<span>, </span>";
            }
        }

        //take off ending comma
        fizzbuzz = fizzbuzz.substring(0, fizzbuzz.length - 9);

        // put result into the p tag, and set the p tag to be visible.
        $("#ex3out").html(fizzbuzz);
        document.getElementById("ex3out").style.display = "block";
         }
   
})

//palindrome function
$("#btnPalindrome").click(function () {
    //Find if the word is a palindrome (draw o coward, tacocat, etc.)
    //get user input
    var word = $("#ex4in").val();
    word = word.replace(/\s/g, '');
    word = word.toLowerCase();
    var palindrome = "";
    //check if user actually entered anything.
    if (word == "") {
        $("#ex4out").text("Please enter a word.");
    } else {
        //use decrementing for loop to loop through the string backwards.
        for (var i = word.length - 1; i >= 0; i--) {
            palindrome += word[i];
        }
        //check if it is a palindrome by comparing strings!
        if (word == palindrome) {
            $("#ex4out").text(word + " is a palindrome!");
        } else {
            $("#ex4out").text(word + " is a not palindrome.");
        }
    }
})

//clearing the modal when it closes
$("#myModal").on("hidden.bs.modal", function () {

    //Reset accordians
    //$("#accordion1").collapse.;

    //Clearing exercise one
    $("#ex1num1").val("");
    $("#ex1num2").val("");
    $("#ex1num3").val("");
    $("#ex1num4").val("");
    $("#ex1num5").val("");

    $("#ex1out1").text("");
    $("#ex1out2").text("");
    $("#ex1out3").text("");
    $("#ex1out4").text("");
    $("#ex1out5").text("");

    //clearing exercise two
    $("#ex2in").val("");
    $("#ex2out").text("");

    //clearing exercise three
    $("#ex3in1").val("");
    $("#ex3in2").val("");
    $("ex3out").text("");
    
    //clearing exercise four
    $("#ex4in").val("");
    $("#ex4out").text("");
})