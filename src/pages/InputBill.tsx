import React, { CSSProperties, FC, useRef } from "react";

import { Tabs } from "antd-mobile";

import Bill, { HyperTreeRef } from "../components/Bill";
import Entering from "../components/Entering";

const { Tab } = Tabs;

const InputBill: FC<{
  style?: CSSProperties;
  storeKey?: string;
}> = ({ style, storeKey }) => {
  const refBill = useRef<HyperTreeRef>(null);
  const onChange = (activeKey: string) => {
    // console.log(refBill)
    if (activeKey === "2") {
      refBill.current && refBill.current.update();
    }
  };
  return (
    <div style={style}>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <Tab title="录入" key="1">
          <Entering storeKey={storeKey} />
        </Tab>
        <Tab title="账本" key="2">
          <Bill storeKey={storeKey} ref={refBill} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default InputBill;

// class InputBill extends React.PureComponent {
//   refBill: any
//   constructor(props: {}) {
//     super(props)

//     this.refBill = React.createRef()
//   }

//   onChange = (activeKey: string) => {
//     // console.log(refBill)
//     if (activeKey === '2') {
//       this.refBill.current && this.refBill.current.update()
//     }
//   }

//   render() {
//     // const { date, details, num } = this.state
//     return <div style={this.props.style}>
//       <Tabs defaultActiveKey="1" centered onChange={this.onChange}>
//         <Tab title="录入" key="1">
//           <Entering storeKey={this.props.storeKey} />
//         </Tab>
//         <Tab title="账本" key="2">
//           <Bill storeKey={this.props.storeKey} ref={this.refBill} />
//         </Tab>
//       </Tabs>
//     </div >
//   }
// }
