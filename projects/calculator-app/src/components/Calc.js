import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useExternalScript } from '../hooks/useExternalScript';

const useStyles = makeStyles((theme) => ({
        '@global': {
            body: {
                overflow: 'hidden'
            }
        },
        body: {
            backgroundColor: '#0f3158',
            width: '100%',
            height: '100vh',
            overflow: 'hidden'
        },
        wrapper: {
            margin: '0 auto',
            width: '18em'
        },
        input: {
            outline: '0',
            position: 'relative',
            left: '5px',
            top: '5px',
            border: '0',
            color: '#495069',
            backgroundColor: 'hsl(var(--hue, 0), var(--saturation, 0%), calc(var(--lightness-offset, 0%) + var(--lightness, 74%)))',
            width: '60px',
            height: '50px',
            float: 'left',
            margin: '5px',
            fontSize: '20px',
            boxShadow: '0 4px rgba(0,0,0,0.2)',
        },
        operator: {
            outline: '0',
            position: 'relative',
            left: '5px',
            top: '5px',
            border: '0',
            color: '#495069',
            float: 'left',
            backgroundColor: 'hsl(var(--hue, 36), var(--saturation, 93%), calc(var(--lightness-offset, 0%) + var(--lightness, 54%)))',
            position: 'relative',
            display: 'block',
            width: '60px',
            height: '50px',
            marginBottom: '15px',
            margin: '5px',
            fontSize: '20px',
            boxShadow: '0 4px rgba(0,0,0,0.2)',
        },
        clear: {
            outline: '0',
            position: 'relative',
            left: '5px',
            top: '5px',
            border: '0',
            color: '#495069',
            float: 'left',
            position: 'relative',
            display: 'block',
            backgroundColor: 'hsl(var(--hue, 354), var(--saturation, 87%), calc(var(--lightness-offset, 0%) + var(--lightness, 58%)))',
            width: '60px',
            height: '50px',
            float: 'left',
            marginBottom: '15px',
            margin: '5px',
            fontSize: '20px',
            boxShadow: '0 4px rgba(0,0,0,0.2)',
        },
        window: {
            outline: '0',
            position: 'relative',
            left: '5px',
            top: '5px',
            border: '0',
            backgroundColor: '#bcdafd',
            width: '92%',
            height: '50px',
            marginBottom: '15px',
            margin: '5px',
            fontSize: '20px',
            boxShadow: '0 4px rgba(0,0,0,0.2)',
        }
}))

export default function Calc() {
    const externalScript = '../../js/scripts.js'
    const state = useExternalScript(externalScript)
    const classes = useStyles()

    return(
        <React.Fragment>
            <div className={classes.body}>
                <div className={classes.wrapper + " wrapper"}>
                    <input name="window" className={classes.window + " window"} readOnly />
                    <input className={classes.input} type="button" name="one" value="1" />
                    <input className={classes.input} type="button" name="two" value="2" />
                    <input className={classes.input} type="button" name="three" value="3" />
                    <input className={classes.operator + " operator"} type="button" name="plus" value="+" />
                    <br />
                    <input className={classes.input} type="button" name="four" value="4" />
                    <input className={classes.input} type="button" name="five" value="5" />
                    <input className={classes.input} type="button" name="six" value="6" />
                    <input className={classes.operator + " operator"} type="button" name="minus" value="-" />
                    <br />
                    <input className={classes.input} type="button" name="seven" value="7" />
                    <input className={classes.input} type="button" name="eight" value="8" />
                    <input className={classes.input} type="button" name="nine" value="9" /> 
                    <input className={classes.operator + " operator"} type="button" name="times" value="x" />
                    <br />
                    <input className={classes.clear} type="button" id="clear" name="clear" value=" C " />
                    <input className={classes.input} type="button" name="zero" value="0" />
                    <input className={classes.input} type="button" name="doit" value=" = " />
                    <input className={classes.operator + " operator"} type="button" name="div" value="/" />
                    <br />      
                </div>
            </div>
        </React.Fragment>
    )
}