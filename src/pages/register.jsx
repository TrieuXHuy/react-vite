import { Button, Col, Divider, Form, Input, notification, Row } from "antd";
import { registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const response = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone
        );
        if (response.data) {
            notification.success({
                message: 'Register Success',
                description: 'You have registered successfully!'
            });
            navigate('/login');
        } else {
            notification.error({
                message: 'Register Failed',
                description: JSON.stringify(response.message)
            });
        }
    };
    return (
        <>
            <div style={{
                width: "100%",
                maxWidth: "1200px",
                height: "100vh",
                maxHeight: "800px",
                margin: "50px auto",
                padding: "20px",
            }}>
                <Row justify="center">
                    <Col xs={24} md={16} lg={10}
                        style={{
                            border: "1px solid #f0f0f0",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <Form
                            layout="vertical"
                            form={form}
                            onFinish={onFinish}
                        >
                            <div style={{
                                textAlign: "center",
                                fontSize: "18px",
                                marginBottom: "10px",
                                fontWeight: "bolder"
                            }}>
                                Đăng Ký
                            </div>
                            <Row >
                                <Col xs={24}>
                                    <Form.Item
                                        label="Full Name"
                                        name="fullName"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!'
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row >
                                <Col xs={24}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your email!',
                                            },
                                            {
                                                type: 'email',
                                                message: 'Please enter a valid email!'
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row >
                                <Col xs={24}>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            }
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row >
                                <Col xs={24}>
                                    <Form.Item
                                        label="Phone number"
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your phone number!',
                                            },
                                            {
                                                pattern: /^\d+$/,
                                                message: 'Phone must contain only digits!'
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        block
                                        style={{ textAlign: "center", }}
                                    >
                                        Register
                                    </Button>
                                </Col>
                            </Row>

                            <Divider />
                            <Row>
                                <Col>
                                    Đã có tài khoản? <Link to="/login">Đăng nhập tại đây</Link>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                </Row>

            </div>
        </>
    );
}

export default RegisterPage;