import React, { Component } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Demo from './pages/Demo/Demo';
import Home from './pages/Home/Home';
/* 全局路由组件 */
class App extends Component {
  render() {
    return (
      /* hash router部署项目时服务器不用配置 */
      <HashRouter>

        <Routes>
          <Route path='/home' element={<Home />}></Route>
          {/* 示例 */}
          <Route path='/demo' element={<Demo />}></Route>
          <Route path='*' element={<Navigate to="/home" />}>
          </Route>
        </Routes>
      </HashRouter>
    );
  }
}

export default App;