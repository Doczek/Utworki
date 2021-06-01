window.fncDarkLightMode = function() {
  //alert('it ran: ');
  document.getElementById('dlm').classList.toggle("light");
  if (document.body.getAttribute('class') === 'light') {
    document.getElementById('dltg').textContent = Tryb ciemny;

  } else {
    document.getElementById('dltg').textContent = Tryb jasny;
  };

};
