import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const EditOrgan = (props) => {
    const [name, setName] = useState('') //hooks for inputs
    const [description, setDescription] = useState('')
    const [organ, setOrgan] = useState('')
    const [message, setMessage] = useState('');

    const changeOnClick = e => {
        e.preventDefault()
        const organs = {
            name,
            description,
            organ
        }

        setName('')
        setDescription('')
        setOrgan('')

        axios.put(`http://localhost:8080/organs/update/${props.match.params.id}`, organs)
            .then(res => setMessage(res.data))
            .catch(err => {console.log(err)})
    }

    useEffect(() => {
        axios.get(`https://localhost:8080/organs/${props.match.params.id}`)
        .then(res => [
            setName(res.data.name),
            setDescription(res.data.description),
            setOrgan(res.data.organ)
        ])
        .catch(err => console.log(err))
    }, [props]);

    return(
        <EditOrganContainer>
        <div className = "container">
            <br/>
            <h1>Edit Organ</h1>
            <span className="message">{message}</span>

        <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
                <label htmlFor="name">Candidate Name</label>
                <input 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    className="form-control" 
                    placeholder="Enter the Candidate name"></input>
            </div>
            <div className="form-group">
                <label htmlFor="organ">Add an Organ</label>
                <input 
                    type="text" 
                    value={organ}
                    onChange={e => setOrgan(e.target.value)}
                    className="form-control" 
                    placeholder="Enter the organ you wish to donate"></input>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea 
                    value={description} 
                    onChange={e => setDescription(e.target.value)} 
                    className="form-control" 
                    rows="3" 
                    placeholder="Add your age,gender and necessary medical history">
                </textarea>
            </div>
            <button type="submit" className="btn btn-primary">Save Changes</button>
            <br/>
            <br/>
        </form>
        </div>
        </EditOrganContainer>
    )
}

export default EditOrgan

//Main container
const EditOrganContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;
    
    h1{
        font-weight: 900;
        color: #b3844f;
    }

    .btn-primary {
        margin-top: 2rem;
        background: #b3844f;
        border: none;
        &:hover{
            background: #ae937f;
        }
    }

    .container{
        background: var(--white);
    }

    .message{
        font-weight:900;
        color:green;
        padding: 1rem 1rem 1 rem 0;
    }
`;