import react ,{FunctionComponent,useState }  from 'react'
import { todo } from '../types';
import {useStyles}  from '../css/TodoInputStyle';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Col,Row,Button,Card} from'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; 
import {Checkbox} from '@material-ui/core' 
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import axios from "axios"; 
import { API_URL } from "../utils/constants";

interface todoListProp{
   Todo:todo;
}

export const TodoListInput: FunctionComponent<todoListProp> = ({Todo})=>{ 
    const classes = useStyles();
    const theme = useTheme();
    const [message,setMessage] = useState('');

    /**
         *  update todo
         * @param newData
         * @param oldData  
         */
        const handleRowUpdate = (newData:todo, oldData:todo) => {
            axios
                .put(`${API_URL}/todo/update/` + newData._id, newData, {
                headers: {
                    
                },
                })
                .then((res) => {
                  setMessage('update success')
                }); 
            }
         
        /**
         * delete todo
         * @param oldData  
         */
        const handleRowDelete = () => {
            axios
            .delete(`${API_URL}/todo/delete/` + Todo._id, {
                headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
               setMessage('delete success')
            })
            .catch((error) => {
                setMessage("Delete failed! Try Again!");  
            });
        }


    return( 
        <Row className={classes.todoListInput}>
            <Card className={classes.todoWrapper}>
                <Card.Title className={classes.titleWrapper}>
                    <Row > 
                        <Col xs={8} md={8} sm={8}>
                            <div className={classes.title}>{Todo.title}</div>
                        </Col>
                        <Col xs={2} md={2} sm={2}>
                            Finish : <Checkbox checked={Todo.state}/>  
                        </Col>
                        <Col xs={2} md={2} sm={2}>
                            <Button className={classes.deleteButton} onClick={() => handleRowDelete()}><Delete/></Button>
                            <Button className={classes.EditButton}><Edit/></Button>
                        </Col>
                    </Row>
                </Card.Title>
                <Card.Body>
                      <Row > 
                        <Col xs={9} md={9} sm={9}>
                           <div className={classes.active}>{Todo.active}</div>
                        </Col>
                        <Col xs={3} md={3} sm={3}>
                            <div className={classes.endDate}>{Todo.endDate}</div>
                        </Col>
                    </Row>
                    
                </Card.Body>
            </Card>
        </Row>
    );
    
}