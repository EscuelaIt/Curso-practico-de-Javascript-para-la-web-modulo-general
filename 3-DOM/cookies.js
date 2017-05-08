document.addEventListener('DOMContentLoaded', launchCookieAdvisor);

function launchCookieAdvisor() {
  var capaCookies = document.createElement('div');
  capaCookies.setAttribute('id', 'esteid');
  capaCookies.innerHTML = '<p>Tienes que aceptar las cookies <span>Aceptar</span></p>';
  capaCookies.classList.add('avisoCookies');
  var todosLosSpanEnDiv = capaCookies.getElementsByTagName('span');
  todosLosSpanEnDiv.item(0).addEventListener('click', function() {
    //console.log(this);
    capaCookies.remove();
    //capaCookies.getElementsByTagName('p').item(0).removeChild(this);
    //capaCookies.parentElement.getElementsByTagName('div').item(0).remove();
  });
  document.body.appendChild(capaCookies);
  //document.getElementsByTagName('div').item(0).appendChild(capaCookies);
}