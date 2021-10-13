import ReactMarkdown from "react-markdown"

const SideNotes = ({ notes }) => {
    return (
        <div className="shadow bg-base-200 rounded-box mt-4 p-1">
            <div className="m-5 prose overflow-hidden">
                <h2>
                    Chú thích thêm
                </h2>
                <ReactMarkdown>{notes}</ReactMarkdown>
            </div>
        </div>
    )
}

export default SideNotes