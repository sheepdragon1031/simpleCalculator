import React ,{ Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CaicButton from './components/CalcButton';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { updateCalculation, clearCalculation } from './actions';


const styles = theme => ({
    root:{
      maxWidth: '22rem',
      margin: 'auto'
    },
    paper:{
      padding: '1rem 1rem'
    },
    ans:{
      minHeight: '2rem',
      marginBottom: 0,
      boxShadow: '0 0 0 1px #e0e0e0',
      borderRadius: '2px',
      padding: '.2rem .5rem',
    },
    record:{
      minHeight: '1.5rem',
      marginBottom: 0,
      color: "#9e9e9e",
      padding: '0 .5rem',
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
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom className={classes.ans} >{this.props.result}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom className={classes.record} >{this.props.calculation}</Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.gridbox} spacing={16}>
                <CaicButton value={1}/>
                <CaicButton value={2}/>
                <CaicButton value={3}/>
                <CaicButton value={'+'} color="secondary" type="contained" bgcolor="#ff1744"/>
            </Grid>
            <Grid container className={classes.gridbox}  spacing={16}>
                <CaicButton value={4}/>
                <CaicButton value={5}/>
                <CaicButton value={6}/>
                <CaicButton value={'-'} color="primary" type="contained" bgcolor="#ffea00"/>
            </Grid>
            <Grid container className={classes.gridbox}  spacing={16}>
                <CaicButton value={7}/>
                <CaicButton value={8}/>
                <CaicButton value={9}/>
                <CaicButton value={'*'} color="primary" type="contained" bgcolor="#00e676"/>
            </Grid>
            <Grid container className={classes.gridbox}  spacing={16}>
                <CaicButton value={0} len={6}/>
                <CaicButton value={'C'} color="inherit" type="contained"/>
                <CaicButton value={'/'} color="primary" type="contained" bgcolor="#2196f3"/>
            </Grid>
          </Paper>
        </div>
      );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCalculation: (inputValue, currentState, currentResult) => 
  dispatch(updateCalculation(inputValue, currentState, currentResult)),
  clearCalculation: () => dispatch(clearCalculation())
});

const mapStateToProps = (state) => ({
  calculation: state.calculation,
  result: state.result
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(app));
