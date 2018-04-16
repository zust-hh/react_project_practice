import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {
  inject,
  observer,
} from 'mobx-react'

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

@inject((stores) => {
  return {
    appState: stores.appState,
  }
}) @observer
class MainAppBar extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props) {
    super()
  }

  onHomeIconClick = () => {
    this.context.router.history.push('/list?tab=all')
  }

  createButtonClick = () => {

  }

  loginButtonClick = () => {
    if (this.props.appState.user.isLogin) {
      this.context.router.history.push('/user/info')
    } else {
      this.context.router.history.push('/user/login')
    }
  }

  render() {
    const { classes } = this.props
    const {
      user,
    } = this.props.appState
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
              {
                user.isLogin ? user.info.loginname : '登录'
              }
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

MainAppBar.wrappedComponent.propTypes = {
  appState: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainAppBar)
