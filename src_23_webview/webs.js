import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
import {getnews} from '../src_28_api/getnews';
export default class webs extends Component {
    render() {
        return (
            <WebView
                source={{
                    html: `<div class=\"main-wrap content-wrap\">\n<div
                    class=\"headline\">\n\n<div class=\"img-place-holder\">
                    </div>\n\n\n\n</div>\n\n<div class=\"content-inner\">\n\n\n\n\n<div
                    class=\"question\">\n<h2 class=\"question-title\"></h2>\n\n<div
                    class=\"answer\">\n\n<div class=\"meta\">\n<img class=\"avatar\"
                    src=\"https://pica.zhimg.com/v2-a0f63637ddbc3d802ac45cee8c33c426_l.jpg?
                    source=8673f162\">\n<span class=\"author\">Jacob贾超，</span><span
                    class=\"bio\">专治职场不开心</span>\n<a
                    href=\"https://www.zhihu.com/question/38626531/answer/918752090\"
                    class=\"originUrl\" hidden>查看知乎原文</a>\n</div>\n\n<div
                    class=\"content\">\n<p>这个问题挺重要的，但经常被管理者忽视。</p>\r\n<p>作为管理者而
                    不是个人贡献者的很大区别是需要通过整个团队来共同达成团队目标，而不只是靠自己来完成所有工作。
                    一个好汉三个帮，底下的人都跑路了作为老板光杆司令还干个啥啊。</p>\r\n<p>这儿我们不讨论管理
                    者的水平怎么样以及管理者自己情商智商水平会不会做人有没有领导力。</p>\r\n<p>单纯来就问题答
                    问题，从管理者视角，你的员工有哪些迹象，说明这人大概率要考虑离职甚至已经决定离职了。
                    </p>\r\n<p><strong>1、注意行为上的变化。</strong></p>\r\n<p>例如比平常来得更晚、走得
                    更早，避开他人休息，单独吃午餐，比以往穿着更正式，或者在情绪上有显著的变化。</p>\r\n<p>尤
                    其是对于一些对着装要求不是特别正式的公司，突然这人穿的一本正经，还不是准备或者刚刚去完面试
                    嘛！</p>\r\n<p><strong>2、警惕工作表现突然下滑。</strong></p>\r\n<p>如果整体大环境不
                    好，整个团队包括领导者自己的业绩都在下滑，这个还算是常态。如果本身一个一直工作产出不错的人，
                    突然自己的业绩表现下滑。那这是个很重要的预警信号。</p>\r\n<p><strong>3、注意通常不爱抱怨
                    的员工突然表示不满。</strong></p>\r\n<p>一个人的性格和行为表现相对是稳定的。如果一直隐忍
                    的员工突然不忍了。那基本也就是破罐子破摔不准备干了。</p>\r\n<p><strong>4、留心员工经常羡
                    慕地提到其他公司</strong>（比如“我听说 XX 公司的 XX 人得到了 20000 块的项目奖金！”），
                    <strong>或者提起已经离开的其他员工</strong>（“小李微信跟我说，她现在在新公司混的非常好，
                    老板非常看重她，给了她很重要的客户负责......”）</p>\r\n<p><strong>5、留意渐渐与他人疏
                    远的团队成员。</strong>例如，有的人原来经常参加会议或者主动承担额外的项目，现在却是能混则
                    混。</p>\r\n<p><strong>6、谈起“工作倦怠”、缺乏动力、未来迷茫等话题特别起劲。</strong>
                    </p>\r\n<p><strong>如果团队成员有以上主动离职征兆和迹象，建议作为领导者还是不要回避，坦
                    率真诚的与下属进行一对一的交流互动，看是否有从领导者的角度能够给予的支持和帮助。</strong>
                    </p>\r\n<p><strong>天下没有不散的宴席，但毕竟缘分一场，还是争取多一起走一段路吧。哪怕要
                    散，也祝福好聚好散。硬要撕破脸皮拉黑绝交，既没格局也没必要。</strong>
                    </p>\n</div>\n</div>\n\n\n<div class=\"view-more\"><a
                    href=\"https://www.zhihu.com/question/38626531\">查看知乎讨论<span class=\"jsquestion-holder\"></span></a></div>\n\n</div>\n\n\n</div>\n</div><script
                    type=“text/javascript”>window.daily=true</script>`}}
            />
        )
    }
    
}