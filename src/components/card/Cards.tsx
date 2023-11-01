import axios from 'axios';
import { useState, useEffect } from 'react'
import { Movie } from '../../type';
import Card from './Card';



const Cards = () => {
    const [viem, setViem] = useState<Movie[]>([])
    const [page, setPage] = useState(1)
   

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/trending/movie/day',
            params: { language: 'en-US' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTM0YmQwNzRkY2NkODc0ZDU1NDEwMGUwMGU2NTI3OCIsInN1YiI6IjYyMGJiZTY0YzE1YjU1MDAxYjg0NDRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M8_sjJjD0xHB4NEhooSn4W8gbnU9IhLXwFYmvNdG5Tw'
            }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setViem(response.data.results)
                
            })
            .catch(function (error) {
                console.error(error);
            });

    }, [page])

    console.log({viem})
    console.log(viem)
    return (
        <div>
             <div className='flex flex-wrap gap-3'>

           
         {
            viem.map((item)=> (

               
                    <div>
                         <Card item = {item}/>  
                    </div>
                   
              
                        
                

            ))


         } </div>

           




         
            <div className='flex justify-center text-4xl  mt-6'>
                <span> last </span>
                {page}
                <span> go </span>
            </div>

        </div>
    )
}

export default Cards