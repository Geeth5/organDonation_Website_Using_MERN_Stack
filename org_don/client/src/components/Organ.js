import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import loading_animation from '../loader.gif'

 const Organ = (props) => {
     const [name, setName] = useState("");
     const [description, setDescription] = useState("");
     const [organ, setOrgan] = useState("");

    useEffect(() => {
        axios
            .get(`/organs/${props.match.params.id}`)
            .then(res => [
                setName(res.data.name),
                setDescription(res.data.description),
                setOrgan(res.data.organ)
            ])
            .catch(error => console.log(error));
    }, [props]);
     return (
             <MainContainer>
                 <div className="display">
                 {!name || !description || !organ ? <img src = {loading_animation} alt="loading..." /> : 
                 <>
                 <h1>{name}</h1> 
                 <br/>   
                 <p>{description}</p>
                 <h4>Organ Up for Donation : {organ}</h4>
                 <br/><br/>
                 < Link to="/" type="submit" className="btn btn-primary">Back to main</Link>
                 </>
                 }
                 </div>
             </MainContainer>
     );
 };

 export default Organ

 const MainContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h1 {
    text-align: center;
    font-weight:700;
    color: #b3844f;
  }
  h4{
    text-align: center;
    text-decoration: underline;
    text-shadow: 2px 2px 5px red;
  }
  p {
    text-align: center;
    font-weight:700;
    color: #292115;
  }
  img {
      width: 40rem;
      display: block;
      margin: 0 auto;
  }
  .container{
      background: var(--white)
  }
  .display{
      background-color: var(--white)
  }
`;