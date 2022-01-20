import React from 'react';
import { Button } from 'react-bootstrap';
import { deletePost } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function PostListItem(props){

    const dispatch = useDispatch();

    const handleDelete = (id) =>{
        if(window.confirm(`Are you sure about deleting Item with id: ${id} ? `))
            dispatch(deletePost(id))
    }

    return (
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.description}</td>

                <td className="d-flex justify-content-center">
                    <Button variant="danger" onClick={() => handleDelete(props.id)}> 
                    Delete
                    </Button>
                    </td>
                </tr>
    )
}