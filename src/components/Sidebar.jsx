
import {Box, Typography} from '@mui/material';



export default function Sidebar({wid, toogleSidebar}){

    return(<div style={{
        height:"100%",
        width:wid==="l"?"70vw":"20%", 
        display:"felx"
        // width:"70vw"
        }}>
        sidebar
        {wid === "l" && 
        <Box onClick={toogleSidebar} sx={{float:"right", height:"100%",width:"10%"}}>
            <Typography sx={{fontSize:"20px"}}>
                close
            </Typography>
        </Box>
        }
    </div>)
}