import React, {useCallback, useContext, useState} from "react";
import ApiContext from "./ApiContext";
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";

const ApiKeySettings = () => {
    const {key: apiKey, keyOperations: {set, clear}} = useContext(ApiContext)
    const [key, setKey] = useState<string>()

    const save = useCallback(() => {
        key && set(key)
    }, [key, set])

    return (
        <>
            <h2>API Key Settings</h2>
            <FormGroup className={"mb-3"}>
                <FormLabel>API Key</FormLabel>
                {
                    apiKey
                        ?
                        <FormControl disabled value={apiKey?.replace(/.(?=.{4,}$)/g, '*')}/>
                        :
                        <FormControl onChange={event => setKey(event.target.value)}/>
                }
            </FormGroup>
            {
                apiKey
                    ?
                    <Button variant={"danger"} onClick={clear}>Clear API Key</Button>
                    :
                    <Button onClick={() => save()}>Save API Key</Button>
            }
        </>
    )
}

export default ApiKeySettings
