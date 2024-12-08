import  { useEffect, useState } from 'react'
import Country from './Country'

const CountryList = ({Visit}) => {

    const [Countries, setCountries] = useState([])
    useEffect(() => {
        
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        setCountries(data);
    })

    },[])
    



  return (
    <div className='m-4 p-4 border-2 border-black flex gap-3 flex-wrap justify-center items-center'>
        {
            Countries.map((cntry,idx)=>(
                <Country 
                key={idx}
                name={cntry.name.common}
                flagurl={cntry.flags.png}
                Visit ={Visit}
                />
            ))
        }
      
    </div>
  )
}

export default CountryList
