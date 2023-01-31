import React, {
  FC,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";
import { Button, Col, List, message, Modal, Row, Statistic } from "antd";
import { ExclamationCircleOutlined, SettingOutlined } from "@ant-design/icons";

const { confirm } = Modal;

export type HyperTreeRef = {
  update: () => void;
};

const Bill: FC<{ storeKey?: string; ref: React.Ref<HyperTreeRef> }> =
  forwardRef(({ storeKey = "" }, ref) => {
    const [data, setData] = useState<string[]>([]);
    const [isShowSetting, setIsShowSetting] = useState(false);

    useImperativeHandle(ref, () => ({
      update,
    }));

    const _getData = () => {
      let data = localStorage.getItem(storeKey) || "";
      let res: string[];

      try {
        res = JSON.parse(data).reverse();
      } catch {
        res = [];
      }
      return res;
    };

    const update = useCallback(() => {
      const data = _getData();

      setData(data);
    },[]);

    const getMax = () => {
      return data.reduce((r, i) => {
        const money = i.split("@")[2];
        try {
          r += eval(money);
        } catch (err) {
          console.log(err, i);
          r += 0;
        }
        return r;
      }, 0);
    };

    const handleCopy = () => {
      const input = document.createElement("input"); // 直接构建input
      input.value = _getData()
        .map((i) => `"${i}"`)
        .reverse()
        .join(","); // 设置内容
      document.body.appendChild(input); // 添加临时实例
      input.select(); // 选择实例内容
      document.execCommand("Copy"); // 执行复制
      document.body.removeChild(input); // 删除临时实例

      message.success({
        // top: 500,
        duration: 2,
        //   maxCount: 3,
        //   rtl: true,
        content: "复制成功",
        onClick: () => setTimeout(() => message.destroy()),
      });
    };

    const clearAll = () => {
      confirm({
        title: "确定要清空吗?",
        icon: <ExclamationCircleOutlined />,
        content: "清空后将无法恢复",
        maskClosable: true,
        onOk: () => {
          return new Promise((resolve) => {
            localStorage.setItem(storeKey, "");
            setData([]);
            resolve(1);
          });
        },
      });
    };

    const handleItem = (item: any, index: number) => {
      // console.log('item, index', item, index)
      confirm({
        title: "您要删除该条数据吗?",
        icon: <ExclamationCircleOutlined />,
        content: "清空后将无法恢复",
        maskClosable: true,
        onOk: () => {
          return new Promise((resolve) => {
            data.splice(index, 1);
            localStorage.setItem(storeKey, JSON.stringify(data));
            setData([...data]);
            resolve(1);
          });
        },
      });
    };

    const renderHeader = () => {
      return (
        <header>
          {isShowSetting ? (
            <SettingOutlined
              className="Setting"
              onClick={() => setIsShowSetting((v) => !v)}
            />
          ) : (
            <Row gutter={24} align="middle" justify="space-around">
              <Col>
                <Button
                  type="primary"
                  onClick={clearAll}
                  disabled={data.length === 0}
                >
                  全部清空
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  onClick={handleCopy}
                  disabled={data.length === 0}
                >
                  复制
                </Button>
              </Col>
            </Row>
          )}

          {data.length !== 0 && (
            <Row
              gutter={24}
              style={{ margin: "24px 0 0 0", padding: "0 24px" }}
            >
              <Col style={{ padding: 0 }} span={8}>
                <h3>日期</h3>
              </Col>
              <Col style={{ padding: 0 }} span={8}>
                <h3>详情</h3>
              </Col>
              <Col style={{ padding: 0 }} span={8}>
                <h3>金额</h3>
              </Col>
            </Row>
          )}
        </header>
      );
    };

    const renderItem = (item: any, index: number) => {
      const [date, details, num] = item.split("@");
      return (
        <List.Item onClick={() => handleItem(item, index)}>
          {/* <Row gutter={24} align="middle"> */}
          <Col span={8}>{date}</Col>
          <Col span={8}>{details}</Col>
          <Col span={8}>{num}</Col>
          {/* </Row> */}
        </List.Item>
      );
    };

    useEffect(() => {
      update();
    }, [update]);

    return (
      <div>
        <List
          size="large"
          header={renderHeader()}
          footer={
            <div style={{ margin: "0 24px" }}>
              <Statistic title="总记" value={getMax()} />
            </div>
          }
          // bordered
          dataSource={data}
          rowKey={(item) => item}
          renderItem={renderItem}
        />
      </div>
    );
  });

export default Bill;
