import './style.css'

const URL = '/Boleta-periodo-Agosto-Diciembre-2023-3.pdf'

function downloadFile(e) {
  e.preventDefault();
  const a = document.createElement('a')
  a.href = URL
  a.download = 'Boleta-periodo-Agosto-Diciembre-2023-3.pdf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

goodshit.addEventListener('click', downloadFile)
justshit.addEventListener('click', downloadFile)
