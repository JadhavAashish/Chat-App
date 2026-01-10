import { Link, Stack, Typography } from "@mui/material";
import { Link as ReactRouter } from "react-router-dom";
import React from "react";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";

const Login = () => {
    return (
        <>
            <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
                <Typography variant="h4">Login to Tawk</Typography>
                <Stack direction="row" spacing={0.5}>
                    <Typography variant="body2">New User?</Typography>
                    <Link
                        variant="subtitle2"
                        component={ReactRouter}
                        to="/auth/register"
                    >
                        Create an account
                    </Link>
                </Stack>
                {/* Login Form */}
                <LoginForm />
                {/* Auth Social */}
                <AuthSocial />
            </Stack>
        </>
    );
};

export default Login;
