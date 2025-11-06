import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Table } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';

const UserTable = (props) => {
    const { dataUsers, loadUser } = props;

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const [open, setOpen] = useState(false);
    const [dataUser, setDataUser] = useState({});

    const confirm = async (id) => {
        const response = await deleteUserAPI(id);
        if (response.data) {
            notification.success({
                message: "Delete user successfully",
                description: "Delete user successfully"
            });
            await loadUser();
        } else {
            notification.error({
                message: "Error create failed",
                description: JSON.stringify(response.message)
            });
        }
    };

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#'
                        onClick={() => {
                            setDataUser(record);
                            setOpen(true);
                        }}
                    >
                        {record._id}
                    </a>
                )
            }

        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <EditOutlined
                            onClick={() => {
                                setDataUpdate(record);
                                setIsModalUpdateOpen(true)
                            }}
                            style={{ cursor: "pointer", color: "orange" }} />

                        <Popconfirm
                            title="Delete User"
                            description="Are you sure to delete this user?"
                            onConfirm={() => confirm(record._id)}
                            // onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteOutlined
                                style={{ cursor: "pointer", color: "red" }}
                                danger
                            />
                        </Popconfirm>
                    </div>
                </>
            ),
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />

            <ViewUserDetail
                open={open}
                setOpen={setOpen}
                dataUser={dataUser}
            />
        </>
    );
};

export default UserTable;