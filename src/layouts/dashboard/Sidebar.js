import React, { useState } from 'react';
import { Box, Stack, IconButton, Avatar, Divider, styled, Switch, Menu, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material';
import useSettings from '../../hooks/useSettings';
import { SettingsContext } from '../../contexts/SettingsContext';
import { Nav_Buttons, Profile_Menu } from '../../data';
import Logo from '../../assets/Images/logo.ico';
import { Gear } from "phosphor-react";
import { faker } from '@faker-js/faker';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(20px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#1890ff',
                ...theme.applyStyles('dark', {
                    backgroundColor: '#177ddc',
                }),
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 16,
        height: 16,
        borderRadius: 8,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 20 / 2,
        opacity: 1,
        backgroundColor: 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
        ...theme.applyStyles('dark', {
            backgroundColor: 'rgba(255,255,255,.35)',
        }),
    },
}));

const Sidebar = () => {
    const theme = useTheme();
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings(SettingsContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                height: "100vh",
                width: 100
            }}>
            <Stack
                direction='column'
                alignItems="center"
                justifyContent="space-between"
                sx={{ height: '100%' }}
                spacing={3}>
                <Stack alignItems="center" p={2} spacing={4}>
                    <Box
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: 64,
                            width: 64,
                            borderRadius: 1.5
                        }}>
                        <img src={Logo} alt={'Chat app Logo'} />
                    </Box>
                    <Stack
                        sx={{ width: "max-content" }}
                        direction="column"
                        alignItems="center"
                        spacing={3}
                    >
                        {Nav_Buttons.map((el) =>
                            el.index === selected ? (
                                <Box
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: 1.5,
                                    }}>
                                    <IconButton
                                        sx={{
                                            width: 'max-content',
                                            color: '#fff'
                                        }}
                                        key={el.index}
                                    >
                                        {el.icon}
                                    </IconButton>
                                </Box>
                            ) : (<IconButton
                                onClick={() => setSelected(el.index)}
                                sx={{
                                    width: 'max-content',
                                    color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary
                                }}
                                key={el.index}
                            >
                                {el.icon}
                            </IconButton>
                            ))}
                        <Divider sx={{ width: '48px' }} />
                        {selected === 3 ?
                            (<Box
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    borderRadius: 1.5,
                                }}>
                                <IconButton sx={{ width: 'max-content', color: '#fff' }}><Gear /></IconButton>
                            </Box>)
                            : (<IconButton
                                onClick={() => setSelected(3)}
                                sx={{
                                    width: 'max-content',
                                    color: theme.palette.mode === 'light' ? '#000' : theme.palette.text.primary
                                }}
                            >
                                <Gear />
                            </IconButton>)
                        }
                    </Stack>
                </Stack>

                <Stack spacing={4} p={2}>
                    <AntSwitch onChange={() => onToggleMode()} defaultChecked />
                    <Avatar
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} 
                        src={faker.image.avatar()}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            list: {
                                'aria-labelledby': 'basic-button',
                            },
                        }}
                        anchorOrigin={{
                            vertical:"bottom",
                            horizontal:"right"
                        }}
                        transformOrigin={{
                            vertical:"bottom",
                            horizontal:"left"
                        }}
                    >
                        <Stack spacing={1} px={1}>
                            {Profile_Menu.map((e) => {
                                return (
                                    <MenuItem onClick={handleClick}>
                                        <Stack
                                            sx={{ width: 100 }}
                                            direction={"row"}
                                            alignItems={"center"}
                                            justifyContent={"space-between"}
                                        >
                                            <span>{e.title}</span>
                                            {e.icon}
                                        </Stack>
                                    </MenuItem>
                                );
                            })}
                        </Stack>

                    </Menu>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Sidebar
