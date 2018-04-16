/* eslint-disable */
import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import queryString from 'query-string'
import { AppState } from '../../store/app-state'
import { resolve } from 'path'
import Container from '../layout/container'
import Tabs, { Tab } from 'material-ui/Tabs'
import List from 'material-ui/List'
import { CircularProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import TopicListItem from './list-item'
import { TopicStore } from '../../store/store'
import { tabs } from '../../util/variable-define'

@inject(stores => {
  return {
    appState: stores.appState,
    topicStore: stores.topicStore
  }
}) @observer

export default class TopicList extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    const tab = this.getTab()
    this.props.topicStore.fetchTopics(tab)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.topicStore.fetchTopics(this.getTab(nextProps.location.search))
    }
  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  getTab(search) {
    search = search || this.props.location.search
    const query = queryString.parse(search)
    return query.tab || 'all'
  }

  changeTab = (e, value) => {
    this.context.router.history.push({
      pathname: '/list',
      search: `?tab=${value}`,
    })
  }

  listItemClick = (topic) => {
    this.context.router.history.push(`/detail/${topic.id}`)
  }

  render() {
    const {
      topicStore
    } = this.props
    const topicList = topicStore.topics
    const syncingTopics = topicStore.syncing
    const tab = this.getTab()

    const topic = {
      title: 'This is title',
      username: 'hh',
      reply_count: 20,
      visit_count: 30,
      create_at: 'sdsadsd',
      tab: 'share',
    }

    return (
      <Container>
        <Helmet>
          <title>This is topic list</title>
          <meta name="description" content="This is description" />
        </Helmet>
        <Tabs value={tab} onChange={this.changeTab}>
          {
            Object.keys(tabs).map((tab) => (
              <Tab label={tabs[tab]} value={tab} />
            ))
          }
        </Tabs>
        <List>
          {
            topicList.map(topic => <TopicListItem onClick={() => this.listItemClick(topic)} topic={topic} />)
          }
        </List>
        {
          syncingTopics ?
            (
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '40px 0',
              }}>
                <CircularProgress color="accent" size={100} />
              </div>
            ) : null
        }
      </Container>
    )
  }
}

TopicList.wrappedComponent.PropTypes = {
  appState: PropTypes.instanceOf(AppState),
  topicStore: PropTypes.instanceOf(TopicStore),
}

TopicList.propTypes = {
  location: PropTypes.object.isRequired,
}
