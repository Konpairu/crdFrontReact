import React, {useState} from "react";
import { Form, Button, Col, Row} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { filterPosts, setValueFilter } from "../../redux/actions";

export default function Filter(){

    const dispatch = useDispatch();

    const [ filter, setFilter] = useState({ filterValue:"" })

    const { posts } = useSelector(state => state.posts)
    
    const handleChange = (ev) => {
        const {name, value} = ev.target;
        if( (!!name && !!value) || value===""){
            setFilter({...filter, [name]: value})
        }
    }

    const handleSubmit = (ev) =>{
        ev.preventDefault()
        //props.onSubmit(post)
        //postPosts(post)
        //.then(res => console.log(res))
        dispatch( setValueFilter(filter.filterValue) )
        dispatch( filterPosts(posts, filter.filterValue) )
        //.then( navigate('/') )

    }

    return (<div>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" name="filterValue" placeholder="Write a name to filter" onChange={handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="success" type="submit">
                        Buscar
                    </Button>
                </Col>
            </Row>
        </Form>
    </div>)
}
