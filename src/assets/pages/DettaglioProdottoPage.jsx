import axios from "axios";
import { useEffect } from "react"
import { useParams } from "react-router-dom"
const DettaglioProdottoPage = () => {
  const { id } = useParams();


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/:${id}`).then(resp => {
      console.log(resp.data)
    })
  }, [])

  return (
    <div>
      <h1>hai selezionato il prodotto con id : {id}</h1>
    </div>
  )
}

export default DettaglioProdottoPage
