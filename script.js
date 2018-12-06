var a = 1;

function imageia(n) {
    document.getElementById("choixia").innerHTML = '"<img src="' + n + '" height="300px" width="300px">';
}


function change() {
    if (a == 1) {
        document.getElementById("ambiance").href = "style1.css";
        document.getElementById("name2").innerHTML = "Sniper";
        document.getElementById("name3").innerHTML = "Sorcerer";
        document.getElementById("teamjoueur").innerHTML = "Sith";
        document.getElementById("teamia").innerHTML = "Jedi";

        a++;
    }
    else {
        document.getElementById("ambiance").href = "style.css";
        document.getElementById("name2").innerHTML = "Soldier";
        document.getElementById("name3").innerHTML = "Sage";
        document.getElementById("teamjoueur").innerHTML = "Jedi";
        document.getElementById("teamia").innerHTML = "Sith";
        a++;
        a = 1;
    }
}

function game(choixjoueur) {
    var choix_ia = Math.floor(Math.random() * 3);

    if (choixjoueur == choix_ia) {
        resultat("égalité");

    }

    else {
        if (choixjoueur == 0) {
            (choix_ia == 1) ? resultat("victoire") : resultat("Defaite");

        }

        else if (choixjoueur == 1) {
            (choix_ia == 2) ? resultat("victoire") : resultat("Defaite");



        }

        else {
            (choix_ia == 0) ? resultat("victoire") : resultat("Defaite");



        }
    }
}

var vie = 5;
var vieia = 5;


function resultat(t) {


    if (t == "égalité") {
        document.getElementById("resultat").innerHTML = "You are on par.";
    }

    else if (t == "victoire") {

        document.getElementById("resultat").innerHTML = "You won this battle.";
        vieia--;
    }

    else {

        document.getElementById("resultat").innerHTML = "You lost this battle.";
        vie--;

    }

    if (vieia == 0 || vie == 0) {

        if (vieia == 0) {
            document.getElementById("resultat").innerHTML = "You have won the war.";
        }

        else {
            document.getElementById("resultat").innerHTML = "You have lost the war.";
        }

        document.getElementById("choixia").innerHTML = '<div onclick="restart()" class="recommencer"> Come back and fight! <div>';
       
    }

    document.getElementById("scoreia").innerHTML = vieia;
    document.getElementById("scorejoueur").innerHTML = vie;


}

function restart() {
    location.reload();
}




