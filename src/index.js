import ReactDOM from "react-dom";
import React from "react";

import { Card, CardSection, Heading } from "@kiwicom/orbit-components/";

const App = () => (
  <Card>
    <CardSection>
      <Heading type="title3" element="h3">
        Start editing to see some magic happen!
      </Heading>
    </CardSection>
  </Card>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
