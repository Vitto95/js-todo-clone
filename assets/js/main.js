$(document).ready(function () {
  //creo una array con una lista predefinita di cose da fare

  var arrToDo = [
    "Fare la spesa",
    "Portare Sally dal veterinario",
    "Sistemare bici da corsa",
    "Preparare salsa guacamole",
  ];

  console.log("Lista: " + arrToDo);

  //con un ciclo for estrapolo ogni elemento della lista, che verrà poi inserito nell'ul

  for (var i = 0; i < arrToDo.length; i++) {
    var strToDo = arrToDo[i]; //estrapolo elemento lista
    console.log("Elementi lista: " + strToDo);
    //aggiungo ad ul gli elementi della lista
    var item = $(".template .template-item").clone();
    $(item).find(".text").append(strToDo);
    $(".container ul").append(item);
  }

  //Rimuovere un elemento della lista
  $(document).on("click", ".fa-trash-alt", function () {
    $(this).parent().remove();
  });

  //Aggiungere un elemento alla lista quando viene digitato nell'input
  $(".container input").keyup(function (event) {
    if (event.which === 13) {
      var strToDo = $(this).val().trim();
      if (strToDo.length > 3) {
        var item = $(".template li.template-item").clone();
        $(item).find(".text").append(strToDo);
        $(".container ul").append(item);
        $(this).val("");
      } else {
        alert("Stringa non valida!");
      }
    }
  });
});

//NB PASSO SUCCESSIVO: FARE DELLE FUNZIONI FUORI DAL DOCUMENT CHE RICHIAMO POI ALL'INTERNO.
