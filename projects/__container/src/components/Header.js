import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.background.paper
        : theme.palette.background.paper,
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Header({ signedIn, onSignOut }) {
  const classes = useStyles();

  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            App
          </Typography>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic" as={NavLink}>
                Menu
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>Level 1</Dropdown.Header>
                <Dropdown.ItemText><strong>Projects</strong></Dropdown.ItemText>
                <LinkContainer to="digitalclock">
                  <Dropdown.Item>Digital Clock App</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="recipes">
                  <Dropdown.Item>Recipes App</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="timestablegenerator">
                  <Dropdown.Item>Times Table Generator</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="palindrome">
                 <Dropdown.Item>Is A Palindrome</Dropdown.Item>
                </LinkContainer>
                <Dropdown.ItemText><strong>Games</strong></Dropdown.ItemText>
                <LinkContainer to="rockpaperscissors">
                  <Dropdown.Item>Rock Paper Scissors Game</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="whackamole">
                  <Dropdown.Item>Whack A Mole Game</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="memory">
                  <Dropdown.Item>Memory Game</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="connectfour">
                  <Dropdown.Item>Connect Four Game</Dropdown.Item>
                </LinkContainer>
                <Dropdown.Divider />
                <Dropdown.Header>Level 2</Dropdown.Header>
                <Dropdown.ItemText><strong>Projects</strong></Dropdown.ItemText>
                <LinkContainer to="calculator">
                  <Dropdown.Item>Calculator App</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="flashcard">
                  <Dropdown.Item>Flash Card App</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="webscraper">
                  <Dropdown.Item>Web Scraper</Dropdown.Item>
                </LinkContainer>
                <Dropdown.ItemText><strong>Games</strong></Dropdown.ItemText>
                <LinkContainer to="spaceinvaders">
                  <Dropdown.Item>Space Invaders Game</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="frogger">
                  <Dropdown.Item>Frogger Game</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="breakout">
                  <Dropdown.Item>Breakout Game</Dropdown.Item>
                </LinkContainer>
                <Dropdown.Divider />
                <Dropdown.Header>Level 3</Dropdown.Header>
                <Dropdown.ItemText><strong>Projects</strong></Dropdown.ItemText>
                <LinkContainer to="travelagent">
                  <Dropdown.Item>Travel Agent Reservation System</Dropdown.Item>
                </LinkContainer>
                <LinkContainer to="neuralnetwork">
                  <Dropdown.Item>Self Driving Car Neural Network</Dropdown.Item>
                </LinkContainer>
                <Dropdown.ItemText><strong>Games</strong></Dropdown.ItemText>
                <LinkContainer to="wordle">
                  <Dropdown.Item>Wordle</Dropdown.Item>
                </LinkContainer>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div></div>
{/*           <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to={signedIn ? '/' : '/auth/signin'}
            onClick={onClick}
          >
            {signedIn ? 'Logout' : 'Login'}
          </Button> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
