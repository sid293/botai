

import YouIcon from './../assets/YouIcon.png';
import aiIcon from './../assets/Logo.png';
import {Box,Paper, Rating,Dialog,DialogTitle, DialogContent, TextField, Typography, DialogActions, Button} from '@mui/material';
import bulbIcon from './../assets/bulb.png'
import { useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import './conversationCard.modules.css';



export default function ConversationCard({info, setFeedback, from="home"}){
    let [thumbDisplay, setThumbDisplay] = useState(true);
    let [ratingValue, setRatingValue] = useState(-1);
    let [dialogDisplay, setDialogDisplay] = useState(false);
    let [feedbackData , setFeedbackData] = useState("");
    console.log("rating ",info.rating);
    let icon;
    if(info.from === "You"){
        icon = YouIcon;
    }else{
        icon = aiIcon;
    }

    let handleThumbClick = (bool)=>{
        if(bool){
            setRatingValue(0);
        }else{
            setDialogDisplay(true);
        }
    }

    let acceptFeedback = ()=>{
        setFeedback(info.id, feedbackData, ratingValue);
        
        setDialogDisplay(false);
        setFeedbackData("");
    }

    return(<Paper elevation={"6"} className={"card"} onMouseEnter={()=>{setThumbDisplay(true)}} onMouseLeave={()=>{setThumbDisplay(false)}} sx={{
        width:"95%",
        m:"15px",
        height:"fit-content", 
        display:"flex",
        flexDirection:"row"
        }}>
        <Box className={"profile"} sx={{
            p:"9px",
            minWidth:"65px",
            height:"65px"
        }}>
            <img src={icon} alt={"Profile"} style={{width:"100%",height:"100%"}} />
        </Box>
        <Box className={"info"} sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around",
            width:"100%",
            textAlign:"left"
        }}>
            <Typography>
                {info.from}
            </Typography>
            <Typography sx={{
                fontFamily:"Open Sans",
                fontWeight:"400",
                fontSize:"16px"
            }}>
                {info.message}
            </Typography>
            <Box sx={{
                color: "gray",
                display: "flex",
            }}>
                <Typography>
                    {info.time}
                </Typography>
                <Box sx={{
                    display:"flex",
                    justifyContent:"end",
                    width:"100%"
                }}>
                {icon === aiIcon && thumbDisplay && from === "home" &&
                    <Box sx={{width:"100%"}}>
                        <ThumbUpOffAltIcon onClick={() => { handleThumbClick(true) }} className='thumbIcon' sx={{
                            px: "20px",
                        }} />
                        <ThumbDownOffAltIcon onClick={() => { handleThumbClick(false) }} sx={{
                        }} className='thumbIcon' />
                    </Box>
                }
                {ratingValue >= 0 &&
                    <Rating sx={{ float: "right" }} onChange={(event, newValue) => {
                        setRatingValue(newValue);
                    }} value={ratingValue} />
                }
                </Box>
            </Box>
                    {info.rating && 
                        // <Typography>{info.rating}</Typography>
                        // <div> rating</div>
                        <Rating value={info.rating} readOnly />
                    }
                    {info.feedback && 
                        <Typography>Feedback: {info.feedback}</Typography>
                    }
        </Box>
        <Dialog open={dialogDisplay} maxWidth={"lg"} sx={{
            backgroundColor:"backgroundGray"
        }}>
            <DialogTitle>
                <img src={bulbIcon} alt={"bulb"} style={{width:"30px",height:"30px"}} />
                Provide Additional Feedback
                <Button onClick={()=>{setDialogDisplay(false)}} sx={{
                    float:"right",
                    fontFamily:"Ubuntu",
                    fontSize:"28px",
                    fontWeight:"500",
                    color:"black"
                }}>X</Button>
            </DialogTitle>
            <DialogContent>
                <TextField multiline value={feedbackData} onChange={(e)=>{setFeedbackData(e.target.value)}} rows={5} fullWidth placeholder="Share your thoughts" />
            </DialogContent>
            <DialogActions>
                <Button onClick={acceptFeedback} sx={{
                    textTransform:"none",
                    color:"black",
                    backgroundColor:"rgba(215, 199, 244, 1)"
                }}>Submit</Button>
            </DialogActions>
        </Dialog>

    </Paper>)
}