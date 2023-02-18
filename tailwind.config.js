const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./deploy/templates/**/*.{html,js,twig}"],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          color: '#000',
          ul: {
            paddingLeft: '20px',
          },
          li: {
            color: '#000',
            fontSize: '17px',
            marginBottom: '8px',
            listStyle: 'disc',
            a: {
              textDecoration: 'underline',
            }
          },
        },
      },
      'footer': {
        css: {
          color: '#fff',
          fontFamily: 'Signifier',
          p: {
            marginBottom: '10px',
          },
          strong: {
            fontWeight: 'bold',
          }

        },
      },
      'journal-intro': {
        css: {
          color: '#000',
          fontFamily: 'Signifier',
          fontSize: '39px',
          p: {
            marginBottom: '10px',
            a: {
              textDecoration: 'underline',
            }
          },
          strong: {
            fontWeight: 'bold',
          },
          ul: {
            paddingLeft: '20px',
          },
          li: {
            color: '#000',
            fontSize: '17px',
            marginBottom: '8px',
            listStyle: 'disc',
            a: {
              textDecoration: 'underline',
            }
          },

        },
      },
      'order': {
        css: {
          color: '#fff',
          fontFamily: 'Signifier',
          fontSize: '22px',
          p: {
            marginBottom: '10px',
            a: {
              textDecoration: 'underline',
            }
          },
          strong: {
            fontWeight: 'bold',
          },
          ul: {
            paddingLeft: '20px',
          },
          li: {
            color: '#000',
            fontSize: '17px',
            marginBottom: '8px',
            listStyle: 'disc',
            a: {
              textDecoration: 'underline',
            }
          },

        },
      },
      'copyright': {
        css: {
          color: '#fff',
          fontSize: '14px',
          strong: {
            fontWeight: 'bold',
          }
        },
      },
      'intro': {
        css: {
          color: '#000',
          fontFamily: 'Signifier',
          fontSize: '32px',
          p: {
            marginBottom: '10px',
            lineHeight: '3.5rem',
            a: {
              textDecoration: 'underline',
            }
          },
          strong: {
            fontWeight: 'bold',
          },
          ul: {
            paddingLeft: '20px',
          },
          li: {
            color: '#000',
            fontSize: '32px',
            marginBottom: '8px',
            listStyle: 'disc',
            a: {
              textDecoration: 'underline',
            }
          },

        },
      },
      'intro2': {
        css: {
          color: '#000',
          fontFamily: 'Soehne',
          fontSize: '22px',
          p: {
            marginBottom: '10px',
            a: {
              textDecoration: 'underline',
            }
          },
          strong: {
            fontWeight: 'bold',
          },
          ul: {
            paddingLeft: '20px',
          },
          li: {
            color: '#000',
            fontSize: '22px',
            marginBottom: '8px',
            listStyle: 'disc',
            a: {
              textDecoration: 'underline',
            }
          },

        },
      },
      'summary': {
        css: {
          color: '#000',
          fontFamily: 'Soehne',
          fontSize: '22px',
          lineHeight: '140%',
          p: {
            marginBottom: '30px',
            fontSize: '22px',
            lineHeight: '160%',
            a: {
              textDecoration: 'underline',
            }
          },
          h2: {
            fontWeight: 'bold',
            fontSize: '28px',
            marginBottom: '1rem',
            marginTop: '3rem',
          },
          strong: {
            fontWeight: 'bold',
          },
          ul: {
            paddingLeft: '20px',
            marginBottom: '2rem',
            marginTop: '2rem',
            li: {
              listStyle: 'disc',
            }
          },
          li: {
            color: '#000',
            fontSize: '22px',
            marginBottom: '8px',
            lineHeight: '140%',
            a: {
              textDecoration: 'underline',
            }
          },
          ol: {
            paddingLeft: '20px',
            marginTop: '2rem',
            marginBottom: '2rem',
            li: {
              listStyle: 'auto',
            }
          },


        },
      },
      'body': {
        css: {
          color: '#000',
          fontFamily: 'Helvetica Neue',
          p: {
            marginBottom: '30px',
            a: {
              textDecoration: 'underline',
            }
          },
          h2: {
            fontWeight: 'bold',
            marginBottom: '2rem',
            fontFamily: 'Helvetica Neue',

          },
          strong: {
            fontWeight: 'bold',
          },
          ul: {
            paddingLeft: '20px',
            marginBottom: '2rem',
            marginTop: '2rem',
            li: {
              listStyle: 'disc',
            }
          },
          li: {
            color: '#000',
            marginBottom: '8px',
            a: {
              textDecoration: 'underline',
            }
          },
          ol: {
            paddingLeft: '20px',
            marginTop: '2rem',
            marginBottom: '2rem',
            li: {
              listStyle: 'auto',
            }
          },


        },
      },
      'heading': {
        css: {
          color: '#000',
          fontFamily: 'Helvetica Neue',
          em: {
            fontFamily: 'Denton',
          },
          strong: {
            fontWeight: 'bold',
          },
          h2: {
            color: '#000',
            fontFamily: 'Helvetica Neue',
            em: {
              fontFamily: 'Denton',
            },
            strong: {
              fontWeight: 'bold',
            },
          }


        },
      },
    },
    customForms: theme => ({
      default: {
        input: {
          paddingTop: '11px',
          paddingBottom: '11px',
          paddingLeft: '20px',
          border: '1px white solid'
        },
        select: {
          paddingRight: '3rem',
          lineHeight: '2rem',
        },
      },
    }),
    screens: {
      xs: '500px',
      sm: '640px',
      md: '768px',
      ml: '878px',
      mlg: '968px',
      lg: '1300px',
      xlg: '1400px',
    },
    fluidSize : {
      ".body-sm": {
        min: '12px',
        max: '12px',
        lhMin: '16px',
        lhMax: '16px',
      },
      ".body-md": {
        min: '14px',
        max: '14px',
        lhMin: '18px',
        lhMax: '18px',
      },
      ".body": {
        min: '16px',
        max: '16px',
        lhMin: '26px',
        lhMax: '26px',
      },
      ".body-lg": {
        min: '18px',
        max: '20px',
        lhMin: '32px',
        lhMax: '34px',
      },
      ".h6": {
        min: '16px',
        max: '18px',
        lhMin: '20px',
        lhMax: '22px',
      },
      ".h5": {
        min: '20px',
        max: '24px',
        lhMin: '24px',
        lhMax: '29px',
      },
      ".h4": {
        min: '28px',
        max: '34px',
        lhMin: '35px',
        lhMax: '41px',
      },
      ".h3": {
        min: '34px',
        max: '40px',
        lhMin: '40px',
        lhMax: '50px',
      },
      ".h2": {
        min: '40px',
        max: '60px',
        lhMin: '53px',
        lhMax: '73px',
      },
      ".h1": {
        min: '66px',
        max: '80px',
        lhMin: '71px',
        lhMax: '92px',
      },
    },
    extend: {
      letterSpacing: {
        'body': '0.02em',
        'loose': '0.16em',
        'heading': '0.06em'
      },
      fontFamily: {
        inter: ['Inter', 'Helvetica Neue', 'arial', 'sans-serif'],
        'inter-tight': ['Inter Tight','Helvetica Neue', 'arial', 'sans-serif'],
      },
      maxWidth: {},
      colors: {
        'orange': 'rgba(249, 115, 22, 1.0)',
        'blue-dark': 'rgba(10, 16, 30, 1)',
        'blue-header': 'rgba(17, 23, 41, 1)',
        'white': 'rgba(255, 255, 255, 1.0)',
        'white-50': 'rgba(255, 255, 255, 0.5)',
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'light-black': 'rgba(29, 29, 27, 1.0)',
        'black-10': 'rgba(0, 0, 0, 0.1)',
        'orange-25': 'rgba(249, 115, 22, 0.25)',
        'blue-light': 'rgba(32, 34, 150, 1.0)'

      },
      dropShadow: {
        'card-light': '0px 7px 29px rgba(100, 100, 111, 0.2)',
        'card-hard': [
          '0px 96px 38px rgba(0, 0, 0, 0.01)',
          '0px 54px 32px rgba(0, 0, 0, 0.05)',
          '0px 24px 24px rgba(0, 0, 0, 0.09)',
          '0px 6px 13px rgba(0, 0, 0, 0.1)',
          '0px 0px 0px rgba(0, 0, 0, 0.1)'
        ]
      },
      spacing: {
        '60vh': '60vh',
        'xs': '24px',
        'small': '48px',
        'desktop-md': '80px',
        'mobile-md': '64px',
        'desktop-lg': '200px',
        'mobile-lg': '104px',
        'nav': '40px',
        104: '28rem',
        107: '30rem',
        108: '31rem',
        76: '19rem',
        130: '130px',
        'minus-4': '-1rem'
      },
      borderRadius: {
        12: "24px",
        8: "24px",
      },
      fontSize: {
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
        23: "23px",
        24: "24px",
        25: "25px",
        26: "26px",
        27: "28px",
        28: "28px",
        29: "29px",
        30: "30px",
        32: "32px",
        35: "35px",
        36: "36px",
        39: "39px",
        40: "40px",
        46: "46px",
        50: "50px",
        80: "80px",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  variants: {
    textColor: ['responsive', 'first', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'first', 'hover', 'focus', 'group-hover'],
    fontFamily: ['responsive', 'hover', 'focus'],
    border: ['responsive', 'hover', 'focus', 'group-hover'],
    stroke: ['responsive', 'hover', 'focus', 'group-hover'],
    fill: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'group-hover'],
    background: ['responsive', 'hover', 'focus', 'group-hover', 'disabled'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'disabled'],
    transform: ['responsive', 'hover', 'focus', 'group-hover', 'disabled'],

  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const textSizes = theme('fluidSize')
      const screen = {
        max: "1200px",
        min: "400px"
      }

      function fluidMagic({ min, max }, minvw, maxvw) {
        return `calc(${min} + ${((parseFloat(max) / (parseFloat(max) * 0 + 1)) - (parseFloat(min) / (parseFloat(min) * 0 + 1)))} * ( (100vw - ${minvw}) / ${((parseFloat(maxvw) / (parseFloat(maxvw) * 0 + 1)) - (parseFloat(min) / (parseFloat(min) * 0 + 1)))}))`
      }
      function fluidMagicLh({ lhMin, lhMax }, minvw, maxvw) {
        return `calc(${lhMin} + ${((parseFloat(lhMax) / (parseFloat(lhMax) * 0 + 1)) - (parseFloat(lhMin) / (parseFloat(lhMin) * 0 + 1)))} * ( (100vw - ${minvw}) / ${((parseFloat(maxvw) / (parseFloat(maxvw) * 0 + 1)) - (parseFloat(lhMin) / (parseFloat(lhMin) * 0 + 1)))}))`
      }

      function fontSizeMax(key) {
        return key.max
      }

      function fontSizeMin(key) {
        return key.min
      }

      function lineHeightMax(key) {
        return key.lhMax
      }

      function lineHeightMin(key) {
        return key.lhMin
      }

      const fluidSizes = Object.keys(textSizes).map(key => ({
        [`${key}`]: {
          'font-size': fluidMagic(textSizes[key], screen.min, screen.max),
          'line-height': fluidMagicLh(textSizes[key], screen.min, screen.max),
          [`@media (min-width: ${screen.max})`]: {
            'font-size': fontSizeMax(textSizes[key]),
            'line-height': lineHeightMax(textSizes[key]),
          },
          [`@media (max-width: ${screen.min})`]: {
            'font-size': fontSizeMin(textSizes[key]),
            'line-height': lineHeightMin(textSizes[key]),
          }
        },
      }));

      const utilities = Object.assign({}, ...fluidSizes);
      addUtilities(utilities);
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          margin: '0 auto',
          overflow: 'hidden',
          // margin: '0 auto',

          "@screen md": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
            margin: '0 auto',
          },
        },
        ".container-t": {
          maxWidth: "100%",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "3rem",
          paddingBottom: "2rem",
          margin: '0 auto',
          overflow: 'hidden',
          // margin: '0 auto',

          "@screen md": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingTop: "6rem",
            paddingBottom: "2rem",
            margin: '0 auto',
          },
        },
        ".button__spacing": {
          "paddingTop": "1rem",
          "paddingBottom": "0.75rem"
        },
        ".container-blocks": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "104px",
          paddingBottom: "0",
          margin: '0 auto',
          overflow: 'hidden',
          // margin: '0 auto',

          "@screen md": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingTop: "200px",
            paddingBottom: "0",
            margin: '0 auto',
          },
        },
        ".container-blocks-sm": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "48px",
          paddingBottom: "0",
          margin: '0 auto',
          overflow: 'hidden',
          // margin: '0 auto',

          "@screen md": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingTop: "48px",
            paddingBottom: "0",
            margin: '0 auto',
          },
        },
        ".container-base": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "0px",
          paddingBottom: "0px",
          margin: '0 auto',
          overflow: 'hidden',
          // margin: '0 auto',

          "@screen md": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingTop: "0px",
            paddingBottom: "0px",
            margin: '0 auto',
          },
        },
        ".container-sm": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "48px",
          paddingBottom: "48px",
          margin: '0 auto',
          overflow: 'hidden',
          // margin: '0 auto',

          "@screen md": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingTop: "20px",
            paddingBottom: "20px",
            margin: '0 auto',
          },
        },
        ".container-xs": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "18px",
          paddingBottom: "18px",
          margin: '0 auto',
          overflow: 'hidden',
          // margin: '0 auto',

          "@screen md": {
            paddingLeft: "3rem",
            paddingRight: "3rem",
            paddingTop: "18px",
            paddingBottom: "18px",
            margin: '0 auto',
          },
        },
        ".row": {
          width: "100%",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "0px",
          paddingRight: "0px",
        },
        ".row-lg": {
          width: "100%",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "0px",
          paddingRight: "0px",
        },
        "svg": {
          maxWidth: "100%",
        },

      });
    },
  ],
}

