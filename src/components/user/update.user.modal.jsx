import { useEffect, useState } from "react";
import { Input, Modal, notification } from "antd";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;
    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
            setId(dataUpdate._id);
        }
    }, [dataUpdate]);

    const handleSubmitBtn = async () => {
        const response = await updateUserAPI(id, fullName, phone);
        if (response.data) {
            notification.success({
                message: "Update user successfully",
                description: "Update user successfully"
            });
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Error create failed",
                description: JSON.stringify(response.message)
            });
        }
    };

    const resetAndCloseModal = () => {
        setFullName("");
        setPhone("");
        setId("");
        setIsModalUpdateOpen(false);
        setDataUpdate(null);
    };

    return (
        <Modal
            title="Update a User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen}
            onOk={handleSubmitBtn}
            onCancel={resetAndCloseModal}
            maskClosable={false}
            okText={"Save"}
        >
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default UpdateUserModal;