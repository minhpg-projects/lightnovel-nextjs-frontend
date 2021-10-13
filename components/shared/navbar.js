import { useState } from "react"
import ThemeSwitcher from "./themeSwitcher"
const Navbar = () => {
    const routes = [
        {
            name: 'Sáng tác',
            path: 'sang-tac'
        },
        {
            name: 'Convert',
            path: 'convert'
        },
        {
            name: 'Xuất bản',
            path: 'xuat-ban'
        },
        {
            name: 'Thảo luận',
            path: 'thao-luan'

        },
        {
            name: 'Danh sách',
            path: 'danh-sach'
        }
    ]
    const [open, setOpen] = useState(false)
    return (
        <nav className="lg:container lg:mx-auto flex justify-between flex-wrap py-4 lg:py-2 lg:mt-5 lg:rounded-box shadow bg-base-300">
            <div className="flex items-center flex-shrink-0 ml-7">
                <a href="/">
                    <span className="text-2xl font-black leading-none select-none">kyun<span className="text-primary">.</span></span>
                </a>
            </div>
            <div className="block lg:hidden" onClick={() => setOpen(!open)}>
                <button className="flex items-center px-3 py-2 rounded">
                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto transition-transform ${open ? '' : 'hidden'}`} >
                <div className="lg:flex-grow mx-7">
                    {
                        routes.map((item,index) => {
                            return (
                                <a key={index} href={`/${item.path}`} className="block mt-4 lg:inline-block lg:mt-0 font-medium leading-6 mr-5 hover:text-primary transition-colors">
                                {item.name}
                            </a>
                            )
                        })
                    }
                    <div title="Change Theme" className="dropdown dropdown-right">
                        <a tabIndex="0" className="block mt-4 lg:inline-block lg:mt-0 font-medium leading-6 mr-5 hover:text-primary transition-colors">
                            <div className="flex">
                                Đổi theme
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </a>
                        <div className="overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-box bg-base-100 text-base-content">
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
                <div className="flex rounded-box mx-3 my-5 lg:my-0  bg-base-100">
                    <input className="rounded-box w-full py-2 px-4 leading-tight focus:outline-none text-neutral-focus" id="search" type="text" placeholder="Tìm kiếm" />
                    <div className="p-1">
                        <button className="focus:outline-none w-10 h-10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar