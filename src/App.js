// import logo from './logo.svg';
import './App.css';
import { Tabs } from 'antd';

import Bill from './components/Bill'
import Entering from './components/Entering'

const { TabPane } = Tabs;

function App() {
  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="录入" key="1">
          <Entering />
        </TabPane>
        <TabPane tab="账本" key="2">
          <Bill />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
