import React, { FC, useCallback, useRef, useState } from "react";
import {
  message,
  Button,
  Input,
  Col,
  Row,
  DatePicker,
  InputNumber,
} from "antd";
import { CarryOutOutlined } from "@ant-design/icons";
import moment from "moment";
import dayjs from 'dayjs';


const Entering: FC<{
  storeKey?: string;
}> = ({ storeKey = "" }) => {
  const [date, setDate] = useState(new Date());
  const [details, setDetails] = useState("");
  const [num, setNum] = useState<string | null>("");

  const refDetails = useRef<any>(null);
  const refNum = useRef<any>(null);

  const handleDatePickerChange = useCallback((e: any, s: string) => {
    // console.log(e.format(), s)
    setDate(new Date(e ? e.format() : Date.now()));
  }, []);

  const onPressEnter = () => {
    // console.log(this.refNum.current)
    refDetails.current?.focus();
  };

  const handleSubmit = () => {
    console.log(date, details, num);

    if (details === "" || num === "") {
      message.error("请输入");
      if (details === "") {
        refDetails.current.focus();
      } else if (num === "") {
        refNum.current.focus();
      }
      return;
    }

    let localData = localStorage.getItem(storeKey) || "";
    let data: {}[];

    try {
      data = JSON.parse(localData);
    } catch {
      data = [];
    }

    if (!Array.isArray(data)) {
      data = [];
    }

    // console.log('data', data)

    data.push(`${date.getMonth() + 1}.${date.getDate()}@${details}@${num}`);

    localStorage.setItem(storeKey, JSON.stringify(data));

    message.success({
      // top: 500,
      type: "success",
      duration: 2,
      //   maxCount: 3,
      //   rtl: true,
      content: "录入成功",
      onClick: () => setTimeout(() => message.destroy()),
    });

    setDetails("");
    setNum("");
    refDetails.current.focus();
  };
  
  console.log('moment(date)', moment(date).format())

  return (
    <div className="Entering">
      <Row gutter={24} style={{ marginTop: 12 }} align="middle">
        <Col span={8}>
          {/* <CarryOutOutlined /> */}
          <h3>日期</h3>
        </Col>
        <Col span={16}>
          <DatePicker defaultValue={dayjs()} onChange={handleDatePickerChange} />
        </Col>
      </Row>

      <Row
        gutter={24}
        style={{ marginTop: 24, marginBottom: 24 }}
        align="middle"
      >
        <Col span={8}>
          <h3>金额</h3>
        </Col>
        <Col span={16}>
          <InputNumber
            ref={refNum}
            onChange={(s) => setNum(s)}
            value={num}
            onPressEnter={onPressEnter}
            autoFocus
          />
        </Col>
      </Row>

      <Row gutter={24} align="middle">
        <Col span={8}>
          <h3>详情</h3>
        </Col>
        <Col span={16}>
          <Input
            ref={refDetails}
            onChange={(e) =>
              setDetails(typeof e === "object" ? e.target.value : e)
            }
            value={details}
            onPressEnter={handleSubmit}
          />
        </Col>
      </Row>

      <Row
        gutter={24}
        align="middle"
        justify="center"
        style={{ marginTop: "24px" }}
      >
        <Button type="primary" onClick={handleSubmit}>
          录入
        </Button>
      </Row>

      {/* <a style={{ position: 'absolute', bottom: '24px', left: '24px' }} href="https://github.com/zhangbo819/code_Resource/blob/master/README.md">github 地址</a> */}
    </div>
  );
};

export default Entering;
