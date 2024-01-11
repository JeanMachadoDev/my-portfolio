export const downloadCv = () => {
  const pdfUrl = 'docs/cv-jean-machado.pdf'

  const link = document.createElement('a')
  link.href = pdfUrl
  link.target = '_blank'
  link.download = 'cv-jean-machado.pdf'
  link.click()
}
