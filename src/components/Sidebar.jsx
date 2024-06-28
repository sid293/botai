
import {Box, Typography, Button} from '@mui/material';
import Logo from './../assets/Logo.png';
import { useNavigate } from 'react-router-dom/dist';
import newChatIcon from './../assets/newChatIcon.png';



export default function Sidebar({wid, toogleSidebar, clearChat = null}){
    let navigate = useNavigate();

    
    let handleNewChat = ()=>{
        if(clearChat){
            clearChat();
        }
        navigate("/");
    }

    return(<div style={{
        height:"100%",
        width:wid==="l"?"70vw":"20%", 
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"white"
        }}>
        <Button onClick={handleNewChat} className={"newChat"} sx={{
            display: "flex",
            justifyContent: "space-between",
            width:"100%",
            textTransform:"none",
            backgroundColor:"sidebarGray"
        }}>
            <Box sx={{
                height: "33px",
                width: "32px",
            }}>
                <img src={Logo} alt="logo" style={{ height: "100%", width: "100%" }} />
            </Box>
            <Typography sx={{
                color:"black",
                fontFamily:"Ubuntu",
                fontSize:"20px",
                fontWeight:"400"

            }}>New Chat</Typography>
            <Box sx={{
                color:"black"
            }}>
                <img src={newChatIcon} alt="new chat" style={{ height: "100%", width: "100%" }} />
            </Box>
        </Button>
        <Button onClick={()=>{navigate("/history")}} sx={{
            width:"90%",
            height:"39px",
            borderRadius:"10px",
            // border:"1px solid gray",
            mt:"15px",
            fontFamily:"Ubuntu",
            fontSize:"16px",
            fontWeight:"700",
            textTransform:"none",
            backgroundColor:"sidebarGray"
        }}>
            <Typography textAlign={"center"} sx={{
                fontFamily:"Ubuntu",
                fontSize:"16px",
                fontWeight:"700",
                color:"rgba(65, 65, 70, 1)"
            }}>
            Past Conversations
            </Typography>
        </Button>
        {wid === "l" &&
            <Box onClick={toogleSidebar} sx={{display:"flex",alignItems:"center", alignSelf:"end", float: "right", height: "100%", width: "10%" }}>
                <Typography sx={{ fontSize: "50px" }}>
                    &lt;
                </Typography>
            </Box>
        }
    </div>)
}