import { FunctionComponent } from "react"
import { Movie } from "../../type"

interface iProps {
   item :Movie
}

const Card :FunctionComponent<iProps> = (props) => {
    const { item } = props
    console.log(item.title ,'data')
  return (
   
    
      <div style={{width:'400px', height:'800px'}} className="gap-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img className="w-full max-h-96" src={
                        `https://image.tmdb.org/t/p/w500${item.poster_path}` 
                    } alt="Bir örnek resim" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold"> {item.title}</h2>
                        <p className="text-gray-600">{item.overview.slice(0,40)}...</p>
                    </div>
                    <div className="p-4">
                        <a href="#" className="text-indigo-600 hover:underline">Buchen</a>
                    </div>
                </div>
    </div>
  )
}

export default Card