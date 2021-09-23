import { useState } from "react"
import NewBoard from "./NewBoard"

const Dashboard = () => {
    const [newBoard, setNewBoard] = useState<number>()
    const boardArray : Board[]  = []
    return (
        <div>
            <NewBoard />
        </div>
    )
}

export default Dashboard
