import { useState } from "react"
import { Box, Button, TextField, Typography, Paper } from "@mui/material"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"



export default function Homepage(){
    let [currentConversation, setCurrentConversation] = useState([]);
    let [input,setInput] = useState("");

    return (<div style={{display:"flex", width:'100vw',height:"100vh"}}>
        <Sidebar />
        <Box className="initialPage" sx={{width:"80%",height:"100vh"}}>
            <Navbar />
            <Box className="suggestionCards" sx={{height:'85vh', display:"flex", flexDirection:"column",justifyContent:"space-between"}}>
                <Typography sx={{
                    height:"20%",
                    width:"100%",
                }}>How Can I Help You Today?</Typography>

                <Box className="suggestions" sx={{
                    height:{sm:"50%",md:"40%"},
                    width:"auto", display:"flex",flexWrap:"wrap",
                    flexDirection:"column",
                    backgroundColor:{sm:"orange",md:"green"}
                }}>
                    <Paper elevation={3} sx={{
                        width:{sm:"90%",md:"40%"},
                        height:{sm:"20%",md:"40%"}
                        }}>
                        <Typography>Ask a question</Typography>
                        <Typography>Ask a question</Typography>
                    </Paper>
                    <Paper elevation={3} sx={{
                        width:{sm:"90%",md:"40%"},
                        height:{sm:"20%",md:"40%"}
                        }}>
                        <Typography>Ask a question</Typography>
                        <Typography>Ask a question</Typography>
                    </Paper>
                    <Paper elevation={3} sx={{
                        width:{sm:"90%",md:"40%"},
                        height:{sm:"20%",md:"40%"}
                        }}>
                        <Typography>Ask a question</Typography>
                        <Typography>Ask a question</Typography>
                    </Paper>
                    <Paper elevation={3} sx={{
                        width:{sm:"90%",md:"40%"},
                        height:{sm:"20%",md:"40%"}
                        }}>
                        <Typography>Ask a question</Typography>
                        <Typography>Ask a question</Typography>
                    </Paper>
                </Box>

            </Box>
            <Box cassName="inputSection">
                <TextField sx={{width:'80%'}}>

                </TextField>
                <Button>Ask</Button>
                <Button>Save</Button>

            </Box>
        </Box>
    </div>)
}