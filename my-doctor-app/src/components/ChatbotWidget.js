import React, { useState, useRef, useEffect } from "react";
import { Fab, Box, Typography, Button, IconButton, Paper } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat"; import CloseIcon from "@mui/icons-material/Close";
export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: "👋 Hi! Welcome to Hair Consultation Clinic. How can I help you today?" }]);
  const options=[{label:"🗓 Book",action:"booking"},{label:"📸 Results",action:"results"},{label:"💇 Treatments",action:"services"},{label:"📞 Contact",action:"contact"}];
  const ref=useRef(null); useEffect(()=>{if(ref.current){ref.current.scrollIntoView({behavior:"smooth"});}},[messages]);
  const handle=(a)=>{let r="";
    if(a==="booking")r="👉 <a href='/contact'>Book Appointment</a>";else if(a==="results")r="👉 <a href='/results'>See Results</a>";else if(a==="services")r="👉 <a href='/treatments'>View Services</a>";else if(a==="contact")r="📞 +91-1234567890";setMessages(p=>[...p,{from:"bot",text:r}]);};
  return(<>{!open&&<Fab color="secondary" onClick={()=>setOpen(true)} sx={{position:"fixed",bottom:24,right:24}}><ChatIcon/></Fab>}
  {open&&<Paper sx={{position:"fixed",bottom:24,right:24,width:320,height:420,display:"flex",flexDirection:"column"}}>
    <Box sx={{bgcolor:"primary.main",color:"white",p:1.5,display:"flex",justifyContent:"space-between"}}>
      <Typography variant="subtitle1">💬 Clinic Assistant</Typography>
      <IconButton onClick={()=>setOpen(false)} sx={{color:"white"}}>
        <CloseIcon/>
        </IconButton>
        </Box>
    <Box sx={{flex:1,p:2,overflowY:"auto"}}>{messages.map((m,i)=><Box key={i} sx={{mb:1}}><Box sx={{bgcolor:m.from==="bot"?"#eee":"primary.main",color:m.from==="bot"?"black":"white",p:1.2,borderRadius:2}} dangerouslySetInnerHTML={{__html:m.text}}/></Box>)}<div ref={ref}/></Box>
    <Box sx={{p:1,display:"flex",flexWrap:"wrap",gap:1}}>{options.map((o,i)=><Button key={i} size="small" variant="outlined" onClick={()=>handle(o.action)}>{o.label}</Button>)}</Box></Paper>}</>);}
