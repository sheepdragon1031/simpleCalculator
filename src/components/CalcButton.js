import React ,{ Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: 'auto',
        width: '100%',
      },
});

class caicButton extends Component {
  constructor(props) {
      super(props);
      this.state = {  };
  }
  render() {
    const { classes } = this.props;
      return (
            <Grid item xs={this.props.len?this.props.len:3}>
                <Button 
                    variant={this.props.type?this.props.type:'outlined'} 
                    className={classes.button}
                    style={{ backgroundColor: this.props.bgcolor}}
                    color={this.props.color?this.props.color:'default'}>
                    {this.props.value}
                </Button>
            </Grid>
      );
  }
}

export default withStyles(styles)(caicButton);
