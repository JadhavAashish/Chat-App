import React from 'react'
import { Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material'
import Search from '../../components/Search/Search';
import SearchIconWrapper from '../../components/Search/SearchIconWrapper';
import { MagnifyingGlass } from 'phosphor-react';
import StyledInputBase from '../../components/Search/StyledInputBase';
import { MembersLists } from '../../data';
import { CallElement } from '../../components/CallElement';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const StartCall = ({ open, handleClose }) => {
    return (
        <>
            <Dialog
                fullWidth
                maxWidth="xs"
                open={open}
                TransitionComponent={Transition}
                keepMounted
                sx={{ p: 4 }}
                onClose={handleClose}
            >
                {/* title */}
                <DialogTitle sx={{ mb: 4 }}>Start Call</DialogTitle>
                {/* content */}
                <DialogContent>
                    <Stack spacing={2}>
                    <Stack sx={{ width: '100%' }}>
                        <Search sx={{ width: '100%' }}>
                            <SearchIconWrapper>
                                <MagnifyingGlass color='#709CE6' />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search..." InputProps={{ "aria-label": "search" }} />
                        </Search>
                    </Stack>

                    {/* Call List */}
                    {MembersLists.map((e) =>
                        <CallElement {...e} />
                    )}
                    </Stack>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default StartCall
