import DateFnsUtils from '@date-io/date-fns';
import { Checkbox, Dialog, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { FunctionComponent, useState } from 'react'
import { Button, Card, Row } from 'react-bootstrap';
import {useStyles}  from '../css/updateStyle';
import axios from "axios"; 
import { API_URL } from "../utils/constants";
import { stat } from 'fs';

interface Props {
  _id : String ;
  title : String ;
  active : String ;
  status: boolean ;
  endDate : String ;
  openPopUp:boolean;
  setOpenPopup:any;
}
 

export const Popup: FunctionComponent<Props> =(props)=>{ 
    
    const classes = useStyles();  
    const [Evdate, changeEvDate] = useState <any>(props.endDate); 
    const [message,setMessage] = useState('');
    const [status,setStatus] = useState<boolean>(props.status); 
    const [state, setState] = useState({
        id:props._id,
        title: props.title,
        status: props.status,
        active: props.active,
        date: props.endDate
  });

         /**
         *  update todo 
         */
        const handleRowUpdate = () => { 
            const data ={
                id:state.id,
                title:state.title,
                status:status?true:false,
                active:state.active,
                date:Evdate
            }
            axios
                .put(`${API_URL}/todo/update/` + data.id, data, {
                headers: {
                },
                })
                .then((res) => {
                  setMessage('update success') 
                  props.setOpenPopup(false)
                }); 
                
            }

     const handleInputChange = (event:any) => {
        event.preventDefault();
        const { name, value } = event.target; 
        setState({
        ...state,
        [event.target.name]: event.target.value,
        });
    };

    return(
        <Dialog open={props.openPopUp}>
            <DialogTitle>
                <div>Update Todo details</div>
            </DialogTitle>
            <DialogContent>
                        
                                <form >
                                    <Row>
                                        <TextField
                                        className={classes.formInput}
                                        label="Title"
                                        name='title'
                                        value={state.title}
                                        onChange={(value) => handleInputChange(value)}
                                        />
                                    </Row>
                                    <Row>
                                        <TextField
                                        className={classes.formInput}
                                        value={state.active}
                                        name='active'
                                        onChange={(value) => handleInputChange(value)} 
                                        label="Activity"
                                        />
                                    </Row>
                                    <Row>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                        <DatePicker
                                            className={classes.formInput}
                                            label="End date"
                                            value={Evdate} 
                                            onChange={(selectDate) => changeEvDate(selectDate)}                                        
                                        />
                                            
                                        </MuiPickersUtilsProvider> 
                                    </Row>   
                                    <Row className={classes.status}>
                                       Finish : <Checkbox checked={status}
                                            onChange={e => { 
                                                 setStatus(e.target.checked)
                                                console.log(e.target.checked + " " + status); 
                                            }}
                                       />
                                    </Row> 
                                    <Row className={classes.buttonRow}>
                                        <Button className={classes.button} onClick={() =>handleRowUpdate()}>Update</Button>
                                        <Button className={classes.button} variant='danger' onClick={() =>props.setOpenPopup(false)}>Cancel</Button>
                                    </Row>
                                </form>                                 
                            

            </DialogContent>
        </Dialog>
    )
}