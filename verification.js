

// Fonction pour vérifier les champs sont remplis

    //je declare mes champs a recuperer
    
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const sujet = document.getElementById('sujet');
const message = document.getElementById('message');

function verifForm() {


         if (nom.value !== '' && prenom.value !== '' && email.value !== '' && sujet.value !== '' && message.value !== '') {
       //      // Si tous les champs sont remplis, active le bouton
             document.getElementById("submit").removeAttribute("disabled");
         } else {
             // Si l'un des champs est vide, désactive le bouton
           
             document.getElementById("submit").setAttribute("disabled", "disabled");
    
 }};
 //j appel la fonction
 document.addEventListener('input', verifForm);

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
                    $('#nom, #prenom, #email, #message, #sujet, #message').prop("disabled", true);
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
