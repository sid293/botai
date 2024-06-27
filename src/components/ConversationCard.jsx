

import YouIcon from './../assets/YouIcon.png';
import aiIcon from './../assets/Logo.png';
import {Box, Rating, TextField, Typography} from '@mui/material';
import { useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import './conversationCard.modules.css';



export default function ConversationCard({info}){
    let [thumbDisplay, setThumbDisplay] = useState(true);
    let [ratingValue, setRatingValue] = useState(-1);
    let icon
    if(info.from === "You"){
        icon = YouIcon;
    }else{
        icon = aiIcon;
    }


    let handleThumbClick = (bool)=>{
        if(bool){
            setRatingValue(0);
            alert("r cahngec");
        }else{
        }
    }

    return(<Box className={"card"} onMouseEnter={()=>{setThumbDisplay(true)}} onMouseLeave={()=>{setThumbDisplay(false)}} sx={{width:"100%",height:"fit-content", display:"flex",flexDirection:"row"}}>
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
                {icon === aiIcon && thumbDisplay &&
                    <Box sx={{width:"100%"}}>
                        <ThumbUpOffAltIcon onClick={() => { handleThumbClick(true) }} className='thumbIcon' sx={{
                            px: "20px",
                        }} />
                        <ThumbDownOffAltIcon onClick={() => { handleThumbClick(false) }} sx={{
                        }} className='thumbIcon' />
                    </Box>
                }
                {ratingValue >= 0 &&
                    <Rating sx={{ float: "right" }} value={ratingValue} />
                }
                </Box>
            </Box>
        </Box>

    </Box>)
}