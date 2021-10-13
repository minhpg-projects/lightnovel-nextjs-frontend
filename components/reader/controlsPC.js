import ThemeSwitcher from "../shared/themeSwitcher"
import FontContext from "./fontContext"
import SidebarContext from "./sidebarContext"

const ControlsPC = () => {
    return (

        <section className="bottom-10 right-24 fixed max-w-0 hidden md:block">
            <div data-tip="Đã đọc" className="tooltip">
                <button className="btn btn-ghost btn-disabled">
                    <h1 className=" " id="progress-indicator">0%</h1>
                </button>
            </div>
            <div data-tip="Chương trước" className="tooltip">
                <button className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                    </svg>
                </button>
            </div>
            <div data-tip="Trang chủ" className="tooltip">
                <button className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </button>
            </div>
            <div data-tip="Đổi font" className="tooltip">

                <div className="dropdown dropdown-end dropdown-left">
                    <button tabIndex="0" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="overflow-y-auto shadow-2xl top-px dropdown-content rounded-box bg-base-100 text-base-content">
                        <FontContext.Consumer>
                            {({ setFont }) => {
                                return (
                                    <ul className="menu compact shadow-2xl text-2xl">
                                        <li><a tabIndex="0" className="font-mono" onClick={() => {setFont('font-mono')}}>mono</a></li>
                                        <li><a tabIndex="0" className="font-regular" onClick={() => {setFont('font-regular')}}>regular</a></li>
                                        <li><a tabIndex="0" className="font-serif" onClick={() => {setFont('font-serif')}}>serif</a></li>
                                    </ul>
                                )

                            }}
                        </FontContext.Consumer>

                    </div>
                </div>
            </div>
            <div data-tip="Đổi theme" className="tooltip">
                <div className="dropdown dropdown-end dropdown-left">
                    <button tabIndex="0" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 mt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-box bg-base-100 text-base-content">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
            <div data-tip="Mục lục" className="tooltip">
                <SidebarContext.Consumer>
                    {({ toggleSidebar }) => {
                        return (
                            <button className="btn btn-ghost" onClick={toggleSidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clipRule="evenodd" />
                                </svg>
                            </button>

                        )
                    }}
                </SidebarContext.Consumer>
            </div>
            <div data-tip="Lưu" className="tooltip">
                <button className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                    </svg>
                </button>
            </div>
            <div data-tip="Chương sau" className="tooltip">

                <button className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default ControlsPC