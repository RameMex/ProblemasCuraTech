import React,{useState} from 'react';

const Problem1 = () =>{
    const [FormData, setFormData] = useState({
        n: '',
        ar: ''
    })
    const funs = (e) =>{
        e.preventDefault();
        
    }
    const handleChange = (e) =>{
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <h1>
                Problema 1
            </h1>
            <form onSubmit={funs}>
                <div>
                    <label>Numero de milk</label>
                    <input type='text' name='n' onChange={handleChange} />
                    <label>Arreglo</label>
                    <input type='text' name='ar' onChange={handleChange} />
                </div>
                <button type='submit'>Subir</button>
            </form>

        </div>
    )
}
export default Problem1;