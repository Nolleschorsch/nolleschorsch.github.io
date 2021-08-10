import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { booleanANDBinary, binaryToDezimal, maxBinary } from "./utils";

const IPV4SolverComponent = (props) => {


    const { mehStuff: [elemA, elemB] } = props;

    const [dezi1, dezi2, dezi3, dezi4] = elemA.map(item => item.dezi)
    const [octet1, octet2, octet3, octet4] = elemA.map((item, i) => booleanANDBinary(item.octet, elemB[i].octet))
    const [subOctet1, subOctet2, subOctet3, subOctet4] = elemB.map(item => item.octet)

    return (
        <>
            <h3>{props.title}</h3>
            <InputGroup className="mb-3">
                <InputGroup.Text>Dezimal</InputGroup.Text>
                <FormControl type="number" min="0" max="255" value={binaryToDezimal(octet1)} disabled />
                <FormControl type="number" min="0" max="255" value={binaryToDezimal(octet2)} disabled />
                <FormControl type="number" min="0" max="255" value={binaryToDezimal(octet3)} disabled />
                <FormControl type="number" min="0" max="255" value={binaryToDezimal(octet4)} disabled />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Binary</InputGroup.Text>
                <FormControl type="text" value={octet1} disabled />
                <FormControl type="text" value={octet2} disabled />
                <FormControl type="text" value={octet3} disabled />
                <FormControl type="text" value={octet4} disabled />
            </InputGroup>
            <h3>Broadcast Address</h3>
            <InputGroup className="mb-3">
                <InputGroup.Text>Dezimal</InputGroup.Text>
                <FormControl type="number" min="0" max="255" value={maxBinary(subOctet1, dezi1)} disabled />
                <FormControl type="number" min="0" max="255" value={maxBinary(subOctet2, dezi2)} disabled />
                <FormControl type="number" min="0" max="255" value={maxBinary(subOctet3, dezi3)} disabled />
                <FormControl type="number" min="0" max="255" value={maxBinary(subOctet4, dezi4)} disabled />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Binary</InputGroup.Text>
                <FormControl type="text" value={octet1} disabled />
                <FormControl type="text" value={octet2} disabled />
                <FormControl type="text" value={octet3} disabled />
                <FormControl type="text" value={octet4} disabled />
            </InputGroup>
        </>
    )
}


export default IPV4SolverComponent;