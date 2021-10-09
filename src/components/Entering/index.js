import React from 'react'
import { message, Button, Input, Col, Row, DatePicker } from 'antd';
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

    handleInput = key => e => this.setState({ [key]: e.target.value })

    onPressEnter = () => {
        // console.log(this.refNum.current)
        this.refNum.current.focus()
    }

    handleSubmit = () => {
        const { date, details, num } = this.state

        console.log(date, details, num)

        if (details === '' || num === '') {
            message.error('请输入')
            return
        }

        let data = localStorage.getItem('MBD')

        try {
            data = JSON.parse(data)
        } catch {
            data = []
        }

        // console.log('data', data)

        data.push(`${date.getMonth() + 1}.${date.getDate()}@${details}@${num}`)

        localStorage.setItem('MBD', JSON.stringify(data))

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
            <Row gutter={24} align="middle">
                <Col span={8}>
                    <h3>日期</h3>
                </Col>
                <Col span={16}>
                    <DatePicker value={moment(date)} />
                </Col>
            </Row>

            <Row gutter={24} align="middle">
                <Col span={8}>
                    <h3>详情</h3>
                </Col>
                <Col span={16}>
                    <Input ref={this.refDetails} onChange={this.handleInput('details')} autoFocus value={details} onPressEnter={this.onPressEnter} />
                </Col>
            </Row>

            <Row gutter={24} align="middle">
                <Col span={8}>
                    <h3>金额</h3>
                </Col>
                <Col span={16}>
                    <Input ref={this.refNum} onChange={this.handleInput('num')} value={num} onPressEnter={this.handleSubmit} />
                </Col>
            </Row>

            <Row gutter={24} align="middle" justify="center" style={{ marginTop: '10px' }}>
                <Button type="primary" onClick={this.handleSubmit}>录入</Button>
            </Row>

        </div >
    }
}