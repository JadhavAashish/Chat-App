import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateSidebarType } from '../Redux/slices/app';
import { CaretLeft } from 'phosphor-react';
import { retry } from '@reduxjs/toolkit/query';
import { faker } from '@faker-js/faker';
import { SHARED_DOCS, SHARED_LINKS } from '../data';
import { DocMsg, LinkMsg } from './Conversations/MsgType';

const SharedMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                {/* Header */}
                <Box
                    sx={{
                        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                        width: "100%",
                        backgroundColor: theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background,
                    }}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={3}
                        sx={{
                            height: "100%", p: 2
                        }}
                    >
                        <IconButton onClick={() => dispatch(UpdateSidebarType("CONTACT"))}>
                            <CaretLeft />
                        </IconButton>
                        <Typography variant="subtitle2">Shared Messages</Typography>
                    </Stack>
                </Box>
                <Tabs sx={{ px: 2, pt: 2 }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Media" />
                    <Tab label="Link" />
                    <Tab label="Docs" />
                </Tabs>

                {/* Body */}
                <Stack
                    sx={{
                        height: "100%",
                        position: "relative",
                        flexGrow: 1,
                        overflow: "scroll"
                    }}
                    p={value === 1 ? 1 : 3}
                    spacing={3}
                >
                    {(() => {
                        switch (value) {
                            case 0:
                                return (
                                    <Grid container spacing={2}>
                                        {[0, 1, 2, 3, 4, 5, 6].map((e) => {
                                            return <Grid item xs={4}>
                                                <img
                                                    src={faker.image.avatar()}
                                                    alt={faker.name.fullName()}
                                                />
                                            </Grid>
                                        })}
                                    </Grid>
                                );
                            case 1:
                                return SHARED_LINKS.map((e) => <LinkMsg el={e} />);
                            case 2:
                                return SHARED_DOCS.map((e) => <DocMsg el={e} />);

                            default:
                                break;
                        }
                    })()}
                </Stack>

            </Stack>
        </Box>
    )
}

export default SharedMessages;
