
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, useMediaQuery } from "@mui/material"
import json2mq from 'json2mq';

export default function Navbar({toogleSidebar}){

    let menuIconOpen = useMediaQuery(json2mq({maxWidth:"900px"}));

    return(<div style={{display:"flex",justifyContent:"start"}}>
        {menuIconOpen && <MenuIcon fontSize='large' onClick={toogleSidebar} />}
        <Typography sx={{
            fontFamily:"Ubuntu",
            fontSize:"28px",
            fontWeight:"700",
            color:"rgba(151, 133, 186, 1)",
            mx:"10px"

        }}>
            Bot AI
        </Typography>
    </div>)


}