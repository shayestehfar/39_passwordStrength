const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
  const pass = e.target.value
  const blurValue = 20 - 2 * pass.length
  background.style.filter = `blur(${blurValue}px)`
})
