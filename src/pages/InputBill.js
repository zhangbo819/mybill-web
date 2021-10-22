import React from 'react'

import { Tabs } from 'antd-mobile'

import Bill from '../components/Bill'
import Entering from '../components/Entering'

const { TabPane } = Tabs;

export default class InputBill extends React.PureComponent {
  constructor(props) {
    super(props)

    this.refBill = React.createRef()
  }

  onChange = (activeKey) => {
    // console.log(refBill)
    if (activeKey === '2') {
      this.refBill.current && this.refBill.current.update()
    }
  }

  render() {
    // const { date, details, num } = this.state
    return <div style={this.props.style}>
      <Tabs defaultActiveKey="1" centered onChange={this.onChange}>
        <TabPane title="录入" key="1">
          <Entering storeKey={this.props.storeKey} />
        </TabPane>
        <TabPane title="账本" key="2">
          <Bill storeKey={this.props.storeKey} ref={this.refBill} />
        </TabPane>
      </Tabs>
    </div >
  }
}