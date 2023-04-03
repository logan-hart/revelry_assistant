import { useParams } from "react-router-dom"

function CreateSubmit ({onClick, type}) {

    const params = useParams()
    


    return (
        <>
            <button onClick={onClick} className="button red-button">
                {type}
            </button>
        </>
    )
}

export default CreateSubmit