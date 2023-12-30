

/*
<button type="button" onclick="last()">←</button>
<button type="button" onclick="next()">→</button>
*/

//var qas=[["a","A"],["b","B"],["c","C"],["d","D"],["e","E"],["f","F"],["g","G"],["h","H"],["i","I"],["j","J"],["k","K"]];
var qas=
[["n.能力;才能","ability"],["adv.在上面;向上面prep.在……上面","above"],["adj.缺席;不在","absent"],["adj.意外的，偶然的","accidental"],
["adj.活跃的;积极的","active"],["n.住址;地址;通讯处","address"],["v.欣赏;仰慕","admire"],["n.优点;有利条件","advantage"],["v.承担得起(后果);买得起","afford"],
["adj.非洲(人)的n.非洲人","African"],["毕竟：终归","after all"],["n.(意见或看法)一致;同意","agreement"],["adv.向前面;在前面","ahead"],["在……前面","ahead of"],
["n.外星人","alien"],["adj.活着;有生气的","alive"],["突然;猛地","all of a sudden"],["连同：除……以外还","along with"],["adv.大声地;出声地","aloud"],
["n.祖宗;祖先","ancestor"],["v.宣布;宣告","announce"],["n.蚂蚁","ant"],["pron.任何人","anybody"],["v.出席;参加","attend"],
["n.注意;关注","attention"],["同时;一起","at the same time"],["在……顶部或顶端","at the top of"],["v.避免;回避","avoid"],["adj.很坏的;讨厌的","awful"],
["n.背景","background"],["n.背包;旅行包","backpack"],["adv.严重地;差;非常","badly"],["n.气球","balloon"],["adj.基本的;基础的","basic"],
["n.篮;筐","basket"],["n.浴室;洗手间","bathroom"],["天生具有","be born with"],["成为某人的朋友","be friends with sb."],["对某人苛刻;对某人要求严厉","be hard on sb."],
["对……有害","be harmful to"],["以……闻名;为人知晓","be known for"],["为……骄傲;感到自豪","be proud of"],["对……有责任;负责任","be responsible for"],["对某人心存感激","be thankful to sb."],
["渴望;渴求","be thirsty for"],["n.豆;豆荚","bean"],["v.表现;举止","behave"],["adj.可相信的;可信任的","believable"],["信任;信赖","believe in"],
["n.钟(声);铃(声)","bell"],["prep.在……旁边;在……附近","beside"],["adv.而且","besides"],["n.垃圾箱","bin"],["n.饼干","biscuit"],
["n.黑板","blackboard"],["n.街区","block"],["n.(女士)短上衣;衬衫","blouse"],["寄宿学校","boarding school"],["v.煮沸;烧开","boil"],
["n.书店","bookstore"],["v.出生adj.天生的","born"],["n.老板;上司","boss"],["n.瓶;瓶子","bottle"],["n.底部;最下部","bottom"],
["v.n.鞠躬","bow"],["n.大脑","brain"],["n.品牌;牌子","brand"],["n.大不列颠","Britain"],["恢复;使想起;归还","bring back"],
["adj.英国的;英国人的","British"],["n.埋葬;安葬","burial"],["v.着火;燃烧","burn"],["adj.着火的;燃烧的","burning"],["n.生意;商业","business"],
["偶然;意外地","by accident"],["错误地;无意中","by mistake"],["在(某时间点)以前","by the end of"],["在……以前","by the time…"],["召来;叫来","call in"],
["adj.加拿大的;加拿大人的n.加拿大人","Canadian"],["v.取消;终止","cancel"],["n.帽子","cap"],["n.首都;国都","capital"],["n.情况;实情","case"],
["n.庆典;庆祝活动","celebration"],["adj.中心的;中央的","central"],["n.典礼;仪式","ceremony"],["n.链子;链条","chain"],["n.粉笔","chalk"],
["n.机会;可能性","chance"],["n.化学","chemistry"],["n.选择;挑选","choice"],["n.筷子","chopsticks"],["n.圣诞节","Christmas"],
["n.圆圈v.圈出","circle"],["n.黏土;陶土","clay"],["把……擦掉","clean … off"],["n.职员","clerk"],["n.教练;私人教师","coach"],
["n.煤;煤块","coal"],["n.海岸;海滨","coast"],["n.外套;外衣","coat"],["n.硬币","coin"],["n.社区;社团","community"],
["n.参赛者;竞争者","competitor"],["v.完成","complete"],["v.祝贺","congratulate"],["v.(使)连接;与…有联系","connect"],["把……和……连接或联系起来","connect … with"],
["adj.便利的;方便的","convenient"],["n.交谈;谈话","conversation"],["n.曲奇饼","cookie"],["n.拐角;角落","corner"],["adj.正确的;恰当的","correct"],
["v.花费n.花费;价钱","cost"],["n.服装;装束","costume"],["化装舞会","costume party"],["n.棉;棉花","cotton"],["n.勇敢;勇气","courage"],
["n.课程;学科","course"],["n.奶油;乳脂","cream"],["v.创造;创建","create"],["n.创造力;独创性","creativity"],["adj.脆的;酥脆的","crispy"],
["n.人群;观众","crowd"],["adj.残酷的;残忍的","cruel"],["v.n.哭;叫喊","cry"],["n.风俗;习俗","custom"],["n.顾客;客户","customer"],
["adj.每日的;日常的","daily"],["v.敢于;胆敢","dare"],["adj.死的;失去生命的","dead"],["v.对付;对待","deal"],["对付;应付","deal with"],
["n.(大学)学位;度数;程度","degree"],["n.甜点;甜食","dessert"],["n.对话;对白","dialog"],["adj.直接的;直率的","direct"],["n.方向;方位","direction"],
["n.导演;部门负责人","director"],["v.消失;不见","disappear"],["v.使失望","disappoint"],["n.不信;怀疑","disbelief"],["v.发现;发觉","discover"],
["n.发现;发觉","discovery"],["把……分开","divide … into"],["v.分开;分散","divide"],["n.纪录片","documentary"],["v.加倍;是……的两倍adj.两倍的;加倍的","double"],
["n.疑惑;疑问v.怀疑","doubt"],["adj.悲哀;沮丧","down"],["n.戏;剧","drama"],["v.迫使","drive"],["使人发疯/发狂","drive sb. crazy/mad"],
["顺便访问","drop by"],["n.耳环;耳饰","earring"],["n.地震","earthquake"],["adj.东方的;东部的adv.向东;朝东n.东;东方","east"],["adj.东方的;东部的","eastern"],
["n.生态系统","ecosystem"],["v.教育;教导","educate"],["n.努力;尽力","effort"],["n.肘;胳膊","elbow"],["n.电;电能","electricity"],
["adj.电子的;电子设备的","electronic"],["adj.窘迫的;害羞的","embarrassed"],["adj.使人害羞的(难堪的或惭愧的)","embarrassing"],["adj.空的;空洞的","empty"],["n.结尾;结局","ending"],
["最终成为;最后处于","end up"],["n.敌人;仇人","enemy"],["n.精力;力量","energy"],["v.进来;进去","enter"],["adj.自然环境的;有关环境的","environmental"],
["adj.欧洲(人)的n.欧洲人","European"],["n.前夕;前夜","eve"],["adj.每天的;日常的","everyday"],["adv.确切地;精确地","exactly"],["n.考试;审查","examination"],
["v.(仔细地)检查;检验","examine"],["prep.除……之外conj.除了;只是","except"],["n.v.交换","exchange"],["v.表示;表达","express"],["n.表达方式;表示;表情","expression"],
["v.失败;未能(做到)","fail"],["n.展览会;交易会","fair"],["童话故事","fairy tale"],["n.名声;声誉","fame"],["adj.迷人的;极有吸引力的","fascinating"],
["n.过失;缺点","fault"],["n.田野;场地","field"],["n.(鱼)鳍","fin"],["n.渔民;钓鱼的人","fisherman"],["n.闪光灯;闪光v.闪耀;闪光","flash"],
["adj.民间的;民俗的","folk"],["n.蠢人;傻瓜v.愚弄adj.愚蠢的","fool"],["n.餐叉，叉子","fork"],["n.形式;类型","form"],["法国","France"],
["n.冰箱","fridge"],["n.友谊;友情","friendship"],["时常;有时","from time to time"],["n.花园;园子","garden"],["n.大门","gate"],
["adj.普遍的;常规的;总的n.将军","general"],["n.先生;绅士","gentleman"],["挡……的路;妨碍","get in the way of"],["大动肝火;气愤","get mad"],["习惯于","get used to"],
["n.鬼;鬼魂","ghost"],["捎……一程","give … a lift"],["n.玻璃","glass"],["n.手套","glove"],["(时间)逝去;过去","go by"],
["特地;格外努力","go out of one’s way"],["n.球门;射门;目标","goal"],["n.女神","goddess"],["adv.逐步地;渐进地","gradually"],["v.毕业;获得学位","graduate"],
["n.毕业","graduation"],["n.语法","grammar"],["n.(外)孙女","granddaughter"],["n.葡萄","grape"],["n.草;草地","grass"],
["v.和……打招呼;迎接","greet"],["adj.(天空)阴沉的;昏暗的;灰色的","grey"],["n.警卫;看守v.守卫;保卫","guard"],["n.家伙(pl.)伙计们","guy"],["n.小手提包","handbag"],
["n.事件;发生的事情","happening"],["adj.有害的","harmful"],["adj.有鬼魂出没的;闹鬼的","haunted"],["n.热;高温v.加热;变热","heat"],["n.鞋跟;足跟","heel"],
["adj.有用的;有帮助的","helpful"],["n.英雄;男主角","hero"],["n.历史学家;史学工作者","historian"],["adj.(有关)历史的","historical"],["n.骗局;恶作剧","hoax"],
["v.尊重;表示敬意n.荣幸;荣誉","honor"],["n.v.拥抱;搂抱","hug"],["adj.有幽默感的;滑稽有趣的","humorous"],["adj.不礼貌的;粗鲁的","impolite"],["连续几次地","in a row"],
["与……成一排","in line with"],["亲身;亲自","in person"],["公开地;在别人面前","in public"],["既然那样;假使那样的话","in that case"],["总共;合计","in total"],
["v.增加;增长","increase"],["n.工业;行业","industry"],["adj.不昂贵的","inexpensive"],["v.n.影响","influence"],["n.昆虫","insect"],
["n.灵感;鼓舞人心的人(或事物)","inspiration"],["n.指示;命令","instruction"],["n.器械;仪器;工具","instrument"],["adj.有才智的;聪明的","intelligent"],["adj.国际的","international"],
["v.采访;面试n.面试;访谈","interview"],["n.介绍","introduction"],["n.铁","iron"],["pron.它的","its"],["避免接近;远离","keep … away from"],
["沉住气;保持冷静","keep one’s cool"],["n.键盘式电子乐器;键盘","keyboard"],["v.踢;踹","kick"],["开除某人","kick sb. off"],["n.君主;国王","king"],
["v.n.亲吻;接吻","kiss"],["v.敲;击","knock"],["n.知识;学问","knowledge"],["n.实验室","laboratory"],["n.女士;女子","lady"],
["v.着陆;降落","land"],["n.灯笼","lantern"],["adv.最后","lastly"],["adv.最近;不久前","lately"],["n.法律;法规","law"],
["摆开;布置","lay out"],["v.放置;产(卵);下(蛋)","lay"],["n.领导;领袖","leader"],["n.叶;叶子","leaf"],["不包括;不提及;忽略","leave out"],
["n.柠檬","lemon"],["使失望","let … down"],["n.水平","level"],["n.证;证件","license"],["v.存在;平躺;处于","lie"],
["adj.终身的;毕生的","lifelong"],["n.一生;有生之年","lifetime"],["v.举起;抬高n.电梯;搭便车","lift"],["v.列表;列清单n.名单;清单","list"],["v.乱扔n.垃圾;废弃物","litter"],
["adj.生气勃勃的;(色彩)鲜艳的","lively"],["adj.当地的;本地的","local"],["v.锁上;锁住n.锁","lock"],["回首(往事);回忆;回顾","look back at"],["钦佩;仰慕","look up to"],
["adj.低的;矮的","low"],["n.(pl.)歌词","lyrics"],["adj.很生气;疯的","mad"],["v.邮寄;发电子邮件n.邮件;信件","mail"],["使(某人)感到宾至如归","make … feel at home"],
["弄得一团糟，一塌糊涂","make a mess"],["作出努力","make an effort"],["自己做决定","make one’s own decision"],["n.商场;购物中心","mall"],["v.完成(困难的事);应付(困难局面)","manage"],
["n.经理;经营者","manager"],["n.方式;方法(pl.)礼貌;礼仪","manner"],["n.市场;集市","market"],["n.能手;主人v.掌握","master"],["n.材料;原料","material"],
["adj.医疗的;医学的","medical"],["v.记忆;记住","memorize"],["v.提到;说到","mention"],["n.金属","metal"],["n.方法;措施","method"],
["n.仲夏;中夏","midsummer"],["n.大臣;部长","minister"],["adj.可移动的;非固定的","mobile"],["n.月饼","mooncake"],["adj.动人的;令人感动的","moving"],
["adj.音乐的;有音乐天赋的","musical"],["n.奥秘;神秘事物","mystery"],["n.餐巾;餐巾纸","napkin"],["n.adj.国家的;民族的","national"],["adv.几乎;差不多","nearly"],
["既不……也不","neither … nor"],["不论;无论","no matter"],["v.点头","nod"],["n.声音;噪音","noise"],["n.正午;中午","noon"],
["conj.adv.也不","nor"],["adv.通常;正常情况下","normally"],["adj.北方的;北部的","northern"],["不但……而且","not only … but also"],["n.笔记;记录v.注意;指出","note"],
["n.(长篇)小说","novel"],["n.军官;官员","officer"],["偶尔地;间或","once in a while"],["pron.我们的","ours"],["adv.在户外;在野外","outdoors"],
["v.克服;战胜","overcome"],["adv.一夜之间;在夜间","overnight"],["v.睡过头;睡得太久","oversleep"],["v.包装;装箱","pack"],["n.痛苦;苦恼","pain"],
["adj.令人痛苦的;令人疼痛的","painful"],["n.朋友;伙伴","pal"],["n.王宫;宫殿","palace"],["adj.苍白的;灰白的","pale"],["剪纸","paper cutting"],
["interj.请再说一遍v.原谅","pardon"],["抱歉，对不起;什么，请再说一遍","pardon me"],["停车场;停车区","parking lot"],["n.搭档;同伴","partner"],["adj.adv.兼职(的)","part-time"],
["路过;经过","pass by"],["n.护照","passport"],["adj.有耐心的n.病人","patient"],["n.模式;方式","pattern"],["注意;关注","pay attention to"],
["付费;付出代价","pay for"],["v.表演;执行","perform"],["n.一段时间;时期","period"],["n.物理;物理学","physics"],["n.野餐","picnic"],
["v.扎;刺破;穿透","pierce"],["adj.粉红色的n.粉红色","pink"],["n.先锋;先驱","pioneer"],["n.遗憾;怜悯","pity"],["adj.塑料的n.塑料;塑胶","plastic"],
["n.高兴;愉快","pleasure"],["大量;充足","plenty of"],["pron.大量;众多","plenty"],["n.诗;韵文","poem"],["n.男警察","policeman"],
["v.磨光;修改;润色","polish"],["adj.有礼貌的;客气的","polite"],["adv.礼貌地;客气地","politely"],["n.受欢迎;普及","popularity"],["n.位置;地方","position"],
["n.明信片","postcard"],["n.邮递员","postman"],["n.磅;英镑","pound"],["n.权利;力量","power"],["v.n.表扬;赞扬","praise"],
["v.更喜欢","prefer"],["n.现在;礼物adj.现在的","present"],["n.负责人;主席;总统","president"],["v.阻止;阻挠","prevent"],["n.自豪;骄傲","pride"],
["adj.首要的;基本的","prime"],["首相;大臣","prime minister"],["adj.私人的;私密的","private"],["v.加工;处理","process"],["v.生产;制造;出产","produce"],
["n.产品;制品","product"],["adj.职业的;专业的","professional"],["n.项目;工程","project"],["v.发音","pronounce"],["n.发音;读音","pronunciation"],
["adj.自豪的;骄傲的","proud"],["adj.公众的;公共的n.民众;百姓","public"],["齐心协力;通力合作","pull together"],["v.拉;拖","pull"],["拆下;摧毁","pull … down"],
["v.处罚;惩罚","punish"],["n.目的;目标","purpose"],["增加(体重);发胖","put on"],["好好利用某物","put sth. to good use"],["n.王后;女王","queen"],
["n.兔;野兔","rabbit"],["adv.宁愿;相当","rather"],["而不是","rather than"],["v.回忆起;回想起","recall"],["v.接待;接受;收到","receive"],
["v.回收利用;再利用","recycle"],["v.反映;映出","reflect"],["v.n.感到遗憾;懊悔","regret"],["n.亲属;亲戚","relative"],["adj.放松的;自在的","relaxed"],
["n.轻松;解脱","relief"],["v.保持不变;剩余","remain"],["v.重复;重做","repeat"],["n.v.要求;请求","request"],["v.需要;要求","require"],
["adj.承担责任;有责任","responsible"],["n.(美)洗手间;公共厕所","restroom"],["adj.可重复使用的;可再次使用的","reusable"],["v.n.回顾;复习","review"],["n.一排;一列;一行","row"],
["v.n.仓促;急促","rush"],["n.悲伤;悲痛","sadness"],["n.安全;安全性","safety"],["n.圣人;智者","sage"],["adj.咸的","salty"],
["adj.科学上的;科学的","scientific"],["n.(pl.)剪刀","scissors"],["n.勺;铲子","scoop"],["n.v.得分;打分","score"],["n.季;季节","season"],
["n.秘密;秘诀adj.秘密的;保密的","secret"],["adv.不常;很少","seldom"],["卖光","sell out"],["adj.级别(或地位)高的","senior"],["高中","senior high (school)"],
["v.感觉到;意识到n.感觉;意识","sense"],["n.句子","sentence"],["adj.单独的;分离的v.分开;分离","separate"],["v.将要;将会","shall"],["n.鲨鱼","shark"],
["n.肩;肩膀","shoulder"],["v.关闭;关上","shut"],["adj.不说话的;沉默的","silent"],["n.银，银器;adj.银色的","sliver"],["adj.困倦的;瞌睡的","sleepy"],
["n.气味v.发出……气味;闻到","smell"],["v.冒烟;吸烟n.烟","smoke"],["adj.平滑的;悦耳的","smooth"],["n.社会","society"],["pron.某人;重要人物","somebody"],
["adj.酸的;有酸味的","sour"],["n.意大利面条","spaghetti"],["adj.空闲的;不用的v.抽出;留出","spare"],["n.发言者","speaker"],["n.讲话;发言","speech"],
["n.速度","speed"],["n.蜘蛛","spider"],["v.传播;n.蔓延;传播","spread"],["n.管理人员;职工","staff"],["n.邮票;印章","stamp"],
["n.标准;水平","standard"],["v.盯着看;凝视","stare"],["v.偷;窃取","steal"],["n.钢;钢铁","steel"],["v.粘贴;将……刺入","stick"],
["坚持;固守","stick to"],["n.陌生人","stranger"],["n.样式;款式","style"],["adj.突然(的)","sudden"],["v.建议;提议","suggest"],
["n.建议","suggestion"],["n.西服;套装v.适合","suit"],["n.超级英雄","superhero"],["v.n.支持","support"],["v.推断;料想","suppose"],
["n.表面;表层","surface"],["n.调查","survey"],["采取行动","take action"],["(飞机等)起飞;脱下衣服","take off"],["发生;出现","take place"],
["为……感到自豪","take pride in"],["回嘴;顶嘴","talk back"],["n.任务;工作","task"],["n.同队队员;队友","teammate"],["n.(13至19岁之间的)青少年","teen"],
["adj.十几岁的;青少年的","teenage"],["n.庙宇;寺院;圣殿","temple"],["n.课文;文本","text"],["n.教科书;课本","textbook"],["adj.感谢;感激","thankful"],
["食物链","the food chain"],["奥林匹克运动会","the Olympics"],["越……越……;愈……愈……","the more … the more"],["adj.口渴的;渴望的","thirsty"],["n.领带v.捆;束","tie"],
["conj.prep.到;直到","till"],["adj.极小的;微小的","tiny"],["起初;开始时","to start with"],["n.吨(pl.)大量;许多","ton"],["n.总数;合计adj.总的;全体的","total"],
["n.贸易;交易v.做买卖;从事贸易","trade"],["n.传统","tradition"],["n.交通;路上行驶的车辆","traffic"],["v.翻译","translate"],["n.运输业;交通运输","transportation"],
["n.款待;v.招待;请(客)","treat"],["n.花招;把戏","trick"],["n.卡车;货车","truck"],["关掉","turn off"],["adj.丑陋的;难看的","ugly"],
["adj.地下的;地铁","underground"],["adj.使人不舒服的;令人不舒适的","uncomfortable"],["adj.不拥挤的;人少的","uncrowded"],["adj.担心的;不安的","uneasy"],["adj.出乎意料的;始料不及的","unexpected"],
["颠倒;倒转","upside down"],["v.adj.很有用的;宝贵的","valuable"],["v.重视;珍视n.价值","value"],["n.胜利;成功","victory"],["n.战争;战争状态","war"],
["n.温暖;暖和","warmth"],["v.警告;告诫","warn"],["n.洗手间;厕所","washroom"],["n.财富","wealth"],["n.网站","website"],
["n.重量;分量","weight"],["adv.向西;朝西adj.向西的;西部的n.西;西方","west"],["pron.无论谁;不管什么人","whoever"],["pron.谁;什么人","whom"],["adj.pron.谁的","whose"],
["adv.广泛地;普遍地","widely"],["adv.明智地;聪明地","wisely"],["毫无疑问;的确","without doubt"],["n.狼","wolf"],["adj.木制的;木头的","wooden"],
["n(音乐,艺术)作品","work"],["n.工作日","workday"],["n.工作者;工人","worker"],["adj.值得;有……价值(的)","worth"],["宁愿","would rather"],
["n.伤;伤口;创伤","wound"],["n.拉链;拉锁","zipper"]]
;
var nowqanum,questions,answers,qa/*,lasts=new Array(50),nexts=new Array(50)*/;
window.onload = function () {
    questions = document.querySelectorAll('.q');
	answers = document.querySelectorAll('.a');
	qa=0;clr();
}
function question(){
	nowqanum = pdNum(),qa=1;
	for(var i=0;i<questions.length;i++){questions[i].innerHTML=(i+1)+"."+qas[nowqanum[i]][0];}
}
function clr(){
	nowqanum=undefined,qa=0;
	for(var i=0;i<questions.length;i++){
		questions[i].innerHTML=(i+1)+".XXXXXXX";
		answers[i].innerHTML=(i+1)+".xxxxxxx";
	}
}
function answer(){
	if(qa!=1)return;
	for(var i=0;i<questions.length;i++){answers[i].innerHTML=(i+1)+"."+qas[nowqanum[i]][1];}
	qa=2;
}

function pdNum(){
	// 创建一个数组  
	var numbers = Array.from({length: qas.length}, (_, i) => i);  
	// 使用 Fisher-Yates 算法随机打乱数组  
	for (var i = numbers.length - 1; i > 0; i--) {  
	var j = Math.floor(Math.random() * (i + 1));  
	[numbers[i], numbers[j]] = [numbers[j], numbers[i]];  
	}  
	// 取前 10 个数字输出
	return numbers.slice(0,questions.length);
}







