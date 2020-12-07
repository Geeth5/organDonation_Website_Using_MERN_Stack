import React, {useState} from 'react'
import styled from 'styled-components'
import loading_animation from './../loader.gif'
import {Link} from 'react-router-dom'
import axios from 'axios';

//prints expected format.

const Organs = ({posts}) => {
    const [organ, setOrgan] =useState([]);
    //delete article 
    const deleteOrgan = id => {
        axios.delete(`/organs/${id}`)
        .then(res => alert(res.data))
        setOrgan(organ.filter(elem => elem._id !== id));
    }
    return(
        <MainContainer>
            {!posts.length ? (<img src={loading_animation} alt="Loading..."></img>):(
                posts.map((organ, key) => (
                <div className="container" key={key}>
                    <br/>
                    <Link to={{
                        pathname: `/organ/${organ._id}`
                    }}>
                    <h1>{organ.name}</h1>
                    </Link>
                    <h6>{organ.createdOnDate}</h6>
                    <p>{organ.description}</p>
                    <span className="badge badge-secondary p-2">{organ.organ}</span>
                    <div className="row my-5">
                        <div className="col-sm-7">
                            <Link to={`/update/${organ._id}`} className="btn btn-outline-success">Edit Organ</Link>
                        </div>    
                        <div className="col-sm-3">
                            <button onClick={() => deleteOrgan(organ._id)} className="btn btn-outline-danger">Delete Organ</button>
                        </div>                      
                    </div>
                    <hr/>
                </div>)
            ))}
        </MainContainer>
    )
}

export default Organs

//Main container
const MainContainer = styled.div`
    margin: 7rem 0;
    h1 {
        text-align: center;
        font-weight:900;
        color: #b3844f;
      }
    div {
        text-align: center;
        font-weight:500;
        color: #292115;
    }
    span {
        text-align: center;
        font-weight:900;
        color: #8c5329;
        background: #e3ddda;
    }
    img {
        width: 40rem;
        display: block;
        margin: 0 auto;
    }
    .container{
        background: var(--white);
    }

`;