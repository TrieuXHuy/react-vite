import { Button, Drawer, notification } from 'antd';
import { useState } from 'react';
import { updateUserAvatarAPI, upLoadFileAPI } from '../../services/api.service';


const ViewUserDetail = (props) => {
    const { open, setOpen, dataUser, setDataUser, loadUser } = props;

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    const handleOnChangeFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            setPreview(undefined)
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleUpLoadFile = async () => {
        const response = await upLoadFileAPI(selectedFile, "avatar");

        if (response && response.data) {
            const newAvatar = response.data.fileUploaded;
            const resUpdateAvatar =
                await updateUserAvatarAPI(dataUser._id, newAvatar, dataUser.fullName, dataUser.phone);
            if (resUpdateAvatar && resUpdateAvatar.data) {
                setOpen(false);
                setSelectedFile(undefined)
                setPreview(undefined)
                await loadUser();
                notification.success({
                    message: "Upload file successfully",
                    description: "Upload file successfully"
                });
            } else {
                notification.error({
                    message: "Error update avatar failed",
                    description: JSON.stringify(resUpdateAvatar.message)
                });
                return;
            }
        } else {
            notification.error({
                message: "Error upload failed",
                description: JSON.stringify(response.message)
            });
            return;
        }
    }

    return (
        <Drawer
            width={"30vw"}
            title="User Detail"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={() => {
                setOpen(false);
                setDataUser({});
            }}
            open={open}
            maskClosable={false}
        >
            {dataUser ?
                (
                    <>
                        <p>id: {dataUser._id}</p>
                        <br />
                        <p>Full name: {dataUser.fullName}</p>
                        <br />
                        <p>Email: {dataUser.email}</p>
                        <br />
                        <p>Phone number: {dataUser.phone}</p>
                        <br />
                        <p>Avatar:</p>
                        <div
                            style={{
                                marginTop: "10px",
                                height: "100px",
                                width: "150px",
                                border: "1px solid #ccc",
                            }}
                        >
                            <img
                                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataUser.avatar}`}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="btnUpload"
                                style={{
                                    display: "block",
                                    width: "fit-content",
                                    marginTop: "15px",
                                    padding: "5px 10px",
                                    background: "orange",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Upload Avatar
                            </label>

                            <input
                                type="file"
                                hidden id="btnUpload"
                                onChange={handleOnChangeFile}
                            />
                        </div>

                        {preview && (
                            <>
                                <div
                                    style={{
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                        height: "100px",
                                        width: "150px",
                                        border: "1px solid #ccc",
                                    }}
                                >
                                    <img
                                        style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                        src={`${preview}`}
                                    />
                                </div>
                                <Button
                                    type='primary'
                                    onClick={handleUpLoadFile}>
                                    Save
                                </Button>
                            </>
                        )}
                    </>
                ) :
                (
                    <p>No user data</p>
                )
            }
        </Drawer>
    )
}

export default ViewUserDetail;