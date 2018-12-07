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
       
       
        if (a == 1) {
            if (choix_ia == 0) {
                document.getElementById("choixia").innerHTML = '<img src="images/sith_warrior.png" height="300px" width="300px">';
                document.getElementById("choixia").style = " border:2px solid gold; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                document.getElementById("choixia").display = "block";
                document.getElementById("resultat").display = "block";
            }
            else if (choix_ia == 1) {
                document.getElementById("choixia").innerHTML = '<img src="images/imperial_agent.png" height="300px" width="300px">';
                document.getElementById("choixia").style = " border:2px solid gold; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                document.getElementById("choixia").display = "block";
                document.getElementById("resultat").display = "block";
            }
            else {
                document.getElementById("choixia").innerHTML = '<img src="images/sith_sorcerer.png" height="300px" width="150px">';
                document.getElementById("choixia").style = " border:2px solid gold; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                document.getElementById("choixia").display = "block";
                document.getElementById("resultat").display = "block";
            }
        }

        else {
            if (choix_ia == 0) {
                document.getElementById("choixia").innerHTML = '<img src="images/jedi_warrior.png" height="300px" width="180px">';
                document.getElementById("choixia").style = " border:2px solid gold; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                document.getElementById("choixia").display = "block";
                document.getElementById("resultat").display = "block";
            }
            else if (choix_ia == 1) {
                document.getElementById("choixia").innerHTML = '<img src="images/republic_trooper.png" height="300px" width="220px">';
                document.getElementById("choixia").style = " border:2px solid gold; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                document.getElementById("choixia").display = "block";
                document.getElementById("resultat").display = "block";
            }
            else {
                document.getElementById("choixia").innerHTML = '<img src="images/jedi_sage.png" height="300px" width="230px">';
                document.getElementById("choixia").style = " border:2px solid gold; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                document.getElementById("choixia").display = "block";
                document.getElementById("resultat").display = "block";
            }
        }

        resultat("égalité");

    }

    else {
        if (choixjoueur == 0) {
            (choix_ia == 1) ? resultat("victoire") : resultat("Defaite");

            if (a == 1) {
                if (choix_ia == 1) {
                    document.getElementById("choixia").innerHTML = '<img src="images/imperial_agent.png" height="300px" width="300px">';
                    document.getElementById("choixia").style = " border:2px solid red; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }

                else {
                    document.getElementById("choixia").innerHTML = '<img src="images/sith_sorcerer.png" height="300px" width="150px">';
                    document.getElementById("choixia").style = " border:2px solid lightblue; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }
            }

            else {
                if (choix_ia == 1) {
                    document.getElementById("choixia").innerHTML = '<img src="images/republic_trooper.png" height="300px" width="220px">';
                    document.getElementById("choixia").style = " border:2px solid red; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }

                else {
                    document.getElementById("choixia").innerHTML = '<img src="images/jedi_sage.png" height="300px" width="230px">';
                    document.getElementById("choixia").style = " border:2px solid lightblue; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }

            }

        }

        else if (choixjoueur == 1) {
            (choix_ia == 2) ? resultat("victoire") : resultat("Defaite");

            if (a == 1) {
                if (choix_ia == 2) {
                    document.getElementById("choixia").innerHTML = '<img src="images/sith_sorcerer.png" height="300px" width="150px">';
                    document.getElementById("choixia").style = " border:2px solid red; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }

                else {
                    document.getElementById("choixia").innerHTML = '<img src="images/sith_warrior.png" height="300px" width="300px">';
                    document.getElementById("choixia").style = " border:2px solid lightblue; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }
            }

            else {
                if (choix_ia == 2) {
                    document.getElementById("choixia").innerHTML = '<img src="images/jedi_sage.png" height="300px" width="230px">';
                    document.getElementById("choixia").style = " border:2px solid red; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }

                else {
                    document.getElementById("choixia").innerHTML = '<img src="images/jedi_warrior.png" height="300px" width="180px">';
                    document.getElementById("choixia").style = " border:2px solid lightblue; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }

            }





        }

        else {
            (choix_ia == 0) ? resultat("victoire") : resultat("Defaite");

            if (a == 1) {
                if (choix_ia == 0) {
                    document.getElementById("choixia").innerHTML = '<img src="images/sith_warrior.png" height="300px" width="300px">';
                    document.getElementById("choixia").style = " border:2px solid red; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }

                else {
                    document.getElementById("choixia").innerHTML = '<img src="images/imperial_agent.png" height="300px" width="300px">';
                    document.getElementById("choixia").style = " border:2px solid lightblue; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }
            }

            else {
                if (choix_ia == 0) {
                    document.getElementById("choixia").innerHTML = '<img src="images/jedi_warrior.png" height="300px" width="180px">';
                    document.getElementById("choixia").style = " border:2px solid red; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }

                else {
                    document.getElementById("choixia").innerHTML = '<img src="images/republic_trooper.png" height="300px" width="220px">';
                    document.getElementById("choixia").style = " border:2px solid lightblue; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; ";
                    document.getElementById("choixia").display = "block";
                    document.getElementById("resultat").display = "block";
                }




            }





        }
    }
    

    setTimeout(
        function () {
            document.getElementById("choixia").style.display = "none"
        }, 2000);

    
}

var vie = 5;
var vieia = 5;


function resultat(t) {


    if (t == "égalité") {
        document.getElementById("resultat").innerHTML = "You are on par.";
        


    }

    else if (t == "victoire") {

        document.getElementById("resultat").innerHTML = "You won this battle.";
        document.getElementById("resultat").display="block";

        vieia--;
    }

    else {

        document.getElementById("resultat").innerHTML = "You lost this battle.";
        document.getElementById("resultat").display="block";

        vie--;

    }

    if (vieia == 0 || vie == 0) {

        if (vieia == 0) {
            document.getElementById("resultat").innerHTML = "You have won the war.";
            document.getElementById("resultat").display="block";
        }

        else {
            document.getElementById("resultat").innerHTML = "You have lost the war.";
            document.getElementById("resultat").display="block";
        }

        document.getElementById("finalresult").innerHTML = ' Come back and fight!';
        document.getElementById("finalresult").style = " border:2px solid gold; border-top-left-radius:15px; border-top-right-radius:15px; border-bottom-left-radius:15px; border-bottom-right-radius:15px;"
        document.getElementById("finalresult").display = "block";


        document.getElementById('choixia').display = "none";
    }

    setTimeout(
        function () {
            document.getElementById("resultat").style.display = "none"
        }, 2000);


    document.getElementById("scoreia").innerHTML = vieia;
    document.getElementById("scorejoueur").innerHTML = vie;

    

}









function restart() {
    location.reload();
}




