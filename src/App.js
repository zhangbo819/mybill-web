import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Badge, TabBar, Tabs } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'; // TODO 按需加载

import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import InputBill from './pages/InputBill'

function App() {
  const tabs = [
    {
      key: 'home',
      title: '总体',
      renderComp: () => <InputBill />,
      icon: <AppOutline />,
      // badge: Badge.dot,
    },
    {
      key: 'home2',
      title: '攒钱',
      enderComp: () => <InputBill />,
      icon: <AppOutline />,
      // badge: Badge.dot,
    },
  ]

  const [activeKey, setActiveKey] = useState('home')

  return (
    <div>

      <InputBill storeKey="MBD" style={{ display: activeKey == 'home' ? 'block' : 'none' }} />
      <InputBill storeKey="ACD" style={{ display: activeKey == 'home2' ? 'block' : 'none' }} />

      <TabBar style={{ position: 'fixed', width: '100%', bottom: 0 }} activeKey={activeKey} onChange={setActiveKey}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>

    </div>
  );
}

export default App;
