import { SingleCard, EndCard } from './singleCard'

const CardList = () => {
    const list = [
        {
            title: 'Classmate ga Tsukaima ni Narimashite',
            image: 'https://animemangalnvn.files.wordpress.com/2017/06/the-new-gate-light-novel-volume-6-cover-amlnvn.jpg',
            path: '/novel/classmate-ga-tsukaima-ni-narimashite'
        }, {
            title: 'Classmate ga Tsukaima ni Narimashite',
            image: 'https://animemangalnvn.files.wordpress.com/2017/06/the-new-gate-light-novel-volume-6-cover-amlnvn.jpg',
            path: '/novel/classmate-ga-tsukaima-ni-narimashite'
        }, {
            title: 'Classmate ga Tsukaima ni Narimashite',
            image: 'https://animemangalnvn.files.wordpress.com/2017/06/the-new-gate-light-novel-volume-6-cover-amlnvn.jpg',
            path: '/novel/classmate-ga-tsukaima-ni-narimashite'
        }, {
            title: 'Classmate ga Tsukaima ni Narimashite',
            image: 'https://animemangalnvn.files.wordpress.com/2017/06/the-new-gate-light-novel-volume-6-cover-amlnvn.jpg',
            path: '/novel/classmate-ga-tsukaima-ni-narimashite'
        }, {
            title: 'Classmate ga Tsukaima ni Narimashite',
            image: 'https://animemangalnvn.files.wordpress.com/2017/06/the-new-gate-light-novel-volume-6-cover-amlnvn.jpg',
            path: '/novel/classmate-ga-tsukaima-ni-narimashite'
        }, {
            title: 'Classmate ga Tsukaima ni Narimashite',
            image: 'https://animemangalnvn.files.wordpress.com/2017/06/the-new-gate-light-novel-volume-6-cover-amlnvn.jpg',
            path: '/novel/classmate-ga-tsukaima-ni-narimashite'
        }, {
            title: 'Classmate ga Tsukaima ni Narimashite',
            image: 'https://animemangalnvn.files.wordpress.com/2017/06/the-new-gate-light-novel-volume-6-cover-amlnvn.jpg',
            path: '/novel/classmate-ga-tsukaima-ni-narimashite'
        }, {
            title: 'Classmate ga Tsukaima ni Narimashite',
            image: 'https://animemangalnvn.files.wordpress.com/2017/06/the-new-gate-light-novel-volume-6-cover-amlnvn.jpg',
            path: '/novel/classmate-ga-tsukaima-ni-narimashite'
        }, {
            title: 'Classmate ga Tsukaima ni Narimashite',
            image: 'https://animemangalnvn.files.wordpress.com/2017/06/the-new-gate-light-novel-volume-6-cover-amlnvn.jpg',
            path: '/novel/classmate-ga-tsukaima-ni-narimashite'
        }, {
            title: 'Classmate ga Tsukaima ni Narimashite',
            image: 'https://animemangalnvn.files.wordpress.com/2017/06/the-new-gate-light-novel-volume-6-cover-amlnvn.jpg',
            path: '/novel/classmate-ga-tsukaima-ni-narimashite'
        },
    ]

    return (
        <div className="shadow rounded-box bg-base-200 p-1">
            <h1 className="text-2xl m-2 lg:ml-5 font-bold">
                Nổi bật
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {
                    list.map((item, index) => {
                        if (index < list.length-1)
                            return (
                                <SingleCard title={item.title} path={item.path} image={item.image} />
                            )
                        else {
                            return (
                                <EndCard title={item.title} path={item.path} image={item.image} />
                            )
                        }
                    })
                    }

            </div>

        </div>

    )
}

export default CardList