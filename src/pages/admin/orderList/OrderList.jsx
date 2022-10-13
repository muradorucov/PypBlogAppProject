import {orderNetwork} from 'network/requests/orderNetwork'
import './OrderList.css'
import React, {useEffect, useRef, useState} from 'react'
import {SearchOutlined} from '@ant-design/icons'
import {Button, Input, Space, Table} from 'antd'
import DetailsModal from './modal/DetailsModal'
import Highlighter from 'react-highlight-words'
import moment from 'moment'

const OrderList = () => {
	const [orders, setOrders] = useState([])
	const [searchText, setSearchText] = useState('')
	const [searchedColumn, setSearchedColumn] = useState('')
	const [record, setRecord] = useState(null)
	const searchInput = useRef(null)

	const getOrders = () => {
		orderNetwork.getAllOrders().then((data) => {
			setOrders(data)
		})
	}
	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm()
		setSearchText(selectedKeys[0])
		setSearchedColumn(dataIndex)
	}

	const handleReset = (clearFilters) => {
		clearFilters()
		setSearchText('')
	}
	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({
			                 setSelectedKeys,
			                 selectedKeys,
			                 confirm,
			                 clearFilters,
		                 }) => (
			<div
				style={{
					padding: 8,
				}}
			>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						marginBottom: 8,
						display: 'block',
					}}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined/>}
						size="small"
						style={{
							width: 90,
						}}
					>
						Search
					</Button>
					<Button
						onClick={() => clearFilters && handleReset(clearFilters)}
						size="small"
						style={{
							width: 90,
						}}
					>
						Reset
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							confirm({
								closeDropdown: false,
							})
							setSearchText(selectedKeys[0])
							setSearchedColumn(dataIndex)
						}}
					>
						Filter
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? '#1890ff' : undefined,
				}}
			/>
		),
		onFilter: (value, record) =>
			record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100)
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: '#ffc069',
						padding: 0,
					}}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ''}
				/>
			) : (
				text
			),
	})
	const columns = [
		{
			title: 'Id',
			dataIndex: 'id',
			key: 'id',
			width: '10%',
			sorter: (a, b) => a.id - b.id,
		},

		{
			title: 'shipName',
			dataIndex: 'shipName',
			key: 'shipName',
			width: '20%',
			sorter: (a, b) => a.shipName.length - b.shipName.length,
			...getColumnSearchProps('shipName'),
		},
		{
			title: 'orderDate',
			dataIndex: 'orderDate',
			key: 'orderDate',
			width: '20%',
			render: (date) => moment(`${date}`).format('YYYY-MM-DD'),
			sorter: (a, b) => moment(a.orderDate).unix() - moment(b.orderDate).unix(),
		},
		{
			title: 'customerId',
			dataIndex: 'customerId',
			key: 'customerId',
			width: '20%',
			...getColumnSearchProps('customerId'),
		},
		{
			title: 'Street',
			dataIndex: 'shipAddress',
			key: 'shipAddress',
			sorter: (a, b) =>
				a.shipAddress.street.length - b.shipAddress.street.length,
			sortDirections: ['descend', 'ascend'],
			render: (shipAddress, record) => <p>{shipAddress.street}</p>,
		},
		{
			title: 'City',
			dataIndex: 'shipAddress',
			key: 'shipAddress',
			sorter: (a, b) => a.shipAddress.city.length - b.shipAddress.city.length,
			sortDirections: ['descend', 'ascend'],
			render: (shipAddress, record) => <p>{shipAddress.city}</p>,
		},
		{
			title: 'Detail',
			render: () => <DetailsModal rowData={record}/>,
		},
	]
	useEffect(() => {
		getOrders()
	}, [])

	return (
		<div style={{width: '70%', margin: 'auto', paddingBottom: '30px'}}>
			<div className="orders__header">
				<h1 style={{alignSelf: 'center'}}>Orders</h1>
			</div>
			<Table
				columns={columns}
				dataSource={orders}
				onRow={(record, rowIndex) => {
					return {
						onMouseEnter: (event) => {
							setRecord(record)
						},
					}
				}}
			/>
		</div>
	)
  return (
    <div style={{ width: '70%', margin: 'auto', paddingBottom: '30px' }}>
      <div className="orders__header">
        <h1 style={{ alignSelf: 'center' }}>Orders</h1>
      </div>
      <Table
        columns={columns}
        dataSource={orders}
        onRow={(record, rowIndex) => {
          return {
            onMouseEnter: (event) => {
              setRecord(record)
            },
          }
        }}
      />
    </div>
  )
}

export default OrderList
