const Stats = () => {
    return (
        <div class="shadow bg-base-200 rounded-box">
            <h1 class="text-2xl font-bold p-5 pb-0">
                Thống kê
            </h1>
            <div class="grid-flow-row stats w-full">
                <div class="stat bg-base-200">
                    <div class="stat-title">Lượt đọc</div>
                    <div class="stat-value">310M</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div class="stat bg-base-200">
                    <div class="stat-title">Người dùng</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc text-success">↗︎ 400 (22%)</div>
                </div>
                <div class="stat bg-base-200">
                    <div class="stat-title">Mới đăng kí</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc text-error">↘︎ 90 (14%)</div>
                </div>
            </div>


        </div>

    )
}

export default Stats