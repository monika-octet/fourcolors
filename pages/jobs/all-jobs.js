import Sidebar from '../../components/sidebar';
import SearchHeader from '../../components/search';
import Link from 'next/link';
import { Table, Button, Dropdown, Menu, Image, Space } from 'antd';
import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import { useRouter } from 'next/router';

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
    const router = useRouter();
    function goToNewJob() {
        router.push('/jobs/new-job');
    };
    const [columns, setColumns] = useState([
        {
            title: 'JOB DETAILS',
            dataIndex: 'jobdetail',
            key: 'jobdetail',
            render: jobdetail => {
                return <>
                    
                    <Link href="#"><a><h3>{jobdetail.jobId}</h3></a></Link>
                    <p>{jobdetail.mainTitle}</p>
                    <p>{jobdetail.date}</p>
                </>
            },
            width: 250
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                if (status == "Processing") {
                    return <span className='status dark-purple'>{' '}{status}</span>
                }
                else if (status == "Draft") {
                    return <span className='status light-purple'>{' '}{status}</span>
                }
                else if (status == "OFTP Ready") {
                    return <span className='status dark-green'>{' '}{status}</span>
                }
                else if (status == "Cancelled") {
                    return <span className='status red'>{' '}{status}</span>
                }
                else if (status == "Sent") {
                    return <span className='status blue'>{' '}{status}</span>
                }
                else if (status == "Received") {
                    return <span className='status light-green'>{' '}{status}</span>
                }
            },
            width: 250,
            align: 'center'
        },
        {
            title: 'RECEIVER / COMPANY',
            dataIndex: 'receiver',
            key: 'receiver',
            render: receiver => {
                return receiver.map((rc) => <p className='text-dark fw-500' key={rc.id}>{rc}</p>)
            },
            width: 200
        },
        {
            title: 'INITIATOR / COMPANY',
            dataIndex: 'initiator',
            key: 'initiator',
            render: initiator => {
                return <p className='text-dark fw-500'>{initiator}</p>
            },
            width: 200
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
                        <Link href="job-details"><a><Button className="btn-icon-round"><Image src="/images/eye.svg" alt="Logo" height={11} width={11} preview={false} /></Button></a></Link>
                    </Space>
                </>
            },
            width: 100
        },
    ]);

    const dataSource = [
        {
            key: '1',
            jobdetail: {
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Processing',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
            action: ''
        },
        {
            key: '2',
            jobdetail: {
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Draft',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
            action: ''
        },
        {
            key: '3',
            jobdetail: {
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'OFTP Ready',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
            action: ''
        },
        {
            key: '4',
            jobdetail: {
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Cancelled',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
            action: ''
        },
        {
            key: '5',
            jobdetail: {
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Sent',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
            action: ''
        },
        {
            key: '6',
            jobdetail: {
                jobId: 'Job0000024',
                mainTitle: 'TC Job Document Item',
                date: '11 Apr, 2022; 05:57'
            },
            status: 'Received',
            receiver: ['Wolfix Cai /  Four Colors', 'Ashutosh Palekar /  FourColors Ply'],
            initiator: 'User DX / External Co. 1',
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
    return (
        <>
            <div className='main-layout'>
                <Sidebar></Sidebar>
                <div>
                    <header className='header'>
                        <h1>All Jobs</h1>
                        <SearchHeader></SearchHeader>
                        <Space className="header-right">
                            <Button>
                                <Space align="center">
                                    <Image src="/images/export.svg" alt="export" height={11} width={10} preview={false} className="img-export" />
                                    <span>Export</span>
                                </Space>
                            </Button>
                            <Button type="primary" onClick={goToNewJob}>New Job</Button>
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


                    </main>
                </div>
            </div>
        </>

    );
};

