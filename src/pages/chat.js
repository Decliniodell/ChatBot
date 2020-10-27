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
    Send,
    FiberManualRecord
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
    const [pergunta, setPergunta] = useState("")
    const [historico, setHistorico] = useState([])
    const [block, setBlock] = useState(false)

    const diálogos = {
        oi: "Olá tudo bem oque você precisa ?",
        ola: "Olá tudo bem oque você precisa ?",
        opa: "Olá tudo bem oque você precisa ?",
        blz: "Olá tudo bem oque você precisa ?",
    }

    const FuncAsk = () => {

        setBlock(true);

        var askTemp = pergunta
            .toLocaleLowerCase()
            .replace(/\W{2,}/g, " ")
            .split([" "])

        for(var i = 0; i <= askTemp.length; i++)
        {

            if (diálogos[askTemp[i]]) {
                setHistorico([...historico, {
                    pergunta: pergunta,
                    resposta: diálogos[askTemp[i]]
                }]);
                i = askTemp.length
            } else if (i < askTemp.length) {
                setHistorico([...historico, {
                    pergunta: pergunta,
                    resposta: "Desculpe não consegui entender"
                }]);
            }

        }
        
        setPergunta("");
        setBlock(false);
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
                                    :<Col xs="6" style={{height: "44px"}}>
                                            <FiberManualRecord style={{margin: "3.5% 0px", color: "#007bff"}}/>
                                            <FiberManualRecord style={{margin: "3.5% 0px", color: "#007bff"}}/>
                                            <FiberManualRecord style={{margin: "3.5% 0px", color: "#007bff"}}/>
                                        </Col>}
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
                                    fullWidth={true}
                                    // placeholder="Digite: Oi"
                                    inputProps={{className: classes.text, maxLength: 80}}
                                    value={pergunta}
                                    onChange={!block?(e) => {setPergunta(e.target.value)}:''}
                                    onKeyDown={!block?(e) => {
                                        if (e.key === "Enter") {
                                            FuncAsk();
                                        }
                                     }:''}>
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

export default Chat;