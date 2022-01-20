import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions';

export default function CreatePostForm(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ error, setError] = useState([])
    const [ post, setPost] = useState({
        name:"",
        description:""
    })

    const {name, description} = post;

    const handleChange = (ev) => {
        const {name, value} = ev.target;
        if( (!!name && !!value) || value===""){
            setPost({...post, [name]: value})
        }else{
            setError("Please fill all the inputs")
        }
    }

    const handleSubmit = (ev) =>{
        ev.preventDefault()
        //props.onSubmit(post)
        //postPosts(post)
        //.then(res => console.log(res))
        dispatch(createPost(post))
        navigate('/')

    }

    return (<div>
        {error && error}
        <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter name" value={name} onChange={ handleChange }/>
                <Form.Text className="text-muted">
                Your real name please
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Why do you want to fill this?" value={description} onChange={ handleChange } />
            </Form.Group>

            <Button variant="success" type="submit">
                Submit
            </Button>


            <Link to="/" className="float-end"><Button>Back</Button></Link>

        </Form>
    </div>
    )
}