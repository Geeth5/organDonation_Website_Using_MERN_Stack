import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const AddOrgan = () => {
    const [name, setName] = useState('') //hooks for inputs
    const [description, setDescription] = useState('')
    const [organ, setOrgan] = useState('')

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

        axios.post('http://localhost:8080/organs/add', organs)
            .then(res => console.log(res.data))
            .catch(err => {console.log(err)})
    }

    return(
        <AddOrganContainer>
        <div className = "container">
            <br/>
            <h1>Add New Organ</h1>

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
            <button type="submit" className="btn btn-primary">Post Organ</button>
            <br/>
            <br/>
        </form>
        </div>
        </AddOrganContainer>
    )
}

export default AddOrgan

//Main container
const AddOrganContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;
    
    h1{
        font-weight: 800;
        color: #b3844f;
    }

    .btn-primary {
        margin-top: 3rem;
        background: #b3844f;
        border: none;
        &:hover{
            background: #ae937f;
        }
    }

    .container{
        background: var(--white);
    }
`;