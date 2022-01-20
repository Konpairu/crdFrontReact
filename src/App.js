import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import CreatePostForm from './components/Form/createPostForm';
import {Container} from 'react-bootstrap'
import PostList from './components/List/postList';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (

            <Container>
              <h1 >Frontend for Posts </h1>
                
                <Routes>
                  <Route path='/' element={<PostList/>}/>
                  <Route path='/create' element={<CreatePostForm/>}/>
                </Routes>              
            </Container>
  );
}

export default App;
