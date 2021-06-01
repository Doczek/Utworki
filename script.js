window.fncDarkLightMode = function() {
  //alert('it ran: ');
  if (document.body.getAttribute('class') === 'light') {
    document.getElementById('dlm').classList.toggle("light");
    document.getElementById('dltg').textContent = Tryb ciemny;

  } else {
    document.getElementById('dlm').classList.toggle("light");
    document.getElementById('dltg').textContent = Tryb jasny;
  };

};
