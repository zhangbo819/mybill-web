import React from 'react'
import { Button, Col, List, message, Modal, Row } from 'antd';


export default class Bill extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isModalVisible: false
        }
    }

    componentDidMount() {
        this.update()
    }

    _getData() {
        let data = localStorage.getItem('MBD')

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
        this.setState({
            isModalVisible: true
        })
    }

    handleOk = () => {
        localStorage.setItem('MBD', '')
        this.setState({ data: [] })
        this.close()
    }

    close = () => this.setState({ isModalVisible: false })

    render() {
        const { data, isModalVisible } = this.state
        return <div>
            <List
                size="large"
                header={<Row gutter={24} align="middle" justify="space-around">
                    <Col>
                        <Button type="primary" onClick={this.clearAll} disabled={data.length === 0}>全部清空</Button>
                    </Col>
                    <Col>
                        <Button type="primary" onClick={this.handleCopy} disabled={data.length === 0}>复制</Button>
                    </Col>
                </Row>}
                // footer={<div>我是Footer</div>}
                // bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />

            <Modal title="Basic Modal" visible={isModalVisible} onCancel={this.close} onOk={this.handleOk}>
                <p>确定要清空吗</p>
            </Modal>
        </div>
    }
}