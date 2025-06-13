console.log('📚 [storyContent] 分岐ストーリー読み込み開始...');

// ========== 分岐ストーリー用 storyContent ==========

const storyContent = [
    // ========== 第五話：偽りの救い ==========
    {
        text: "<span class='emphasis'>第五話『偽りの救い』</span>",
        bg: "bg1",
        speed: 0.1,
        audio: "sakura1.m4a",
        lines: 0,
        scene: "episode5",
        sceneTitle: "偽りの救い"
    },
    
    // シーン1：渋谷のカフェにて
    {
        text: "午後2時、渋谷の人気カフェ「BLUE MOUNTAIN」。\n大きな窓から差し込む春の陽射し。",
        bg: "bg2",
        speed: 0.4,
        audio: "sakura1.m4a",
        lines: 2,
        scene: "cafe1",
        sceneTitle: "渋谷のカフェにて"
    },
    
    {
        text: "平日の昼下がりとは思えないほど、店内は様々な人で賑わっている。",
        bg: "bg2",
        speed: 0.4,
        audio: "sakura1.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        text: "ノートPCを開くフリーランサー、商談中のビジネスマン、SNS映えを狙う若い女性たち...\n現代東京の縮図のような空間。",
        bg: "bg3",
        speed: 0.4,
        audio: "sakura1.m4a",
        lines: 2
    },
    
    {
        text: "窓際の4人席で、RYO-CHANはサクラの膝の上で気持ちよさそうに丸くなっている。\nマコトは向かいに座り、アイスコーヒーを飲みながらリラックスしている。",
        bg: "bg3",
        speed: 0.4,
        audio: "sakura1.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        speaker: "SAKURA",
        text: "たまにはこうやって外でお茶するのもいいわね。\n事務所だと、どうしても仕事モードになっちゃうから。",
        bg: "bg3",
        speed: 0.3,
        audio: "sakura1.m4a",
        lines: 2
    },
    
    {
        speaker: "RYOCHAN",
        text: "このカフェ、いい『氣』が流れてるワン〜。\nみんなリラックスしてるワン♪",
        bg: "bg3",
        speed: 0.3,
        audio: "sakura1.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        speaker: "MAKOTO",
        text: "お前って本当に平和だよな...まぁ、たまにはこういう時間も悪くないか。",
        bg: "bg3",
        speed: 0.3,
        audio: "sakura1.m4a",
        lines: 2
    },
    
    {
        speaker: "RYOCHAN",
        text: "そうだワン！カゲマルも最近ずっと難しい顔してたから〜",
        bg: "bg3",
        speed: 0.3,
        audio: "sakura1.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        speaker: "MAKOTO",
        text: "おい！ここでその名前言うな！",
        bg: "bg3",
        speed: 0.3,
        audio: "sakura1.m4a",
        lines: 1
    },
    
    {
        text: "しかし、時すでに遅し。隣のテーブルの大学生カップルが振り返った。",
        bg: "bg4",
        speed: 0.4,
        audio: "moonlight1.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        text: "「今、カゲマルって...」\n「え？まさかあの伝説のハッカーの？」",
        bg: "bg4",
        speed: 0.3,
        audio: "moonlight1.m4a",
        lines: 2
    },
    
    {
        speaker: "MAKOTO",
        text: "違います違います！人違いです！",
        bg: "bg4",
        speed: 0.3,
        audio: "moonlight1.m4a",
        lines: 1
    },
    
    { clear: true },
    
    {
        speaker: "RYOCHAN",
        text: "どうして隠すの〜？カゲマルはカゲマルだワン〜",
        bg: "bg4",
        speed: 0.3,
        audio: "moonlight1.m4a",
        lines: 2
    },
    
    {
        text: "近くの席からも視線が集まり始める。\n「本当にカゲマルなのかな...」「写真撮った方がいいかな...」",
        bg: "bg5",
        speed: 0.4,
        audio: "moonlight1.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        speaker: "SAKURA",
        text: "RYO-CHAN、もう少し場所を考えましょうね...",
        bg: "bg5",
        speed: 0.3,
        audio: "moonlight1.m4a",
        lines: 1
    },
    
    {
        speaker: "MAKOTO",
        text: "はぁ...やっぱり家から出るべきじゃなかった...",
        bg: "bg5",
        speed: 0.3,
        audio: "moonlight1.m4a",
        lines: 2
    },
    
    { clear: true },
    
    // 怪しい会話の始まり
    {
        text: "その時、隣の席から聞き慣れない会話が聞こえてきた。",
        bg: "bg6",
        speed: 0.4,
        audio: "shadow3.m4a",
        lines: 2,
        scene: "suspicious1",
        sceneTitle: "怪しい会話"
    },
    
    {
        text: "隣の席では、30代の女性と50代の上品な女性が真剣に話し込んでいた。",
        bg: "bg6",
        speed: 0.4,
        audio: "shadow3.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        speaker: "霊能カウンセラー・麗華",
        text: "そうですね、田中さん。お母様のお話を伺っていると、\n霊的な影響を受けていらっしゃる可能性が高いです。",
        bg: "bg6",
        speed: 0.3,
        audio: "shadow3.m4a",
        lines: 2
    },
    
    {
        speaker: "田中さん",
        text: "霊的な...影響？",
        bg: "bg6",
        speed: 0.3,
        audio: "shadow3.m4a",
        lines: 1
    },
    
    { clear: true },
    
    {
        text: "RYO-CHANが急に耳をピンと立てた。",
        bg: "bg7",
        speed: 0.4,
        audio: "shadow3.m4a",
        lines: 1
    },
    
    {
        speaker: "RYOCHAN",
        text: "サクラ...変な『氣』を感じるワン...",
        bg: "bg7",
        speed: 0.3,
        audio: "shadow3.m4a",
        lines: 1
    },
    
    { clear: true },
    
    {
        speaker: "麗華",
        text: "私は霊能カウンセラーの宮本麗華と申します。\nこういった症例は数多く見てきましたが...",
        bg: "bg7",
        speed: 0.3,
        audio: "shadow3.m4a",
        lines: 2
    },
    
    {
        text: "まずは一度、詳しくお話を伺わせていただけませんか？",
        bg: "bg7",
        speed: 0.3,
        audio: "shadow3.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        speaker: "田中さん",
        text: "はい...3年前から急に膝が痛み出して、\nどこの病院に行っても「年のせい」としか...",
        bg: "bg8",
        speed: 0.3,
        audio: "shadow3.m4a",
        lines: 2
    },
    
    {
        speaker: "麗華",
        text: "そうですよね...西洋医学では説明できないことが沢山あります。\n来週の土曜日、無料の個別相談会を開いているんです。",
        bg: "bg8",
        speed: 0.3,
        audio: "shadow3.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        speaker: "RYOCHAN",
        text: "この『氣』...偽物だワン...優しい声してるけど、\n心の奥が真っ黒だワン！",
        bg: "bg8",
        speed: 0.3,
        audio: "shadow4.m4a",
        lines: 2
    },
    
    {
        text: "別の席からも、また違う会話が聞こえてくる。",
        bg: "bg9",
        speed: 0.4,
        audio: "shadow4.m4a",
        lines: 1
    },
    
    { clear: true },
    
    {
        speaker: "健康コンサルタント・美咲",
        text: "お父様の件、本当にお辛いですね...\n実は私の母も同じような状況で...",
        bg: "bg9",
        speed: 0.3,
        audio: "shadow4.m4a",
        lines: 2
    },
    
    {
        speaker: "不安そうな中年男性",
        text: "そうなんです...医者には「もう治療法がない」と...",
        bg: "bg9",
        speed: 0.3,
        audio: "shadow4.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        speaker: "美咲",
        text: "分かります、その気持ち...でも諦めないでください。\n代替療法で奇跡的に回復された方を何人も知っています。",
        bg: "bg10",
        speed: 0.3,
        audio: "shadow4.m4a",
        lines: 2
    },
    
    {
        speaker: "男性",
        text: "本当ですか？",
        bg: "bg10",
        speed: 0.3,
        audio: "shadow4.m4a",
        lines: 1
    },
    
    { clear: true },
    
    {
        speaker: "美咲",
        text: "はい。まずは無料の健康セミナーがあるんです。\n体験談も聞けますし...詳しくはお渡しするパンフレットに...",
        bg: "bg10",
        speed: 0.3,
        audio: "shadow4.m4a",
        lines: 2
    },
    
    {
        speaker: "RYOCHAN",
        text: "あっちからも偽物の『氣』が...涙まで嘘だワン！",
        bg: "bg11",
        speed: 0.3,
        audio: "shadow4.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        speaker: "SAKURA",
        text: "二つも...これは偶然？",
        bg: "bg11",
        speed: 0.3,
        audio: "shadow4.m4a",
        lines: 1
    },
    
    {
        speaker: "MAKOTO",
        text: "巧妙だな...最初は無料で釣って、\n徐々に高額商品に誘導する手口だ。",
        bg: "bg11",
        speed: 0.3,
        audio: "shadow4.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        text: "RYO-CHANが立ち上がり、小さく唸り始めた。",
        bg: "bg12",
        speed: 0.4,
        audio: "ryoscan1.m4a",
        lines: 1
    },
    
    {
        speaker: "RYOCHAN",
        text: "放っておけないワン！あの人たち、騙されてるワン！",
        bg: "bg12",
        speed: 0.3,
        audio: "ryoscan1.m4a",
        lines: 2
    },
    
    { clear: true },
    
    {
        speaker: "SAKURA",
        text: "そうね...でも二人同時は...",
        bg: "bg12",
        speed: 0.3,
        audio: "ryoscan1.m4a",
        lines: 1
    },
    
    {
        speaker: "MAKOTO",
        text: "分かれて行動するか。RYO-CHAN、どちらを先に？",
        bg: "bg12",
        speed: 0.3,
        audio: "ryoscan1.m4a",
        lines: 2
    },
    
    { clear: true },
    
    // 分岐選択
    {
        type: 'choice',
        text: 'RYO-CHANは決断しなければならない。\n\n二つの詐欺が同時進行している。\nどちらを先に阻止すべきか？',
        bg: "bg13",
        audio: "ryoscan1.m4a",
        lines: 4,
        scene: "choice1",
        sceneTitle: "運命の選択",
        options: [
            { 
                label: '霊能カウンセラー・麗華を追う', 
                branch: 'spiritual',
                description: 'スピリチュアル詐欺の真実を暴く...'
            },
            { 
                label: '健康コンサルタント・美咲を追う', 
                branch: 'medical',
                description: '医療詐欺の闇を照らす...'
            }
        ]
    }
];

// ========== 分岐ストーリー定義 ==========

const storyBranches = {
    // スピリチュアル詐欺分岐
    spiritual: [
        {
            text: "<span class='emphasis'>スピリチュアル詐欺編『偽りの救い』</span>",
            bg: "bg2",
            speed: 0.1,
            audio: "shadow4.m4a",
            lines: 0,
            scene: "spiritual1",
            sceneTitle: "偽りの救い",
            clear: true
        },
        {
            text: "RYO-CHANたちは霊能カウンセラー・麗華を追うことにした。",
            bg: "bg2",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2
        },
        {
            text: "「来週の土曜日に無料相談会を...」\n麗華の声が聞こえる。",
            bg: "bg3",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2
        },
        { clear: true },
        {
            speaker: "RYOCHAN",
            text: "この人の『氣』...複雑だワン。\n嘘をついてるけど、昔は本物だった気がするワン...",
            bg: "bg3",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2
        },
        {
            text: "麗華が田中さんに名刺を渡している。\n住所は六本木の高級ビル。",
            bg: "bg4",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2
        },
        { clear: true },
        {
            speaker: "SAKURA",
            text: "分かった。土曜日にその相談会に行ってみましょう。",
            bg: "bg4",
            speed: 0.3,
            audio: "shadow3.m4a",
            lines: 2
        },
        {
            text: "数日後、六本木の高級ビル...",
            bg: "bg5",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 1
        },
        { clear: true },
        {
            text: "エレベーターで上がると、そこには豪華なスピリチュアルサロンが広がっていた。",
            bg: "bg6",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2
        },
        {
            text: "水晶、パワーストーン、高級なインテリア...\n明らかに高額な運営費がかかっている。",
            bg: "bg6",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2
        },
        { clear: true },
        {
            speaker: "麗華",
            text: "皆様、本日はお忙しい中お越しいただき...\n霊的な問題でお悩みの方が増えています。",
            bg: "bg7",
            speed: 0.3,
            audio: "sakura1.m4a",
            lines: 2
        },
        {
            speaker: "RYOCHAN",
            text: "（小声で）やっぱり偽物だワン...でも、昔は本当に能力があったワン...",
            bg: "bg7",
            speed: 0.3,
            audio: "sakura1.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "相談会が進むにつれ、徐々に高額な商品が紹介されていく。\n「特別な浄化グッズ」「パワーストーン」「個人セッション」...",
            bg: "bg8",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2
        },
        {
            speaker: "SAKURA",
            text: "（麗華に近づいて）あなた、昔は本物だったでしょう？",
            bg: "bg8",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "麗華の表情が一瞬曇る。",
            bg: "bg9",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 1
        },
        {
            speaker: "麗華",
            text: "...あなたも見える人ね。そう、昔は...でも今は生きていくために...",
            bg: "bg9",
            speed: 0.3,
            audio: "sakura2.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "真実が明らかになった。\n本物の能力を失った麗華が、生活のために詐欺に手を染めていたのだ。",
            bg: "bg10",
            speed: 0.4,
            audio: "sakura2.m4a",
            lines: 2
        },
        {
            speaker: "SAKURA",
            text: "でも、偽りの救いは真の救いにはならない。\n一緒に本当の道を見つけましょう。",
            bg: "bg11",
            speed: 0.3,
            audio: "success1.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "<span class='emphasis'>スピリチュアル詐欺編 完</span>\n\n偽りの霊能者を救済することができた。",
            bg: "bg12",
            speed: 0.3,
            audio: "success1.m4a",
            lines: 3
        }
    ],

    // 医療詐欺分岐
    medical: [
        {
            text: "<span class='emphasis'>医療詐欺編『偽りの希望』</span>",
            bg: "bg2",
            speed: 0.1,
            audio: "shadow4.m4a",
            lines: 0,
            scene: "medical1",
            sceneTitle: "偽りの希望",
            clear: true
        },
        {
            text: "RYO-CHANたちは健康コンサルタント・美咲を追うことにした。",
            bg: "bg2",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2
        },
        {
            text: "「奇跡的に回復された方を何人も...」\n美咲の声が聞こえる。",
            bg: "bg3",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2
        },
        { clear: true },
        {
            speaker: "RYOCHAN",
            text: "この人の『氣』...真っ黒だワン。\n涙も演技だワン！",
            bg: "bg3",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2
        },
        {
            text: "美咲が男性にパンフレットを渡している。\n「健康革命セミナー」と書かれている。",
            bg: "bg4",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2
        },
        { clear: true },
        {
            speaker: "MAKOTO",
            text: "このセミナーに潜入してみるか。",
            bg: "bg4",
            speed: 0.3,
            audio: "shadow3.m4a",
            lines: 1
        },
        {
            text: "数日後、都内のホテル会議室...",
            bg: "bg5",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 1
        },
        { clear: true },
        {
            text: "大きな会議室には100人近い参加者が。\nほとんどが高齢者や、病気で悩む人たちだった。",
            bg: "bg6",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2
        },
        {
            speaker: "美咲",
            text: "皆様、西洋医学に見放された方でも希望があります！\nこちらの特別なサプリメントは...",
            bg: "bg7",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2
        },
        { clear: true },
        {
            speaker: "RYOCHAN",
            text: "みんな必死にすがってるワン...\nでも、その商品には何の効果もないワン！",
            bg: "bg7",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2
        },
        {
            text: "「今日だけ特別価格30万円」\n「体験談の方にお話を聞きましょう」",
            bg: "bg8",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "体験談を話す人々も、実は雇われたサクラだった。\n巧妙に仕組まれた詐欺システム。",
            bg: "bg9",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2
        },
        {
            speaker: "MAKOTO",
            text: "（立ち上がって）ちょっと待て！\nその商品に医学的根拠はあるのか？",
            bg: "bg9",
            speed: 0.3,
            audio: "ryoscan1.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "会場がざわめく。\n美咲の表情が一瞬変わった。",
            bg: "bg10",
            speed: 0.4,
            audio: "ryoscan1.m4a",
            lines: 2
        },
        {
            speaker: "SAKURA",
            text: "皆さん、冷静になってください。\n本当に必要なのは正しい医療とケアです。",
            bg: "bg11",
            speed: 0.3,
            audio: "success1.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "真実が暴かれ、多くの高齢者が救われた。\n偽りの希望ではなく、真の支援を見つけることができたのだ。",
            bg: "bg12",
            speed: 0.4,
            audio: "success1.m4a",
            lines: 2
        },
        {
            text: "<span class='emphasis'>医療詐欺編 完</span>\n\n多くの人々を偽りの希望から救うことができた。",
            bg: "bg12",
            speed: 0.3,
            audio: "success1.m4a",
            lines: 3
        }
    ],

    // カゲマル分岐：医療の闇と利権構造
    kagemaru: [
        {
            text: "<span class='emphasis'>カゲマル編『白衣の影』</span>",
            bg: "bg2",
            speed: 0.1,
            audio: "shadow4.m4a",
            lines: 0,
            scene: "kagemaru1",
            sceneTitle: "白衣の影",
            clear: true
        },
        {
            text: "「RYO-CHAN、散歩がてら気になる場所があるんだ」\nカゲマルの声には珍しく深刻な響きがあった。",
            bg: "bg2",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "彼が向かったのは都心の高級医療ビル。\n一見すると最先端の医療施設だった。",
            bg: "bg3",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "「ここで何か...氣の歪みを感じるんだ」\nカゲマルの瞳が金色に光る。",
            bg: "bg3",
            speed: 0.3,
            audio: "shadow4.m4a", 
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "受付の美しい看護師が微笑みかけてくる。\nしかし、その笑顔の奥に何か冷たいものが潜んでいた。",
            bg: "bg4",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "「本日はどのような症状でしょうか？」\n「実は...最近疲れやすくて」",
            bg: "bg4",
            speed: 0.3,
            audio: "moonlight1.m4a",
            lines: 2,
            speaker: "看護師"
        },
        {
            text: "次々と「必要な検査」が提案される。\n血液検査、MRI、CT、遺伝子検査...費用は膨らんでいく。",
            bg: "bg5",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "「検査の結果、軽度の炎症反応が...」\n医師の言葉に患者の表情が暗くなる。",
            bg: "bg5",
            speed: 0.3,
            audio: "moonlight1.m4a",
            lines: 2,
            speaker: "医師"
        },
        {
            text: "「予防的に薬を処方しましょう。\nこちらは保険適用外ですが、効果的です」",
            bg: "bg6",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            speaker: "医師"
        },
        { clear: true },
        {
            text: "カゲマルの目に映る氣の流れ。\n医師の周りには濁った黒い氣が渦巻いていた。",
            bg: "bg6",
            speed: 0.3,
            audio: "shadow3.m4a",
            lines: 2
        },
        {
            text: "しかし...患者への想いは本物だった。\n医師も制度の犠牲者なのかもしれない。",
            bg: "bg7",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "「先生...本当に患者のためを思って？」\nカゲマルの問いかけに、医師の手が震えた。",
            bg: "bg7",
            speed: 0.3,
            audio: "shadow3.m4a",
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "「昔は...患者を救いたい一心だった。\nでも、病院経営、保険制度、製薬会社...」",
            bg: "bg8",
            speed: 0.4,
            audio: "ryoscan1.m4a",
            lines: 2,
            speaker: "医師"
        },
        { clear: true },
        {
            text: "「いつの間にか、治すより診続けることが\n求められるようになってしまった」",
            bg: "bg8",
            speed: 0.3,
            audio: "ryoscan1.m4a",
            lines: 2,
            speaker: "医師"
        },
        {
            text: "医師の瞳に涙が光る。\n本来の志と現実の狭間で苦しんでいたのだ。",
            bg: "bg9",
            speed: 0.4,
            audio: "sakura1.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "「でも、患者の氣は嘘をつかない。\n本当に必要な治療と、そうでないものが見えるんだ」",
            bg: "bg9",
            speed: 0.3,
            audio: "sakura1.m4a",
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "医師は静かに頷いた。\n「君たちのような存在が必要だったのかもしれない」",
            bg: "bg10",
            speed: 0.4,
            audio: "sakura2.m4a",
            lines: 2,
            speaker: "医師"
        },
        { clear: true },
        {
            text: "その日から、この医療センターは変わり始めた。\n本当に必要な医療だけを提供する場所として。",
            bg: "bg11",
            speed: 0.3,
            audio: "success1.m4a",
            lines: 2
        },
        {
            text: "<span class='emphasis'>カゲマル編 完</span>\n\n医療の真実を見抜く力を手に入れた。",
            bg: "bg12",
            speed: 0.3,
            audio: "success1.m4a",
            lines: 3
        }
    ],

    // サクラ分岐：スピリチュアルの光と影
    sakura: [
        {
            text: "<span class='emphasis'>サクラ編『霊視の迷宮』</span>",
            bg: "bg2",
            speed: 0.1,
            audio: "sakura1.m4a",
            lines: 0,
            scene: "sakura1",
            sceneTitle: "霊視の迷宮",
            clear: true
        },
        {
            text: "「RYO-CHAN、面白い人がいるの。\n一緒に会ってみない？」",
            bg: "bg2",
            speed: 0.3,
            audio: "sakura1.m4a",
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "サクラが向かったのは都内の雑居ビル。\n「スピリチュアル・ヒーリングサロン」の看板が見えた。",
            bg: "bg3",
            speed: 0.4,
            audio: "sakura1.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "「いらっしゃいませ。お待ちしておりました」\n白い服を着た女性が神秘的な微笑みを浮かべる。",
            bg: "bg4",
            speed: 0.3,
            audio: "moonlight1.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "「あなたには...とても強いオーラを感じます。\n特別な力をお持ちですね」",
            bg: "bg4",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        { clear: true },
        {
            text: "部屋には水晶やパワーストーンが並んでいる。\n確かに何かエネルギーのようなものを感じる...",
            bg: "bg5",
            speed: 0.3,
            audio: "moonlight1.m4a",
            lines: 2
        },
        {
            text: "「このブレスレット、特別価格で20万円。\nあなたの運命を変える力があります」",
            bg: "bg6",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        { clear: true },
        {
            text: "サクラの氣の感覚が警鐘を鳴らす。\nでも...この人の能力は本物だと感じていた。",
            bg: "bg6",
            speed: 0.3,
            audio: "shadow3.m4a",
            lines: 2
        },
        {
            text: "「あなたも感じるでしょう？私にも見えるのです。\n氣の流れ、人の心の奥底にあるもの」",
            bg: "bg7",
            speed: 0.4,
            audio: "ryoscan1.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        { clear: true },
        {
            text: "確かに霊能者の瞳には何かが宿っていた。\n偽物ではない...でも、何かが歪んでいる。",
            bg: "bg7",
            speed: 0.3,
            audio: "ryoscan1.m4a",
            lines: 2
        },
        {
            text: "「なぜ、本物の能力を持ちながら\nお金を要求するのですか？」",
            bg: "bg8",
            speed: 0.4,
            audio: "ryoscan1.m4a",
            lines: 2,
            speaker: "サクラ"
        },
        { clear: true },
        {
            text: "霊能者の表情が一瞬曇る。\n「私にも...生活があるから」",
            bg: "bg8",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "「昔は無償で人を助けていました。\nでも、偽物たちが高額で商売を始めて...」",
            bg: "bg9",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        { clear: true },
        {
            text: "「本物が無償なら、偽物の方が信頼される。\n皮肉なものです」",
            bg: "bg9",
            speed: 0.3,
            audio: "sakura2.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "サクラは理解した。\n真の能力者も、歪んだ世界の犠牲者なのだと。",
            bg: "bg10",
            speed: 0.4,
            audio: "sakura2.m4a",
            lines: 2
        },
        { clear: true },
        {
            text: "「でも、お金ではなく本当の価値を\n人々に伝える方法があるはず」",
            bg: "bg10",
            speed: 0.3,
            audio: "sakura2.m4a",
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "霊能者の目に希望の光が宿る。\n「あなたたちとなら...新しい道が見えるかもしれません」",
            bg: "bg11",
            speed: 0.4,
            audio: "success1.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        { clear: true },
        {
            text: "真の霊能力とテクノロジーの融合。\n新たな可能性が生まれようとしていた。",
            bg: "bg12",
            speed: 0.3,
            audio: "success1.m4a",
            lines: 2
        },
        {
            text: "<span class='emphasis'>サクラ編 完</span>\n\nスピリチュアルな真実を見抜く力を手に入れた。",
            bg: "bg13",
            speed: 0.3,
            audio: "success1.m4a",
            lines: 3
        }
    ]
};

// ========== シーンマッピング構築 ==========

const buildSceneMap = () => {
    const sceneMap = {};
    const sceneList = [];
    
    storyContent.forEach((content, index) => {
        if (content.scene) {
            const sceneInfo = {
                id: content.scene,
                title: content.sceneTitle || content.scene,
                startIndex: index,
                audio: content.audio || null
            };
            sceneMap[content.scene] = sceneInfo;
            sceneList.push(sceneInfo);
        }
    });

    // 分岐ストーリーのシーンも追加
    Object.keys(storyBranches).forEach(branchKey => {
        storyBranches[branchKey].forEach((content, index) => {
            if (content.scene) {
                const sceneInfo = {
                    id: content.scene,
                    title: content.sceneTitle || content.scene,
                    startIndex: index,
                    audio: content.audio || null,
                    branch: branchKey
                };
                sceneMap[content.scene] = sceneInfo;
                sceneList.push(sceneInfo);
            }
        });
    });
    
    return { sceneMap, sceneList };
};

console.log('✅ [storyContent] 分岐ストーリー読み込み完了！');
console.log('📊 [storyContent] 総アイテム数:', storyContent.length);
console.log('🎬 [storyContent] シーンマッピング準備完了');
console.log('🌸 [storyContent] 分岐システム準備完了');