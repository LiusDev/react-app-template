import useAxios from "./hook/useAxios"
import { Button } from "react-bootstrap"

function App() {
    const { data } = useAxios("/products")
    console.log(data)

    return <Button variant="primary">QuyDX template</Button>
}

export default App
