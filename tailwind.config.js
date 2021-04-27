module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  // mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: { 75: '75px' },
      minHeight: { 180: '180px' },
      maxHeight: {
        825: '825px',
        750: '759px',
      },
      maxWidth: { '8xl': '1440px' },
      fontFamily: {
        vt: ['VT323', 'monospaced'],
        barlow: ['Barlow', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        lghtbl: '#6CE3FF',
        gold: '#F9D885',
        btnred: '#DD406D',
        turq: '#61E1FF',
      },
    },
  },
  variants: {
    scrollbar: ['rounded'],
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}
