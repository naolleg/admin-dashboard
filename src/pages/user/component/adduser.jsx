import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { userValidationSchema } from '../schema/userschema';
import { useAddUserMutation } from '../../../services/userService';

const AddUserForm = ({ onSuccess }) => {
    const [fields, setFields] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});
    const [addUser, { isLoading, isError }] = useAddUserMutation();

    const handleChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userValidationSchema.validate(fields, { abortEarly: false });
            const result = await addUser(fields).unwrap();
            setFields({ name: '', email: '' });
            setErrors({});
            if (onSuccess) onSuccess(result);
        } catch (err) {
            if (err.name === 'ValidationError') {
                const newErrors = {};
                err.inner.forEach((validationError) => {
                    newErrors[validationError.path] = validationError.message;
                });
                setErrors(newErrors);
            }
        }
    };

    return (
        <Box p={3} mx="auto">
            <div>
                <Typography variant="h5" mb={2}>Add User</Typography>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        label="Name"
                        name="name"
                        value={fields.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        error={Boolean(errors.name)}
                        helperText={errors.name}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={fields.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                        type="email"
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={isLoading}
                        sx={{ mt: 2 }}
                    >
                        {isLoading ? 'Adding...' : 'Add User'}
                    </Button>
                    {isError && <Typography color="error" mt={2}>Error adding user</Typography>}
                </form>
            </div>
        </Box>
    );
};

export default AddUserForm;