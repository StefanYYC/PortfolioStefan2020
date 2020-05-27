function validateForm() {
  document.getElementById("status").innerHTML = "Envoie en cours...";
  formData = {
    email: $("input[name=email]").val(),
    message: $("textarea[name=message]").val(),
  };

  $.ajax({
    url: "./dist/php/mail.php",
    type: "POST",
    data: formData,
    success: function (data, textStatus, jqXHR) {
      $("#status").text(data.message);
      if (data.code)
      $("#status").addClass('green');
        //If mail was sent successfully, reset the form.
        $("#contact-form")
          .closest("form")
          .find("input[type=text], textarea, input[type=email]")
          .val("");
        
    },
    error: function (jqXHR, textStatus, errorThrown) {
        $("#status").addClass('red');
      $("#status").text(jqXHR);
    },
  });
}
