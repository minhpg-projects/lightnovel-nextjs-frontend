const Author = (props) => {
    return (
        <div className="shadow bg-base-200 rounded-box">
            <div className="grid grid-rows-3">
                <div className="row-span-1 bg-primary grid grid-cols-5 rounded-box items-center m-1 max-h-16 shadow-xl">
                    <div className="avatar placeholder col-span-2">
                        <div className="bg-neutral-focus text-neutral-content w-16 h-16 rounded-box">
                            <span className="text-3xl">K</span>
                        </div>
                    </div>
                    <div className="col-span-3 text-primary-content text-left">
                        <h1 className="font-bold">{props.author.username}</h1>
                        <h2>User</h2>
                    </div>
                </div>
                <div className="card row-span-2 border-b-4 border-secondary">
                    <div className="card-body">
                        <h2 className="card-subtitle font-light">
                            Nhóm dịch
                        </h2>
                        <a href="" className="card-title text-2xl hover:text-primary">
                            {props.group.name}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author