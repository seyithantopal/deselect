import React, { useState } from 'react';
import axios from 'axios';

function NewStudent() {

    const [id, setId] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [nationality, setNationality] = useState('');

    const reset = () => {
        setId(0);
        setFirstName('');
        setLastName('');
        setAge(0);
        setNationality('');
    }

    const handleButton = async (event) => {
        event.preventDefault();
        await axios.post('/students/init', {
                id: id,
                firstName: firstName,
                lastName: lastName,
                age: age,
                nationality, nationality
        }).then(res => console.log(res));

        reset(); // It resets all textboxes
    }
  

  return (
    <div className="container">
        <form>
        <div className="group">
            <label>ID: </label>
            <input type="text" onChange={ e => setId(e.target.value) } value={id} name="id"></input>
        </div>
        <div className="group">
            <label>First Name: </label>
            <input type="text" onChange={ e => setFirstName(e.target.value) } value={firstName} name="firstName"></input>
        </div>
        <div className="group">
            <label>Last Name: </label>
            <input type="text" name="lastName" onChange={ e => setLastName(e.target.value) } value={lastName}></input>
        </div>
        <div className="group">
            <label>Age: </label>
            <input type="text" name="age" onChange={ e => setAge(e.target.value) } value={age}></input>
        </div>
        <div className="group">
            <label>Nationality: </label>
            <input type="text" name="nationality" onChange={ e => setNationality(e.target.value) } value={nationality}></input>
        </div>
        <button type="submit" onClick={ handleButton }>Summit</button>
        </form>   
    </div>
  );
}

export default NewStudent;
