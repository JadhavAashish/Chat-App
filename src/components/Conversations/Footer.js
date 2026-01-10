import React, { useState } from 'react';
import { Box, Stack, styled, TextField, InputAdornment, IconButton, Fab, Tooltip } from "@mui/material";
import { Camera, File, Image, LinkSimple, PaperPlaneTilt, Smiley, Sticker, User } from 'phosphor-react';
import { useTheme } from '@mui/material';
//import { Picker } from 'emoji-mart';

import Picker  from '@emoji-mart/react';
import emojiData from '@emoji-mart/data';

function MyEmojiPicker() {
  return <Picker data={emojiData} onEmojiSelect={(e) => console.log(e)} />;
}


const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        paddingTop: "12px",
        paddingBottom: "12px",
    }
}));


const Actions = [
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 102,
        title: "Photo/Video"
    },
    {
        color: "#1b8cfe",
        icon: <Sticker size={24} />,
        y: 172,
        title: "Sticker"
    },
    {
        color: "#0172e4",
        icon: <Camera size={24} />,
        y: 242,
        title: "Camera"
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 312,
        title: "Files"
    },
    {
        color: "#0159b2",
        icon: <User size={24} />,
        y: 312,
        title: "Contact"
    }

];

const ChatInput = ({ setOpenPicker }) => {
    const [openActions, setOpenActions] = useState(false);
    return (
        <StyledTextField
            fullWidth
            placeholder='Write a message..'
            variant="filled"
            InputProps={{
                disableUnderline: true,
                startAdornment:
                    <Stack sx={{ width: "max-content" }}>
                        <Stack sx={{ position: 'relative', display: openActions ? "inline-block" : "none" }}>
                            {Actions.map((el) => {
                                return (
                                    <Tooltip title={el.title} placement="right">
                                        <Fab sx={{ position: "absolute", top: -el.y, backgroundColor: el.color }}>
                                            {el.icon}
                                        </Fab>
                                    </Tooltip>
                                );
                            })}
                        </Stack>
                        <InputAdornment>
                            <IconButton onClick={() => setOpenActions((prev) => !prev)}>
                                <LinkSimple />
                            </IconButton>
                        </InputAdornment>
                    </Stack>,
                endAdornment: <InputAdornment>
                    <IconButton onClick={() => setOpenPicker((prev) => !prev)}>
                        <Smiley />
                    </IconButton>
                </InputAdornment>
            }}
        />
    );
};

const Footer = () => {
    const theme = useTheme();
    const [openPicker, setOpenPicker] = useState(false);

    return (
        <Box
            p={3}
            sx={{
                width: "100%",
                height: 100,
                backgroundColor: theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background,
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
            }}
        >
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
                <Stack sx={{ width: '100%' }}>
                    <Box sx={{ display: openPicker ? "inline" : "none", zIndex: 10, position: 'fixed', bottom: 81, right: 100 }}>
                        <Picker data={emojiData} theme={theme.palette.mode} onEmojiSelect={(emoji) => console.log(emoji.native)} />
                    </Box>
                    <ChatInput setOpenPicker={setOpenPicker} />
                </Stack>
                <Box sx={{ width: 48, height: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                    <Stack sx={{ height: '100%', width: '100%' }} alignItems={"center"} justifyContent={"center"}>
                        <IconButton>
                            <PaperPlaneTilt color='#fff' />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>

        </Box>
    )
}

export default Footer
