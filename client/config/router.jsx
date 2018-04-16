import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'
import TestApi from '../views/test/api-test'
import UserLogin from '../views/user/login'
import UserInfo from '../views/user/info'

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} exact key="first" />, // exact 用于严格匹配path，防止/detail也匹配/
  <Route path="/list" component={TopicList} key="list" />,
  <Route path="/detail/:id" component={TopicDetail} key="detail" />,
  <Route path="/user/login" exact component={UserLogin} key="login" />,
  <Route path="/user/info" exact component={UserInfo} key="info" />,
  <Route path="/test" component={TestApi} key="test" />,
]
