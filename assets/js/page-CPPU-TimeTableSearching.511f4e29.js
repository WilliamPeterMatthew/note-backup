(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{760:function(s,a,n){"use strict";n.r(a);var e=n(1),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("CPPU查询某一节课有多少人上课")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/WilliamPeterMatthew/CPPU-TimeTableSearching/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github下载"),n("OutboundLink")],1),s._v(" | "),n("a",{attrs:{href:"https://gitee.com/WilliamPeterMatthew/CPPU-TimeTableSearching/releases/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Gitee下载"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"初始化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),n("p",[s._v("首先，点击上方链接进入本项目仓库发行版界面，下载最新档到本地并打开目录。")]),s._v(" "),n("ol",[n("li",[s._v("使用有权限的账号登录本(专)科生教务管理系统")]),s._v(" "),n("li",[s._v("点击排课管理")]),s._v(" "),n("li",[s._v("选择课表管理")]),s._v(" "),n("li",[s._v("进入课表查询")]),s._v(" "),n("li",[s._v("选择学生课表")]),s._v(" "),n("li",[s._v("点击批量生成课表")]),s._v(" "),n("li",[s._v("选择学年学期与学员队，单击确定并等待教务系统生成出所有人的课表")])]),s._v(" "),n("h3",{attrs:{id:"文件夹模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件夹模式"}},[s._v("#")]),s._v(" 文件夹模式")]),s._v(" "),n("p",[s._v("由于作为办公室主任，需要方便自己管理本队的文件，所以在这里我提供了方便管理的文件夹模式。（如果你不需要文件夹模式，我还提供了下载完课表和本程序后直接统计的办法，请跳至 "),n("strong",[s._v("非文件夹模式")]),s._v(" 章节）")]),s._v(" "),n("p",[s._v("下载课表rar文件并按照如下文件目录放置文件。")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("└CPPU-TimeTableSearching\n ├xxxx-xxxx学年 第X学期 课表\n │├教室（*可选，仅为了方便管理）\n ││├XXXXXX_教室课表.xls\n ││├...\n ││└XXXXXX_教室课表.xls\n |├教学班（*可选，仅为了方便管理）\n ||├常规班级\n |||├常规班级_xxXXx队1班（XX）_X...X(X...X)_班级课表.xls\n |||├常规班级_xxXXx队2班（XX）_X...X(X...X)_班级课表.xls\n |||├...\n |||└常规班级_xxXXx队x班（XX）_X...X(X...X)_班级课表.xls\n ||├分级班\n |||├分级班_xxXXxxx班（X...X）(X...X)_班级课表.xls\n |||├...\n |||└分级班_xxXXxxx班（X...X）(X...X)_班级课表.xls\n ||└综合（需要自己制作如下内容）\n || ├综合_xxXXx队1班（XX）_X...X(X...X)_班级课表.xls\n || ├综合_xxXXx队2班（XX）_X...X(X...X)_班级课表.xls\n || ├...\n || └综合_xxXXx队x班（XX）_X...X(X...X)_班级课表.xls\n |└学生\n | ├1班\n | |├xxXXx队1班（XX）_xxxxxxxxxx_X..X_学员课表.xls\n | |├...\n | |└xxXXx队1班（XX）_xxxxxxxxxx_X..X_学员课表.xls\n | ├2班\n | |├xxXXx队2班（XX）_xxxxxxxxxx_X..X_学员课表.xls\n | |├...\n | |└xxXXx队2班（XX）_xxxxxxxxxx_X..X_学员课表.xls\n | ├...\n | └x班\n |  ├xxXXx队x班（XX）_xxxxxxxxxx_X..X_学员课表.xls\n |  ├...\n |  └xxXXx队x班（XX）_xxxxxxxxxx_X..X_学员课表.xls\n └统计用\n  ├xxxx-xxxx学年 第X学期（程序会自己创建）\n  ├班.py\n  ├查询.py\n  ├成队.py\n  ├队.py\n  └配置.py\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("p",[s._v("现在请跳转至 "),n("strong",[s._v("配置")]),s._v(" 章节对程序进行配置。")]),s._v(" "),n("h3",{attrs:{id:"非文件夹模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非文件夹模式"}},[s._v("#")]),s._v(" 非文件夹模式")]),s._v(" "),n("p",[s._v("我知道不少队使用本项目仅仅是为了统计自己队的人员在队情况，因此提供了一份只用下载解压的模式。")]),s._v(" "),n("p",[s._v("下载课表rar文件并解压，然后如下文件目录放置文件。")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("└CPPU-TimeTableSearching\n ├xxxx-xxxx学年 第X学期XXXX一队\n |├xxXXx队x班（XX）_xxxxxxxxxx_X..X_学员课表.xls\n |├...\n |└xxXXx队x班（XX）_xxxxxxxxxx_X..X_学员课表.xls\n └统计用\n  ├xxxx-xxxx学年 第X学期（程序会自己创建）\n  ├班.py\n  ├查询.py\n  ├成队.py\n  ├队.py\n  └配置.py\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("现在请跳转至 "),n("strong",[s._v("配置")]),s._v(" 章节对程序进行配置。")]),s._v(" "),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),n("p",[s._v("首先，你需要进入目录"),n("code",[s._v("统计用")]),s._v("。接着，你应该用文本编辑器（例如记事本）打开"),n("code",[s._v("配置.py")]),s._v("，编辑配置。")]),s._v(" "),n("h3",{attrs:{id:"semester"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#semester"}},[s._v("#")]),s._v(" semester")]),s._v(" "),n("p",[s._v("type: str")]),s._v(" "),n("p",[s._v("请在等号后填入学期，格式为"),n("code",[s._v("'xxxx-xxxx学年 第X学期'")]),s._v("，例如："),n("code",[s._v("'2021-2022学年 第一学期'")]),s._v("，请注意不要删掉前后的单引号。这是CPPU学期的标准格式。")]),s._v(" "),n("h3",{attrs:{id:"totalweeks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#totalweeks"}},[s._v("#")]),s._v(" totalweeks")]),s._v(" "),n("p",[s._v("type: int")]),s._v(" "),n("p",[s._v("请在等号后填入学期的总周数，按我上学的情况，一般是20周。")]),s._v(" "),n("h3",{attrs:{id:"startyear-startmonth-startday"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#startyear-startmonth-startday"}},[s._v("#")]),s._v(" startyear,startmonth,startday")]),s._v(" "),n("p",[s._v("type: int, type: int, type: int")]),s._v(" "),n("p",[s._v("请在等号后填入学期开始日日期，三个数字间用英文半角逗号"),n("code",[s._v(",")]),s._v("分隔，例如："),n("code",[s._v("2021,8,30")]),s._v("。")]),s._v(" "),n("h3",{attrs:{id:"classnum"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#classnum"}},[s._v("#")]),s._v(" classnum")]),s._v(" "),n("p",[s._v("type: int")]),s._v(" "),n("p",[s._v("请在等号后填入你们队教学班级的总数，比如我们队就是6个教学班级。 "),n("em",[s._v("该配置项为文件夹模式特有配置项，非文件夹模式下可删除该项。")])]),s._v(" "),n("h3",{attrs:{id:"filepre"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filepre"}},[s._v("#")]),s._v(" filepre")]),s._v(" "),n("p",[s._v("type: str")]),s._v(" "),n("p",[s._v("请在等号后填入你下载到的课表文件的前缀，格式为"),n("code",[s._v("'xxXXx队x班（XX）_xxxxxxxxxx_'")]),s._v("，比如我们队就是"),n("code",[s._v("'20政治1队1班（政工）_2020200001_'")]),s._v("。你无需在意每个数字具体应当为多少，只需要其长度和这串字符串相同即可，例如我们队的话直接填入"),n("code",[s._v("'xxXXx队x班（XX）_xxxxxxxxxx_'")]),s._v("就可以正常工作。请注意不要删掉前后的单引号。")]),s._v(" "),n("h3",{attrs:{id:"filesuf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filesuf"}},[s._v("#")]),s._v(" filesuf")]),s._v(" "),n("p",[s._v("type: str")]),s._v(" "),n("p",[s._v("请在等号后填入你下载到的课表文件的后缀，一般就是"),n("code",[s._v("'_学员课表.xls'")]),s._v("，你可以根据需要修改。请注意不要删掉前后的单引号。")]),s._v(" "),n("h3",{attrs:{id:"foldermode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#foldermode"}},[s._v("#")]),s._v(" foldermode")]),s._v(" "),n("p",[s._v("type: bool")]),s._v(" "),n("p",[s._v("请在等号后填入是否启用文件夹模式，值为True时为文件夹模式，值为False时为非文件夹模式。具体的文件放置方法请参考 "),n("strong",[s._v("初始化")]),s._v(" 章节。")]),s._v(" "),n("h3",{attrs:{id:"foldersuf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#foldersuf"}},[s._v("#")]),s._v(" foldersuf")]),s._v(" "),n("p",[s._v("type: str")]),s._v(" "),n("p",[s._v("请在等号后填入你下载到的课表文件的文件夹后缀，格式为"),n("code",[s._v("'XXXX一队'")]),s._v("，比如我们队就是"),n("code",[s._v("'公安政治一队'")]),s._v("，请注意不要删掉前后的单引号。 "),n("em",[s._v("该配置项为非文件夹模式特有配置项，文件夹模式下可删除该项。")])]),s._v(" "),n("h2",{attrs:{id:"快速统计队内全学期上课时间对应的上课人数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速统计队内全学期上课时间对应的上课人数"}},[s._v("#")]),s._v(" 快速统计队内全学期上课时间对应的上课人数")]),s._v(" "),n("p",[s._v("统计时分文件夹模式和非文件夹模式，请跳至对应章节查看统计方法。")]),s._v(" "),n("h3",{attrs:{id:"文件夹模式下统计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件夹模式下统计"}},[s._v("#")]),s._v(" 文件夹模式下统计")]),s._v(" "),n("p",[s._v("你应该按如下步骤执行脚本")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("python 班.py\npython 成队.py\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("这样可以生成一份课表统计列表，文件放在"),n("code",[s._v("统计用\\xxxx-xxxx学年 第X学期")]),s._v("文件夹中，方便安排队内事务。")]),s._v(" "),n("p",[s._v("对于xxxx-xxxx学年 第X学期文件夹中的文件说明如下：")]),s._v(" "),n("p",[s._v("你会看到如下列表的文件")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("└CPPU-TimeTableSearching\n └统计用\n  └xxxx-xxxx学年 第X学期\n   ├0n.xls\n   ├1n.xls\n   ├2n.xls\n   ├...\n   └xn.xls\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("所有xls文件与CPPU课表格式相同。")]),s._v(" "),n("ul",[n("li",[s._v("0n.xls中包含的信息是全队统计的上课人数。")]),s._v(" "),n("li",[s._v("xn.xls中包含的信息是按班统计后的单个教学班的上课人数。")])]),s._v(" "),n("h3",{attrs:{id:"非文件夹模式下统计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非文件夹模式下统计"}},[s._v("#")]),s._v(" 非文件夹模式下统计")]),s._v(" "),n("p",[s._v("你应该执行如下脚本")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("python 队.py\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这样可以生成一份课表统计列表，文件放在"),n("code",[s._v("统计用\\xxxx-xxxx学年 第X学期")]),s._v("文件夹中，方便安排队内事务。你会在该文件夹下看到文件"),n("code",[s._v("0n.xls")])]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("└CPPU-TimeTableSearching\n └统计用\n  └xxxx-xxxx学年 第X学期\n   └0n.xls\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("xls文件与CPPU课表格式相同。")]),s._v(" "),n("ul",[n("li",[s._v("0n.xls中包含的信息是全队统计的上课人数。")])]),s._v(" "),n("h2",{attrs:{id:"查询某节课有多少人有课-无课以及对应的名单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询某节课有多少人有课-无课以及对应的名单"}},[s._v("#")]),s._v(" 查询某节课有多少人有课/无课以及对应的名单")]),s._v(" "),n("p",[s._v("你应该执行以下命令查询某一天某一节课的人员情况。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("python 查询.py\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("你会在执行中收到如下询问")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("年：\n月：\n日：\n课（12、34、56、78、910）：\n有课人员（0）/无课人员（1）：\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("你应该给出回答，例如")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("年：2021\n月：9\n日：13\n课（12、34、56、78、910）：910\n有课人员（0）/无课人员（1）：0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("你会看到如下提示")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("查询结果已保存在文件X:\\...\\CPPU-TimeTableSearching\\统计用\\结果xxxxxxxxxxxxxx.txt中\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("你可以在当前目录下找到结果xxxxxxxxxxxxxx.txt，打开即可查看到查询结果，根据示例中的回答，文件内容如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("2021年09月13日 星期一 第910节课 xxx人有课\nXXX\nXX\nXXX\nXX\nXX\nXXX\nXX\nXX\nXXX\nXXX\nXXX\nXXX\nXXX\nXX\nXX\nXX\nXXX\nXX\nXXX\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("第一行最后一部分就是统计出的人数，下方就是统计出来的人员名单。")])])}),[],!1,null,null,null);a.default=t.exports}}]);