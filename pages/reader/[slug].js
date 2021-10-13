import { useRouter } from 'next/router'
import Head from 'next/head'

import { useState, useEffect } from 'react';

import SidebarProvider from '../../components/reader/sidebarProvider'
import FontProvider from '../../components/reader/fontProvider';
import ControlsMobile from '../../components/reader/controlsMobile'
import ControlsPC from '../../components/reader/controlsPC'
import Sidebar from '../../components/reader/sidebar'
import FontContext from '../../components/reader/fontContext';

const Reader = () => {
    const router = useRouter()
    const { slug } = router.query
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const scrollTop = window.scrollY
        const scrollBottom = document.body.scrollHeight - window.innerHeight
        const scrollPercent = scrollTop / scrollBottom * 100
        const finalPercent = scrollPercent > 100 ? 100 : scrollPercent
        localStorage.setItem('progress', scrollTop)
        document.getElementById('progress-bar').setAttribute('value', finalPercent)
        document.getElementById('progress-indicator').innerHTML = parseInt(finalPercent) + '%'
        setScrollPosition(scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <>

        <Head>
            <title>Test</title>
        </Head>

        <div className="md:hidden container fixed bottom-7 md:bottom-0">
            <div className="w-screen p-5">
                <progress id="progress-bar" className="progress" max="100"></progress>
            </div>
        </div>
        <FontProvider>

            <SidebarProvider>
                <ControlsMobile />
                <ControlsPC />
                <Sidebar />
            </SidebarProvider>

            <FontContext.Consumer>
                {({font}) => {
                    return (
                        <main className={`container px-5 sm:mx-auto lg:mx-auto md:mx-auto prose prose-lg lg:prose-xl text-content-focus mb-20`}>
                            <div className="text-center">
                                <h2>Arc 01: Haurvatat</h2>
                                <h3>Chương 01: Thế giới không có trần nhà</h3>
                                <h4>Độ dài: 2,047 từ - Lần cuối: 4 năm - Bình luận: 38</h4>
                            </div>
                            <div className={font}>
                                <p id="1">Góc dịch giả: Mình đã sửa lại một số lỗi ở chương 0 và đã thêm ảnh minh họa cho bạn nào mún đọc lại và những bạn chưa đọc XD</p><p id="2">Về tiến độ, trung bình một tuần sẽ có 2 chương những tuần nào mình có việc bận mình sẽ đăng trước khi nghỉ để tiến độ vẫn đều đặn 2 chương một tuần .Tiện thể chương 0 ko tính nên tuần này vẫn còn 1 chương nữa XD</p><p id="3">Mọi ý kiến đóng góp của các bạn về bản dịch đều được chào đón dù gạch đá hay ko và những lời comment của các bạn là động lực mình dịch truyện</p><p id="4">H xin mời bạn đọc truyện</p><p id="5">Trans: Dead Soul</p><p id="6">Edit: Katsuki</p><p id="7">--------------------------------------------------------------------------------------</p><p id="8">Trần nhà lạ lẫm... Không có</p><p id="9">Ngay từ đầu đã không có cái trần nhà nào rồi.</p><p id="10">Tôi nghĩ với cái đầu choáng váng.</p><p id="11">Đây là đâu?</p><p id="12">Hơn nữa, mấy giờ rồi?</p><p id="13">Tôi nhìn đồng hồ đeo tay... tệ thật! Quá giờ phỏng vấn rồi!</p><p id="14">.....Ha, không ổn rồi.</p><p id="15">Đành chịu thôi. Tôi sẽ tới Family Eleven để mua kem sukiyaki hoặc pudding đậu phụ tảo bẹ luộc trước khi về nhà.</p><p id="16">Eh? Nhà ga đâu?</p><p id="17">Đúng hơn là....</p><p id="18">"Tôi đang ở chỗ méo nào?"</p><p id="19">Không có trần nhà , nơi đây còn không có cả mặt đất, đường đi , những tòa nhà hay thậm chí là bầu trời.</p><p id="20">Sao tôi lại ở đây?</p><p id="21">Đúng rồi. Chiếc xe tải gặp tai nạn và lũ ngựa chạy loạn .....sau đó?</p><p id="22">Tôi, đã chết?</p><p id="23">"Yup, cậu đã chết. Đây là deathbed (nơi một người chết hoặc nằm vài giờ trước lúc chết) của cậu. Chiếc xe tải đã chạy trốn sau khi trộm 20 con ngựa từ chuồng ngựa gặp tai nạn và cậu đã dính vào cuộc chạy thoát của lũ ngựa."</p><p id="24">Hiểu rồi, vậy là tôi đã chết. Hoặc đúng hơn, chiếc xe tải đó, không chỉ không thấy đèn tín hiệu, lão tài xế còn là tên trộm ngựa?</p><p id="25">Tôi chết rồi, Miri sẽ buồn lắm đây.</p><p id="26">Thôi, tôi tin Miri chắc chắn có thể sống bằng chính sức mình... nếu bị đưa đến nhà chú tôi, con bé sẽ bị buộc phải chuyển trường.</p><p id="27">Haha, Chuyện đó mà xảy ra thì dù đã chết tôi vẫn sẽ bị nó giận mất.</p><p id="28">Nếu thành một con ma lang thang, tôi sẽ phải chuẩn bị tinh thần seiza mất. (một kiểu quỳ tạ lỗi của người Nhật).</p><p id="29">Hmm? Ai đó vừa mới nói ak?</p><p id="30">Người nói rằng tôi đã chết.</p><p id="31">Ai vậy?</p><p id="32">"Cậu thật có khí phách đấy khi dám cho một Nữ thần ăn bơ đấy."</p><p id="33">Eh? Nữ thần-sama?</p><p id="34">Tôi quay người về hướng giọng nói quyến rũ đó không chút nghĩ ngợi và hóa đá.</p><p id="35">Tôi không thể cử động, như một con ếch bị con rắn đưa vào tầm ngắm, như một chiến binh hứng trọn cái nhìn của Medusa.</p><p id="36">Một con Orc trong bộ váy trắng đang đứng đó. (quái vật đầu lợn cho bạn ko biết)</p><p id="37">Đệt, giống tôi đã nghĩ, sau khi chết đi thật sự có một thế giới khác, nhưng sao ngay từ đầu đã gặp phải Orc thế này, đây là một game bất khả thi.</p><p id="38">Và tôi vẫn chưa nhận được năng lực cheat của mình.</p><p id="39">"Cậu bảo ai là Orc? Ta đã nói với cậu ta là một Nữ thần." [note1663]</p><p id="40">Con Orc ... ak không , nữ thận nói với giọng giận dữ.</p><p id="41">Tôi bị đọc suy nghĩ!?</p><p id="42">"Cô có thật sự là Nữ thần không?"</p><p id="43">Tôi hỏi bán tín bán nghi.</p><p id="44">"Yeah, đúng rồi đó. Và vì thế, dù đã chết , cậu lại là người may mắn nhất trong số một tỉ người khi nhận được cơ hội tuyệt vời này, một chuyến đi tới thế giới khác. Nhưng tuổi và ngoại hình của cậu sẽ được giữ nguyên, nên đây không phải là chuyển sinh. Vậy, lựa chọn của cậu là gì? Chết như vậy, hay sống một cuộc đời mới tại thế giới khác?" [note1664]</p><p id="45"> "Erm, chọn quay lại thế giới cũ thì sao? Cứ thế này, em gái tôi sẽ phải chuyển trường mất." [note1665]</p><p id="46">"Bất khả thi. Ta không có ác ý gì đâu, chuyện đó thật sự là không thể."</p><p id="47">Ku, bất khả thi huh.</p><p id="48">Trong trường hợp đó, không còn con đường nào ngoài sống một cuộc sống mới ở thế giới khác.</p><p id="49">"Nhưng, nếu cậu cứ vậy mà đến thế giới mới, cậu sẽ lại tạch ngay lập tức. Ta sẽ ban cho cậu một sức mạnh bí ẩn gọi là phước lành của thiên đường. Nhân tiện, cậu đã chơi game bao giờ chưa? Dù ta nói là game nhưng không phải loại như xếp gạch hay xếp bài, mà là game nhập vai ấy."</p><p id="50">"...Vâng, có vài loại"</p><p id="51">Game nhập vai, theo đúng nghĩa đen, bạn sẽ nhập vai một nhân vật.</p><p id="52">Đó là game cho phép bạn điều khiển một nhân vật chính như anh hùng hoặc kiếm sĩ, tích lũy kinh nghiệm để level up, trở nên mạnh hơn bằng cách ra lệnh.</p><p id="53">Những tựa game như Dragon Quest, Final Fantasy hay Tales series rất nổi tiếng phải không? [note1666]</p><p id="54">"Nơi ta sẽ đưa cậu đến là một thế giới giống những game đó. Ở đó có quái vật và đánh bại chúng sẽ giúp cậu tăng trưởng với điểm kinh nghiệm và items. Ngay từ đầu, game nhập vai ở thế giới cậu là được tạo ra sau khi vài vị Thần can thiệp vào tiềm thức loài người vì nó quá rắc rồi để giải thích về thế giới khác cho những người xuyên không như cậu."</p><p id="55">Tôi vừa được nghe một sự thật giật mình.</p><p id="56">Nói cách khác, Dragon Quest và Final Fantasy, không, kể cả những game trước đó như Dungeon and Dragons cũng được tạo ra nhờ sự can thiệp của Thần. Ngạc nhiên chưa? Có lẽ, tác giả của những cuốn tiểu thuyết xuyên không cũng đã nhận được sự can thiệp của Thần và viết ra chúng. [note1667]</p><p id="57">"Vậy thì, đầu tiên, ta sẽ tăng năng lực cho cậu, nhưng loại nào thì tốt đây? Ta thì đề nghị cậu nên chọn loại nào có thể giúp cậu ngay lập tức nhận được công việc như hero hay gì đó tương tự."</p><p id="58">"Không, tôi không thật sự ham mê việc trở thành hero hay gì đó giống vậy. Đột ngột trở nên giàu có có bất khả thi không?"</p><p id="59">"Có thể nhưng liệu có ổn không? Ví dụ nhé, nếu 100 nghìn tỉ yên được ghi vào sổ tiết kiệm Nhật Bản của cậu, cậu nghĩ chuyện gì sẽ xảy ra?" [note1668]</p><p id="60">Yeah, thế thì sẽ khá đáng sợ.</p><p id="61">Mọi người sẽ không hiểu được vì sao nó được chuyển vào và tôi không thể giải thích tại sao mình lại kiếm được số tiền đó.</p><p id="62">Nói cách khác, tôi nên từ bỏ việc yêu cầu thứ gì đó như một viên kim cương khổng lồ. Nếu tôi xử lý không tốt, nó sẽ bị coi như hàng ăn cắp.</p><p id="63">Những đề nghị khác mà Nữ Thần giới thiệu là dịch chuyển tức thời hay skill tước đoạt, hay nói cách khác, những năng lực cheat phổ biến.</p><p id="64">Dịch chuyển tức thời sẽ rất tiện lợi cho thương mại, nhưng không có vẻ sẽ làm tôi mạnh hơn. [note1669]</p><p id="65">Skill tước đoạt thì cạn lời. Lấy cắp skill của người khác là quá sức với trái tim mỏng manh của tôi, và nếu bị phát hiện tôi sẽ phải chịu thù hận ghê gớm. [note1670]</p><p id="66">"Có năng lực nào có thể an toàn tăng lượng kinh nghiệm nhận được lên 100 lần không?"</p><p id="67">"100 lần là không thể nào, 20 lần là giới hạn rồi."</p><p id="68">"Vậy tôi sẽ lấy nó. Ah, nếu tôi có 2 phước lành thiên đường cùng loại, nó có trở thành 400 lần không?"</p><p id="69">"Không đâu. Mặc dù ta nói 20 lần, nhưng chính xác là +1900%. Kể cả có 2 phước lành giống nhau nó cũng chỉ là 39 lần. Hơn nữa ta chỉ ban được 1 phước lành."</p><p id="70">Vậy sao. Cũng được, thế là ổn rồi.</p><p id="71">Tôi nói với Nữ thần "Vậy làm ơn hãy cho tôi năng lực 20 lần kinh nghiệm".</p><p id="72">"Rất tốt, ta sẽ bắt đầu ngay, hãy tận hưởng cuộc sống ở thế giới khác nhé. Vì không có cách nào để ta có thể cho cậu một nhiệm vụ cụ thể được."</p><p id="73">Nữ thần nói vậy và rời đi.</p><p id="74">Vậy là cuộc sống mới bắt đầu huh.</p><p id="75">Đầu tiên tôi sẽ đánh bại lũ slime xung quanh lâu đài và nhắm đến lv99 ... Đùa thôi. [note1671]</p><p id="76">Tôi thật sự thấy tiếc cho Miri, nhưng nếu phải sống ở thế giới khác, tôi sẽ tận hưởng nó hết mình. (Trans: Đồ khốn :))) thôi để anh em gái chú cũng được)</p><p id="77">Cuộc sống ở thế giới khác cuối cùng cũng bắt đầu.</p><p id="78">Cuối cùng cũng bắt đầu.</p><p id="79">Bắt đầu bất cứ khi nào.</p><p id="80">Đến giờ bắt đầu rồi.</p><p id="81">Bắt đầu!!!!</p><p id="82">Này, bao giờ thì mới bắt đầu?</p><p id="83">"Nữ thần-sama, vì lý do nào đó tôi vẫn không thấy bất kì tín hiệu nào sẽ dịch chuyển tới thế giới khác cả."</p><p id="84">.... Không có trả lời.</p><p id="85">Không có gì diễn ra.</p><p id="86">Dù đã đợi cả tiếng đồng hồ, chẳng có chuyện gì xảy ra cả.</p><p id="87">Bug??? Đóng băng???</p><p id="88">Eh, tôi phải làm gì đây?</p><p id="89">"Nữ Thần-samaaaaaaa!"</p><p id="90">Tôi vô tình bật khóc.</p><p id="91">Nếu bị kẹt tại không gian trống rỗng này, tôi sẽ phát điên mất.</p><p id="92">"Oops, lỗi của ta... ta ngủ quên mất. Ta là Nữ thần đây."</p><p id="93">Cô ấy nói và bắt đầu hiện ra.Đó là một cô bé.</p><p id="94">Cô bé mặc một chiếc áo choàng trắng,với mái tóc hai bím vàng óng và ánh nhìn khó chịu.</p><p id="95">"...Eh"</p><p id="96">"Yeah, không phải là vô lý khi ngươi ngạc nhiên. Ta sẽ điều này đầu tiên. Ngươi đã chết. Nhưng, ngươi lại là kẻ may mắn nhất trong 1 tỉ kẻ khác vì đã nhận được một cơ hội tuyệt vời." [note1672]</p><p id="97">Và sau đó, Nữ thần trẻ con tiếp tục nói những điều giống Nữ thần béo trước đó.</p><p id="98">Eh, nó cũng là cơ hội giới hạn 1 trong 1 tỉ người?</p><p id="99">Đừng bảo là, tôi đã được lên lịch bởi 2 nữ thần liên tiếp?</p><p id="100">Tôi nghĩ khả năng đó là 1 phần 1 tỉ tỉ ấy chứ.</p><p id="101">"Cuối cùng, ta nghĩ ta sẽ ban cho ngươi một phước lành của thiên đường."</p><p id="102">"...Ah, 20 lần điểm kinh nghiệm đi ạ."</p><p id="103">Mặc dù tôi đã có 20 lần điểm kinh nghiệm rồi.</p><p id="104">Sau khi nói vậy,</p><p id="105">"20 lần điểm kinh nghiệm không phải loại phước lành mà hiện tại ta có thể ban. ... nhưng không sao, ta sẽ cho ngươi thứ tương tự như vậy. Thế nhé, ta đi ngủ típ đây, hãy tận hưởng cuộc sống ở thế giới khác đi nhé."</p><p id="106">Khoảnh khắc Nữ thần biến mất, ý thức của tôi cũng nhạt nhòa theo.</p><p id="107">Ah, có một sự hiểu nhầm ở đây.</p><p id="108">Thôi kệ, đó là kết quả cho sự thành thật của tôi nên không vấn đề gì.</p><p id="109">Và, vậy là tôi sẽ có 39 lần kinh nghiệm phải không?</p><p id="110">Hmm, có lẽ sẽ tốt hơn nếu chọn dịch chuyển tức thời hoặc skill tước đoạt cho phước lành thứ hai.</p><p id="111">Cùng với việc bắt đầu cảm thấy hối hận, tôi buông lỏng nhận thức của mình.</p><p id="112">Thời điểm đó, tôi đã không biết.</p><p id="113">Rằng phước lành thiên đường mà Nữ thần trẻ con ban cho tôi là 1/20 điểm kinh nghiệm cần thiết để lên cấp.</p><p id="114">Nói cách khác, giả sử 100 điểm kinh nghiệm là cần thiết để tăng trưởng bình thường, trong trường hợp của tôi thì chỉ với 5 điểm kinh nghiệm.</p><p id="115">Do đó, tôi đã bước vào trạng thái tăng trưởng nhanh hơn 400 lần so với những người khác. Nhưng tôi đã không nhận thức được nó sau đó.</p><p id="116">------------------------------------------------------------------------------------------</p><p id="117"><strong>Đôi lời của tác giả:</strong></p><p id="118">Cho tới lúc này, tôi sẽ đăng tiêu đề cho 4 volume liên tục</p><p id="119">Có phải bạn đang ảo tưởng rằng Nữ Thần là phải đẹp ko? (Trans: Có TTvTT)</p>
                            </div>
                        </main>

                    )
                }}
            </FontContext.Consumer>
        </FontProvider>
    </>
}

export default Reader