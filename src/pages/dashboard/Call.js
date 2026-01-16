import { Box, Stack, Divider, IconButton, Link, Typography } from '@mui/material';
import { MagnifyingGlass, Phone, PhoneCall } from 'phosphor-react';
import React, { useState } from 'react'
import { SimpleBarStyle } from '../../components/Scrollbar';
import StyledInputBase from '../../components/Search/StyledInputBase';
import SearchIconWrapper from '../../components/Search/SearchIconWrapper';
import Search from '../../components/Search/Search';
import { CallLogElement } from '../../components/CallElement';
import { CallLogs } from '../../data';
import StartCall from '../../sections/main/StartCall';

const Call = () => {
const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left */}
        <Box sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background,
          width: 320,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
        }}>
          <Stack p={2} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant='h5'>Call Log</Typography>
            </Stack>
            <Stack sx={{ width: '100%' }}>
              <Search sx={{ width: '100%' }}>
                <SearchIconWrapper>
                  <MagnifyingGlass color='#709CE6' />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search..." InputProps={{ "aria-label": "search" }} />
              </Search>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Typography variant="subtitle2" component={Link}>
                Start New Conversation
              </Typography>
              <IconButton>
                <Phone onClick={() => setOpenDialog(true)} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}>
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.5}>
                  {/* Call Logs */}
                  {CallLogs.map((e) =>
                    <CallLogElement {...e} />
                  )}

                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>

        {/* Right */}
        {/* TODO => Reuse Conversation Component  */}
      </Stack>


      {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog}/>}
    </>
  )
}

export default Call;
