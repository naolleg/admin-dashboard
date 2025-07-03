import { TextField, Button, Card, CardContent, Typography, Box, Link } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { Link as RouterLink } from 'react-router-dom';

export function LoginForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    };

    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: 420,
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: '"Playfair Display", serif'
            }}
        >
            <CardContent sx={{ width: '100%' }}>
                <Typography
                    variant="h5"
                    align="center"
                    color="black"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontFamily: '"Playfair Display", serif' }}
                >
                    Login to Account
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                    <TextField
                        label="Phone"
                        name="phone"
                        type="tel"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={handleChange}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={handleChange}
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
                                backgroundColor: '#00251f'
                            }
                        }}
                    >
                        Login
                    </Button>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Typography variant="body2" color="grey">
                            Don’t have an account?{' '}
                            <Link
                                component={RouterLink}
                                to="/signup"
                                underline="hover"
                                sx={{ fontWeight: 'bold' }}
                            >
                                Sign Up
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
