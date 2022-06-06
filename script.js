

const general = document.getElementById('general');
const form = document.getElementById('calculo');
const cuenta = document.getElementById('Plata');
const Gente = document.getElementById('Gente');
const btncalcular = document.getElementById('btncalcular');
const btnreset = document.getElementById('btnreset');
const Resultadocont = document.createElement('div');
const DivCadaUno = document.createElement('div');
const CadaUnoTITULO = document.createElement('p');
const CadaUnoValor = document.createElement('p');
const EnTotalTITULO = document.createElement('p');
const EnTotalVALOR = document.createElement('p');

form.addEventListener('change', () => {
  
    btncalcular.classList.remove('disable');
    btncalcular.disabled = false;
  
});

btncalcular.addEventListener('click', (e) => 
 
    calculateResult()
  
);
function calculateResult() {
  let EnTotalVALOR =  Number(cuenta.value);
  let CadaUnoValor = EnTotalVALOR / Number(Gente.value);

  EnTotalTITULO.textContent = 'En Total';
  EnTotalTITULO.classList.add('regular-title', 'text-left');
  EnTotalVALOR.textContent = (Math.round(EnTotalVALOR * 100) / 100).toFixed(2);
  EnTotalVALOR.classList.add('regular-title', 'text-right');

  CadaUnoTITULO.textContent = 'Total para cada uno';
  CadaUnoTITULO.classList.add('bold-title', 'text-left');
  CadaUnoValor.textContent = (
    Math.round(EnTotalVALOR * 100) / 100
  ).toFixed(2);
  CadaUnoValor.classList.add('bold-title', 'text-right');

  
}

btnreset.addEventListener('click', () => {
  cuenta.classList.remove('error-border');
  Gente.classList.remove('error-border')
  resultSection.remove();
  btncalcular.disabled = false;
});
