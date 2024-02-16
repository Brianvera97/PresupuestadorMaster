import ChatsDrawer from "@/components/chat/ChatsDrawer";
import { Box, CssBaseline, Toolbar } from "@mui/material";


const MainLayout = ({ children }) => {




    return (
        <Box sx={{ display: 'flex', height: "100vh", width: "100vw" }}>
            <CssBaseline />
            <ChatsDrawer />
            <Box component="main" sx={{ flex: 1, p: 3, height: "100%", display: "flex", flexDirection: "column", overflowX: "hidden", bgcolor: "lightblue" }}>
                <Toolbar />
                <Box sx={{ flex: 1 }}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export default MainLayout;