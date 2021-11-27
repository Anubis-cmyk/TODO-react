import react ,{FunctionComponent }  from 'react'
import { todo } from '../types';
import {useStyles}  from '../css/TodoInputStyle';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Col,Row,Button,Card} from'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; 
import {Checkbox} from '@material-ui/core' 
import Delete from '@material-ui/icons/Delete'

interface todoListProp{
   Todo:todo;
}

export const TodoListInput: FunctionComponent<todoListProp> = ({Todo})=>{ 
    const classes = useStyles();
    const theme = useTheme();
    return(
        <li className={classes.todoListInput}>
            <Card className={classes.todoWrapper}>
                <Card.Title className={classes.titleWrapper}>
                    <Row > 
                        <Col xs={8} md={8} sm={8}>
                            <div className={classes.title}>{Todo.title}</div>
                        </Col>
                        <Col xs={3} md={3} sm={3}>
                            <Checkbox checked={Todo.state}/>
                        </Col>
                        <Col xs={1} md={1} sm={1}>
                            <Button className={classes.deleteButton}><Delete/></Button>
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
        </li>
    );
    
}