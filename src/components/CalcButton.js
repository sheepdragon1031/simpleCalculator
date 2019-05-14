import React ,{ Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { updateCalculation, clearCalculation } from '../actions';

const styles = theme => ({
    button: {
        margin: 'auto',
        width: '100%',
      },
});

class caicButton extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    const { classes } = this.props;
      return (
            <Grid item xs={this.props.len?this.props.len:3}>
                <Button 
                    variant={this.props.type?this.props.type:'outlined'} 
                    className={classes.button}
                    style={{ backgroundColor: this.props.bgcolor}}
                    onClick={() => {
                      if(this.props.value == 'C'){
                        return this.props.clearCalculation()
                      }
                      return this.props.updateCalculation(this.props.value, this.props.calculation, this.props.result)
                    }}
                    color={this.props.color?this.props.color:'default'}>
                    {this.props.value}
                </Button>
            </Grid>
      );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCalculation: (inputValue, currentState, currentResult) => dispatch(updateCalculation(inputValue, currentState, currentResult)),
  clearCalculation: () => dispatch(clearCalculation())
});

const mapStateToProps = (state) => ({
  calculation: state.calculation,
  result: state.result
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(caicButton));
