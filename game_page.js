player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send()
{
    get_number = document.getElementById("number").value;
    number = get_number.toLowerCase();

    charAt1 = number.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(number.length/2);
    charAt2 = number.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = number.length - 1;
    charAt3 = number.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = number.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
}