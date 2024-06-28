

import { useEffect, useState } from "react"
import { Box, Button, TextField, Typography, Paper, useMediaQuery, Drawer } from "@mui/material"
import Sidebar from "../components/Sidebar"
import json2mq from "json2mq";
import MenuIcon from '@mui/icons-material/Menu';
import ConversationCard from "../components/ConversationCard";



export default function History(){

    let [input,setInput] = useState("");
    let [open, setOpen] = useState(false);
    let conversations = JSON.parse(localStorage.getItem("conversations")) || [] ;
    let menuIconOpen = useMediaQuery(json2mq({maxWidth:"900px"}));

    let sidebarDisplay = useMediaQuery(json2mq({
         minWidth:900,
    }));
    let toogleSidebar = ()=>{
        setOpen((props)=>!props);
    }

    return(<div style={{display:"flex", width:'99vw',height:"99vh"}}> 
        {menuIconOpen && 
            <Box sx={{
                position:"absolute",
            }}>
                <MenuIcon fontSize="large" onClick={toogleSidebar} />
            </Box>
        }
        {sidebarDisplay ? <Sidebar />:
            <Drawer open={open}>
                <Sidebar wid={"l"} toogleSidebar={toogleSidebar}/>
            </Drawer>
        }
        <Box className="initialPage" sx={{
            width:{xs:"100%",sm:"100%",md:"80%"},
            height:"100%", overflow:"hidden",
            backgroundColor:"backgroundGray",
            overflow:"scroll"
            }}>
            <Box sx={{
                height:"30vh"
            }}>
                <Typography sx={{
                    fontFamily:"Ubuntu",
                    fontSize:"28px",
                    fontWeight:"400",
                    textAlign:"center",
                    py:"40px"
                }}>
                    Conversation History
                </Typography>
            </Box>
            <Box sx={{
                height:"90vh",
                width:"100%",
            }}>
                {
                    conversations.map((item) => {
                        return (<Box sx={{
                            backgroundColor:"historyGray",
                            py:"5px",
                            my:"5px",
                            borderRadius:"5px"
                        }}>
                            <Typography sx={{
                                fontFamily:"Ubuntu",
                                fontSize:"20px",
                                fontWeight:"400",
                                px:"10px"
                            }}>{item.title}</Typography>
                            {
                                item.data.map((data) => {
                                    // return <Paper>{data.message}</Paper>
                                    return <ConversationCard info={data} from={"history"} />
                                })
                            }
                        </Box>)
                    })
                }

            </Box>
        </Box>
    </div>)
}