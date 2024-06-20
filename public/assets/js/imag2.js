// ----- On render -----
$(function() {

    $('.profi').addClass('dragginggg').removeClass('dragginggg');
  });
  
  $('.profi').on('dragover', function() {
    $('.profi').addClass('dragginggg')
  }).on('dragleave', function() {
    $('.profi').removeClass('dragginggg')
  }).on('drop', function(e) {
    $('.profi').removeClass('dragging hasImageee');
  
    if (e.originalEvent) {
      var file = e.originalEvent.dataTransfer.files[0];
      console.log(file);
  
      var reader = new FileReader();
  
      //attach event handlers here...
  
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        console.log(reader.result);
        $('.profi').css('background-image', 'url(' + reader.result + ')').addClass('hasImageee');
  
      }
  
    }
  })
  $('.profi').on('click', function(e) {
    console.log('clicked')
    $('#mediaFileee').click();
  });
  window.addEventListener("dragover", function(e) {
    e = e || event;
    e.preventDefault();
  }, false);
  window.addEventListener("drop", function(e) {
    e = e || event;
    e.preventDefault();
  }, false);
  $('#mediaFileee').change(function(e) {
  
    var input = e.target;
    if (input.files && input.files[0]) {
      var file = input.files[0];
  
      var reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        console.log(reader.result);
        $('.profi').css('background-image', 'url(' + reader.result + ')').addClass('hasImageee');
      }
    }
  })