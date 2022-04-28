import React from "react";
import { Container, Spacer, Col, Row, Button, Input } from "@nextui-org/react";

const Count = () => {
    const [count, setCount] = React.useState(0);

    return (
        <Container fluid>
            <Col>
                <h3>Puntuacion: {count}</h3>
                <Row justify='space-between'>
                    <Button rounded auto onClick={() => setCount(count + 1)}>
                        <i class='fa-solid fa-plus'></i>
                    </Button>
                    <Button rounded auto onClick={() => setCount(count - 1)}>
                        <i class='fa-solid fa-minus'></i>
                    </Button>
                </Row>
            </Col>
        </Container>
    );
};

export default Count;
