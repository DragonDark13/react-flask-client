import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";

function App() {
    const [data, setData] = useState([{}])
    const [array, setArray] = useState([]);

    const fetchApi = async () => {
        const response = await axios.get("http://127.0.0.1:8080/api/users")
        console.log(response.data.users)
        setArray(response.data.users)
    }

    useEffect(() => {
        fetchApi()
    }, []);
    

    useEffect(() => {
        fetch("http://127.0.0.1:8080/members").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <div>
            {(typeof data.members === "undefined") ?
                (<p>Loading</p>)
                :
                data.members.map((member, i) => (
                    <div key={i}>
                        <p>{member}</p>
                    </div>
                ))
            }

            {array.map((value, index) =>(
                <div key={index}>
                    <p>{value}</p>
                </div>
            ) )}
        </div>
    )
}

export default App
