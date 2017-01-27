/**
 * Created by lishi on 17/1/26.
 */

const events = [{
    eventId: '2014-creative-leap',
    theme: 'Creative Leap',
    displayName: '2014 创意飞跃',
    type: 'yearly',
    when: 121212121,
    where: 'Suzhou Cultural and Art Center',
    audienceCount: 500
}, {
    eventId: '2014-dream-never-act-itself',
    theme: 'Dream Never Act Itself',
    displayName: '2014 DNA',
    type: 'youth',
    when: 121212121,
    where: 'Suzhou Cultural and Art Center',
    audienceCount: 500
}, {
    eventId: '2015-predicting-the-future',
    theme: 'Predicting The Future',
    displayName: '2015 预见未来',
    type: 'yearly',
    when: 121212121,
    where: 'Suzhou Cultural and Art Center',
    audienceCount: 500
}, {
    eventId: '2015-mirror-image',
    theme: 'Mirror Image',
    displayName: '2015 镜像',
    type: 'women',
    when: 121212121,
    where: 'Suzhou Cultural and Art Center',
    audienceCount: 500
}, {
    eventId: '2015-light-em-up',
    theme: "Light'em up",
    displayName: "2014 Light'em Up",
    type: 'youth',
    when: 121212121,
    where: 'Suzhou Cultural and Art Center',
    audienceCount: 500
}];

const talks = [{
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "Dean of International Business School Suzhou of Xi’an Jiaotong-Liverpool University 西交利物浦大学国际商学院院长",
    "performerName": "Sarah Dixon 狄苏文",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/sara.jpg",
    "video": {"type": "youku", "youkuId": "XNzEyNTQ1MTQ0", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "Creative director of The Orangeblowfish, using different forms of art for company’s visual campaignThe Orangeblowfish创意总监，该公司为营销活动提供创意视觉艺术支持",
    "performerName": "Siu Tang 唐修",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/Siu-Tang.jpg",
    "video": {"type": "youku", "youkuId": "XNzA4Mzc1MjA4", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "Principal and Design Director at FUTUREPOLIS, which played an important role in design and development of SIP 未来都市设计公司设计总监，该公司是苏州工业园区整体设计和发展的重要参与者",
    "performerName": "JasonSlatinsky 杰森·斯兰汀斯凯",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/Jason-Slatinsky.jpg",
    "video": {"type": "youku", "youkuId": "XNzEzMDUxMjA4", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "Founder of SideChef, a cooking application featuring step by step guidance from top blogs/chefs. 创建烹饪应用SideChef，主厨和热门博主可以在上面提供手把手烹饪指导",
    "performerName": "Kevin Yu 于凯文",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/Kevin-Yu.jpg",
    "video": {"type": "youku", "youkuId": "XNzEyNTgzNzYw", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "An Australia Artist who creatively employs ideas and materials in Chinese art to make paintings 澳大利亚画家，创新地借鉴中国画的元素和技巧来进行油画创作",
    "performerName": "David Reid雷大卫",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/David-Reid.jpg",
    "video": {"type": "youku", "youkuId": "XNzA4Mzk4ODc2", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "Business Director of ADC Design Shanghai, specialized in visual design for global luxury and cosmetics brands ADC Design Shanghai 平面设计公司业务总监，专精于国际奢侈品和化妆品牌视觉设计",
    "performerName": "Andrew Lu庐鏖",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/Andrew-Lu.jpg",
    "video": {"type": "youku", "youkuId": "XNzA4NDA5NzM2", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "A famous local artist and scholar, professor in Suzhou University 苏州知名文化创意人，苏州大学教授，受邀编导专题片《袁牧谈艺》",
    "performerName": "Yuan Mu 袁牧",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/Yuan-Mu.jpg",
    "video": {"type": "youku", "youkuId": "XNzIxMTQ5MDg0", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "Artist of New Media, solo or group exhibition in many important international and domestic museums 新媒体艺术家，多次在国际、国内重要美术馆举办个展、群展",
    "performerName": "Xiaotao Zhang 张小涛",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/Xiaotao-Zhang.jpg",
    "video": {"type": "youku", "youkuId": "XNzA4NjEwOTE2", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "Founder of bong, a wristband device that can automatically recognize your movement and sleep 创建bong手环，一个可以全自动识别人们行为的「无感」手环",
    "performerName": "Dayu Gu 顾大宇",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/Dayu-Gu.jpg",
    "video": {"type": "youku", "youkuId": "XNzA4NTM5ODg0", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "Venture Partner at 500 Startups, a leading accelerator and seed investment fund in Silicon Valley 硅谷知名孵化器和种子基金500 Startups的风险投资家",
    "performerName": "Rui Ma 马睿",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/Rui-Ma.jpg",
    "video": {"type": "youku", "youkuId": "XNzA4NTMxNDQw", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "Volunteer for a school in Kenya as a strategic consultant, sent by VSO (Voluntary Service Overseas) 受英国海外志愿服务社资助赴肯尼亚职业学校担任策略顾问",
    "performerName": "Yan Zou 邹艳",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/Yan-Zou.jpg",
    "video": {"type": "youku", "youkuId": "XNzEzMDQ2MDEy", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "Chengfang Lv was born in Suzhou. She is currently a volunteer of Association for Rescuing Kun Opera. She is an expert on many forms of local performing art, including Kun Opera, PingTan and Yue Opera.江苏苏州人，苏州昆曲传习所“昆曲遗产抢救保护促进会”志愿者。擅长昆曲、评弹、越剧等戏曲表演，曾多次在省、市昆曲、戏曲大赛中获奖。",
    "performerName": "Chengfang Lv吕成芳",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/lcf.jpg",
    "video": {"type": "youku", "youkuId": "XNzA4MzYxMTg0", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-creative-leap",
    "name": "the name of the talk",
    "sessionDesc": "Xiaoqing Chen is a artist for local art PingTan. She is also a senior yoga teacher and good at many forms of traditional China opera and traditional Chinese medical.陈晓庆，评弹演员，高级瑜伽教练，擅长多种戏曲和养生。",
    "performerName": "XiaoqingChen 陈晓庆",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014cl/cxq.jpg",
    "video": {"type": "youku", "youkuId": "XNzEzMDU4NTA4", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-dream-never-act-itself",
    "name": "the name of the talk",
    "sessionDesc": "在大多数人眼里，社交网络是一种消遣，一种娱乐的方式。 而在另一些人手里，社交网络却可以是一份工作，一片创业的天地——陈莽昆就是这些人的代表。 ",
    "performerName": "陈莽昆 南京大学学生",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014dna/1_chenmangkun.jpg",
    "video": {"type": "youku", "youkuId": "XOTQwMzQ1MTc2", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-dream-never-act-itself",
    "name": "the name of the talk",
    "sessionDesc": "并不是每一个美国华裔都如我们想象的一般一直顶着亮丽的光环——缪素臻的经历就是如此。 ",
    "performerName": "缪素臻 创业者",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014dna/2_miaosuzhen.jpg",
    "video": {"type": "youku", "youkuId": "XOTQwMzU2OTY0", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-dream-never-act-itself",
    "name": "the name of the talk",
    "sessionDesc": "宋嘉磊，一只92年出生的猴子，好动和懒惰的矛盾体。 他可以不辞辛劳地到处跑，广交友；也可以在寝室里饿上一天，只因懒得下去买饭。",
    "performerName": "宋嘉磊 苏州大学学生,",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014dna/3_songjialei.jpg",
    "video": {"type": "youku", "youkuId": "XOTQwMzc2NDcy", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-dream-never-act-itself",
    "name": "the name of the talk",
    "sessionDesc": "阅读推广志愿者。 这是全杏梅给自己下的标签。 她曾是绿风助学第一任理事长，专注于乡村教育。 ",
    "performerName": "全杏梅 公益人",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014dna/4_quanxingmei.jpg",
    "video": {"type": "youku", "youkuId": "XOTQwMzg4NTA4", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-dream-never-act-itself",
    "name": "the name of the talk",
    "sessionDesc": "面临滚蛋的大四狗、AIESEC学校分会老大、曾经深入神秘非洲的volunteer。 ",
    "performerName": "刘畅西交利物浦大学学生",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014dna/5_liuchang.jpg",
    "video": {"type": "youku", "youkuId": "XOTQwMzkyODEy", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-dream-never-act-itself",
    "name": "the name of the talk",
    "sessionDesc": "从物理到环境设计，再到珠宝营销。当周围的大多数人在为自己的专业课程头疼不已的时候，崔宇旗的大学生活已经遍地开花，涉猎广泛——而她的经历绝不止这些。",
    "performerName": "崔宇旗 同济大学学生",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014dna/6_cuiyuqi.jpg",
    "video": {"type": "youku", "youkuId": "XOTQwNDIxNzQw", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-dream-never-act-itself",
    "name": "the name of the talk",
    "sessionDesc": "在移动互联网领域，他摸爬滚打了数十年。 早在1999年，陈联就创建了MindBond，并因其出色的业绩在两年后得到收购。 ",
    "performerName": "陈联 Leo Chen,创业者",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014dna/7_chenlian.jpg",
    "video": {"type": "youku", "youkuId": "XOTQwNDMxNTM2", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-dream-never-act-itself",
    "name": "the name of the talk",
    "sessionDesc": "林俞妗，一个看上去和同龄人没什么异样的女生，却已经在多个地方践行着自己的学业。 出生于印尼，她在新加坡完成高中课程并获得国际文凭，而如今又来到中国，开启自己的大学学程——一边念书，一边家教，一边用书籍和音乐充实自己。",
    "performerName": "林俞妗西交利物浦大学,生物科学系",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014dna/8_Felicia.jpg",
    "video": {"type": "youku", "youkuId": "XOTQwODU3MjE2", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-dream-never-act-itself",
    "name": "the name of the talk",
    "sessionDesc": "在校园里，Mia是一个平凡的19岁女生。 跟很多年轻人一样，她追求刺激，酷爱着潜水这样的活动。 ",
    "performerName": "Mia Oenoto西交利物浦大学, 环境科学系",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014dna/9_MiaOenoto.jpg",
    "video": {"type": "youku", "youkuId": "XMTI2MjU0MzUzNg", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2014-dream-never-act-itself",
    "name": "the name of the talk",
    "sessionDesc": "谈论设计、动手设计、与设计师打交道。从保时捷设计中心，到奥迪设计中心。 无论工作抑或生活，刘书剑的梦想始终围绕着设计——他希望通过设计来改变世界。 ",
    "performerName": "刘书剑摩根工业设计创始人、总经理及设计总监",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2014dna/10_liushujian.jpg",
    "video": {"type": "youku", "youkuId": "XMTMwNjg2NTE2OA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "微软搜索引擎必应的产品经理 / Product Manager for the Bing",
    "performerName": "Rani Qumsiyeh瑞尼 ",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/ranitalk.jpg",
    "video": {"type": "youku", "youkuId": "XMTI3Mzc5NjY1Mg", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "《中国电子竞技幕后史》的作者，电子竞技节目StarsWar的总导演。现任牛铺项目经理，WE俱乐部经理，游戏产品制作人。",
    "performerName": " 刘洋 BBKinG",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/bbking.jpg",
    "video": {"type": "youku", "youkuId": "XOTU2ODQwMTQ4", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "四海艺家雕刻工作室 艺术总监， Carving Artist of Si Hai Yi Jia Carving Office.",
    "performerName": " 徐佩根 PeigenXu",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/xpg.jpg",
    "video": {"type": "youku", "youkuId": "XMTI4ODkzODM5Ng", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "网易 / Netease, 网易教育产品部战略与高校总监 / Director of Strategic and University in Education Department of Netease",
    "performerName": "孙志岗 Zhigang Sun ",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/sunzg.jpg",
    "video": {"type": "youku", "youkuId": "XOTU2ODMyMjE2", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "树兰医疗 / Shulan Health, 树兰医疗CEO / CEO of Shulan Health",
    "performerName": "郑杰 Jie Zheng ",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/zj.jpg",
    "video": {"type": "youku", "youkuId": "XOTU1NjMxNTQw", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "西交利物浦大学 / XJTLU, 西交利物浦大学副校长 / Vice President of Xi’an Jiaotong-Liverpool University",
    "performerName": "André Brown贺安峻",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/browntalk.jpg",
    "video": {"type": "youku", "youkuId": "XMTI4ODkwNTQ2NA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "明基友达 / BenQ, 明基友达公益基金会理事长 / CEO of BenQ Foundation",
    "performerName": "王黎明 LouiseWang ",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/Louisetalk.jpg",
    "video": {"type": "youku", "youkuId": "XMTI4ODkzMzY4MA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "乐豪斯创办人/ Founder of LOHAUS, 总经理 / General Manager",
    "performerName": "Jason Inch殷敬棠",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/ji.jpg",
    "video": {"type": "youku", "youkuId": "XMTI4MTUxMTU1Mg", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "艺术家 / Artist, 国内前沿的媒体艺术家、博客写手 / One of China’s foremost media artists and bloggers",
    "performerName": "徐文恺 Aaajiao Xu ",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/xwk.jpg",
    "video": {"type": "youku", "youkuId": "XMTI4ODg3OTEwOA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "Minerva大学 / The Minerva University, Minerva大学亚洲区总裁 / Managing Director, Asia, The Minerva Project",
    "performerName": "Kenn Ross 罗凯",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/ross.jpg",
    "video": {"type": "youku", "youkuId": "XOTUzMDM2ODM2", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "IBM, IBM 高级副总裁 兼中国开发中心总经理 / Vice President, IBM China Development Labs AP North Cluster Labs",
    "performerName": "王阳 Matt Wang ",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/wy.jpg",
    "video": {"type": "youku", "youkuId": "XOTU3MjU1MDQ0", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "共创辉煌 / Let’s Make GREAT! , “共创辉煌”联合创始人 / Co-founder of Let’s Make GREAT!",
    "performerName": "谭俊业 Brian Tam ",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/brianralk.jpg",
    "video": {"type": "youku", "youkuId": "XMTI2MDM1NTE5Mg", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": "默客成立于2004年，2007年正式改组为人声乐团，是上海最早的纯男流行人声乐团。",
    "performerName": "默客人声乐团",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/moke_show.jpg",
    "video": {"type": "youku", "youkuId": "XMTI4ODg2Njk2NA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": " 尹荣一个土生土长的苏州男孩儿，16岁开始接触舞蹈，到现在已经有8年的舞龄，并且他坚信只要还活着就会keep on dancing！",
    "performerName": "尹荣 Dancer Rio ",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/roi_show.jpg",
    "video": {"type": "youku", "youkuId": "XMTI4MDg2MzQ2OA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-predicting-the-future",
    "name": "the name of the talk",
    "sessionDesc": " 王利建，古琴艺术家，沧浪琴苑创始人，王利建老师长期从事古琴文化传播和古琴教学，学生遍及中国大陆、台湾及新加坡、澳大利亚等全球各地。带着对古琴艺术的热 ",
    "performerName": "王利建Lijian Wang",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015ptf/wanglijian_show.jpg",
    "video": {"type": "youku", "youkuId": "XMTI4MDg0MzUzMg", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": " 马荆棘 衣锦媚行珠宝, 建筑出身的85后，因热爱收藏中国古董首饰，2009年出版了自己的收藏散文集《衣锦媚行——在古代首饰中且歌且行》，从此与首饰结缘。 ",
    "performerName": "马荆棘 MaJinJi ",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/majinji.jpg",
    "video": {"type": "youku", "youkuId": "XMTMxMzE1MjQ2NA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": " 尹静 JAM Fashion China , 总裁。服装设计专业出身的尹静女士在30岁的时候孤身前往纽约,以一张租来的办公桌开始其传奇创业人生。 ",
    "performerName": "尹静 Yin Jing ",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/yinjing.jpg",
    "video": {"type": "youku", "youkuId": "XMTMxMzE0OTE2MA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": "Fabiola为各大跨国公司的IT基础设施需求提供资源协助的在华客户经理。她同时对于帮助女性的发展抱有无限的激情。 ",
    "performerName": " Fabiola Imhof鲁娜",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/luna.jpg",
    "video": {"type": "youku", "youkuId": "XMTMxMjE4ODE1Mg", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": "Stephany 来自上海与纽约,致力于时尚,互联网和非营利组织的工作。 Stephany创造的故事能将不同背景的人 紧密地联系在一起。 ",
    "performerName": " Stephany斯蒂芬妮",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/Stephany.jpg",
    "video": {"type": "youku", "youkuId": "XMTMxMjE5MTQ4MA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": " 梁雪芳,苏州, 清华大学访问学者、研究员级高级工艺美术师、清华大学美术学院纤维艺术研究所副所长。 ",
    "performerName": " 梁雪芳 LiangXuefang ",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/liangxuefang.jpg",
    "video": {"type": "youku", "youkuId": "XMTI5NjIxMjY0NA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": " 作家，策展人, 著名艺术评论人.沈奇岚博士一直致力于文化艺术的传播以及国际文化项目的交流与合作。 ",
    "performerName": "沈奇岚 ShengQilan",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/shengqilan.jpg",
    "video": {"type": "youku", "youkuId": "XMTI5NjIxMDkxMg", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": " 捷安特全球总部及中国总部Liv女性品牌推动者, 木兰铁马营队长 ",
    "performerName": "刘素娟PhoebeLiu",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/phoebe-liu.jpg",
    "video": {"type": "youku", "youkuId": "XMTI5NjIwMTU5Mg", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": " 毛淑华, 猫的天空之城概念书店, 品牌总监, 苏州大学艺术学院硕士学位毕业后任职于高校艺术系，教授设计相关课程。2009年和先生共同创立猫的天空之城概念书店。 ",
    "performerName": " 毛淑华 MaoShuhua",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/maoshuhua.jpg",
    "video": {"type": "youku", "youkuId": "XMTMwMzI4NzIyNA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": " 记者，作家 , 《剩女独白》总监制 玫瑰Roseann Lake 是前沿剩女相关丛书的作者，以及“剩女独白”的总监制，该剧首次在2014年7月于北京公演。 ",
    "performerName": "Roseann Lake玫瑰",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/Roseann-Lake.jpg",
    "video": {"type": "youku", "youkuId": "XMTMwNTEwMTI5Mg", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": " 心乐Lulu,心乐厨房, 首席养生讲师与甜点魔法师,来自上海的LuLu老师出生在一个香港医药世家。她曾旅德学习生活十多年，并游学欧美等地。",
    "performerName": "心乐LuLu",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/lulu.jpg",
    "video": {"type": "youku", "youkuId": "XMTMwNTE4ODQyNA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": " 赵晓东，是一位视力障碍者，从小酷爱音乐的他，一首歌一般只要听上几遍就基本能够唱出来了。",
    "performerName": "赵晓东 ZhaoXiaodong",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/zhaoxiaodong_show.jpg",
    "video": {"type": "youku", "youkuId": "XMTMwMzI5MDQ0NA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": " 姑苏城最顶级的女子雅乐团体，三名核心成员【立言，南子，涵月】均为硕士及以上学历，精通至少两项传统才艺，多次受邀出访国内外。",
    "performerName": "姑苏·雅乐坊",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/yayuefang_show.jpg",
    "video": {"type": "youku", "youkuId": "XMTMwMDIwMjg2OA", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-mirror-image",
    "name": "the name of the talk",
    "sessionDesc": " WOLF GANG JAZZ BAND 是一个定居于苏州的法国家庭乐队，乐队成员分别是父亲Laurent Erdos和他的两个儿子——14岁的Jan和11岁的Tino。",
    "performerName": "WOLF GANGJAZZ BAND",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015women/wolf_band_show.jpg",
    "video": {"type": "youku", "youkuId": "XMTMwMDIwNjA3Mg", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": " 徐心怡，苏州中学 “馔玉”创始人 / Suzhou High School of Jangsu Province Founder of Zhuanyu Cuisine Club                            ，是一个土生土长的苏州小娘鱼，自小喜欢品尝美食，洞察身边的感动，她渐渐从食物里找到了爱与文化的含义。  ",
    "performerName": "徐心怡 Nancy Xu",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/1_xuxinyi.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ3ODU3NTk5Ng==", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": "  苏州文化艺术中心高级经理 / Senior Project Manager of Suzhou Culture and Arts Centre, “离开戏剧会死”这是他写在自己简历最后的话。曾经一次偶然的机会，陈喆接触到了戏剧，这让他发现了人生的新轨迹，从此对戏剧爱的不能自拔。现在即使不能上台表演，身为苏艺高级经理的他也依然在为剧院演出做着自己的贡献",
    "performerName": "陈喆 Zed Chen",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/2_chenzhe.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ2Njg5OTcwOA==", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": "  Shutter-Up 创办人 / Founder of Shutter-Up, 他叫周圣超，16岁的年轻摄影师，出生于上海。他喜爱摄影，记录生活的点点滴滴，他创办高中生摄影平台ShutterUp，聚集更多的同龄人，一同去发现摄影的美丽  ",
    "performerName": "周圣超 Elton Chow",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/3_zhoushengchao.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ2NjA5NTcxMg==", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": "  苏州新加坡国际学校十年级 / 10th Grade at SUZHOU SINGAPORE INTERNATIONAL SCHOOL, 她是美籍华人，就读于苏州新加坡国际学校，因其经历过多样化的教育，所以她有了独特的学习经验，她是一个喜欢采用创新而理性的思想，换角度思考问题的人。 ",
    "performerName": "Amy Li 李灏",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/4_lihao.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ4MDEwMDI2NA==", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": "  “秋叶PPT”运营总监 / Founder and CEO of QiuYe PPT, 秦阳，一个被大家亲切称为“老秦”的90后，一个典型移动互联网下的活跃分子：他是国内最具影响力的Office学习品牌“秋叶PPT”的核心运营人，希望帮助更多的职场新人快速掌握Office，帮助他们养成爱动手、爱思考、爱分享的习惯。 ",
    "performerName": "秦阳 Yang Qin",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/5_qinyang.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ4MzYxNzY0OA==", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": "  壹听旅行创始人 / Founder of Yiting Travel, 卢柏克是一名90后退伍军人，2012年仅携带66元开启了他的环游中国公益之旅。同时在全国各地号召社会青年和大学生志愿者一同走进大山，将这种属于“90后”年轻一代的正能量传递给每一个人。 ",
    "performerName": "卢柏克 Boke Lu",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/6_luboke.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ3OTk1Mzc0MA==", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": "  北外附属苏州湾外国语学校初一学生 / 7th Grade from SUZHOU INTERNATIONAL ACADEMY，BFSU, 本次大会最年轻的演讲人——曲上来自苏州，她从4岁开始独立阅读，涉猎广泛，阅读使她成长为一个有创意的思考者、勇于探索和发现周围世界的学习者。 ",
    "performerName": "曲上 April Qu",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/7_qushang.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ2NjQ4NDYxMg==", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": "  甭纠结创始人兼CEO / Founder and CEO of Vocinno, 陆初杰，出生于台湾，一个80后海归创业者，从硅谷走来的资深产品咨询顾问，“甭纠结”的创始人兼CEO。抱着给中国年轻人带来快乐的初心，陆初杰和他的团队打造出“甭纠结”，希望通过陪伴、关怀和鼓励帮助年轻人更好的成长！ ",
    "performerName": "陆初杰 Eric Loh",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/8_luchujie.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ2NjE1OTU0OA==", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": "  西交利物浦大学大二环境科学系学生 / Xi’an Jiaotong-Liverpool University year 2 environmental science student, 郭一锦出生于山西太原，这让他从小就意识到环境污染的严重性。他于2015年底参加了联合国第二十一届气候变化大会，代表中国青年群体发声，与更多的人分享中国绿领青年的环保故事。 ",
    "performerName": "郭一锦 James Guo",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/9_guoyijin.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ2NzA3NjAwNA==", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": "  西交利物浦大学 国际商学院经济与金融专业负责人 / Economics and Finance Program Director of Xi’an Jiaotong-Liverpool UniversityInternational Business School,Eddy出生于比利时，取得英国剑桥大学博士学位。Eddy通过在行为科学领域的研究，他发现了如何使得人们更加智慧生活的方式。 ",
    "performerName": "Eddy Fang 方世豪",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/10_fangshihao.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ2NjU2MzM0OA==", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": "  西交利物浦大学大三学生 / Xi’anJiaotong-Liverpool University year 3 student，他是恋爱心理学选修课的讲师，他的辛勤教学和与学生的良好互动帮助了很多学生解决恋爱的问题，并使他们从消极走向积极。他抱着积极的态度和热情的心，去影响他周围的人，去传播更多的正能量。",
    "performerName": "马鸿 Hong Ma",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/11_mahong.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ3MDE2MzM0NA==", "length": 120}
}, {
    "id": "the id of the talk",
    eventId: "2015-light-em-up",
    "name": "the name of the talk",
    "sessionDesc": "  苏州外国语学校 School Family创始人 / Suzhou Foreign Language School  Founder of School Family, 叶子愉来自苏州外国语学校，在高二时创立了微信公众号‘School Family’，用于帮助初中生选择本地和国外的高中经常更新发布一些不同的教育相关的信息。",
    "performerName": "叶子愉 Christina Ye",
    "coverImg": "http://static.tedxsuzhou.com/images/talks/2015leu/12_yeziyu.jpg",
    "video": {"type": "youku", "youkuId": "XMTQ3ODAwNjA5Mg==", "length": 120}
}];

const sponsor = [{
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.vermeiren.com",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/vm.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.theofficestar.com",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/officestar.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.xjtlu.edu.cn/en/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/xp.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "https://www.juhe.cn",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/jhsj.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://mailchimp.com/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/MailChimp.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://xiumi.us/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/xiumi-logo.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.eventdove.com/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/huige.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.skema-bs.cn/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/skema.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/sy.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.kotrip.com/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/maokong.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/sipnpo.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.suzart.cn/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/jjm.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/zhix.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://developers.dushu.hu/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/gdg-suzhou.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.sscac.com.cn/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/szdjy.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.lingxi360.com/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/lx.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://gongyi.la/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/gongyi.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.34580.com/",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/fmkt.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.opark.com",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/cyzg.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://ckb.opark.com",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/ckb.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.yunshantea.com",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/yscq.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.fdemaison.com/index.html",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/mssj.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.benlai.com",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/blsh.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/amaiwei.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/df.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/zz.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/panda.png"
}, {
    "id": "",
    "name": "",
    "level": 1,
    "type": "",
    "active": true,
    "link": "http://www.isuzhou.me",
    "logoUrl": "http://static.tedxsuzhou.com/images/sponsor/qdsz.png"
}];


module.exports = {
    GetAllEvents: function () {
        "use strict";
        return events;
    },
    GetTalksByEventId: function (eventId) {
        "use strict";
        return talks.filter(function (talk) {
            return talk.eventId == eventId;
        });
    },
    GetActiveSponsor: function() {
        "use strict";
        return sponsor;
    }
};