import { useEffect, useState } from "react"
import { Box, Button, TextField, Typography, Paper, useMediaQuery, Drawer } from "@mui/material"
import { styled } from '@mui/material/styles'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useRef } from "react"
import json2mq from 'json2mq';
import MenuIcon from '@mui/icons-material/Menu';
import {v4 as uuidv4} from 'uuid';
import ConversationCard from "../components/ConversationCard";
import Logo from './../assets/Logo.png';
import SampleData from './../sampleData.json';
        


export default function Homepage(){
    let [currentConversation, setCurrentConversation] = useState([]);
    let [input,setInput] = useState("");
    let [open, setOpen] = useState(false);
    let date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    let [conversationJson, setConversationJson] = useState({title:`${day}/${month}/${year}`, data:[]});
    let inputRef = useRef(null);

    let sidebarDisplay = useMediaQuery(json2mq({
         minWidth:900,
    }));

    let answerQuestion = (input = input)=>{
        let currentTime = new Date();
        let ans = {"id":uuidv4(),
            "from":"You",
            "message":input,
            "time":`${currentTime.getHours()}:${currentTime.getMinutes()}`
        }
        let response = "As an AI Language Model, I don’t have the details";
        for(let i=0;i<SampleData.length;i++){
            if(SampleData[i].question.toLocaleLowerCase() === input.toLocaleLowerCase()){
                response = SampleData[i].response;
                break;
            }
        }
        currentTime = new Date();
        let res = {"id":uuidv4(),
            "from":"Soul Ai",
            "message":response,
            "time":`${currentTime.getHours()}:${currentTime.getMinutes()}`
        }
        let wrapper = {...conversationJson};
        wrapper.data.push(ans);
        wrapper.data.push(res);
        setConversationJson(wrapper);
        setInput("");
        inputRef.current.focus();

    }

    let suggestionCardsHandler = (message)=>{
        // setInput(message);
        answerQuestion(message);
    }

    let clearChat = ()=>{
        setConversationJson({title:`${day}/${month}/${year}`, data:[]});
    }

    let setFeedback = (id, message, rating)=>{
        for(let i=0;i<conversationJson.data.length;i++){
            if(conversationJson.data[i].id === id){
                conversationJson.data[i].feedback = message;
                if(rating > 0){
                    conversationJson.data[i].rating = rating;
                    console.log("rating set");
                }
                break;
            }
        }
    }

    let saveConversation = ()=>{
        let conversations = localStorage.getItem("conversations");
        if(conversations){
            conversations = JSON.parse(conversations);
            conversations.push(conversationJson);
            localStorage.setItem("conversations", JSON.stringify(conversations));
        }else{
            localStorage.setItem("conversations", JSON.stringify([conversationJson]));
        }
    }

    useEffect(()=>{
        console.log("input is ",input);
    },[input])
    let toogleSidebar = ()=>{
        setOpen((props)=>!props);
    }

    return (<Box sx={{
        display:"flex",
        width:'99vw',
        height:"99vh",
        backgroundColor:"backgroundGray"
        }}>
        {sidebarDisplay ? <Sidebar clearChat={clearChat} />:

            <Drawer open={open}>
                <Sidebar clearChat={clearChat} wid={"l"} toogleSidebar={toogleSidebar}/>
            </Drawer>
        }
        
        <Box className="initialPage" sx={{width:{xs:"100%",sm:"100%",md:"80%"},height:"100%", overflow:"hidden"}}>
            <Navbar toogleSidebar={toogleSidebar} />
            {conversationJson.data.length === 0 ?
                <Box className="suggestionCards" sx={{ height: '82vh', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "100%", height: "100%" }}>
                        <Typography sx={{
                            height: "20%",
                            width: "100%",
                            textAlign:"center",
                            fontFamily: "Ubuntu",
                            fontSize: "28px",
                            fontWeight: "500",
                            color: "black"
                        }}>How Can I Help You Today?</Typography>
                        <Box>
                            <img src={Logo} alt="logo" style={{width:"65px",height:"65px"}}/>
                        </Box>
                    </Box>

                    <Box className="suggestions" sx={{
                        height: { xs: "50%", sm: "50%", md: "40%" },
                        width: "auto", display: "flex", flexWrap: "wrap",
                        flexDirection: "column",
                        px: "6px"
                    }}>
                        <Paper onClick={()=>{suggestionCardsHandler('Hi, what is the temperature')}} elevation={6} sx={{
                            width: {xs:"100%", sm: "100%", md: "45%" },
                            height: { sm: "20%", md: "40%" },
                            mb: "9px",
                            px:"10px"
                        }}>
                            <Typography sx={{
                                fontFamily:"Ubuntu",
                                fontSize:"20px",
                                fontWeight:"700"
                            }}>Hi, what is the weather</Typography>
                            <Typography sx={{
                                fontFamily:"Open Sans",
                                fontSize:"16px",
                                fontWeight:"400"
                            }}>Get immediate AI generated response</Typography>
                        </Paper>
                        <Paper onClick={()=>{suggestionCardsHandler('Hi, what is my location')}} elevation={6} sx={{
                            width: {xs:"100%", sm: "100%", md: "45%" },
                            height: { sm: "20%", md: "40%" },
                            mb: "9px",
                            px:"10px"
                        }}>
                            <Typography sx={{
                                fontFamily:"Ubuntu",
                                fontSize:"20px",
                                fontWeight:"700"
                            }}>Hi, what is my location</Typography>
                            <Typography sx={{
                                fontFamily:"Open Sans",
                                fontSize:"16px",
                                fontWeight:"400"
                            }}>Get immediate AI generated response</Typography>
                        </Paper>
                        <Paper onClick={()=>{suggestionCardsHandler('Hi, how are you')}} elevation={6} sx={{
                            width: {xs:"100%", sm: "100%", md: "45%" },
                            height: { sm: "20%", md: "40%" },
                            mb: "9px",
                            px:"10px"
                        }}>
                            <Typography sx={{
                                fontFamily:"Ubuntu",
                                fontSize:"20px",
                                fontWeight:"700"
                            }}>Hi, how are you</Typography>
                            <Typography sx={{
                                fontFamily:"Open Sans",
                                fontSize:"16px",
                                fontWeight:"400"
                            }}>Get immediate AI generated response</Typography>
                        </Paper>
                        <Paper onClick={()=>{suggestionCardsHandler('Hi, what is the temperature')}} elevation={6} sx={{
                            width: {xs:"100%", sm: "100%", md: "45%" },
                            height: { sm: "20%", md: "40%" },
                            mb: "9px",
                            px:"10px"
                        }}>
                            <Typography sx={{
                                fontFamily:"Ubuntu",
                                fontSize:"20px",
                                fontWeight:"700"
                            }}>Hi, what is the temperature</Typography>
                            <Typography sx={{
                                fontFamily:"Open Sans",
                                fontSize:"16px",
                                fontWeight:"400"
                            }}>Get immediate AI generated response</Typography>
                        </Paper>
                    </Box>
                </Box>
                :
                <Box sx={{
                    height: "82vh",
                    overflow: "scroll",
                }} className="conversationScreen">
                    {
                        conversationJson["data"].map((info) => (
                            <div>
                                <ConversationCard setFeedback={setFeedback} info={info} />
                            </div>
                        ))
                    }
                </Box>
            }
            <Box cassName="inputSection" sx={{
                display:"flex",
                width:"100%", 
                alignItems:"center",
                }}>
                <TextField inputRef={inputRef} autoFocus sx={{width:'70%', height:"50px"}} value={input} onChange={(e)=>{setInput(e.target.value)}}>
                    {input}
                </TextField>
                <Box elevation={"6"} sx={{width:"30%",height:"100%", display:"flex",alignItems:"center"}}>
                    <Button onClick={()=>{answerQuestion(input)}} sx={{
                        width:"40%",
                        textTransform:"none",
                        mx:"15px",
                        color:"black",
                        backgroundColor:"rgba(215, 199, 244, 1)"
                        }}>Ask</Button>
                    <Button onClick={saveConversation} sx={{
                        width:"40%", 
                        textTransform:"none",
                        color:"black",
                        backgroundColor:"rgba(215, 199, 244, 1)",
                        }}>Save</Button>
                </Box>
            </Box>
        </Box>
    </Box>)
}