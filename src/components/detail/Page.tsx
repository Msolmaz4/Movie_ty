import { useParams } from 'react-router-dom';
import { Movie } from '../../type';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getcartTotal, removeCard } from '../../redux/CardSlice/CardSlice';




 
const Page = () => {

    const { id } = useParams()
    const [viem, setViem] = useState<Movie[]>([])
    const [quanty ,setQuanty] = useState(0)
    const [price,setPrice] = useState(150)
    const dispatch = useDispatch()
    
    const [selectedSeats, setSelectedSeats] = useState<Record<string, boolean>>({});

    const addBasket = (sira:string)=>{
     dispatch(addToCart({id:sira,quanty:quanty,price:price,available:true}))
    }
       
   
    


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
                // console.log(response.data);
                // setViem(response.data.results)
                const movies = response.data.results;
                const movie = movies.find((item) => item.id === Number(id));
                if (movie) {
                    setViem(movie);
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [id])

    interface Seat {
        row: number;
        seat: number;
        available: boolean;
        seatId:string
      }

    function createTheatre(numRows: number, seatsPerRow: number): Seat[][] {
        
        const theatre: Seat[][] = [];
        for (let i = 1; i <= numRows; i++) {
          const row: Seat[] = [];
          for (let j = 1; j <= seatsPerRow; j++) {
            row.push({ row: i, seat: j, available: true });
          }
          theatre.push(row);
        }
        return theatre;
      }
      const numRows: number = 5;
      const seatsPerRow: number = 10;
      const theatreLayout: Seat[][] = createTheatre(numRows, seatsPerRow);
      theatreLayout[3][2] = { ...theatreLayout[3][2], available: false };
      theatreLayout[3][6] = { ...theatreLayout[3][6], available: false };


      
     
    //   const deger = (rowIndex,seatIndex)=>{
       
    //      console.log( String.fromCharCode(97 + rowIndex).toUpperCase() + (seatIndex + 1))
    //  }  //bunu koltukları tıklayınca clg gormek ıcın yaptım

     const tarih = new Date().getDay()+3 >31 ? 31   : Number(new Date().getDate()) + 3 + '.' + new Date().getMonth() + '.'+ new Date().getFullYear()

   
     const {cards ,itemCount,total} = useSelector(state => state.card)
     console.log(cards,itemCount ,total)
     dispatch(getcartTotal())

    return (
        <div> 
        <div className='mt-6 bg-neutral-300'>
            <div className='grid grid-cols-6 gap-4  h-56 '>
                <div >
                    {viem ? (
                        <div className='flex ml-10 mt-2'>
                            <div>
                                <img className="w-full max-h-96 rounded-lg p-1" src={
                                    `https://image.tmdb.org/t/p/w500${viem.poster_path}`
                                } alt="Bir örnek resim" style={{ width: '140px' }} />
                            </div>
                            <div>
                                <h2>{viem.title}</h2>
                                <p>Arabul Sok No:25</p>
                                <p>{tarih}</p>
                                <select name="" id="" value={price} onChange={(e)=>setPrice(e.target.value)} >
                                    <option value="150"> 15 Tam</option>
                                    <option value="100"> 10 Ogrenci</option>
                                    <option value="120"> 12 Indirimli</option>
                                </select>
                            </div>
                        </div>
                    ) : (
                        <div>Film bulunamadı</div>
                    )}
                </div>
                <div className=' flex justify-center items-center  col-start-2 col-span-4'>
                    <div>  
                        <img src='/7UJD.gif' style={{width:'500px', height:'200px'}} alt="" />
                    </div>
                </div>
                <div className=''>
                    <div className='border-dashed border-2 border-sky-500 h-48 m-5 mr-10 rounded-lg flex flex-col justify-center items-center' >
                        <div>
                             {
                            itemCount !== 0 ? (
                              cards.map((item)=>(
                                <p>{item.id} {item.price}$</p>
                              ))
                            ) : ('') }
    

                        </div>
                       
                        <div className="border-dotted border-b-2 border-gray-400"></div>
                        {
                            total=== 0 ? <div></div>:<div>{total}$</div>
                        }
                        
                        <button className="rounded-full w-48 bg-indigo-500">Odeme</button>
                    </div>
                </div> 
    </div>
     </div>
     <div className='border-2 border-sky-500  w-full h-14 mt-4 flex justify-between '>
    <div className='w-1/6  flex justify-center'> 
    <div className='w-10 bg-yellow-300 rounded-lg '></div>
     <span className='ml-2 mt-3'> Secilen</span>
    </div>
    <div className='w-1/6  flex justify-center '> 
    <div className='w-10 bg-red-900 rounded-lg'></div>
     <span className='ml-2 mt-3' > Baska Secilen</span>
    </div>
    <div className='w-1/6  flex justify-center'> 
    <div className='w-10 bg-stone-800 rounded-lg'></div>
     <span className='ml-2 mt-3' > Dolu </span>
    </div>
    <div className='w-1/6  flex justify-center'> 
    <div className='w-10 bg-stone-400 rounded-lg'></div>
     <span className='ml-2 mt-3' > Bos </span>
    </div>
</div>
<div className='justify-center'>
    {
      
            theatreLayout.map((row, rowIndex) => (
         <div key={rowIndex} className="flex justify-center m-6">
      {row.map((seat, seatIndex) => (
        <div key={seatIndex} className={`seat p-5 border-2 border-sky-500 m-1 ${
            seat.available
                ? selectedSeats[`${rowIndex}-${seatIndex}`] ? 'bg-yellow-500' : 'bg-stone-400'
                : 'bg-red-500'
        } flex flex-col justify-center items-center rounded-lg w-1/12`} 
         onClick={() => {
            if (seat.available) {
               const seatKey = `${rowIndex}-${seatIndex}`;
              setSelectedSeats((prevSelectedSeats) => ({
                 ...prevSelectedSeats,
                   [seatKey]: !prevSelectedSeats[seatKey],
                 }));
           
           
           }
           return  addBasket(String.fromCharCode(97 + rowIndex).toUpperCase() + (seatIndex + 1))

     }
        }>
          {String.fromCharCode(97 + rowIndex).toUpperCase() + (seatIndex + 1)}
        </div>
      ))}
    </div>
  ))
        
  
}
</div>
<div>
    home
</div>
    </div>
  )
}

export default Page