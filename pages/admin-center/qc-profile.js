import Sidebar from '../../components/admin-sidebar';
import SearchHeader from '../../components/search';
import Link from 'next/link';
import { Table, Button, Dropdown, Menu, Image, Space, Drawer, Row, Col, Input, Select, Checkbox } from 'antd';
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
const { TextArea } = Input;


const ResizableTitle = (props) => {
    const { onResize, width, ...restProps } = props;
    if (!width) {
        return <th {...restProps} />;
    }
    
    return (
        <Resizable
            width={width}
            height={0}
            handle={
                <span
                    className="react-resizable-handle"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                />
            }
            onResize={onResize}
            draggableOpts={{
                enableUserSelectHack: false,
            }}
        >
            <th {...restProps} />
        </Resizable>
    );
};

export default function AllDocuments({ }) {
    
    const [columns, setColumns] = useState([
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            render: name => {
                return <>
                    <h3>{name}</h3>
                </>
            },
            width: 250
        },
        {
            title: 'QC PROFILE NAME',
            dataIndex: 'profileName',
            key: 'profileName',
            render: profileName => {
                return <>
                    <p>{profileName}</p>
                </>
            },
            width: 300
        },
        {
            title: 'CAD FORMAT',
            dataIndex: 'cadFormat',
            key: 'cadFormat',
            render: cadFormat => {
                return <>
                    <p>{cadFormat}</p>
                </>
            },
            width: 100
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                if (status == "Active") {
                    return <span className='status light-green'>{' '}{status}</span>
                }
                else if (status == "Draft") {
                    return <span className='status light-purple'>{' '}{status}</span>
                }
                
            },
            width: 100,
            align: 'center'
        },
        
       
        {
            title: 'ACTION',
            dataIndex: 'action',
            key: 'action',
            render: status => {
                return <>
                    <Space>
                        <Dropdown overlay={menu} trigger={['click']} className="btn-icon-round" placement="bottomRight">
                            <Button className="btn-icon-round">
                                <Image src="/images/dot.svg" alt="Logo" height={4} width={14} preview={false} />
                            </Button>
                        </Dropdown>
                        <Button className="btn-icon-round" onClick={show2}><Image src="/images/eye.svg" alt="Logo" height={11} width={11} preview={false} /></Button>
                    </Space>
                </>
            },
            width: 100,
            align: 'center'
        },
    ]);

    const dataSource = [
        {
            key: '1',
            name: 'NX HQM 1',
            profileName: 'CATIA Adv Checks',
            cadFormat: 'CATIA',
            status: 'Active',
            action: ''
        }
    ];
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <Link href="/">
                            <a>
                                1st menu item
                            </a>
                        </Link>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <Link href="/">
                            <a>
                                2nd menu item
                            </a>
                        </Link>
                    )
                },
                {
                    key: '3',
                    label: (
                        <Link href="/">
                            <a>
                                3rd menu item
                            </a>
                        </Link>
                    )
                }
            ]}
        />
    );
    const handleResize =
        (index) =>
            (_, { size }) => {
                const newColumns = [...columns];
                newColumns[index] = {
                    ...newColumns[index],
                    width: size.width,
                };
                setColumns(newColumns);
            };
    const mergeColumns = columns.map((col, index) => ({
        ...col,
        onHeaderCell: (column) => ({
            width: column.width,
            onResize: handleResize(index),
        }),
    }));
    // drawer1
    const [open1, setOpen1] = useState(false);
    const show1 = () => {
        setOpen1(true);
    };
    const onClose1 = () => {
        setOpen1(false);
    };
    // drawer2
    const [open2, setOpen2] = useState(false);
    const show2 = () => {
        setOpen2(true);
    };
    const onClose2 = () => {
        setOpen2(false);
    };
    return (
        <>
            <div className='main-layout'>
                <Sidebar></Sidebar>
                <div>
                    <header className='header'>
                        <h1>QC Profile</h1>
                        <SearchHeader></SearchHeader>
                        <Space className="header-right">
                            <Button>
                                <Space align="center">
                                    <Image src="/images/export.svg" alt="export" height={11} width={10} preview={false} className="img-export" />
                                    <span>Export</span>
                                </Space>
                            </Button>
                            <Button type="primary" onClick={show1}>Create New</Button>
                            <Drawer title="Create new QC Profile" placement="right" onClose={onClose1} open={open1} width={540} className="custom-drawer">
                                <div className='form-wrap'>
                                    <div className='form-div'>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Name</label>
                                                <Input placeholder="Enter your name" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>QC Profile Name</label>
                                                <Input placeholder="Enter QC profile name" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>CAD Format</label>
                                                <Select
                                                suffixIcon={<Image src='/images/down.svg'></Image>}
                                                    showSearch="true"
                                                    className='custom-select'
                                                    placeholder="Select CAD format"
                                                    size='large'
                                                    options={[
                                                        {
                                                            value: 'CAD format 1',
                                                            label: 'CAD format 1',
                                                        },
                                                        {
                                                            value: 'CAD format 2',
                                                            label: 'CAD format 2',
                                                        }
                                                    ]}
                                                >
                                                </Select>
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Revision</label>
                                                <Input placeholder="Enter" size='large' />
                                            </Col>
                                        </Row>
                                        <Row className='mb-25'>
                                            <Col span="24">
                                                <label className='label'>Description</label>
                                                <TextArea rows={2} placeholder="Enter a Description..." size='large' />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className='form-footer'>
                                        <Space>
                                            <Button>Cancel</Button>
                                            <Button type="primary">Create</Button>
                                        </Space>
                                    </div>
                                </div>
                            </Drawer>
                        </Space>
                    </header>
                    <main className='main-pad'>
                        {/* <Table dataSource={dataSource} columns={columns}  pagination= { 
                                {pageSizeOptions: ['2', '4', '6'], showSizeChanger: true, }
                            }  className="table-1"/> */}

                        <Table
                            components={{
                                header: {
                                    cell: ResizableTitle,
                                },
                            }}
                            pagination= { 
                                {pageSizeOptions: ['2', '4', '6'], showSizeChanger: true, }}
                            columns={mergeColumns}
                            dataSource={dataSource}
                            className="table-1"
                        />
                        {/* <ResizableAntdTable columns={columns} dataSource={dataSource}  pagination= { 
                                    {pageSizeOptions: ['2', '4', '6'], showSizeChanger: true, }
                                }  className="table-1"/> */}

                            <Drawer title="QC Profile Details" placement="right" onClose={onClose2} open={open2} width={480} className="custom-drawer">
                                <div className='drawer-detail-wrap'>
                                    <Row>
                                        <Col span="24">
                                            <h5>Name</h5>
                                            <h4>NX HQM 1</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="12">
                                            <h5>QC Profile Name</h5>
                                            <h4>CATIA Adv Checks</h4>
                                        </Col>
                                        <Col span="12">
                                            <h5>CAD Format</h5>
                                            <h4>CATIA</h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="24">
                                            <h5>Status</h5>
                                            <h4><span class="status light-green"> Active</span></h4>
                                        </Col>
                                    </Row>
                                    <Row className='mt-25'>
                                        <Col span="24">
                                            <h5>Description</h5>
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                        </Col>
                                    </Row>
                                </div>
                            </Drawer>
                    </main>
                </div>
            </div>
        </>

    );
};

