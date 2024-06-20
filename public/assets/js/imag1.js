// ----- On render -----
$(function() {

    $('.profil').addClass('draggingg').removeClass('draggingg');
  });
  
  $('.profil').on('dragover', function() {
    $('.profil').addClass('draggingg')
  }).on('dragleave', function() {
    $('.profil').removeClass('draggingg')
  }).on('drop', function(e) {
    $('.profil').removeClass('dragging hasImagee');
  
    if (e.originalEvent) {
      var file = e.originalEvent.dataTransfer.files[0];
      console.log(file);
  
      var reader = new FileReader();
  
      //attach event handlers here...
  
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        console.log(reader.result);
        $('.profil').css('background-image', 'url(' + reader.result + ')').addClass('hasImagee');
  
      }
  
    }
  })
  $('.profil').on('click', function(e) {
    console.log('clicked')
    $('#mediaFilee').click();
  });
  window.addEventListener("dragover", function(e) {
    e = e || event;
    e.preventDefault();
  }, false);
  window.addEventListener("drop", function(e) {
    e = e || event;
    e.preventDefault();
  }, false);
  $('#mediaFilee').change(function(e) {
  
    var input = e.target;
    if (input.files && input.files[0]) {
      var file = input.files[0];
  
      var reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        console.log(reader.result);
        $('.profil').css('background-image', 'url(' + reader.result + ')').addClass('hasImagee');
      }
    }
  })