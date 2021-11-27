import { makeStyles, useTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
todoListInput:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center', 
    padding:0,
},
todoWrapper:{  
    width:'90%',
    marginTop:'20px', 
    padding:0,
    boxShadow:'1px 1px 6px #888888 ',

},
titleWrapper:{ 
    backgroundColor:'#8230e4',
    color:'#ffffff',
    padding:0,
    margin:0  

},
title:{ 
    textAlign:'start',
    marginLeft:'10px',
    padding:10,
    textShadow:'1px 1px 6px #888888'

},
deleteButton:{
    margin:4,
    padding:1, 
    paddingLeft:3,
    paddingRight:3,
    backgroundColor:'#ec7599',
    borderColor:'#ec7599',
    cursor:'pointer', 
},
EditButton:{
    margin:4,
    padding:1, 
    paddingLeft:3,
    paddingRight:3,
    backgroundColor:'#355b45',
    borderColor:'#355b45',
    cursor:'pointer', 
},
endDate:{
    marginTop:'10px',        
},
active:{
    textAlign:'start',
    marginLeft:'10px',
    marginTop:'10px',
    marginBottom:'10px',
    paddingTop:5,
    paddingBottom:5,
},
}));

 