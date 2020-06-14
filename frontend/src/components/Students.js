import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Students() {

    const [state, setState] = useState([]);
    const [choice, setChoice] = useState('');
    const [nationalities, setNationalities] = useState([]);
    const [students, setStudents] = useState([]);
    const [sort, setSort] = useState(false);

    const makeSelection = async (choice) => {
        let students = [];
        const sortFlag = sort === true ? 1 : -1; 
        await axios.post('/students/all', { nationality: choice, sort: sortFlag }).then(res => {
            setState(res['data']);
            res['data'].map((el, i) => {
                if(el.nationality === choice) students.push(`${el.firstName} ${el.lastName} (${el.age})`);
            });
        });
        setStudents(students);
    }

    const handleChoice = (event) => {
        const c = event.target.value;
        setChoice(event.target.value);
        makeSelection(c);
    }

    const handleSort = () => {
        setSort(prevState => !prevState);
        console.log(choice);
        makeSelection(choice);
    }

    const makeRequest = async () => {
        await axios.get('/students/nationality').then(res => {
            setChoice(res.data[0]['_id']);
            setNationalities(res.data);
            makeSelection(res.data[0]['_id']);
        });
    }

    useEffect(() => {
        makeRequest();
    }, []);

  

    return (
        <div className="container">
            
            <select name="nationalities" onChange={ handleChoice }>
                {nationalities.map((el, i) => <option key={i}>{el['_id']}</option>)} 
            </select>
            <div>
                {students.map((el, i) => <p key={i}>{el}</p>)}
            </div>
            <button onClick={handleSort}>Sort</button>
        </div>
    );
}

export default Students;
