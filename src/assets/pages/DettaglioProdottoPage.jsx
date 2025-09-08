import axios from "axios";
import { use, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const DettaglioProdottoPage = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([])


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/:${id}`).then(resp => {
      setDetails(resp.data)
      console.log(details)
    })
  }, [])

  return (
    <div>
      <h1>hai selezionato il prodotto con id : {id}</h1>
    </div>
  )
}

export default DettaglioProdottoPage
