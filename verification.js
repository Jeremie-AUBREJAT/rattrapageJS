// normalement tout fonctionne ca m aura juste pris environ 8h 

// Fonction pour vérifier les champs sont remplis

    
    

function verifForm() {

    //je declare mes champs a recuperer
    let nom = document.getElementById('nom');
    let prenom = document.getElementById('prenom');
    let email = document.getElementById('email');
    let sujet = document.getElementById('sujet');
    let message = document.getElementById('message');


         if (nom.value !== '' && prenom.value !== '' && email.value !== '' && sujet.value !== '' && message.value !== '') {
       //      // Si tous les champs sont remplis, active le bouton
             document.getElementById("submit").removeAttribute("disabled");
         } else {
             // Si l'un des champs est vide, désactive le bouton
           
             document.getElementById("submit").setAttribute("disabled", "disabled");
    
 }};
 //j appel la fonction
 document.addEventListener('input', verifForm); // je voulais un mouseover mais pas reussi a faire fonctionner la fonction avec

// requete ajax
$(document).ready(function(){
    $('#submit').on('click', function(e){
        e.preventDefault();

        let formData = new FormData($('#login')[0]);
        $.ajax({
            url: 'formulaire.php',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response){               
                if (response === '1') {
                    $('.reponse').html('Formulaire soumis avec succes.');
                    $('#nom, #prenom, #email, #message, #sujet, #message, #submit').prop("disabled", true); //pas reussi a la faire fonctionner avec un setattr
                } else if (response === '2') {    
                    $('.reponse').html('Nom requis');
                    $('#nom').css('border-color','red');
                } else if (response === '3') {     
                    $('.reponse').html('Prenom requis');
                    $('#prenom').css('border-color', 'red');
                } else if (response === '4') {                   
                    $('.reponse').html('Email requis');
                    $('#email').css('border-color', 'red');
                } else if (response === '5') {
                    $('.reponse').html('Sujet requis');
                    $('#sujet').css('border-color', 'red');
                } else if (response === '6') {
                    $('.reponse').html('Message requis');
                    $('#message').css('border-color', 'red');
                }
            },
            error: function(xhr, status, error){
                console.error('Erreur de requête AJAX:', error);
            }
        });
    });
});
