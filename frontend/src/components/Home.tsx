import react ,{FC, FunctionComponent, useState,useEffect }  from 'react'
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
import { API_URL } from "../utils/constants";
import axios from "axios"; 
import { Type } from 'typescript';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
 
 
const inisialState={
        title: "",
        status: "",
        active: "",
        date: ""
  }

export const Home: FC = ()=>{ 
    const classes = useStyles();
    const theme = useTheme();
    const [todo,setTodo] = useState();
    const [todoList,setTodoList] = useState([]); 
    const [message,setMessage] = useState(''); 
    const [order,setOrder] = useState(1); 
    const [status,setStatus] =useState<Boolean |null>(false);  
    const [date, changeDate] = useState<Date | null>(new Date());
    const [state, setState] = useState({
        title: "",
        status: "",
        active: "",
        date: ""
  });

 
    /**
     * get todo list
     */
    useEffect(() => {
        order === 1?getACS():getDACS() 
    }, [todoList]);

     const getACS = () => { 
            axios.get(`${API_URL}/todo/getACS`, {
                headers: { 
                },
            })
            .then((res) => {
                setTodoList(res.data.data); 
            }) 
     }
     const getDACS = () => { 
            axios.get(`${API_URL}/todo/getDACS`, {
                headers: { 
                },
            })
            .then((res) => {
                setTodoList(res.data.data); 
            })
     }
     
    /**
     * add new todo
     */
    const addTodo = () => { 
        let todoItem = {
            title:state.title,
            active:state.active,
            status:status,
            endDate:date,
        }
        axios
            .post(`${API_URL}/todo/add`,todoItem)
            .then((res) => {
            if (res.data.success) {
                setMessage("Successfully inserted");
            } else {
                setMessage("Please try again");
            }
            })
            .catch((err) => {
            console.log(err);
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
                                            value={date}
                                            views={["year", "month", "date"]}
                                            onChange={value =>changeDate(value)}
                                            />
                                            
                                        </MuiPickersUtilsProvider> 
                                    </Row> 
                                    <Row className={classes.buttonRow}>
                                        <Button className={classes.button} onClick={() => addTodo()}>add</Button>
                                        <Button   className={classes.button} onClick={() => setState(inisialState)}>cancel</Button>
                                    </Row>
                                </form>                                 
                            </Card.Body>                   
                        </Card> 
                        <Image src={bgImage}/>
                    </Col>
                    <Col xs={8} md={8} sm={8}>
                  
                    
                        <Card >     
                            <Card.Header className={classes.cardHeader}>
                                <Row>
                                    <Col  xs={10} md={10} sm={10}> 
                                       Todo List
                                    </Col>
                                    <Col  xs={2} md={2} sm={2}>  
                                             {
                                                 order === 0?(
                                                     <>
                                                        <ArrowUpwardIcon onClick={()=> setOrder(1)}/>
                                                     </>
                                                 ):(
                                                     <>
                                                        <ArrowDownwardIcon onClick={()=> setOrder(0)}/>
                                                     </>
                                                 )
                                             }
 
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body className={classes.cardBody}>
                                 
                                {todoList.map((item) =>
                                    <TodoListInput  Todo={item} /> 
                                )
                               }
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