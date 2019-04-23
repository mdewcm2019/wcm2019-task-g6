var tipuesearch = {"pages": [{'title': '簡介', 'text': 'CMSimfly ( https://github.com/chiamingyen/cmsimfly)  是一套簡單的網際內容管理系統, 採用 Flask 網際框架, 以 Beautifulsoup 解讀分頁內容. \n \n', 'tags': '', 'url': '簡介.html'}, {'title': 'Blogger', 'text': '團隊部落格>  Here！ \n', 'tags': '', 'url': 'Blogger.html'}, {'title': 'Team Member', 'text': '40623153\xa0 廖祥佑 \n 40623155\xa0 陳霖 \n 40623156\xa0 林聖翰 \n 40623157\xa0 李昀霖 \n', 'tags': '', 'url': 'Team Member.html'}, {'title': '目錄結構', 'text': 'CMSimfly 的動態系統採用 Python3 + Flask 建構, 並且利用 Beatifulsoup 解讀位於 contig 目錄中的 content.htm 超文件檔案. \n content.htm 檔案可以透過動態系統中的 generate_pages 功能, 將超文件轉為位於 content 目錄中的個別頁面檔案. \n 動態系統與靜態系統則共用 downloads, images, static 等目錄, 其中 downloads 目錄存放在動態系統上傳的文件檔, 而 images 目錄則存放動態系統所上傳的影像檔案, 包括 jpg, png 與 gif 等格式圖檔. \n static 目錄則存放在動態與靜態系統所需要的 Javascript 或 Brython 程式檔. \n', 'tags': '', 'url': '目錄結構.html'}, {'title': '頁面編輯', 'text': 'CMSimfly 動態系統的網際編輯器採用  TinyMCE4 , 可以放入一般超文件,\xa0 納入圖檔, 嵌入影片連結, 並且加入帶有行數的原始碼. \n 透過 File Upload 功能, 可以一次上傳多個檔案,\xa0 存入 downloads 目錄中儲存, 之後各頁面可以引入對應連結. \n 而圖檔的上傳與引用與一般檔案類似, 但上傳後存入 images 目錄中. \n', 'tags': '', 'url': '頁面編輯.html'}, {'title': '插入程式碼', 'text': 'CMSimfly 目前使用 Syntaxhighlighter 3.0.83: \n \xa0 http://alexgorbatchev.com/SyntaxHighlighter/ \xa0 \n 進行頁面中的程式碼高亮顯示. \n', 'tags': '', 'url': '插入程式碼.html'}, {'title': 'Java 程式碼', 'text': 'import java.util.Scanner;\n\npublic class Life {\n    public static void show(boolean[][] grid){\n        String s = "";\n        for(boolean[] row : grid){\n            for(boolean val : row)\n                if(val)\n                    s += "*";\n                else\n                    s += ".";\n            s += "\\n";\n        }\n        System.out.println(s);\n    }\n    \n    public static boolean[][] gen(){\n        boolean[][] grid = new boolean[10][10];\n        for(int r = 0; r < 10; r++)\n            for(int c = 0; c < 10; c++)\n                if( Math.random() > 0.7 )\n                    grid[r][c] = true;\n        return grid;\n    }\n    \n    public static void main(String[] args){\n        boolean[][] world = gen();\n        show(world);\n        System.out.println();\n        world = nextGen(world);\n        show(world);\n        Scanner s = new Scanner(System.in);\n        while(s.nextLine().length() == 0){\n            System.out.println();\n            world = nextGen(world);\n            show(world);\n            \n        }\n    }\n    \n    public static boolean[][] nextGen(boolean[][] world){\n        boolean[][] newWorld \n            = new boolean[world.length][world[0].length];\n        int num;\n        for(int r = 0; r < world.length; r++){\n            for(int c = 0; c < world[0].length; c++){\n                num = numNeighbors(world, r, c);\n                if( occupiedNext(num, world[r][c]) )\n                    newWorld[r][c] = true;\n            }\n        }\n        return newWorld;\n    }\n    \n    public static boolean occupiedNext(int numNeighbors, boolean occupied){\n        if( occupied && (numNeighbors == 2 || numNeighbors == 3))\n            return true;\n        else if (!occupied && numNeighbors == 3)\n            return true;\n        else\n            return false;\n    }\n\n    private static int numNeighbors(boolean[][] world, int row, int col) {\n        int num = world[row][col] ? -1 : 0;\n        for(int r = row - 1; r <= row + 1; r++)\n            for(int c = col - 1; c <= col + 1; c++)\n                if( inbounds(world, r, c) && world[r][c] )\n                    num++;\n\n        return num;\n    }\n\n    private static boolean inbounds(boolean[][] world, int r, int c) {\n        return r >= 0 && r < world.length && c >= 0 &&\n        c < world[0].length;\n    }\n\n} \n \n', 'tags': '', 'url': 'Java 程式碼.html'}, {'title': 'Python 程式碼', 'text': 'def parse_content():\n    """use bs4 and re module functions to parse content.htm"""\n    #from pybean import Store, SQLiteWriter\n    # if no content.db, create database file with cms table\n    \'\'\'\n    if not os.path.isfile(config_dir+"content.db"):\n        library = Store(SQLiteWriter(config_dir+"content.db", frozen=False))\n        cms = library.new("cms")\n        cms.follow = 0\n        cms.title = "head 1"\n        cms.content = "content 1"\n        cms.memo = "first memo"\n        library.save(cms)\n        library.commit()\n    \'\'\'\n    # if no content.htm, generate a head 1 and content 1 file\n    if not os.path.isfile(config_dir+"content.htm"):\n        # create content.htm if there is no content.htm\n        File = open(config_dir + "content.htm", "w", encoding="utf-8")\n        File.write("<h1>head 1</h1>content 1")\n        File.close()\n    subject = file_get_contents(config_dir+"content.htm")\n    # deal with content without content\n    if subject == "":\n        # create content.htm if there is no content.htm\n        File = open(config_dir + "content.htm", "w", encoding="utf-8")\n        File.write("<h1>head 1</h1>content 1")\n        File.close()\n        subject = "<h1>head 1</h1>content 1"\n    # initialize the return lists\n    head_list = []\n    level_list = []\n    page_list = []\n    # make the soup out of the html content\n    soup = bs4.BeautifulSoup(subject, \'html.parser\')\n    # 嘗試解讀各種情況下的標題\n    soup = _remove_h123_attrs(soup)\n    # 改寫 content.htm 後重新取 subject\n    with open(config_dir + "content.htm", "wb") as f:\n        f.write(soup.encode("utf-8"))\n    subject = file_get_contents(config_dir+"content.htm")\n    # get all h1, h2, h3 tags into list\n    htag= soup.find_all([\'h1\', \'h2\', \'h3\'])\n    n = len(htag)\n    # get the page content to split subject using each h tag\n    temp_data = subject.split(str(htag[0]))\n    if len(temp_data) > 2:\n        subject = str(htag[0]).join(temp_data[1:])\n    else:\n        subject = temp_data[1]\n    if n >1:\n            # i from 1 to i-1\n            for i in range(1, len(htag)):\n                head_list.append(htag[i-1].text.strip())\n                # use name attribute of h* tag to get h1, h2 or h3\n                # the number of h1, h2 or h3 is the level of page menu\n                level_list.append(htag[i-1].name[1])\n                temp_data = subject.split(str(htag[i]))\n                if len(temp_data) > 2:\n                    subject = str(htag[i]).join(temp_data[1:])\n                else:\n                    subject = temp_data[1]\n                # cut the other page content out of htag from 1 to i-1\n                cut = temp_data[0]\n                # add the page content\n                page_list.append(cut)\n    # last i\n    # add the last page title\n    head_list.append(htag[n-1].text.strip())\n    # add the last level\n    level_list.append(htag[n-1].name[1])\n    temp_data = subject.split(str(htag[n-1]))\n    # the last subject\n    subject = temp_data[0]\n    # cut the last page content out\n    cut = temp_data[0]\n    # the last page content\n    page_list.append(cut)\n    return head_list, level_list, page_list\n\n \n \n', 'tags': '', 'url': 'Python 程式碼.html'}, {'title': 'C或C++程式碼', 'text': '請注意, 目前 CMSimfly 標題內文無法解讀 "/" 符號, 因此若本頁面的標題為\xa0 "C/C++程式碼", 則無法進行分頁. \n /* Runge Kutta for a set of first order differential equations */\n \n#include <stdio.h>\n#include <math.h>\n \n#define N 2 /* number of first order equations */\n#define dist 0.1 /* stepsize in t*/\n#define MAX 30.0 /* max for t */\n \nFILE *output; /* internal filename */\nFILE *output1; /* internal filename */\n// 利用 pipe 呼叫 gnuplot 繪圖\nFILE *pipe;\n \nvoid runge4(double x, double y[], double step); /* Runge-Kutta function */\ndouble f(double x, double y[], int i); /* function for derivatives */\n \nvoid main(){\n \n  double t, y[N];\n  int j;\n \n  output=fopen("osc.dat", "w"); /* external filename */\n  output1=fopen("osc1.dat", "w"); /* external filename */\n \n  y[0]=1.0; /* initial position */\n  y[1]=0.0; /* initial velocity */\n \n  //fprintf(output, "0\\t%f\\n", y[0]);\n \n  for (j=1; j*dist<=MAX ;j++) /* time loop */{\n \n    t=j*dist;\n    runge4(t, y, dist);\n    fprintf(output, "%f\\t%f\\n", t, y[0]);\n    fprintf(output1, "%f\\t%f\\n", t, y[1]);\n  }\n \n  fclose(output);\n  fclose(output1);\n \n  pipe = popen("gnuplot -persist","w");\n  //fprintf(pipe,"set term png enhanced font \\"v:/fireflysung.ttf\\" 18 \\n");\n  fprintf(pipe,"set term png enhanced font \\"y:/wqy-microhei.ttc\\" 18 \\n");\n  //fprintf(pipe,"set yrange [68:70]\\n");\n  fprintf(pipe,"set output \\"test.png\\"\\n");\n  fprintf(pipe, "plot \\"osc.dat\\" title \\"位移\\" with lines, \\"osc1.dat\\" title \\"速度\\" with lines\\n");\n  fprintf(pipe,"quit\\n");\n\n  fprintf(pipe,"quit\\n");\n  pclose(pipe);\n}\n \nvoid runge4(double x, double y[], double step){\n \n  double h=step/2.0, /* the midpoint */\n  t1[N], t2[N], t3[N], /* temporary storage arrays */\n  k1[N], k2[N], k3[N],k4[N]; /* for Runge-Kutta */\n  int i;\n \n  for (i=0;i<N;i++){\n \n    t1[i]=y[i]+0.5*(k1[i]=step*f(x,y,i));\n  }\n \n  for (i=0;i<N;i++){\n \n    t2[i]=y[i]+0.5*(k2[i]=step*f(x+h, t1, i));\n  }\n \n  for (i=0;i<N;i++){\n \n    t3[i]=y[i]+ (k3[i]=step*f(x+h, t2, i));\n  }\n \n  for (i=0;i<N;i++){\n \n    k4[i]= step*f(x+step, t3, i);\n  }\n \n  for (i=0;i<N;i++){\n \n    y[i]+=(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6.0;\n  }\n}\n \ndouble f(double x, double y[], int i){\n \n  if (i==0)\n    x=y[1]; /* derivative of first equation */\n  if (i==1)\n    x=-y[0]-0.5*y[1];\n  return x;\n} \n \n', 'tags': '', 'url': 'C或C++程式碼.html'}, {'title': 'Lua 程式碼', 'text': '-- 導入 js 模組\njs = require("js")\n-- 取得 window\nwindow = js.global\n-- 猜小於或等於 n 的整數\nbig = 100\n-- 計算猜測次數, 配合 while 至少會猜一次\nnum = 1\n-- 利用 window:prompt 方法回應取得使用者所猜的整數\nguess = window:prompt("請猜一個介於 1 到 "..big.." 的整數")\n-- 利用數學模組的 random 函數以亂數產生答案\nanswer = math.random(big)\noutput = ""\n-- 若沒猜對, 一直猜到對為止\nwhile answer ~= tonumber(guess) do\n    if answer > tonumber(guess) then\n        output = "猜第 "..num.." 次, guess="..guess..", answer="..answer.." - too small"\n        print(output)\n    else\n        output = "猜第 "..num.." 次, guess="..guess..", answer="..answer.." - too big"\n        print(output)\n    end \n    guess = window:prompt(output..", 請猜一個介於 1 到 "..big.." 的整數")\n    num = num + 1\nend\nprint("總共猜了 "..num.." 次, answer=guess="..answer.." - correct")\n     \n \n', 'tags': '', 'url': 'Lua 程式碼.html'}, {'title': 'Javascript 程式碼', 'text': 'STLViewer = function(stlpath, plotarea) {\n\n\tvar mycanvas = document.getElementById(plotarea);\n\tvar viewer = new JSC3D.Viewer(mycanvas)\n\tvar theScene = new JSC3D.Scene;\n\t////Initialize with a default file:\n\t//var stlpath = "../../../assets/2013-10-23/stl/box.STL"\n\t//var stlpath = "../../../assets/2013-10-23/stl/taj.stl"\n\tviewer.setParameter(\'SceneUrl\', stlpath);\n    viewer.setParameter(\'InitRotationX\', 20);\n\tviewer.setParameter(\'InitRotationY\', 20);\n\tviewer.setParameter(\'InitRotationZ\', 0);\n\tviewer.setParameter(\'ModelColor\', \'#CAA618\');\n\tviewer.setParameter(\'BackgroundColor1\', \'#FFFFFF\');\n\tviewer.setParameter(\'BackgroundColor2\', \'#383840\');\n\tviewer.init();\n\tviewer.update();\n\t////init done\n\tvar canvas_drop = document.getElementById(\'canvas-drop\')\n\t/*var dropzone = document.getElementById(\'dropzone\')\n\tdropzone.addEventListener(\'dragover\', handleDragOver, false);\n\tdropzone.addEventListener(\'drop\', handleFileSelect, false); */\n\tcanvas_drop.addEventListener(\'dragover\', handleDragOver, false);\n\tcanvas_drop.addEventListener(\'drop\', handleFileSelect, false);\n\n////Drag and drop logic:\n\tfunction handleFileSelect(evt) {\n\t    evt.stopPropagation();\n\t    evt.preventDefault();\n\t    var files = evt.dataTransfer.files;\n\t    console.log(evt)\n\t    console.log(files)\n\t    preview_stl(files[0])\n\t  }\n\n\t  function handleDragOver(evt) {\n\t    evt.stopPropagation();\n\t    evt.preventDefault();\n\t    evt.dataTransfer.dropEffect = \'copy\';\n\t  }\n\n////jsc3d logic\n\tvar handle_file_select = function(e) {\n\t\te.stopPropagation()\n\t\te.preventDefault()\n\t\tvar f = e.target.files[0]\n\t\tpreview_stl(f)\n\t}\n\n\tfunction preview_stl(f) {\n\t\tvar reader = new FileReader()\n\t\tvar ext = f.name.split(".")[1]\n\n\t\tfunction setup_viewer() {\n\t\t\tviewer.setParameter(\'InitRotationX\', 20);\n\t\t\tviewer.setParameter(\'InitRotationY\', 20);\n\t\t\tviewer.setParameter(\'InitRotationZ\', 0);\n\t\t\tviewer.setParameter(\'ModelColor\', \'#CAA618\');\n\t\t\tviewer.setParameter(\'BackgroundColor1\', \'#FFFFFF\');\n\t\t\tviewer.setParameter(\'BackgroundColor2\', \'#383840\');\n\t\t\tviewer.setParameter(\'RenderMode\', "flat");\n\t\t}\n\t\tsetup_viewer()\n\n\t\treader.onload = (function(file) {\n\t\t\treturn function(e) {\n\t\t\t\ttheScene = new JSC3D.Scene\n\t\t    \tstl_loader = new JSC3D.StlLoader()\n\t\t    \tstl_loader.parseStl(theScene, e.target.result)\n\t\t      \t//viewer.init()\n\t\t      \tviewer.replaceScene(theScene)\n\t\t      \tviewer.update()\n\t\t      \tconsole.log("file reader onload")\n\t\t\t}\n\t\t})(f)\n\n\t\tif (ext.toLowerCase() != "stl") {\n\t\t\talert("That doesn\'t appear to be an STL file.");\n\t\t} else {\n\t\t\treader.readAsBinaryString(f)\n\t\t}\n\t}\n}\n \n \n', 'tags': '', 'url': 'Javascript 程式碼.html'}, {'title': 'Html 原始碼', 'text': '<html>\n   <head>\n      <meta http-equiv="content-type" content="text/html;charset=utf-8">\n      <title>CMSimfly</title>\n      <link rel="stylesheet" type="text/css" href="/static/cmsimply.css">\n   </head>\n   <body>\n      <div class=\'container\'>\n      <nav>\n         <ul id=\'css3menu1\' class=\'topmenu\'>\n            <li><a href=\'/get_page/簡介\'>簡介</a>\n            <li><a href=\'/get_page/目錄結構\'>目錄結構</a>\n            <li>\n               <a href=\'/get_page/頁面編輯\'>頁面編輯</a>\n               <ul>\n                  <li>\n                     <a href=\'/get_page/插入程式碼\'>插入程式碼</a>\n                     <ul>\n                        <li><a href=\'/get_page/Java 程式碼\'>Java 程式碼</a>\n                        <li><a href=\'/get_page/Python 程式碼\'>Python 程式碼</a>\n                        <li><a href=\'/get_page/C或C++程式碼\'>C或C++程式碼</a>\n                        <li><a href=\'/get_page/Lua 程式碼\'>Lua 程式碼</a>\n                        <li><a href=\'/get_page/Javascript 程式碼\'>Javascript 程式碼</a>\n                        <li><a href=\'/get_page/Html 原始碼\'>Html 原始碼</a></li>\n                        </li>\n                     </ul>\n               </ul>\n            <li><a href=\'/get_page/網際簡報\'>網際簡報</a>\n            <li><a href=\'/get_page/網誌編輯\'>網誌編輯</a>\n            <li><a href=\'/get_page/已知錯誤\'>已知錯誤</a></li>\n         </ul>\n      </nav>\n      <section>\n         <form method=\'post\' action=\'/ssavePage\'>\n         <textarea class=\'simply-editor\' name=\'page_content\' cols=\'50\' rows=\'15\'><h3>Html 原始碼</h3></textarea>\n         <input type=\'hidden\' name=\'page_order\' value=\'9\'>\n         <input type=\'submit\' value=\'save\'>\n         <input type=button onClick="location.href=\'/get_page/Html 原始碼\'" value=\'viewpage\'>\n         </form>\n      </section>\n   </body>\n</html>\nCOPY TO CLIPBOARD\t \n \n', 'tags': '', 'url': 'Html 原始碼.html'}, {'title': '網際簡報', 'text': 'CMSimfly 中採用  Reveal.js  作為網際簡報, 其中的維護檔案位於 config/reveal.js, 而對應的簡報檔案則位於 reveal 目錄中. \n', 'tags': '', 'url': '網際簡報.html'}, {'title': '網誌編輯', 'text': 'CMSimfly 彩用  Pelican blog  系統, 編輯檔案位於 config/pelican.leo, 對應的 \n \xa0Markdown 原始檔案位於 markdown 目錄中, 而經 Pelican 轉換出的網誌超文件檔案則位於 blog 目錄中. \n 其餘在網誌文章中所需要的 Javascript 或 Brython 程式檔案, 則與 CMSimfly 及 Reveal.js 共用, 位於 static 目錄下. \n 上傳檔案與圖檔的引用則與 CMSimfly 架構相同. \n', 'tags': '', 'url': '網誌編輯.html'}, {'title': '已知錯誤', 'text': '全部頁面會因無法正確解讀而誤刪 \n 在特定情況下, 系統會誤刪 config/content.htm 檔案, 目前在單頁或全部頁面編輯存檔之前, 或將上一版本的 content.htm 存入 content_back.htm, 若 content.htm 內容被程式誤刪, 可以利用備份檔案複製回原始內容後, 再進行後續處理. \n 頁面標題不支援特殊符號 \n 各頁面標題目前不支援特殊符號, 例如: "/", "?" 等, 若已經發生程式無法解讀頁面的情況, 只能從編輯 config/content.htm 下手, 若系統位於遠端, 則後續必須要再設法提供一個額外的編輯 config/content.htm 檔案的網際連結功能. \n Video 引用不支援內部引用 \n tinymce 中插入 video 的小視窗, 要移除引用的圖像與連結, 因為一般建議不要在內容中存入 .mp4 的影片資料, 而只接受引入影片 URL 連結. \n \n 當ungit推送時出現錯誤內容 \n 可在隨身系統中的satrt.bat加入 set USERPROFILE=%Disk%:\\home \n 使得ungit能找到 y:\\home中的使用者目錄 \n \n', 'tags': '', 'url': '已知錯誤.html'}, {'title': '課程筆記', 'text': '', 'tags': '', 'url': '課程筆記.html'}, {'title': '網際網路故障排除', 'text': '\n 遇到學校伺服器IP掛掉問題 Step1.關閉網路第四版協定 \n \n 打開IPV6 \n 修改內容設定，打開DNS並輸入 \n 2001:b000:168::1 \n \n 修改proxy內容 \n [2001:288:6004:17::4] \n \n 完成修改後便能成功上網。 \n \n 完成修改後便能成功上網 \n \n \n', 'tags': '', 'url': '網際網路故障排除.html'}, {'title': 'Git筆記重點整理', 'text': '線上觀看手冊 \n https://git-scm.com/book/zh-tw/v2 \n', 'tags': '', 'url': 'Git筆記重點整理.html'}, {'title': '開始', 'text': '版本控制系統 \n \n 利用RCS指令可控制任一版本資料，其 工作原理是在硬碟上保存一堆特殊格式的補丁集合，通過套用功能，便可以重新產生出每個版本的檔案內容。 \n Git控制方法分成 集中化與分散式版本控制系統 \n 集中化版本控制系統 \n \n 好處： \n 1.清楚了解分組內各成員所做進度 2.管理員統一控制所有開發者權限 3.各用戶端統一使用統一版本系統，好管理 壞處： 1.中央伺服器發生故障，各開發者便無法協同合作 2.統一集中資料會有遺失資料風險 \n 分散式版本控制系統 因集中化控制的不便，進而衍化出分散式控制系統 \n 優點： 1.任一協同伺服器故障，事後都能以任一用戶端鏡像還原 2.能與許多遠端倉儲互動，使不同地方群組能在不一樣的地方完成同一專案協同合作 3.階層式的分工合作 \n \n Git完整性 \n 1.Git 中所有的物件在儲存前都會被計算校驗碼（checksum）並以校驗碼參照物件。 2.計算較驗碼 機制稱為 SHA-1 雜湊演算法。 一個校驗碼是由 40 個 16 進位的字母（0–9 和 a–f）所組成，Git 會根據檔案的內容和資料夾的結構來計算。\xa0 3.\xa0Git 的資料庫內，每個檔案都是用其內容的校驗碼來儲存，而不是使用檔名。 \n Git狀態 \n 1.已提交（committed）： 檔案己安全地存在你的本地端資料庫。 \n 2. 已修改（modified）： 檔案已被修改但尚未提交到本地端資料庫。\xa0 \n 3. 已預存（staged）： 已預存代表這檔案將會被存到下次你提交的快照中。 \n \n Git工作流程 \n 1.你在你工作目錄修改檔案。 \n 2.預存檔案，將檔案的快照新增到預存區。 \n 3.做提交的動作，這會讓存在預存區的檔案快照永久地儲存在 Git 目錄中。 \n', 'tags': '', 'url': '開始.html'}, {'title': 'Git booK L9', 'text': '9.1 Git as a Client \n git svn： Git中所有Subversion橋接指令的基本指令都是 git svn 。 它需要相當多的指令，因此我們將在完成一些簡單的工作流程時展示最常見的指令。當用戶使用git svn時，需特別注意避免同時與Git遠端倉儲交互操作使用。 \n 10.1 Plumbing and Porcelain \n Plumbing and Porcelain \n \n 10.2 Git Objects \n Git Objects \n cat -file 從Git 取回資料 \n update - ref更新引用 \n 10.3 Git References \n Git References \n 如何知道最後一次提交？: \n 執行\xa0 git branch\xa0 \n $ cat .git/HEAD \n ref: refs/heads/master 執行 git checkout test \n $ cat .git/HEAD \n ref: refs/heads/test 也可以手動編輯此文件，但同樣可以執行更安全的命令: 執行symbolic-ref \n $ git symbolic-ref HEAD \n refs/heads/master 設置HEAD: \n $ git symbolic-ref HEAD \xa0 refs/heads/test \n $ cat .git/HEAD \n ref: refs/heads/test \n \n \n 10.4 Packfiles   10.5 The Refspec \n \n 10.4 Packfiles \n 使用 git cat-file 命令查看這個文件大小 \n 使用git gc打包文件 \n \n \n 10.5 The Refspec \n \n The Refspec \n .git / config文件中添加遠端origin的名稱，遠程存儲庫的URL以及用於獲取的refspec \n [remote "origin"]\n\turl = https://github.com/schacon/simplegit-progit\n\tfetch = +refs/heads/ :refs/remotes/origin/ 如果想一次性執行某些操作，也可以在命令行中指定refspec \n $ git fetch origin master:refs/remotes/origin/mymaster 指定多個refspec \n $ git fetch origin master:refs/remotes/origin/mymaster \\\n\t topic:refs/remotes/origin/topic\nFrom git@github.com:schacon/simplegit\n ! [rejected]        master     -> origin/mymaster  (non fast forward)\n * [new branch]      topic      -> origin/topic 刪除 refspec git push origin :topic git push origin -- delete topic \n 10.6 Transfer Protocols \n Transfer Protocols--傳輸協議 \n Git可以透過兩種主要方式在兩個倉儲之間傳輸數據：“啞吧”協議與“智能”協議。 本章重點著重於介紹這兩個主要協議的運作方式。 \n The Dumb Protocol--啞巴協議 \n 該協議稱為“啞巴協議”，是因為它在傳輸過程中不需要服務端的Git特定代碼;\xa0獲取過程是一系列HTTP\xa0 GET 請求，使用者可以自由的呈現Git倉儲的安排。 \n 10.7 Transfer Protocols \n 本章重點在介紹Git內部的維護和數據的恢復，有時Git會自動執行一個名為“auto\xa0 gc ”的指令，大多數情況下，此指令不執行任何操作，但如果有過多的packfiles，則Git會執行git gc的指令，此指令會刪除不必要的文件。 \n 不小心遺失提交則可使用git long和git master兩個指令來進行恢復。 \n 10.8 Environment Variables \n Git總是在 bash shell中運行，並使用許多shell環境變量來確定它的行為方式。 \n GIT_EXEC_PATH：可透過運行檢查當前設置 git --exec-path 。 \n HOME：它是Git查找全局配置文件的地方。 \n GIT_CONFIG_NOSYSTEM：如果您的系統配置干擾了您的指令，但是您無權更改或刪除它，這將非常有用。 \n GIT_COMMITTER_NAME \xa0設置提交者的名字 。 \n \n GIT_COMMITTER_EMAIL \xa0 是“提交者”字段的電子郵件地址。 \n \n \n GIT_COMMITTER_DATE \xa0 用於“提交者”字段中的日期。 \n 10.9 Summary \n Git為一個非常強大的系統工具，可以輕鬆使用它作為VCS。本章介紹了許多管道指令 - 這些指令使用戶在使用上更家簡單。 \n', 'tags': '', 'url': 'Git booK L9.html'}, {'title': '課程內容', 'text': '', 'tags': '', 'url': '課程內容.html'}, {'title': 'ssh.key操作步驟', 'text': '關閉彈出的登入窗 \n 開啟start.bat後輸入\xa0 git config --edit --system \n 開啟編輯器，編輯git的設定 \n 使用按鍵H/J/K/L控制方向，之後按a進入編輯模式 \n 就可以按Backspace刪除最後一行 \n 如下 \n \n 刪除後按Esc鍵離開編輯模式 \n 輸入2個冒號後，再輸入wq存檔並關閉即可 \n 直接離開則輸入exit即可退出 \n 在可攜系統的程式視窗輸入sh (可至y:\\git\\bin中確認) \n 執行 git 的 shell並輸入(ssh-keygen -t rsa -b 4096 -C "This is my key") \n 將會建立Private 與 Public金鑰至y:\\home\\.ssh\\id_rsa與id_rsa.pub將 id_rsa.pub 的內容複製貼上至Github 帳號的Settings \n 如下 \n \n 在SSH and GPG keys的SSH Key點擊new ssh key並貼上所複製的的內容 \n \n 利用ssh提交推送 \n 首先要確認倉儲是以ssh的方式clone \n 利用以下指令clone \n git clone\xa0git@github.com:(mdekmol/github分組網址) \n 或直接使用SciTE編輯器開啟個人倉儲的.git檔案裡面的config檔案 \n 把url = https://github.com/ ( mdekmol/github分組網址) \n 改成url = git@github.com: ( mdekmol/github分組網址) \n 完成後直接提交推送即可不用打帳號密碼就能push。 \n \n', 'tags': '', 'url': 'ssh.key操作步驟.html'}, {'title': '配置可攜程式環境', 'text': '\n', 'tags': '', 'url': '配置可攜程式環境.html'}, {'title': 'Git常用指令', 'text': '\n 1.Git \xa0clone\xa0\xa0\xa0 下載倉儲(已下載) \n 2.Git \xa0add .\xa0\xa0 新增檔案 \n 3.Git \xa0commit –m”\xa0\xa0\xa0 ”\xa0\xa0\xa0 提交更動名字 \n 4.Git   push 推送遠端 \n \n \n', 'tags': '', 'url': 'Git常用指令.html'}, {'title': 'ungit使用方法', 'text': '\n \xa0git add . 後使用 ungit \n \n 輸入這次提交的主題後按下commit \n \n 在按一次commit後的分支點擊push \n \n 再輸入使用者帳號密碼後推送完成 \n \n !!輸入完成後要直接按"Submit"扭，使用鍵盤的"Enter"無法完成!! \n \n \n 輸入完成後直接按下Submit即可 \n \n \n', 'tags': '', 'url': 'ungit使用方法.html'}, {'title': '實習任務', 'text': '', 'tags': '', 'url': '實習任務.html'}, {'title': '測試1', 'text': 'Try it \n \n \n', 'tags': '', 'url': '測試1.html'}, {'title': '測試2', 'text': "\n \n  Your browser doesn't support the HTML5 element canvas.      Throw dice  \n \n Stage:   Point:   Outcome: \n \n \n \n \n", 'tags': '', 'url': '測試2.html'}, {'title': '期中影片', 'text': '40623153 \n \n \n 40623155 \n \n 40623157 \n \n type="text" \n 40623156 \n \n', 'tags': '', 'url': '期中影片.html'}, {'title': '個人操作影片', 'text': '', 'tags': '', 'url': '個人操作影片.html'}, {'title': '40623153', 'text': 'VirtualBox創建步驟 \n \n', 'tags': '', 'url': '40623153.html'}, {'title': '40623155', 'text': 'VirtualBox創建步驟 \n', 'tags': '', 'url': '40623155.html'}]};