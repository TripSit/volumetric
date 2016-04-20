$(function() {
  $('#perml').on('input', updateVolume);
  $('#total').on('input', updateVolume);

  $('#material').on('input', updatePerml);
  $('#totalml').on('input', updatePerml);
});

function fixInput(input) {
  input = input.replace(/,/, '.'); 
  if(input.indexOf('-') != -1) {
    input = NaN;
  }
  return input;
}

function updateVolume() {
  var res = parseFloat(fixInput($('#total').val())) / parseFloat(fixInput($('#perml').val()));
  if(isNaN(res)) {
    res = 'Input error';
  }
  $('#ml').val(res); 
}

function updatePerml() {
  var res = parseFloat(fixInput($('#material').val())) / parseFloat(fixInput($('#totalml').val()));
  if(isNaN(res)) {
    res = 'Input error';
  }
  $('#mgml').val(res); 
}
