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


const ChatTest = () => {


    const useStyles = makeStyles(theme => ({
        paperBack: {
            backgroundColor: "#333",
            margin: "0 auto",
            padding: "0",
            height: "100vh"
        },
        chatBack: {
            backgroundColor: "#777",
            height: "100vh",
            margin: 0
        },
        text: {
            color: "#fff !important"
        },
        input: {
            color: "white"
          }
      }));

    const classes = useStyles();
    const [resposta, setResposta] = useState("")
    const [pergunta, setPergunta] = useState("")
    const [historico, setHistorico] = useState([])
    // const count = 0;

    const diálogos = {
        oi: "olá tudo bem diga oque você precisa",
        ola: "olá tudo bem diga oque você precisa",
        opa: "olá tudo bem diga oque você precisa",
        blz: "olá tudo bem diga oque você precisa",

    }

    const FuncAsk = () => {
        setResposta(diálogos[pergunta]?diálogos[pergunta]
            :"Desculpe não consegui entender")
        setHistorico([...historico, {
            pergunta: pergunta,
            // resposta: diálogos[pergunta]?diálogos[pergunta]
            //     :"Desculpe não consegui entender"
        }]);

        console.log(historico.length)

        setTimeout(() => {
            setHistorico([...historico, {
                pergunta: pergunta,
                resposta: diálogos[pergunta]?diálogos[pergunta]
                    :"Desculpe não consegui entender"
            }]);
        }, 5000);
        setPergunta("");
        console.log(historico)
    }


    return (
        <Container fluid style={{padding: "0"}}>
            <Row className={classes.chatBack + " justify-content-center"}>
                <Col xl={6} sm={8} xs={12} style={{padding: "0"}}>
                    <Paper className={classes.paperBack}>
                        <Row className="justify-content-center" style={{margin: "0"}}>
                            <Col xs={12} style={{padding: "0"}}>
                                <AppBar position={'relative'}>
                                    <Toolbar>
                                        <Typography variant='h6'>
                                            Chatbot
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                                
                            </Col>
                        </Row>
                        <Row className="justify-content-center" style={{margin: "0", position: "absolute", bottom: "56px", width: "100%", padding: "5px"}}>
                            {historico.map((item) =>
                                <>
                                    {item.resposta?
                                        <Col xs="6" style={{background: "#007bff", borderRadius: "10px", padding: "10px 0", whiteSpace: "normal"}}>
                                            <Typography align="center" className={classes.text}>
                                                {item.resposta}
                                            </Typography>
                                        </Col>
                                    :<Col xs="6"></Col>}
                                    <Col xs="6"></Col>
                                    <Col xs="6"></Col>
                                    <Col xs="6" style={{background: "#007bff", borderRadius: "10px", padding: "10px 0", whiteSpace: "normal"}}>
                                        <Typography align="center" className={classes.text}>
                                            {item.pergunta}
                                        </Typography>
                                    </Col>
                                </>
                            )}
                        </Row>
                        <Row style={{margin: "0", bottom: "0", position: "absolute", width: "100%"}}>
                            <Col xs="10" style={{padding: "0"}}>
                                <TextField 
                                    variant="filled"
                                    // multiline={true}
                                    fullWidth={true}
                                    inputProps={{className: classes.text, maxLength: 80}}
                                    value={pergunta}
                                    onChange={(e) => {setPergunta(e.target.value)}}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            FuncAsk();
                                        }
                                     }}>
                                </TextField>
                            </Col>
                            <Col xs="2" style={{padding: "0"}}>
                                <Typography align="center" className={classes.text}>
                                    <IconButton onClick={FuncAsk} className={classes.text} style={{margin: "0 auto", textAlign: "center"}}>
                                        <Send />
                                    </IconButton>
                                </Typography>
                            </Col>
                        </Row>
                    </Paper>
                </Col>
            </Row>
        </Container>
    );
}

export default ChatTest;