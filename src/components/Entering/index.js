import React from 'react'
import { message, Button, Input, Col, Row, DatePicker, InputNumber } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import moment from 'moment';


export default class Entering extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date(),
            details: '',
            num: '',
        }
        this.refDetails = React.createRef()
        this.refNum = React.createRef()
    }

    handleInput = key => e => {
        this.setState({ [key]: typeof e === 'object' ? e.target.value : e })
    }

    onPressEnter = () => {
        // console.log(this.refNum.current)
        this.refDetails.current.focus()
    }

    handleDatePickerChange = (e, s) => {
        // console.log(e.format(), s)
        this.setState({ date: new Date(e ? e.format() : Date.now()) })
    }

    handleSubmit = () => {
        const { date, details, num } = this.state

        console.log(date, details, num)

        if (details === '' || num === '') {
            message.error('请输入')
            if (details === '') {
                this.refDetails.current.focus()
            } else if (num === '') {
                this.refNum.current.focus()
            }
            return
        }

        let data = localStorage.getItem(this.props.storeKey)

        try {
            data = JSON.parse(data)
        } catch {
            data = []
        }

        if (!Array.isArray(data)) {
            data = []
        }

        // console.log('data', data)

        data.push(`${date.getMonth() + 1}.${date.getDate()}@${details}@${num}`)

        localStorage.setItem(this.props.storeKey, JSON.stringify(data))

        message.success({
            // top: 500,
            duration: 2,
            maxCount: 3,
            rtl: true,
            content: '录入成功',
            onClick: () => setTimeout(() => message.destroy())
        });

        this.setState({
            details: '',
            num: ''
        })
        this.refDetails.current.focus()
    }

    render() {
        const { date, details, num } = this.state
        return <div className="Entering">
            <Row gutter={24} style={{ marginTop: '12px' }} align="middle">
                <Col span={8}>
                    {/* <CarryOutOutlined /> */}
                    <h3>日期</h3>
                </Col>
                <Col span={16}>
                    <DatePicker value={moment(date)} onChange={this.handleDatePickerChange} />
                </Col>
            </Row>

            <Row gutter={24} style={{ marginTop: '24px', marginBottom: '24px' }} align="middle">
                <Col span={8}>
                    <h3>金额</h3>
                </Col>
                <Col span={16}>
                    <InputNumber ref={this.refNum} onChange={this.handleInput('num')} value={num} onPressEnter={this.onPressEnter} autoFocus />
                </Col>
            </Row>

            <Row gutter={24} align="middle">
                <Col span={8}>
                    <h3>详情</h3>
                </Col>
                <Col span={16}>
                    <Input ref={this.refDetails} onChange={this.handleInput('details')} value={details} onPressEnter={this.handleSubmit} />
                </Col>
            </Row>


            <Row gutter={24} align="middle" justify="center" style={{ marginTop: '24px' }}>
                <Button type="primary" onClick={this.handleSubmit}>录入</Button>
            </Row>

            {/* <a style={{ position: 'absolute', bottom: '24px', left: '24px' }} href="https://github.com/zhangbo819/code_Resource/blob/master/README.md">github 地址</a> */}

        </div >
    }
}