import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Tabs } from 'antd';

import Bill from './components/Bill'
import Entering from './components/Entering'

const { TabPane } = Tabs;

function App() {
  const refBill = React.createRef()
  const onChange = (activeKey) => {
    // console.log(refBill)
    if (activeKey === '2') {
      refBill.current && refBill.current.update()
    }
  }
  return (
    <div>
      <Tabs defaultActiveKey="1" centered onChange={onChange}>
        <TabPane tab="录入" key="1">
          <Entering />
        </TabPane>
        <TabPane tab="账本" key="2">
          <Bill ref={refBill} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
