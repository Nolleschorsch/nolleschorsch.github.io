import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import IPV4Component from "./IPV4Component";
import IPV4SolverComponent from "./IPV4SolverComponent";

const App = () => {

    const [octet1, setOctet1] = useState("00000000");
    const [octet2, setOctet2] = useState("00000000");
    const [octet3, setOctet3] = useState("00000000");
    const [octet4, setOctet4] = useState("00000000");

    const [dezi1, setDezi1] = useState(0);
    const [dezi2, setDezi2] = useState(0);
    const [dezi3, setDezi3] = useState(0);
    const [dezi4, setDezi4] = useState(0);

    const [subOctet1, setSubOctet1] = useState("11111111");
    const [subOctet2, setSubOctet2] = useState("11111111");
    const [subOctet3, setSubOctet3] = useState("11111111");
    const [subOctet4, setSubOctet4] = useState("00000000");

    const [subDezi1, setSubDezi1] = useState(255);
    const [subDezi2, setSubDezi2] = useState(255);
    const [subDezi3, setSubDezi3] = useState(255);
    const [subDezi4, setSubDezi4] = useState(0);


    const mehStuff = [
        [
            {
                setOctet: setOctet1,
                setDezi: setDezi1,
                octet: octet1,
                dezi: dezi1
            },
            {
                setOctet: setOctet2,
                setDezi: setDezi2,
                octet: octet2,
                dezi: dezi2
            },
            {
                setOctet: setOctet3,
                setDezi: setDezi3,
                octet: octet3,
                dezi: dezi3
            },
            {
                setOctet: setOctet4,
                setDezi: setDezi4,
                octet: octet4,
                dezi: dezi4
            }
        ],
        [
            {
                setOctet: setSubOctet1,
                setDezi: setSubDezi1,
                octet: subOctet1,
                dezi: subDezi1
            },
            {
                setOctet: setSubOctet2,
                setDezi: setSubDezi2,
                octet: subOctet2,
                dezi: subDezi2
            },
            {
                setOctet: setSubOctet3,
                setDezi: setSubDezi3,
                octet: subOctet3,
                dezi: subDezi3
            },
            {
                setOctet: setSubOctet4,
                setDezi: setSubDezi4,
                octet: subOctet4,
                dezi: subDezi4
            }
        ]
    ];

    //booleanANDBinary("1101", "1")

    return (
        <Container>
            <IPV4Component title={"IP-Address"} mehStuff={mehStuff[0]} />
            <IPV4Component title={"Subnet Mask"} mehStuff={mehStuff[1]} />
            <IPV4SolverComponent title={"Network Address"} mehStuff={mehStuff} />
        </Container>
    );
}

export default App;
