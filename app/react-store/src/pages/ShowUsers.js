import React,{useEffect,useState} from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const ShowUsers = () =>{
    const url='http://localhost:3001/api/get';
    const [users,setUsers]=useState([]);
    const [ search, setSearch ]=useState("")
    const [rut,setRut]=useState(['']);
    const [name,setName]=useState(['']);
    const [lastname,setLastname]=useState(['']);
    const [mail,setMail]=useState(['']);
    const [username,setUsername]=useState(['']);

    const [operation,setOperation]=useState(1);
    const [title,setTitle]=useState(['']);
    
    useEffect(()=>{
        getUsers();
    },[]);

    const getUsers = async () => {
        const respuesta =await axios.get(url);
        setUsers(respuesta.data);    
    }

    const opendModal = (op,name,lastname,mail,username,rut) =>{
    
        setName('');
        setLastname('');
        setMail('');
        setUsername('');
        setOperation(op);
        if (op === 1){
            setTitle ('Registrar Usuario');
        }
        else if (op === 2){
            setTitle('Editar Usuario');
            setRut(rut); 
            setName(name);
            setLastname(lastname)
            setMail(mail);
            setUsername(username);
            
        } 

        window.setTimeout(function(){
            document.getElementById('nombre').focus();
        },500);
    }

    const insertUser = async () =>{
        if (operation===1){
            var parametros;
            parametros={name:name.trim(),lastname:lastname.trim(),mail:mail.trim(),username:username.trim(),rut:rut.trim()};
            axios.post("http://localhost:3001/api/insert",parametros) ;
            document.getElementById('btnCerrar').click();
            const respuesta =await axios.get(url);
            setUsers(respuesta.data);
            window.location.reload(false);
        } else if (operation===2) {
                var parametros;
                parametros={rut:rut,name:name.trim(),lastname:lastname.trim(),mail:mail.trim(),username:username.trim()};
                axios.put("http://localhost:3001/api/update",parametros) ;
                document.getElementById('btnCerrar').click();
                const respuesta =await axios.get(url);
                setUsers(respuesta.data);
                window.location.reload(false);
        }

    }

    const deleteUser = async (pro_rut) =>{
        
        axios.delete(`http://localhost:3001/api/delete/${pro_rut}`);
        const respuesta =await axios.get(url);
        setUsers(respuesta.data);
        window.location.reload(false);
}

    const searchUser = (name) =>{
        setSearch(name.target.value)
}

    let results = []
    if(!search)
    {
        results = users
    }else{
        results = users.filter( (dato)  =>
        dato.rut.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }


    return (
        <div className='User'>
            <div className= 'container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-4'>
                        <div className= 'd-grid mx-auto'>
                            <br></br>
                            <br></br>
                            <br></br>
                            <button onClick={()=> opendModal(1)} className= 'btn btn-dark' data-bs-toggle= 'modal' data-bs-target='#modalUsers'>
                                <i className='fa-solid fa-circle-plus'></i> Añadir 
                            </button>
                            <br></br>
                            <input value={search} onChange={searchUser} type="text" placeholder="Buscar Rut" className="form-control"></input>
                            <br></br>

                            </div>
                        </div>
                    </div>
                    <div className= 'row mt-3'>
                        <div className= 'col-12 col-lg-8 offset-0 offset-lg-2'>
                            <div className= 'table-responsive'>
                                                    <table className= 'table table-bordered'>
                                                    <thead>
                                            <tr><th>Rut</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Nombre de Usuario</th> <th>Acciones</th></tr>
                                        </thead>
                                        <tbody className='table-group-divider'>
                                            {results.map((user)=>(
                                                <tr key={user.rut}>
                                                    <td>{user.rut}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.lastname}</td>
                                                    <td>{user.mail}</td>
                                                    <td>{user.username}</td>
                                                    <td c> 
                                                        <button onClick={()=>opendModal(2,user.name,user.lastname,user.mail,user.username,user.rut)}
                                                            className = 'btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalUsers'>
                                                            <i className='fa-solid fa-edit'></i>
                                                        </button>
                                                        &nbsp;
                                                        <button onClick={()=>deleteUser(user.rut)}
                                                            className = 'btn btn-danger'>
                                                            <i className='fa-solid fa-trash'></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id='modalUsers' className= 'modal fade' aria-hidden='true'>
                    <div className= 'modal-dialog'> 
                        <div className= 'modal-content'> 
                            <div className= 'modal-header'> 
                                <label className='h5'>{title}</label> 
                                <button type='button' className='btn-close' data-bs-dismiss= 'modal' aria-label='Close'></button>
                            </div>
                            
                            <div className= 'modal-body'>
                                <input type='hidden' id='id'></input>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><i className='fa-solid fa-dollar-sign'></i></span>
                                    <input type='text' id = 'rut' className= 'form-control' placeholder= 'RUT' value= {rut}
                                    onChange={(e)=> setRut (e.target.value)}></input>
                                                                
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><i className='fa-solid fa-user'></i></span>
                                    <input type='text' id = 'nombre' className= 'form-control' placeholder= 'Nombre' value= {name}
                                    onChange={(e)=> setName (e.target.value)}></input>
                                </div>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                                    <input type='text' id = 'apellido' className= 'form-control' placeholder= 'Apellido' value= {lastname}
                                    onChange={(e)=> setLastname (e.target.value)}></input>
                                </div>

                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><i className='fa-solid fa-dollar-sign'></i></span>
                                    <input type='text' id = 'correo' className= 'form-control' placeholder= 'Correo' value= {mail}
                                    onChange={(e)=> setMail (e.target.value)}></input>
                                
                                </div>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><i className='fa-solid fa-dollar-sign'></i></span>
                                    <input type='text' id = 'nombre_de_usuario' className= 'form-control' placeholder= 'Nombre de usuario' value= {username}
                                    onChange={(e)=> setUsername (e.target.value)}></input>
                                
                                </div>
                                

                                <div className='d-grid col-6 mx-auto'>
                                    <button onClick={()=>insertUser()}  className='btn btn-success'>
                                            <i className='fa-solid fa-floppy-disk'> </i> Guardar
                                    </button>

                                </div>
                        </div> 
                        <div className='modal-footer'>    
                            <button id = 'btnCerrar'type='button' className ='btn btn-secondary'  data-bs-dismiss= 'modal'>Cerrar</button>
                        </div>                       
                        </div>
                    </div>
                </div>
        </div>      
    )
}
export default ShowUsers