import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useExternalScript } from '../hooks/useExternalScript';

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: 'hsl(240, 3%, 7%)',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    margin: '0',
    padding: '1em',
    fontSize: 'clamp(.5rem, 2.5vmin, 1.5rem)',
  },
  keyboard: {
    display: 'grid',
    gridTemplateColumns: 'repeat(20, minmax(auto, 1.25em))',
    gridAutoRows: '3em',
    gap: '.25em',
    justifyContent: 'center',
  },
  key: {
    fontSize: 'inherit',
    gridColumn: 'span 2',
    border: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(var(--hue, 200), var(--saturation, 1%), calc(var(--lightness-offset, 0%) + var(--lightness, 51%)))',
    color: '#FFFFFF',
    fill: '#FFFFFF',
    textTransform: 'uppercase',
    borderRadius: '.25em',
    cursor: 'pointer',
    userSelect: 'none',
    '&:hover': {
      '--lightness-offset': '10%',
    },
    '&:focus': {
      '--lightness-offset': '10%',
    },
  },
  keyLarge: {
    fontSize: 'inherit',
    gridColumn: 'span 3',
    border: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(var(--hue, 200), var(--saturation, 1%), calc(var(--lightness-offset, 0%) + var(--lightness, 51%)))',
    color: '#FFFFFF',
    fill: '#FFFFFF',
    textTransform: 'uppercase',
    borderRadius: '.25em',
    cursor: 'pointer',
    userSelect: 'none',
    '&:hover': {
      '--lightness-offset': '10%',
    },
    '&:focus': {
      '--lightness-offset': '10%',
    },
    '.correct': {

    }
  },
  guessGrid: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    flexGrow: '1',
    gridTemplateColumns: 'repeat(5, minmax(auto, 4em))',
    gridTemplateRows: 'repeat(6, minmax(auto, 4em))',
    gap: '.25em',
    marginBottom: '1em',
  },
  tile: {
    fontSize: '2em',
    color: '#FFFFFF',
    border: '.05em solid hsl(240, 2%, 23%)',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    transition: 'transform 250ms linear',
    '&[data-state="active"]': {
      borderColor: 'hsl(200, 1%, 34%)'
    },
    '&[data-state="wrong"]': {
      border: 'none',
      backgroundColor: 'hsl(200, 2%, 23%)'
    },
    '&[data-state="wrong-location"]': {
      border: 'none',
      backgroundColor: 'hsl(49, 51%, 47%)'
    },
    '&[data-state="correct"]': {
      border: 'none',
      backgroundColor: 'hsl(115, 29%, 43%)'
    },
  },
  alertContainer: {
    position: 'fixed',
    top: '10vh',
    left: '50vw',
    transform: 'translateX(-50%)',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alert: {
    pointerEvents: 'none',
    backgroundColor: 'hsl(204, 7%, 85%)',
    padding: '.75em',
    borderRadius: '.25em',
    opacity: '1',
    transition: 'opacity 500ms ease-in-out',
    marginBottom: '.5em',
    '&:last-child': {
      marginBottom: '0',
    },
    '&.hide': {
      opacity: '0',
    }
  },
  wrong: {
    '--lightness': '23%'
  },
  wrongLocation: {
    '--hue': '49',
    '--saturation': '51%',
    '--lightness': '47%'
  },
  correct: {
    '--hue': '115',
    '--saturation': '29%',
    '--lightness': '43%'
  },
/*   '@keyframes shake': {
    10: {
        transform: 'translateX(-5%)'
    },
    30: {
        transform: 'translateX(5%);'
    },
    50: {
        transform: 'translateX(-7.5%)'
    },
    70: {
        transform: 'translateX(7.5%)'
    },
    90: {
        transform: 'translateX(-5%)'
    },
    100: {
        transform: 'translateX(0)'
    }
},
shake: {
  animation: 'shake 250ms ease-in-out'
},
flip: {
  transform: 'rotateX(90deg)'
},
'@keyframes dance': {
    20: {
        transform: 'translateY(-50%)'
    },
    40: {
        transform: 'translateY(5%)'
    },
    60: {
        transform: 'translateY(-25%)'
    },

    80: {
        transform: 'translateY(2.5%)'
    },

    90: {
        transform: 'translateY(-5%)'
    },
    100: {
        transform: 'translateY(0)'
    }
  },
  dance: {
    animation: 'dance 500ms ease-in-out'
  }, */
  svg: {
    width: '1.75em',
    height: '1.75em'
  }
}))

export default function Game() {
    const externalScript = '../../js/scripts.js'
    const state = useExternalScript(externalScript)
    const classes = useStyles()


    return (
      <React.Fragment>
        <div className={classes.body}>
            <div className={classes.guessGrid + " guess-grid"} data-guess-grid>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>

            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>

            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>

            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>

            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>

            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
            <div className={classes.tile + " tile"}></div>
        </div>
        <div className={classes.keyboard + " keyboard"} data-keyboard>
            <button className={classes.key + " key"} data-key="Q">Q</button>
            <button className={classes.key + " key"}  data-key="W">W</button>
            <button className={classes.key + " key"}  data-key="E">E</button>
            <button className={classes.key + " key"}  data-key="R">R</button>
            <button className={classes.key + " key"}  data-key="T">T</button>
            <button className={classes.key + " key"}  data-key="Y">Y</button>
            <button className={classes.key + " key"}  data-key="U">U</button>
            <button className={classes.key + " key"}  data-key="I">I</button>
            <button className={classes.key + " key"}  data-key="O">O</button>
            <button className={classes.key + " key"}  data-key="P">P</button>
            <div className="space"></div>
            <button className={classes.key + " key"}  data-key="A">A</button>
            <button className={classes.key + " key"}  data-key="S">S</button>
            <button className={classes.key + " key"}  data-key="D">D</button>
            <button className={classes.key + " key"}  data-key="F">F</button>
            <button className={classes.key + " key"}  data-key="G">G</button>
            <button className={classes.key + " key"}  data-key="H">H</button>
            <button className={classes.key + " key"}  data-key="J">J</button>
            <button className={classes.key + " key"}  data-key="K">K</button>
            <button className={classes.key + " key"}  data-key="L">L</button>
            <div className="space"></div>
            <button className={classes.keyLarge + " key large"} data-enter>Enter</button>
            <button className={classes.key + " key"}  data-key="Z">Z</button>
            <button className={classes.key + " key"}  data-key="X">X</button>
            <button className={classes.key + " key"}  data-key="C">C</button>
            <button className={classes.key + " key"}  data-key="V">V</button>
            <button className={classes.key + " key"}  data-key="B">B</button>
            <button className={classes.key + " key"}  data-key="N">N</button>
            <button className={classes.key + " key"}  data-key="M">M</button>
            <button className={classes.keyLarge + " key large"} data-delete>
                <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
                </svg>
            </button>
        </div>
        <div className={classes.alertContainer} id="game-toaster" data-alert-container></div>
        <div>
          {state === "loading" && <p>Loading...</p>}
        </div>
      </div>
      </React.Fragment>
    );
  }