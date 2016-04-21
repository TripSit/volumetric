$(function() {
  $('#perml').on('input', updateVolume);
  $('#total').on('input', updateVolume);

  $('#material').on('input', updatePerml);
  $('#totalml').on('input', updatePerml);

  $('#tmgml').on('input', updateTake);
  $('#wanttake').on('input', updateTake);

  new Clipboard('#mlcopy', {
    'text': function(trigger) {
      return 'For a solution with ' + $('#perml').val() + 'mg/ml, add ' + $('#total').val() + 'mg of the substance to ' + $('#ml').val() + 'ml of solvent.'
    }
  });
 
  new Clipboard('#mgmlcopy', {
    'text': function(trigger) {
      return 'If you put ' + $('#material').val() + 'mg of a substance in ' + $('#totalml').val() + 'ml of solvent, it will be ' + $('#mgml').val() + 'mg/ml.';
    }
  }); 

  new Clipboard('#takecopy', {
    'text': function(trigger) {
      return 'If you have a solution of ' + $('#tmgml').val() + 'mg/ml, and want to take ' + $('#wanttake').val() + 'mg, you need to take ' + $('#taketotal').val() + 'ml.';
    }
  }); 
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
  if(isNaN(res) || res == Infinity || res == 0) {
    res = '???';
  }
  $('#ml').val(res); 
}

function updatePerml() {
  var res = parseFloat(fixInput($('#material').val())) / parseFloat(fixInput($('#totalml').val()));
  if(isNaN(res) || res == Infinity || res == 0) {
    res = '???';
  }
  $('#mgml').val(res); 
}

function updateTake() {
  var res = parseFloat(fixInput($('#wanttake').val())) / parseFloat(fixInput($('#tmgml').val()));
  if(isNaN(res) || res == Infinity || res == 0) {
    res = '???';
  }
  $('#taketotal').val(res); 
}
