const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        "1/2": '50%',
        "1/4": '25%',
        "c": "1160px"
      },
      boxShadow: {
        "rxl": "0 1px 5px #f9f9f9"
      }
    },
  },
  plugins: [
    plugin(function ({addComponents}) {
      addComponents({
        '.btn': {
          padding: '.5rem',
          borderRadius: '.25rem',
          fontWeight: '200',
          height: 'auto',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: "#2779bd"
          }
        },
        '.bcg-green': {
          backgroundColor: "green",
          color: "#fff",
          height: "auto",
          padding: '0.1rem 0.2rem'
        },
        '.input': {
          backgroundColor: "#fff",
          color: "#000",
          height: "auto"
        },
        h5: {
          fontSize: '1rem',
          fontWeight: 'bold',
          color: '#555',
          margin: '0.3rem 0'
        },
        h3: {
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#333',
          margin: '0.5rem 0',
        },
        h1: {
          fontSize: '2.0rem',
          fontWeight: 'bold',
          color: '#333',
          margin: '1rem 0'
        },
        h2: {
          fontSize: '1.7rem',
          fontWeight: 'bold',
          color: '#555',
          margin: '0.8rem 0'
        },
        h4: {
          fontSize: '1.3rem',
          fontWeight: 'bold',
          color: '#777',
          margin: '0.6rem 0'
        },
        h6: {
          fontSize: '0.8rem', /* You can adjust the font size as needed */
          fontWeight: 'bold',
          color: '#999', /* You can set the color to your desired value */
          margin: '0.4rem 0'
        }
      })
    })
  ],
}

