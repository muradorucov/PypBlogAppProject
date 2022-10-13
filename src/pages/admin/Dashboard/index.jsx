import React from 'react'
import PieChart from './pie-chart'
import {Col, Row} from 'antd';
import LineChart from './line-chart';


const Dashboard = () => {
	return (
		<>
			<Row style={{
				paddingTop: 30, height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
				<Col span={13} offset={1}>
					<h1 style={{textAlign: 'center'}}>Orders Line Chart by Order Date and Unit Price </h1>
					<LineChart/>
				</Col>
				<Col span={7} offset={2}>
					<h1 style={{textAlign: 'center'}}>Orders Pie Chart by Order Date </h1>
					<PieChart/>
				</Col>
			</Row>
		</>
	)
}

export default Dashboard