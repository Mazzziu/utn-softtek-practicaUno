import "./App.css";

import { Grid, Col } from "@nextui-org/react";

//components
import Form from "./components/Form";
import Count from "./components/Count";

function App() {
    console.log("hola mundo");
    return (
        <Grid.Container gap={2} justify='center'>
            <Grid xs={12}>
                <Col>
                    <h1>Registro</h1>
                    <p>Complete los siguientes campos para darse de alta</p>
                </Col>
            </Grid>
            <Grid xs={12}>
                <Form></Form>
            </Grid>
            <Grid>
                <Count></Count>
            </Grid>
        </Grid.Container>
    );
}

export default App;
