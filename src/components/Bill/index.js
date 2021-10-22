import React from 'react'
import { Button, Col, List, message, Modal, Row, Statistic } from 'antd';
import { ExclamationCircleOutlined, SettingOutlined } from '@ant-design/icons';

const { confirm } = Modal;


export default class Bill extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isShowSetting: true
        }
    }

    componentDidMount() {
        this.update()
    }

    _getData() {
        let data = localStorage.getItem(this.props.storeKey)

        try {
            data = JSON.parse(data).reverse()
        } catch {
            data = []
        }
        return data
    }

    update = () => {
        const data = this._getData()

        this.setState({ data })
    }

    getMax = () => {
        return this.state.data.reduce((r, i) => {
            const money = i.split('@')[2]
            try {
                r += eval(money)
            } catch (err) {
                console.log(err, i)
                r += 0
            }
            return r
        }, 0)
    }

    handleCopy = () => {
        const input = document.createElement("input"); // 直接构建input
        input.value = this._getData().map(i => `"${i}"`).join(','); // 设置内容
        document.body.appendChild(input); // 添加临时实例
        input.select(); // 选择实例内容
        document.execCommand("Copy"); // 执行复制
        document.body.removeChild(input); // 删除临时实例

        message.success({
            // top: 500,
            duration: 2,
            maxCount: 3,
            rtl: true,
            content: '复制成功',
            onClick: () => setTimeout(() => message.destroy())
        });
    }

    clearAll = () => {
        confirm({
            title: '确定要清空吗?',
            icon: <ExclamationCircleOutlined />,
            content: '清空后将无法恢复',
            maskClosable: true,
            onOk: () => {
                return new Promise((resolve) => {
                    localStorage.setItem(this.props.storeKey, '')
                    this.setState({ data: [] })
                    resolve()
                })
            }
        });
    }

    handleItem = (item, index) => {
        // console.log('item, index', item, index)
        confirm({
            title: '您要删除该条数据吗?',
            icon: <ExclamationCircleOutlined />,
            content: '清空后将无法恢复',
            maskClosable: true,
            onOk: () => {
                return new Promise((resolve) => {
                    const { data } = this.state
                    data.splice(index, 1)
                    localStorage.setItem(this.props.storeKey, JSON.stringify(data))
                    this.setState({ data: [...data] })
                    resolve()
                })
            }
        });
    }

    renderHeader = () => {
        const { data, isShowSetting } = this.state
        return <header>
            {isShowSetting ?
                <SettingOutlined className="Setting" onClick={() => this.setState({ isShowSetting: !this.state.isShowSetting })} /> :
                <Row gutter={24} align="middle" justify="space-around">
                    <Col>
                        <Button type="primary" onClick={this.clearAll} disabled={data.length === 0}>全部清空</Button>
                    </Col>
                    <Col>
                        <Button type="primary" onClick={this.handleCopy} disabled={data.length === 0}>复制</Button>
                    </Col>
                </Row>}

            {data.length !== 0 && <Row gutter={24} style={{ margin: '24px 0 0 0', padding: '0 24px' }}>
                <Col style={{ padding: 0 }} span={8}><h3>日期</h3></Col>
                <Col style={{ padding: 0 }} span={8}><h3>详情</h3></Col>
                <Col style={{ padding: 0 }} span={8}><h3>金额</h3></Col>
            </Row>}
        </header>
    }

    renderItem = (item, index) => {
        const [date, details, num] = item.split('@')
        return <List.Item onClick={this.handleItem.bind(this, item, index)}>
            {/* <Row gutter={24} align="middle"> */}
            <Col span={8}>{date}</Col>
            <Col span={8}>{details}</Col>
            <Col span={8}>{num}</Col>
            {/* </Row> */}
        </List.Item>
    }

    render() {
        const { data } = this.state
        return <div>
            <List
                size="large"
                header={this.renderHeader()}
                footer={<div style={{ margin: '0 24px' }}><Statistic title="总记" value={this.getMax()} /></div>}
                // bordered
                dataSource={data}
                rowKey={item => item}
                renderItem={this.renderItem}
            />
        </div>
    }
}