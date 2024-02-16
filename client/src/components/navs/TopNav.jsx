'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { clearUser, selectLogged, userLogout } from '@/lib/features/users/userSlice';
import { logout } from '@/app/api/route';

const TopNav = () => {

    const dispatch = useAppDispatch();
    const isLogged = useAppSelector(selectLogged);
    const router = useRouter();

    const handleRedirect = (route) => () => {
        router.push(route);
    }

    const handleLogout = async () => {
        try {
            const result = await logout();
            console.log(result);
            dispatch(userLogout());
            dispatch(clearUser());
            router.push("/login");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href={"/"} style={{ color: "white", textDecoration: "none" }}>
                        Proyecto Uno
                    </Link>
                </Typography>
                {
                    !isLogged ?
                        <Button color="inherit" onClick={handleRedirect("/login")}>Login</Button>
                        :
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                }

            </Toolbar>
        </AppBar>
    );
}

export default TopNav;