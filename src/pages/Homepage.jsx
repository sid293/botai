import { useState } from "react"
import { Box, Button, TextField, Typography, Paper, useMediaQuery, Drawer } from "@mui/material"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import json2mq from 'json2mq';
import MenuIcon from '@mui/icons-material/Menu';
        


export default function Homepage(){
    let [currentConversation, setCurrentConversation] = useState([]);
    let [input,setInput] = useState("");
    let [open, setOpen] = useState(false);
    let [conversationJson, setConversationJson] = useState({title:new Date, data:[]});

    let sidebarDisplay = useMediaQuery(json2mq({
         minWidth:900,
    }));

    let answerQuestion = ()=>{
        let ans = {"from":"You",
            "message":input
        }
        let wrapper = {...conversationJson};
        wrapper.data.push(ans);
        console.log("setting conversation");
        setConversationJson(wrapper);
        setInput("");
    }
    let toogleSidebar = ()=>{
        setOpen((props)=>!props);
    }

    return (<div style={{display:"flex", width:'99vw',height:"99vh"}}>
        {sidebarDisplay ? <Sidebar />:

            <Drawer open={open}>
                <Sidebar wid={"l"} toogleSidebar={toogleSidebar}/>
            </Drawer>
        }
        
        <Box className="initialPage" sx={{width:{xs:"100%",sm:"100%",md:"80%"},height:"100%", overflow:"hidden"}}>
            <Navbar toogleSidebar={toogleSidebar} />
            {conversationJson.data.length === 0 ?
                <Box className="suggestionCards" sx={{ height: '86vh', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                        <Typography sx={{
                            height: "20%",
                            width: "100%",
                        }}>How Can I Help You Today?</Typography>

                    </Box>

                    <Box className="suggestions" sx={{
                        height: { xs: "50%", sm: "50%", md: "40%" },
                        width: "auto", display: "flex", flexWrap: "wrap",
                        flexDirection: "column",
                        // gap:"5px",
                        px: "6px"
                        // gap:"10px",
                        // backgroundColor:{sm:"orange",md:"green"}
                    }}>
                        <Paper elevation={6} sx={{
                            width: { sm: "100%", md: "45%" },
                            height: { sm: "20%", md: "40%" },
                            mb: "9px"
                        }}>
                            <Typography>Ask a question</Typography>
                            <Typography>Ask a question</Typography>
                        </Paper>
                        <Paper elevation={6} sx={{
                            width: { sm: "100%", md: "45%" },
                            height: { sm: "20%", md: "40%" },
                            mb: "9px"
                        }}>
                            <Typography>Ask a question</Typography>
                            <Typography>Ask a question</Typography>
                        </Paper>
                        <Paper elevation={6} sx={{
                            width: { sm: "100%", md: "45%" },
                            height: { sm: "20%", md: "40%" },
                            mb: "9px"
                        }}>
                            <Typography>Ask a question</Typography>
                            <Typography>Ask a question</Typography>
                        </Paper>
                        <Paper elevation={6} sx={{
                            width: { sm: "100%", md: "45%" },
                            height: { sm: "20%", md: "40%" },
                            mb: "9px"
                        }}>
                            <Typography>Ask a question</Typography>
                            <Typography>Ask a question</Typography>
                        </Paper>
                    </Box>
                </Box>
                :
                <Box sx={{height:"85vh"}} className="conversationScreen">
                    conversation screen
                    {
                    conversationJson["data"].map((info)=>(
                        <div>
                            {info.from}
                            {info.message}
                        </div>
                    ))
                    }


                </Box>
            }
            <Box cassName="inputSection" sx={{display:"flex", width:"100%"}}>
                <TextField sx={{width:'70%'}} onChange={(e)=>{setInput(e.target.value)}}>
                    {input}
                </TextField>
                <Box sx={{width:"30%", display:"flex",alignItems:"center"}}>
                    <Button onClick={answerQuestion} sx={{width:"40%", border:"1px solid gray"}}>Ask</Button>
                    <Button sx={{width:"40%" , border:"1px solid gray"}}>Save</Button>
                </Box>
            </Box>
        </Box>
    </div>)
}