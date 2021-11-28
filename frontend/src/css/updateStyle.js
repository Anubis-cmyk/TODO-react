import { makeStyles, useTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
root:{
    backgroundColor:'#8000ff',
    width:'100%',
    height:'100%',
    padding:10
},
 
formInput:{
    width:'400px',
    marginBottom:20,
},
formWrapper:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    paddingBottom:20,
},
status:{
    display:'flex', 
    alignItems:'center'
},
cardHeader:{
    textAlign:'center',
    fontWeight:'bold',
}, 
todoIcon:{
    color:'#8000ff',
    marginRight:'10px',
    marginTop:'10px',
    paddingTop:10,
    fontSize:'40px'
},
buttonRow:{
    display:'flex',
    marginTop:'20px',
    flexDirection:'row', 
    alignItems:'flex-end',
    width:'400px',

},
button:{
        marginRight:10,
        width:'100px'
},
buttonRowList:{
    display:'flex',
    flexDirection:'row',  
    width:'900px', 

},
buttonActive:{ 
        marginLeft:17,
        width:'200px'
},
buttonFinish:{ 
        marginLeft:17,
        width:'200px'
}
}));

 