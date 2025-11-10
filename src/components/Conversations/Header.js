import React from 'react';
import { Box, Stack, styled, Badge, Avatar, Typography, IconButton, Divider } from "@mui/material"
import { faker } from "@faker-js/faker";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react';
import { useTheme } from "@mui/material";
import { dispatch } from '../../Redux/store';
import { ToogleSidebar } from '../../Redux/slices/app';
import { useDispatch } from 'react-redux';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const Header = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    return (
        <Box
            p={2}
            sx={{
                width: "100%",
                backgroundColor: theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background,
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
            }}
        >
            <Stack
                alignItems={"center"}
                direction={"row"}
                justifyContent={"space-between"}
                sx={{ width: "100%", height: "100%" }}
            >
                <Stack onClick={() => {
                    dispatch(ToogleSidebar());
                }} direction={"row"} spacing={2}>
                    <Box>
                        <StyledBadge>
                            <Avatar alt={"ParabhuDeva"} src={faker.image.avatar()} />
                        </StyledBadge>
                    </Box>
                    <Stack spacing={0.2}>
                        <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
                        <Typography variant="caption">Online</Typography>
                    </Stack>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <IconButton>
                        <VideoCamera />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                    <IconButton>
                        <MagnifyingGlass />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <IconButton>
                        <CaretDown />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Header
