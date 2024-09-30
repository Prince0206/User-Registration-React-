import React from 'react';
import { Alert, Button, Card, Form, Input, Spin, Typography } from "antd";
import { Link } from "react-router-dom";
import loginImage from "../assets/lo.avif";
import useLogin from '../hooks/useLogin'; // Ensure this import is correct

const Login = () => {
    const { error, loading, loginUser } = useLogin();

    const handleLogin = async (values) => {
        await loginUser(values);
    };

    return (
        <Card className="form-container">
            <div style={{ display: 'flex', gap: 'large', alignItems: 'center' }}>
                {/* Image */}
                <div style={{ flex: 1 }}>
                    <img src={loginImage} className="auth-image" alt="Login" />
                </div>
                {/* Form */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography.Title level={3} strong className="title">
                        Sign In
                    </Typography.Title>
                    <Typography.Text type="secondary" strong className="slogan">
                        Unlock your world.
                    </Typography.Text>
                    <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Email!",
                                },
                                {
                                    type: "email",
                                    message: "The input is not a valid Email!",
                                },
                            ]}
                        >
                            <Input size="large" placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input.Password size="large" placeholder="Enter your password" />
                        </Form.Item>

                        {error && (
                            <Alert
                                description={error}
                                type="error"
                                showIcon
                                closable
                                className="alert"
                            />
                        )}
                        <Form.Item>
                            <Button
                                type={loading ? '' : 'primary'}
                                htmlType="submit"
                                size="large"
                                className="btn"
                            >
                                {loading ? <Spin /> : 'Sign In'}
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link to="/">
                                <Button size="large" className="btn">
                                    Create an account
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Card>
    );
};

export default Login;
