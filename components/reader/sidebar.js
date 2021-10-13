import SidebarContext from "./sidebarContext"

const Sidebar = () => {
    return (
        <SidebarContext.Consumer>
            {({sidebarOpen}) => {
                return (<aside
                    className={`transform w-64 top-0 left-0 bg-neutral-focus bg-opacity-95 fixed h-full overflow-auto sidebar-animation z-30 translate-x-0 shadow-xl ${sidebarOpen ? '' : 'hidden' }`}>
                    <div
                        className="h-50 w-50 m-3 p-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden">
                        <p className="text-neutral-content font-light text-lg overflow-ellipsis">Seichou cheat de nan demo dekiru you ni nattaga, mushoku dake wa yamerarenai youdesu</p>
                    </div>
                </aside>)
            }}
        </SidebarContext.Consumer>

    )
}

export default Sidebar