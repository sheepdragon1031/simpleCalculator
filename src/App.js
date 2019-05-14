import React ,{ Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CaicButton from './components/CalcButton';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const styles = theme => ({
    root:{
      maxWidth: '22rem',
      margin: 'auto'
    },
    paper:{
      padding: '2rem 1rem'
    },
    gridbox:{
    
    }
});

class app extends Component {
  constructor(props) {
      super(props);
      this.state = {  };
  }
  render() {
    const { classes } = this.props;
      return (
        <div className={classes.root} style={{ padding: 20 }}>
        <Paper elevation={1} className={classes.paper} >
            <Grid container className={classes.gridbox} spacing={16}>
              <Grid item xs={12}></Grid>
            </Grid>
            <Grid container className={classes.gridbox} spacing={16}>
                <CaicButton value={1}/>
                <CaicButton value={2}/>
                <CaicButton value={3}/>
                <CaicButton value={'+'} color="secondary" type="contained" bgcolor="#e53935"/>
            </Grid>
            <Grid container className={classes.gridbox}  spacing={16}>
                <CaicButton value={4}/>
                <CaicButton value={5}/>
                <CaicButton value={6}/>
                <CaicButton value={'-'} color="primary" type="contained" bgcolor="#fdd835"/>
            </Grid>
            <Grid container className={classes.gridbox}  spacing={16}>
                <CaicButton value={7}/>
                <CaicButton value={8}/>
                <CaicButton value={9}/>
                <CaicButton value={'*'} color="primary" type="contained" bgcolor="#43a047"/>
            </Grid>
            <Grid container className={classes.gridbox}  spacing={16}>
                <CaicButton value={0} len={6}/>
                <CaicButton value={'C'} color="inherit" type="contained"/>
                <CaicButton value={'/'} color="primary" type="contained" bgcolor="#039be5"/>
            </Grid>
          </Paper>
        </div>
      );
  }
}
const mapDispatchToProps = (dispatch) => ({
  //updateCalculation: (inputValue, currentState, currentResult) => dispatch(updateCalculation(inputValue, currentState, currentResult))
});

const mapStateToProps = (state) => ({
  calculation: state.calculation,
  result: state.result
});
export default withStyles(styles)(app);
