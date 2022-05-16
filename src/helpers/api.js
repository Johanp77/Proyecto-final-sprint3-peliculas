import { addDoc, collection } from 'firebase/firestore';
import { DB } from '../firebase/firebase';
import data2 from './data2.json';


const API = "https://api.themoviedb.org/3";


export function get(path) {
    return fetch(API + "/discover/movie", {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
            "Content-Type": "application/json;charset=utf-8",
        },
    })
    .then((result) => {result.json()
        console.log(result)
    });
}



// export const enviarFirestore = (data) => {

//     data2.forEach(card => {
//         const { id, original_language, original_title, overview, popularity, poster_path, release_date, title, vote_average, vote_count } = card

//         //asignar lo que tengo en mi api
//         ///lo voy enviar a la colleccion de Firestore

//         const cargar = {
//             nombre: title,
//             image: poster_path,
//             idioma_original: original_language,
//             fecha_lanzamiento: release_date,
//             sinopsis: overview,
//             popularidad: popularity,
//             votos: vote_average,
//             votos_contados: vote_count,
//             documento: id
//         }

//         addDoc(collection(DB, "ApiEnviada"), cargar)
//             .then(resp => { console.log('dato cargado') })
//             .catch(error => { console.log(error) })

//     })
// }
