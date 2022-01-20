import React, {useEffect} from 'react';
import {Button, Table} from 'react-bootstrap'
import PostListItem from './postListItem'
//import {getPosts} from '../../services/Posts'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { loadPosts } from '../../redux/actions';
import { filterPosts } from '../../redux/actions';
import Filter from '../Filter/filter';

export default function PostList(){
    const {posts, filteredPosts} = useSelector( state => state.posts ) 
    const dispatch = useDispatch();
    
    const fixHeightTable={
        maxHeight: "500px", 
        minHeight: "500px" , 
        overflowY:'scroll'
    }
    
    useEffect(function() {
        
        //getPosts()
        //.then(posts => setPosts(posts));
        dispatch(loadPosts());  
        dispatch(filterPosts(posts));        
      
    },[])
    

    return (<div>
                <Filter></Filter>
                <div style={ fixHeightTable } >
                    <Table responsive striped bordered hover   >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPosts && filteredPosts
                            .map(a => 
                                <PostListItem key={a.id} id ={a.id} name={a.name} description={a.description}/>)
                            }
                        </tbody>
                    </Table>
                </div>
                
                    <Link to='/create' >
                        <Button style={{marginTop:'20px'}} size="lg">Create</Button>
                    </Link>

            </div>)
}

