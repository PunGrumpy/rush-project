tailwind.config = {
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#3A8DFF',
          DEFAULT: '#1D4ED8',
          dark: '#1E3A8A'
        },
        gray: {
          darkTransparent: 'rgba(31, 41, 55, 0.75)',
          lightTransparent: 'rgba(243, 244, 246, 0.75)'
        }
      },
      transitionProperty: {
        height: 'height'
      }
    }
  }
}
