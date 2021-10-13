import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import { SlideCard } from './singleCard';

const SlideList = () => {
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
    const options = {
        type: 'loop',
        perPage: 4,
        breakpoints: {
            640: {
                perPage: 1,
            },
            768: {
                perPage: 3
            },
            1024: {
                perPage: 4
            },
            1280: {
                perPage: 4
            }
        }
    }
    return (
        <div className="shadow bg-base-200 rounded-box p-1 h-full">
            <h1 className="text-2xl m-2 lg:ml-5 font-bold">
                Nổi bật
            </h1>
            <Splide options={options}>
                {
                    list.map((item) => {
                        return (
                            <SplideSlide>

                                <SlideCard title={item.title} path={item.path} image={item.image} />
                            </SplideSlide>

                        )
                    })
                }
            </Splide>
        </div>
    )
}

export default SlideList