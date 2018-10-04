$(document).ready(function(){
  
  $('.salir, .logoMenu').click(function(){
    $('.mascara').fadeOut('slow');
  });
  $('.quienSomos').click(function(){
    $('#formPqr').fadeOut('slow');
    $('#somos').toggle('bounce');
  });
  $('.menuIngles').click(function(){
    $('#formPqr').fadeOut('slow');
    $('#ingles').toggle('clip');
  });
  $('.menuFran').click(function(){
    $('#formPqr').fadeOut('slow');
    $('#frances').toggle('fold');
  });
  $('.menuPqr').click(function(){
    $('#formPqr').toggle('clip');
  });

  $('#btnGrupal').click(function(){
    $('#grupal').toggle('highlight');
  });

  $('#btnPer').click(function(){
    $('#personal').toggle('puff');
  });

  $('#btnInt').click(function(){
    $('#internacional').toggle('pulsate');
  });

  $('#btnSk').click(function(){
    $('#skype').toggle('scale');
  });

  $('#btnApoyo').click(function(){
    $('#apoyo').toggle('shake');
  });

  $('#btnIc').click(function(){
    $('#icfes').toggle('size');
  });

  $('#btnVaca').click(function(){
    $('#vacacional').toggle('slide');
  });

  $('#btnPis').click(function(){
    $('#pis').toggle('bounce');
  });

  $('#btnCon').click(function(){
    $('#conversacion').toggle('scale');
  });

 
});