import { useState } from "react"
import ReactMarkdown from 'react-markdown'

const Main = ({title, categories, description, alternate_title, alternate_title_2}) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="shadow bg-base-200 rounded-box p-1 lg:p-2">
                <div className="card lg:card-side">
                    <figure>
                        <img className="rounded-box max-h-96 object-contain px-10 lg:px-0 mt-4 lg:m-4 lg:mr-0" src="https://animemangalnvn.files.wordpress.com/2017/06/the-new-gate-light-novel-volume-6-cover-amlnvn.jpg" />
                    </figure>
                    <div className="card-body flex">
                        <h1 className="card-title text-2xl font-bold">{title}</h1>
                        <div className="flex gap-2 flex-wrap">
                            {categories.map((item, index) => {
                                if (index < 6) {
                                    return (
                                        <div key={index} className={`badge badge-primary badge-md hover:bg-primary-content hover:text-primary-focus`}>{item.title}</div>
                                    )
                                }
                                else {
                                    return (
                                        <div key={index} className={`badge badge-primary badge-md hover:bg-primary-content hover:text-primary-focus ${open ? '' : 'hidden'}`}>{item.title}</div>
                                    )
                                }

                            })}
                            <div className="badge badge-primary badge-md hover:bg-primary-content hover:text-primary-focus" onClick={() => { setOpen(!open) }}>...</div>
                        </div>

                        <div className="bottom-0 mt-5 grid gap-2  flex-grow">
                            <h2 className="mt-2">
                                <span className="font-semibold">Tác giả: </span>
                                <a href="" className="hover:text-primary transition-colors">Ryuyu</a>
                            </h2>
                            <h2 className="mt-2">
                                <span className="font-semibold">Hoạ sĩ: </span>
                                <a href="" className="hover:text-primary transition-colors">Daburyuu</a>
                            </h2>
                            <h2 className="mt-2">
                                <span className="font-semibold">Tình trạng: </span>
                                <a href="" className="hover:text-primary transition-colors">Hoàn thành</a>
                            </h2>

                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 rounded-box bg-base-300">
                            <div className="col-span-1 text-center mt-3 p-3 grid grid-rows-2">
                                <h2 className="text-xl font-bold">
                                    Lần cuối
                                </h2>
                                <span>
                                    2 ngày
                                </span>
                            </div>
                            <div className="col-span-1 text-center mt-3 p-3 grid grid-rows-2">
                                <h2 className="text-xl font-bold">
                                    Số từ
                                </h2>
                                <span>
                                    21.309
                                </span>
                            </div>
                            <div className="col-span-1 text-center mt-3 p-3 grid grid-rows-2">
                                <h2 className="text-xl font-bold">
                                    Đánh giá
                                </h2>
                                <span>
                                    4.5
                                </span>
                            </div>
                            <div className="col-span-1 text-center mt-3 p-3 grid grid-rows-2">
                                <h2 className="text-xl font-bold">
                                    Lượt đọc
                                </h2>
                                <span>
                                    21.231
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="m-5 prose max-w-full">
                        <h2>
                            Nội dung
                        </h2>
                        <ReactMarkdown>
                        {description}
                        </ReactMarkdown>
                        <h2>
                            Tên khác:
                        </h2>
                        <p>
                            {alternate_title}   
                            {alternate_title_2}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Main
