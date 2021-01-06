import React,{useState} from 'react'

const Problem1 = () =>{
    const [FormData, setFormData] = useState({
        Steps: '',
        StringPath: ''
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
                Problema 2
            </h1>
            <form onSubmit={funs}>
                <div>
                    <label>Numero de pasos</label>
                    <input type='text' name='Steps' onChange={handleChange} />
                    <label>Caminata</label>
                    <input type='text' name='StringPath' onChange={handleChange} />
                </div>
                <button type='submit'>Subir</button>
            </form>

        </div>
    )
}
export default Problem1;