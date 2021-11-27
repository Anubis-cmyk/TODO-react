import { makeStyles, useTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
root:{
    backgroundColor:'#8000ff',
    width:'100%',
    height:'100%',
    padding:10
},
heading:{
    fontSize:'40px',
    textAlign:'center',
    fontWeight:'bold',
    width:'100%',
    padding:10,
    marginBottom:20

},
container:{ 
    backgroundImage:'url("../images/home-background.webp")', 
    padding: '25px',
    backgroundRepeat:' no-repeat',
    backgroundOrigin: 'content-box',
    height:'100%',
    margin:'20px 10% 10px 10%'
},
cardBody:{
    padding:10,
    paddingBottom:20,
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
    flexDirection:'row', 
    alignItems:'flex-end',
    width:'400px',

},
button:{
        marginRight:20,
        width:'100px'
},
buttonRowList:{
    display:'flex',
    flexDirection:'row',  
    width:'900px',
    padding:3

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

 