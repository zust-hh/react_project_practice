import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import AppBar from 'material-ui/AppBar'
// import ToolBar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import { Toolbar } from 'material-ui';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
}

class MainAppBar extends React.Component {
  constructor(props) {
    super()
  }

    /* eslint-disable */
    onHomeIconClick = () => {

    }

    createButtonClick = () => {

    }

    loginButtonClick = () => {

    }

    /* eslint-enable */
    render() {
      const { classes } = this.props
      return (
        <div className={classes.root}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton color="white" onClick={this.onHomeIconClick}>
                <HomeIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                        HNode
              </Typography>
              <Button variant="raised" color="accent" onClick={this.createButtonClick}>
                        新建话题
              </Button>
              <Button color="contrast" onClick={this.loginButtonClick}>
                        登陆
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    }
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainAppBar)
