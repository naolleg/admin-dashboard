import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import AddUserForm from '../component/adduser';
import CloseIcon from '@mui/icons-material/Close';

const initialDemoUsers = [
    { id: 1, name: 'Alice Demo', email: 'alice@example.com' },
    { id: 2, name: 'Bob Demo', email: 'bob@example.com' },
];

const UserPage = () => {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState(initialDemoUsers);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAddUser = (newUser) => {
        setUsers((prev) => [
            ...prev,
            newUser,
        ]);
        handleClose();
    };

    return (
        <Box p={3}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h4">Players</Typography>
                <Button variant="contained" color="primary" onClick={handleOpen}>Add User</Button>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.length === 0 ? (
                            <TableRow><TableCell colSpan={3}>No users found</TableCell></TableRow>
                        ) : (
                            users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <AddUserForm onSuccess={handleAddUser} />
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default UserPage; 