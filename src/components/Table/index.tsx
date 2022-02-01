import { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"


export function Table(){
   
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    },[])


    return(
        <Container>
            <table>
                <thead>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Site</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Site</td>
                        <td>20/01/2022</td>
                    </tr>
                    <tr>
                        <td>Site</td>
                        <td className="withdraw">R$12.000,00</td>
                        <td>Site</td>
                        <td>20/01/2022</td>
                    </tr>
                   
                </tbody>
            </table>
        </Container>
    )
}