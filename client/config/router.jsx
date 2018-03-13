import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} exact key="first" />, // exact 用于严格匹配path，防止/detail也匹配/
  <Route path="/list" component={TopicList} key="list" />,
  <Route path="/detail" component={TopicDetail} key="detail" />,
]
