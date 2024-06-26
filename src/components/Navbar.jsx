
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, useMediaQuery } from "@mui/material"
import json2mq from 'json2mq';

export default function Navbar({toogleSidebar}){

    let menuIconOpen = useMediaQuery(json2mq({maxWidth:"900px"}));

    return(<div style={{display:"flex",justifyContent:"start"}}>
        {menuIconOpen && <MenuIcon onClick={toogleSidebar} />}
        <Typography>
            Bot AI
        </Typography>
    </div>)


}