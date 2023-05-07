import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import './formulario.css';
function Formulario() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cidade, setCidade] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [nomePais, setNomePais] = useState("");
    const [nomeMae, setNomeMae] = useState("");
    const [dadosValidos, setDadosValidos] = useState(false);

    function handleNome(e) {
        setNome(e.target.value);
    }

    function handleIdade(e) {
        setIdade(e.target.value);
    }

    function handleCidade(e) {
        setCidade(e.target.value);
    }

    function handleDataNascimento(e) {
        setDataNascimento(e.target.value);
    }

    function handleNomePais(e) {
        setNomePais(e.target.value);
    }

    function handleNomeMae(e) {
        setNomeMae(e.target.value);
    }

    function handleValidacao() {
        if (nome !== "" && idade !== "" && cidade !== "" && dataNascimento !== "" && nomePais !== "" && nomeMae !== "") {
            setDadosValidos(true);
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    }

    function handleImprimir() {
        window.print();
    }

    return (
        <Container fluid >
            <Row className="align-items-center">
                <Col md={6} className="my-1">
                    <h2>Formulario</h2>
                    <Form/>
                    <Form.Group  className="mb-3" controlId="name">
                        <Form.Label>
                            Nome:
                            <Form.Control type="text" value={nome} onChange={handleNome} placeholder="Digite seu nome aqui!" />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group  className="mb-3" controlId="idade">
                        <Form.Label>
                            Idade:
                            <Form.Control type="number" value={idade} onChange={handleIdade} placeholder="Digite a sua idade" />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group  className="mb-3" controlId="Cidade">
                        <Form.Label>
                            Cidade:
                            <Form.Control type="text" value={cidade} onChange={handleCidade} placeholder="Digite sua cidade aqui" />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group  className="mb-3" controlId="dataNascimento">
                        <Form.Label>
                            Data de Nascimento:
                            <Form.Control type="date" value={dataNascimento} onChange={handleDataNascimento} />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group  className="mb-3" controlId="nomePais">
                        <Form.Label>
                            Nome dos Pais:
                            <Form.Control type="text" value={nomePais} onChange={handleNomePais} placeholder="Digite o nome do seu pai" />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group  className="mb-3" controlId="nomeMae">
                        <Form.Label>
                            Nome da Mae:
                            <Form.Control type="text" value={nomeMae} onChange={handleNomeMae} placeholder="Digite o nome da sua mae" />
                        </Form.Label>
                    </Form.Group>
                    <Button type="button" onClick={handleValidacao}>
                        Enviar
                    </Button>
                    <Button type="button" onClick={handleImprimir} disabled={!dadosValidos}>
                        Imprimir
                    </Button>
                </Col>


                <Col md={6}>
                    <div className="documento">
                        <h3>Documento</h3>
                        <p>Nome: {nome}</p>
                        <p>Idade: {idade}</p>
                        <p>Cidade: {cidade}</p>
                        <p>Data de Nascimento: {dataNascimento}</p>
                        <p>Nome dos Pai: {nomePais}</p>
                        <p>Nome da Mae: {nomeMae}</p>
                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default Formulario;