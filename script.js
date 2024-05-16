document.addEventListener('DOMContentLoaded', function () {
  const currentTheme = localStorage.getItem('theme') || 'light'
  document.documentElement.classList.toggle('dark', currentTheme === 'dark')

  const themeToggle = document.getElementById('theme-toggle')
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  })
})
