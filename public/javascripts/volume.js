$(function() {
  $('#perml').on('input', updateVolume);
  $('#total').on('input', updateVolume);

  $('#material').on('input', updatePerml);
  $('#totalml').on('input', updatePerml);
});

function updateVolume() {
  var res = parseInt($('#total').val()) / parseInt($('#perml').val())
  if(isNaN(res)) {
    res = 'Input error';
  }
  $('#ml').val(res); 
}

function updatePerml() {
  var res = parseInt($('#material').val()) / parseInt($('#totalml').val())
  if(isNaN(res)) {
    res = 'Input error';
  }
  $('#mgml').val(res); 
}
