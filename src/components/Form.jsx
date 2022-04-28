import { Container, Spacer, Col, Row, Button, Input } from "@nextui-org/react";

const Form = () => {
    return (
        <Container fluid>
            <form action=''>
                <Col>
                    <Spacer y={2} />
                    <Input width='100%' labelPlaceholder='Nombre' />
                    <Spacer y={2} />
                    <Input width='100%' labelPlaceholder='Email' />
                    <Spacer y={2} />
                    <Input.Password
                        width='100%'
                        labelPlaceholder='Contraseña'
                    />
                    <Spacer y={2} />
                </Col>
                <Row justify='center'>
                    <Button rounded>Ok</Button>
                </Row>
            </form>
        </Container>
    );
};

export default Form;
