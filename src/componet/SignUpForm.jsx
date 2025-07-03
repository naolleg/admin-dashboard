import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
    Link,
    MenuItem
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export function SignUpForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        identificationId: '',
        role: '',
        phone: '',
        address: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Replace this with actual signup dispatch or API call
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#f3f4f6', // light gray
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: '"Playfair Display", serif'
            }}
        >
            <Card sx={{
                width: '100%',
                maxWidth: 500,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <CardContent sx={{ width: '100%' }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        align="center"
                        gutterBottom
                        fontWeight="bold"
                        color="black"
                    >
                        Create Account
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            mt: 3
                        }}
                    >
                        <TextField
                            label="Full Name"
                            name="fullName"
                            fullWidth
                            required
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            select
                            label="Gender"
                            name="gender"
                            fullWidth
                            required
                            variant="outlined"
                            onChange={handleChange}
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                        </TextField>
                        <TextField
                            label="Identification ID (Fayida)"
                            name="identificationId"
                            fullWidth
                            required
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            select
                            label="Role"
                            name="role"
                            fullWidth
                            required
                            variant="outlined"
                            onChange={handleChange}
                        >
                            <MenuItem value="User">User</MenuItem>
                            <MenuItem value="Admin">Admin</MenuItem>
                        </TextField>
                        <TextField
                            label="Phone"
                            name="phone"
                            fullWidth
                            required
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            label="Address"
                            name="address"
                            fullWidth
                            required
                            variant="outlined"
                            onChange={handleChange}
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            fullWidth
                            required
                            variant="outlined"
                            onChange={handleChange}
                            inputProps={{ minLength: 8 }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                mt: 2,
                                py: 1.5,
                                fontWeight: 'bold',
                                backgroundColor: '#00382E',
                                '&:hover': {
                                    backgroundColor: '#002C25'
                                }
                            }}
                        >
                            Register
                        </Button>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 2
                        }}>
                            <Typography variant="body2" color="grey">
                                Already have an account?{' '}
                                <Link
                                    component={RouterLink}
                                    to="/"
                                    underline="hover"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    Login
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
