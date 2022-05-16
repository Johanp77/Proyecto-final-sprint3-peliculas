// import { addDoc, collection } from 'firebase/firestore';
// import { useFormik } from 'formik';
// import React from 'react';
// import { Button, Form } from 'react-bootstrap';


// import { DB } from '../firebase/firebase';

// const TraerApi = () => {

//     let [formValue, handleInputChange, rest] = useFormik({
//         api: 'https://api.themoviedb.org/3/movie/popular?api_key=6ae69dd5fc57ac8e31772e40af4157b9&language=es-US&page=3',
//         vueltas: '1'
//     })
//     const { api, vueltas } = formValue

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(api, vueltas)
//         cargarApi(api, vueltas)
//         rest()
//     }

//     const cargarApi = async (api, vueltas) => {
//         for (let i = 1; i <= vueltas; i++) {
//             const resp = await fetch(api)
//             const data = await resp.json()
//             console.log(data.results)
//             enviarFirestore(data.results)
//         }
//     }

// const enviarFirestore = (data) => {
//     data.forEach(card => {
//         const { id, name, status, species, image } = card

//         //asignar lo que tengo en mi api
//         ///lo voy enviar a la colleccion de Firestore

//         const cargar = {
//             nombre: name,
//             image: image,
//             status: status,
//             species: species,
//             documento: id
//         }

//         addDoc(collection(DB, "ApiEnviada"), cargar)
//             .then(resp => { console.log('dato cargado') })
//             .catch(error => { console.log(error) })

//     })
// }

// return (
//     <div>
//         <h1>Enviar Api a firebase</h1>
//         <Form onSubmit={handleSubmit}>
//             <input
//                 type="number"
//                 name="vueltas"
//                 placeholder='Ingresa el numero de veces a cargar la api'
//                 value={vueltas}
//                 onChange={handleInputChange}

//             />
//             <input
//                 type="text"
//                 name="api"
//                 placeholder='Ingrese url de api'
//                 value={api}
//                 onChange={handleInputChange}

//             />
//             <Button type="submit">Enviar</Button>
//         </Form>
//     </div>
// );
// };

// export default TraerApi;
