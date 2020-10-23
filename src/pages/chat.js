import React, { useState } from 'react';
import {
    makeStyles,
    Paper,
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    TextField
} from '@material-ui/core';
import {
    Send
} from '@material-ui/icons'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'


const Chat = () => {


    const useStyles = makeStyles(theme => ({
        paperBack: {
            backgroundColor: "#333",
            margin: "0 auto",
            padding: "0",
            height: "100%"
        },
        chatBack: {
            backgroundColor: "#777",
            height: "100vh",
            // padding: "5vh 0 5vh 0",
            margin: 0
        },
        text: {
            color: "#fff !important"
        },
        appbar: {
            height: "50px",
            margin: 0
        },
        toolbar: {
            marginTop: "-6px"
        },
        input: {
            color: "white"
          }
      }));

    const classes = useStyles();
    const [msg, setMsg] = useState("")
    const Respostas = {
        "oi": "olá tudo bm diga oque você precisa"
    }

    const FuncAsk = () => {

    }


    return (
        <Container fluid style={{padding: "0"}}>
            <Row className={classes.chatBack + " justify-content-center"}>
                <Col xl={6} md={8} sm={11}>
                    <Paper elevation={3} className={classes.paperBack}>
                        <AppBar className={classes.appbar} position={'relative'}>
                            <Toolbar className={classes.toolbar}>
                                <Typography variant='h6'>
                                    Chatbot
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Row className="justify-content-center" style={{margin: "0"}}>
                            <Col lg="12">
                                <Typography align="center" className={classes.text}>
                                    {msg}
                                </Typography>
                            </Col>
                        </Row>
                        <Row className="justify-content-center" style={{margin: "0", position: "absolute", width: "100%", bottom: "0"}}>
                            <Col xs="10">
                                <TextField 
                                    variant="filled"
                                    multiline={true}
                                    fullWidth={true}
                                    inputProps={{className: classes.text, maxLength: 80}}
                                    maxLength={5}
                                    value={msg}
                                    onChange={(e) => {setMsg(e.target.value)}}>
                                </TextField>
                            </Col>
                            <Col xs="2">
                                <IconButton onClick={FuncAsk()} className={classes.text} style={{marginBottom: "-30px", textAlign: "center"}}>
                                    <Send />
                                </IconButton>
                            </Col>
                        </Row>
                    </Paper>
                </Col>
            </Row>
        </Container>
    );
}

export default Chat;