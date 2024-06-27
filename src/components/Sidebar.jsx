
import {Box, Typography} from '@mui/material';
import Logo from './../assets/Logo.png';



export default function Sidebar({wid, toogleSidebar}){

    return(<div style={{
        height:"100%",
        width:wid==="l"?"70vw":"20%", 
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        // justifyContent:"center"
        // width:"70vw"
        }}>
        <Box className={"newChat"} sx={{
            display: "flex",
            justifyContent: "space-between",
            width:"100%"
        }}>
            <Box sx={{
                height: "33px",
                width: "32px"
            }}>
                <img src={Logo} alt="logo" style={{ height: "100%", width: "100%" }} />
            </Box>
            <Typography sx={{

            }}>New Chat</Typography>
            <Box>edit</Box>
        </Box>
        <Box sx={{
            width:"90%",
            height:"39px",
            borderRadius:"10px",
            border:"1px solid gray",
            mt:"15px",
            fontFamily:"Ubuntu",
            fontSize:"16px",
            fontWeight:"700",
        }}>
            Past Conversations
        </Box>
        {wid === "l" &&
            <Box onClick={toogleSidebar} sx={{ float: "right", height: "100%", width: "10%" }}>
                <Typography sx={{ fontSize: "20px" }}>
                    close
                </Typography>
            </Box>
        }
    </div>)
}