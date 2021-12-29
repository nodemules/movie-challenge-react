import {Button, Form, FormControl, FormGroup, Image} from "react-bootstrap";
import {useCallback, useState} from "react";
import {searchByTitle} from "./TmdbApi";

const MovieSearch = () => {
    const [title, setTitle] = useState<string>("")
    const [results, setResults] = useState<any[]>()

    const submit = useCallback(() => {
        title && searchByTitle(title).then(response => {
            setResults(response.results)
        })
    }, [title])

    return (
        <>
            <Form>
                <FormGroup>
                    <FormControl value={title} onChange={event => setTitle(event.target.value)}/>
                </FormGroup>
                <Button onClick={submit}>Search</Button>
            </Form>
            {
                results && results.map(movie =>
                    <>
                        <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} height={"340em"} width={"220em"}/>
                    </>
                )
            }
        </>
    )
}

export default MovieSearch
