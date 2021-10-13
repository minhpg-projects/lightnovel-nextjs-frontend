import { useState } from 'react'

const ChapterList = ({arcs}) => {
    const [currentPart, setCurrentPart] = useState(0)
    const chapters = arcs[currentPart].chapters
    return (
        <div className="shadow bg-base-200 rounded-box mt-5 p-1">
            <div className="overflow-x-auto m-5 shadow-xl rounded-box">
                <div className="tabs font-bold">
                    {
                        arcs.map((item, index) => {
                            return (
                                <a key={index} className={`tab tab-lg tab-bordered ${currentPart == index ? 'tab-active' : ''}`} onClick={() => { setCurrentPart(index) }}>{item.title}</a>
                            )
                        })
                    }
                </div>
                <table className="table w-full">
                    <tbody>
                        {
                            chapters.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <a href={`/reader/${item.id}`} className="hover:text-primary font-bold">{item.title}</a>
                                        </td>
                                        <td>{new Date(item.updated_at).toLocaleDateString()}</td>
                                    </tr>
                                )

                            })
                        }

                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default ChapterList