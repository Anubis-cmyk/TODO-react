import react ,{FC, FunctionComponent, useState }  from 'react'
import { todo } from '../types';
import {useStyles}  from '../css/homeStyle';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {Col,Row,Button,Card, Container, Image} from'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; 
import {Checkbox} from '@material-ui/core' 
import Delete from '@material-ui/icons/Delete'
import { TodoListInput } from './TodoListinput';
import { Typography,Paper,TextField,} from '@material-ui/core';
import {DatePicker,MuiPickersUtilsProvider}  from "@material-ui/pickers";
import bgImage from '../images/home-background.webp'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import ListSharp from '@material-ui/icons/ListSharp'; 

const topos:Array<todo> =[
  {title:"walk",active:'asdasd',state:true,endDate:'2020/2/2'},
  {title:"walk",active:'asdasd',state:false,endDate:'2020/2/2'},
  {title:"walk",active:'asdasd',state:true,endDate:'2020/2/2'},
]

export const Home: FC = ()=>{ 
    const classes = useStyles();
    const theme = useTheme();
    const [date, changeDate] = useState<Date | null>(new Date());

 

    return( 
        <div className={classes.root}>
             <Paper className={classes.container}>
                <Row>
                   
                    <Typography variant='h4' className={classes.heading}> <ListSharp className={classes.todoIcon} />TODO</Typography>
                </Row>
                <hr/>
                <Row>
                    <Col xs={4} md={4} sm={4}>
                        <Card  >    
                            <Card.Header className={classes.cardHeader}>
                                Add new Todo
                            </Card.Header>
                            <Card.Body className={classes.formWrapper}>
                                <Row>
                                    <TextField
                                    className={classes.formInput}
                                     label="Title"
                                    />
                                </Row>
                                <Row>
                                    <TextField
                                    className={classes.formInput}
                                     label="Activity"
                                    />
                                </Row>
                                <Row>
                                   <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                        <DatePicker
                                        className={classes.formInput}
                                        label="End date"
                                        value={date}
                                        onChange={value =>changeDate(value)}
                                        />
                                        
                                    </MuiPickersUtilsProvider> 
                                </Row> 
                                <Row className={classes.buttonRow}>
                                    <Button className={classes.button}>add</Button>
                                    <Button className={classes.button}>cancel</Button>
                                </Row>
                                 
                            </Card.Body>                   
                        </Card> 
                        <Image src={bgImage}/>
                    </Col>
                    <Col xs={8} md={8} sm={8}>
                  
                    
                        <Card >    
                            <Row className={classes.buttonRowList}>
                                <Button className={classes.buttonActive}>All</Button>
                                <Button className={classes.buttonFinish}>Active</Button>
                                <Button className={classes.buttonFinish}>Finish</Button>
                            </Row>
                            <Card.Header className={classes.cardHeader}>
                                Todo List
                            </Card.Header>
                            <Card.Body className={classes.cardBody}>
                                <TodoListInput Todo={topos[0]}/> 
                                <TodoListInput Todo={topos[1]}/> 
                                <TodoListInput Todo={topos[1]}/> 
                                <TodoListInput Todo={topos[1]}/> 
                                <TodoListInput Todo={topos[1]}/> 
                                <TodoListInput Todo={topos[1]}/> 
                            </Card.Body>                   
                        </Card>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Paper>
        </div>
       
    );
    
}