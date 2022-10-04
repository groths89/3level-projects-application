import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

import Canvas from './Canvas';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink component={Link} to="/" color="inherit">
        Gregory Rothstein
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: 'white'
    },
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    id: 1,
    header: 'Simple Projects',
    description: 'These projects show my basic language skills.'
  }, 
  {
    id: 2,
    header: 'Intermediate Projects',
    description: 'These projects show I can integrate basic language skills with 1 or 2 importnant libraries that help build a project.'
  }, 
  {
    id: 3,
    header:'Capstone Projects',
    description: 'These projects show I can work within an advanced project with many different libraries integrated within a project.'
  }
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              3 Levels Project
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              A collection of projects that shows off technical programming skills
              and the soft skills needed to be an awesome software developer. From a
              simple Digital Clock to an advanced Travel Agent Reservation System and
              everything in between.
            </Typography>
          </Container>
        </div>
        
        <Container className={classes.cardGrid} maxWidth="md">
          <Canvas />
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={12} md={12}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.header}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <hr />
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Software Developer
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
