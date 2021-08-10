import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { binaryToDezimal, dezimalToBinary, addLeadingZeroes, isValidNumber } from "./utils";



const IPV4Component = (props) => {


    const setDeziHandler = (event, index) => {

        const value = event.target.value === "" ? "0" : event.target.value

        let { setDezi } = props.mehStuff[index];

        const number = parseInt(value);

        if (number >= 0 && number <= 255 && isValidNumber(value)) {
            setDezi(number)
            let binary = dezimalToBinary(number);
            addLeadingZeroesHandler(binary, index);
        }
    }

    const setOctetHandler = (event, index) => {
        let { value } = event.target;

        let { setDezi, setOctet } = props.mehStuff[index];

        if ([...value].every(n => ["0", "1"].includes(n))) {
            setOctet(value);

            let number = binaryToDezimal(value);
            setDezi(number);
        }

    }

    const addLeadingZeroesHandler = (value, index) => {
        let { setOctet } = props.mehStuff[index];
        let binary = addLeadingZeroes(value);
        setOctet(binary);
    }


    const [elem1, elem2, elem3, elem4] = props.mehStuff;
    

    return (
        <>
            <h3>{props.title}</h3>
            <InputGroup className="mb-3">
                <InputGroup.Text>Dezimal</InputGroup.Text>
                <FormControl value={elem1.dezi} type="text" onChange={(event) => { setDeziHandler(event, 0) }} />
                <FormControl value={elem2.dezi} type="text" onChange={(event) => { setDeziHandler(event, 1) }} />
                <FormControl value={elem3.dezi} type="text" onChange={(event) => { setDeziHandler(event, 2) }} />
                <FormControl value={elem4.dezi} type="text" onChange={(event) => { setDeziHandler(event, 3) }} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Binary</InputGroup.Text>
                <FormControl value={elem1.octet} type="text" onChange={(event) => setOctetHandler(event, 0)} onBlur={(event) => {addLeadingZeroesHandler(event.target.value, 0)}} />
                <FormControl value={elem2.octet} type="text" onChange={(event) => setOctetHandler(event, 1)} onBlur={(event) => {addLeadingZeroesHandler(event.target.value, 1)}} />
                <FormControl value={elem3.octet} type="text" onChange={(event) => setOctetHandler(event, 2)} onBlur={(event) => {addLeadingZeroesHandler(event.target.value, 2)}} />
                <FormControl value={elem4.octet} type="text" onChange={(event) => setOctetHandler(event, 3)} onBlur={(event) => {addLeadingZeroesHandler(event.target.value, 3)}} />
            </InputGroup>
        </>
    )

}

export default IPV4Component;