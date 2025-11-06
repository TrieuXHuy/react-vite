import { Drawer } from 'antd';


const ViewUserDetail = (props) => {
    const { open, setOpen, dataUser, setDataUser } = props;

    return (
        <Drawer
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