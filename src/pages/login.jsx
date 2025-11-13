import { Button, Col, Divider, Form, Input, message, notification, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";
import { useState } from "react";

const LoginPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const onFinish = async (values) => {
        setLoading(true);
        const response = await loginAPI(values.email, values.password);
        if (response.data) {
            message.success("Login successful!");
            navigate("/");
        } else {
            notification.error({
                message: "Login Failed",
                description: JSON.stringify(response.message)
            });
        }
        setLoading(false);
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
                <Row justify="center"
                >
                    <Col xs={24} md={16} lg={10}
                        style={{
                            border: "1px solid #f0f0f0",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <div style={{
                            textAlign: "center",
                            fontSize: "18px",
                            marginBottom: "10px",
                            fontWeight: "bolder"
                        }}>
                            Đăng nhập
                        </div>
                        <Form
                            layout="vertical"
                            form={form}
                            onFinish={onFinish}
                        >
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

                            <Row justify={"space-between"} align="middle">
                                <Col>
                                    <Button
                                        loading={loading}
                                        type="primary"
                                        htmlType="submit"
                                        block
                                        style={{ textAlign: "center", }}
                                    >
                                        Login
                                    </Button>
                                </Col>
                                <Col>
                                    <Link to="/">
                                        Go to homepage →
                                    </Link>
                                </Col>
                            </Row>

                            <Divider />
                            <Row justify="center">
                                <Col>
                                    Chưa có tài khoản? <Link to="/register">Đăng ký tại đây</Link>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                </Row>

            </div>
        </>
    );
}

export default LoginPage;