'use client'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import generateKey from '@/utils/generateKey';
import { usePathname, useRouter } from 'next/navigation';
import { Avatar, ListItemAvatar, Typography } from '@mui/material';
import { stringAvatar } from '@/utils/avatarUtils';
import { Fragment, useEffect, useState } from 'react';
import { getChats, getUsers } from '@/app/api/route';

const drawerWidth = 350;



const configOptions = [

]

const ChatItem = ({ item }) => {
    const router = useRouter();

    const navTo = (url) => {
        router.push(url);
    }

    return (
        <ListItem disablePadding
            onClick={() => navTo(`/chat/${item._id}`)}
            sx={{ borderBottom: "1px solid lightGray" }}
        >
            <ListItemButton alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar {...stringAvatar(`${item.firstName} ${item.lastName}`)} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography
                            component="span"
                            variant="body1"
                            color="text.primary"
                            fontWeight="bold"
                        >
                            {`${item.firstName} ${item.lastName}`}
                        </Typography>
                    }
                    secondary={
                        <Fragment>
                            <Typography
                                sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 1,
                                }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                You: {"This is a long text to be ellipsed if is out of a line"}
                            </Typography>

                        </Fragment>
                    }
                />
            </ListItemButton>
        </ListItem>
    )
}

const ChatsDrawer = () => {

    const pathname = usePathname();
    const router = useRouter();

    const [chats, setChats] = useState([])

    const navTo = (url) => {
        router.push(url);
    }


    const isActive = (refPath) => {
        return pathname === refPath;
    }


    const handleGetChats = async () => {
        try {
            const response = await getChats();
            console.log(response);
            setChats(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetChats();
    }, [])

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },

            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>


                <List>
                    <ListItem>
                        <Typography variant='h6' textAlign={"center"} sx={{ fontWeight: "bolder" }}>Chats</Typography>
                    </ListItem>
                    <Divider />
                    {chats.map((item, idx) => (
                        <Fragment key={generateKey(idx)}>
                            <ChatItem item={item} />
                        </Fragment>
                    ))}
                </List>
            </Box>
            <Divider sx={{ mt: "auto" }} />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {configOptions.map((item, idx) => (
                        <ListItem key={generateKey(idx)} disablePadding
                            sx={{
                                bgcolor: isActive(item.url) ? primary.light : "inherit",
                                color: isActive(item.url) ? primary.contrastText : "inherit"
                            }}
                            onClick={() => navTo(item.url)}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {<item.icon style={{ color: isActive(item.url) ? primary.contrastText : "inherit" }} />}
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}

export default ChatsDrawer;