console.log('📚 [storyContent] 第2話『歪み』読み込み開始...');

const storyContent = [

// ========== シーン1：闇の密室 ==========

{
    text: "<span class='emphasis'>第二話『歪み』</span>",
    bg: "bg1",
    speed: 0.2,
    audio: "shadow3.m4a",
    lines: 0,
    scene: "scene1",
    sceneTitle: "歪み"
},



{
    text: "東京の夜。\n窓からは星一つ見えない漆黒の闇が広がっていた。",
    bg: "bg1",
    speed: 0.3,
    audio: "shadow3.m4a",
    lines: 1
},

{
    text: "複数のモニターが青白い光を放つ密室。\n影のような人物たちがキーボードを熱心に叩いていた。",
    bg: "bg1",
    speed: 0.4,
    audio: "shadow3.m4a",
    lines: 1
},

{ clear: true },

{
    text: "彼らの姿は暗闇に溶け込み、\n光るモニターに照らされた指先だけが動きを見せていた。",
    bg: "bg1",
    speed: 0.4,
    audio: "shadow3.m4a",
    lines: 1
},

{
    speaker: "SHADOW 1",
    text: "最終チェックは終わったか？\n絶対に検出されないことは確認したな？",
    bg: "bg1",
    speed: 0.3,
    audio: "shadow3.m4a",
    lines: 1
},

{ clear: true },

{
    text: "一人目の影が低く渋い声で尋ねた。\nその声音には自信と緊張が入り混じっていた。",
    bg: "bg1",
    speed: 0.4,
    audio: "shadow3.m4a",
    lines: 2
},

{
    speaker: "SHADOW 2",
    text: "ああ、バックドアの設置は完了した。\nこのスマートコントラクトが展開されれば、",
    bg: "bg1",
    speed: 0.3,
    audio: "shadow3.m4a",
    lines: 2
},

{
    text: "すべての資金は俺たちの手に渡る。",
    bg: "bg1",
    speed: 0.3,
    audio: "shadow3.m4a",
    lines: 1
},

{ clear: true },

// ========== シーン2：悪の計画 ==========

{
    text: "もう一人の影がにやりと笑った。\nその笑みは暗闇でも感じ取れるほど不気味なものだった。",
    bg: "bg1",
    speed: 0.4,
    audio: "shadow3.m4a",
    lines: 2,
    scene: "scene2",
    sceneTitle: "悪の計画"
},

{
    text: "モニターには複雑なコードと途方もない数字が青く浮かび上がり、\n冷たい光を放っていた。",
    bg: "bg1",
    speed: 0.4,
    audio: "shadow3.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "SHADOW 3",
    text: "このプロジェクトはついに明日のプレセールで始まる。\n予測では少なくとも500万ドルが集まるはずだ。",
    bg: "bg1",
    speed: 0.3,
    audio: "shadow3.m4a",
    lines: 2
},

{
    text: "72時間以内にすべて引き出す。\n完璧なタイミングだ！",
    bg: "bg1",
    speed: 0.3,
    audio: "shadow3.m4a",
    lines: 2
},

{ clear: true },

{
    text: "前回とは違って、資金を分配する前に\nミキシングサービスを通して経路を隠す。",
    bg: "bg1",
    speed: 0.3,
    audio: "shadow3.m4a",
    lines: 2
},

{
    text: "痕跡は残さない。",
    bg: "bg1",
    speed: 0.2,
    audio: "shadow3.m4a",
    lines: 1
},

{ clear: true },

{
    text: "リーダーが静かに立ち上がり、仲間たちを見渡した。\n薄暗い光の中、彼の鋭い目だけがギラリと獣のように光った。",
    bg: "bg1",
    speed: 0.4,
    audio: "shadow3.m4a",
    lines: 2
},

{
    speaker: "SHADOW 1",
    text: "俺たちはこれまで10個のプロジェクトで成功してきた。\n今回も例外じゃない。",
    bg: "bg1",
    speed: 0.3,
    audio: "shadow3.m4a",
    lines: 2
},

{
    text: "誰にも気づかれない。なぜなら...",
    bg: "bg1",
    speed: 0.3,
    audio: "shadow3.m4a",
    lines: 1
},

{ clear: true },

{
    text: "全員が口を揃えて呪文のように唱えた。",
    bg: "bg1",
    speed: 0.4,
    audio: "shadow3.m4a",
    lines: 1
},

{
    speaker: "ALL SHADOWS",
    text: "コードを読める奴はいても、\nその背後に隠された『氣』の流れを見ることができる奴はいないからだ。",
    bg: "bg1",
    speed: 0.3,
    audio: "shadow3.m4a",
    lines: 2
},

{ clear: true },

// ========== シーン3：一週間前の回想 ==========

{
    text: "一週間前、満月の夜。",
    bg: "bg2",
    speed: 0.3,
    lines: 1,
    scene: "scene3",
    sceneTitle: "満月の記憶",
    audio: "moonlight1.m4a",
    audioSwitchForced: true
},

{
    text: "夜空には満月がぽっかりと浮かび、\n神秘的な光を放っていた。",
    bg: "bg2",
    speed: 0.4,
    audio: "moonlight1.m4a",
    lines: 2
},

{
    text: "RYOCHANはひんやりとした空気を感じながら、\n古い神社の石段の前に立っていた。",
    bg: "bg2",
    speed: 0.4,
    audio: "moonlight1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "風が桜の花びらをひらひらと舞わせ、\nその花びらは月光に照らされて幻想的な光景を作り出していた。",
    bg: "bg2",
    speed: 0.4,
    audio: "moonlight1.m4a",
    lines: 2
},

{
    speaker: "RYOCHAN",
    text: "あの夜、おいらは奇妙な力に目覚めたんだ。",
    bg: "bg2",
    speed: 0.3,
    audio: "moonlight1.m4a",
    lines: 1
},

{
    text: "『氣』の流れが見えるようになった。\nまるでそれがずっとおいらを呼んでいたかのように...",
    bg: "bg2",
    speed: 0.3,
    audio: "moonlight1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "そして翌日...",
    bg: "bg2",
    speed: 0.2,
    audio: "moonlight1.m4a",
    lines: 1
},

{ clear: true },

// ========== シーン4：サクラとの出会い（修正版） ==========

{
    speaker: "SAKURA",
    text: "こんにちは、あなたが祖父の話していたRYOCHANね。",
    bg: "bg3",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2,
    scene: "scene4",
    sceneTitle: "サクラとの運命的出会い"
},

{
    text: "澄んだ声が響き、RYOCHANの思考を現実に引き戻した。\n振り返ると、そこには若い女性が立っていた。",
    bg: "bg3",
    speed: 0.4,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "彼女は制服姿で、どこか古風な雰囲気を漂わせていた。",
    bg: "bg3",
    speed: 0.4,
    audio: "sakura1.m4a",
    lines: 1
},

{
    text: "17歳とは思えないほど、その瞳には深い知識と\n失われつつある何かを守ろうとする強い意志の光が宿っていた。",
    bg: "bg3",
    speed: 0.4,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "SAKURA",
    text: "私はサクラ。高校生だけど、\n祖父から日本の古代文化について教わってきたの。",
    bg: "bg3",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "特に『氣』という概念を現代にどう活かせるか、\nずっと考えているのよ。",
    bg: "bg3",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "RYOCHAN",
    text: "『氣』...おいらにも見えるようになったんだ。\nでも、それをどう使えばいいのかわからなくて...",
    bg: "bg3",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "サクラの表情が輝いた。\nまるで長年探していた答えを見つけたかのように。",
    bg: "bg3",
    speed: 0.4,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "SAKURA",
    text: "やはりそうなのね！祖父が神社の管理人だった時から\nずっと言っていたの。",
    bg: "bg3",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "『いつか満月の夜に、失われた『氣』を視る力を持つ\n守護者が現れる』って。",
    bg: "bg3",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "彼女はRYOCHANの近くに座り込んだ。\nその仕草には、日本女性の奥ゆかしさと現代の少女らしさが同居していた。",
    bg: "bg3",
    speed: 0.4,
    audio: "sakura1.m4a",
    lines: 2
},

{
    speaker: "SAKURA",
    text: "祖父の最期の言葉は今でも忘れられないの...",
    bg: "bg3",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 1
},

{ clear: true },

{
    text: "『サクラよ、日本の魂は決して消えない。\n『氣』という文字が『気』に変えられても、",
    bg: "bg3",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "本当の力は形を変えて必ず蘇る。\nお前の時代に、それを見届けるのだ』",
    bg: "bg3",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "RYOCHAN",
    text: "その力が...おいらの中に？",
    bg: "bg3",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 1
},

{
    speaker: "SAKURA",
    text: "そうよ。でも力だけでは意味がない。\nその力をどう使うかが大切なの。",
    bg: "bg3",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "サクラは立ち上がり、ノートパソコンを取り出した。\nその画面には複雑なコードが表示されていた。",
    bg: "bg4",
    speed: 0.4,
    audio: "sakura1.m4a",
    lines: 2
},

{
    speaker: "SAKURA",
    text: "実は今、とても危険なことが起きているの。\n新しい技術を悪用する者たちがいる。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "ブロックチェーンという革新的な技術を使って、\n人々の資産を奪おうとしている。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "私たち研究者が分析しても、表面的には\n何の問題もないように見せかけているの。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "SAKURA",
    text: "あなたの目には、コードの背後に隠された\n悪意の『氣』が見えるはず。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "それは普通の人間には感知できない、\n現代の悪霊とも言えるものよ。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

// ========== シーン5：失われた『氣』の真実（修正版） ==========

{
    text: "サクラは画面を見つめながら続けた。",
    bg: "bg4",
    speed: 0.4,
    lines: 1,
    audio: "sakura1.m4a",
    scene: "scene5",
    sceneTitle: "失われた『氣』の真実"
},

{
    speaker: "SAKURA",
    text: "祖父から聞いた話では、戦後の教育改革で\n日本人の精神性に大きな変化が起きたの。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "『氣』が『気』に変わったのもその一部よ。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 1
},

{ clear: true },

{
    text: "『米』の部分が『〆』に変わってしまった。\n『〆』は封印を意味する文字。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "つまり、日本人の持つ本来の力が\n意図的に封じ込められたということなの。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "学校教育からも、『氣』の概念は徐々に消されていった。\n代わりに物質的な豊かさや競争を重視する価値観が",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "植え付けられていったのよ。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 1
},

{ clear: true },

{
    speaker: "SAKURA",
    text: "現代の詐欺師たちは、\nそうして心の『氣』を失った人々の隙間を狙っている。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "本来の直感力を失った人々は、\n偽りの希望に騙されやすくなっているのよ。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "でもあなたの力があれば、\n真実と偽りを見分けることができる。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "そして人々に本当の『氣』を思い出させることも。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 1
},

{ clear: true },

{
    text: "RYOCHANは何かが体の奥で震えるのを感じた。\nそれは使命感とも呼ぶべき、深い共鳴だった。",
    bg: "bg4",
    speed: 0.4,
    audio: "sakura1.m4a",
    lines: 2
},

{
    speaker: "RYOCHAN",
    text: "おいらにできることがあるなら...やってみたい。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 1
},

{ clear: true },

// ========== シーン6：隠された悪意の発見 ==========

{
    text: "サクラは再びノートパソコンを開き、\n慎重に画面をRYOCHANに向けた。",
    bg: "bg4",
    speed: 0.4,
    audio: "sakura1.m4a",
    lines: 2,
    scene: "scene6",
    sceneTitle: "隠された悪意の発見"
},

{
    speaker: "SAKURA",
    text: "これが問題のプロジェクト。\n『Future Finance』という名前で、",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{
    text: "一見すると次世代の分散型金融プラットフォームに見える。\n投資家に高い利回りを約束している。",
    bg: "bg4",
    speed: 0.3,
    audio: "sakura1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "RYOCHANが画面を覗き込んだ瞬間...。",
    bg: "bg5",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    audioSwitchForced: true,
    lines: 1
},

{
    text: "世界が変わった。",
    bg: "bg5",
    speed: 0.2,
    audio: "ryoscan1.m4a",
    lines: 1
},

{ clear: true },

{
    text: "普通の文字とコードの間に、\n血のように赤い『氣』の流れが見えた。",
    bg: "bg5",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "それは蛇のようにコードの中を這い回り、\n特定の関数に集中していた。",
    bg: "bg5",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "RYOCHAN",
    text: "これは...なんだワン！\nコードが生きているみたいだワン！",
    bg: "bg6",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "表面は美しく装っているけど、\n内部には恐ろしい悪意が渦巻いている。",
    bg: "bg6",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "それは投資家たちの資金を\n特定のウォレットに自動転送する仕組み。",
    bg: "bg6",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "72時間後に起動する時限爆弾のような関数だワン！",
    bg: "bg6",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 1
},

{ clear: true },

{
    text: "サクラは驚きで目を見開いた。\nRYOCHANが指摘した部分を詳しく調べ始めた。",
    bg: "bg4",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    speaker: "SAKURA",
    text: "信じられない...私たちが何週間かけても\n見つけられなかった隠し関数が...",
    bg: "bg4",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "確かにある！これは高度な難読化技術で隠されている。\n普通のコード監査では絶対に発見できない。",
    bg: "bg4",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

// ========== シーン7：RYOSCANシステムの理念（修正版） ==========

{
    text: "サクラはワクワクした表情でキーボードを打ち始めた。",
    bg: "bg8",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 1,
    scene: "scene7",
    sceneTitle: "RYOSCANの誕生"
},

{
    speaker: "SAKURA",
    text: "これよ！私がずっと開発していたシステム！\n『RYO SCAN』- 『氣』を検知する警告システム。",
    bg: "bg8",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "でもこれまでは理論だけだった。\n人間の直感と『氣』の感知能力が必要だったの。",
    bg: "bg8",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "技術だけでは限界がある。\n心と魂がなければ、真実は見えない。",
    bg: "bg8",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "RYOCHAN",
    text: "おいらの力と、サクラの技術を合わせるということワン？",
    bg: "bg8",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 1
},

{
    speaker: "SAKURA",
    text: "そうよ！古代の知恵と現代の技術を\n一緒に使えたらいいなって思ってたの。",
    bg: "bg8",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "画面に美しいインターフェースが現れた。\n桜の花びらが舞うデザインに、伝統的な日本の色彩。",
    bg: "bg7",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "それでいて最新のAI技術が組み込まれている。\n和魂洋才の現代版だった。",
    bg: "bg7",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "SAKURA",
    text: "このシステムの理念は『守り』よ。\n攻撃するのではなく、人々を守ること。",
    bg: "bg7",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "日本古来の『和』の精神と\n『衆善奉公』の心を込めたの。",
    bg: "bg7",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "あなたが危険を察知したら、\nシステムがその情報を美しく、わかりやすく整理して",
    bg: "bg7",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "必要な人々に即座に届ける。\n恐怖ではなく、希望と共に。",
    bg: "bg7",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 1
},

{ clear: true },

// ========== シーン8：実践と成果 ==========

{
    text: "RYOCHANとサクラは息を合わせて作業した。\nまるで長年のパートナーのように。",
    bg: "bg8",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 2,
    scene: "scene8",
    sceneTitle: "魂の共鳴"
},

{
    speaker: "RYOCHAN",
    text: "ここワン！この関数が一番危険ワン！\n悪意の『氣』が集中している！",
    bg: "bg6",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "サクラはRYOCHANの指示に従い、\n詳細な分析レポートを作成していく。",
    bg: "bg8",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "SAKURA",
    text: "完璧よ！これで全ての仕組みが明らかになった。\n投資家の皆さんを守ることができる。",
    bg: "bg8",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "しかもこの警告方法なら、\n恐怖を煽るのではなく、教育的で建設的。",
    bg: "bg8",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "レポートには詐欺の手法だけでなく、\n安全な投資の見分け方も含まれていた。",
    bg: "bg8",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "それは単なる警告ではなく、\n金融リテラシーを高める教材でもあった。",
    bg: "bg8",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "SAKURA",
    text: "送信完了...すごいわ。RYOCHANのおかげで、\n多くの人々の大切な資産を守ることができるかも。",
    bg: "bg8",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

// ========== シーン9：大きな成功 ==========

{
    text: "その反響は予想をはるかに超えていた。",
    bg: "bg9",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 1,
    scene: "scene9",
    sceneTitle: "希望の連鎖反応"
},

{
    text: "画面には感謝のメッセージが次々と表示される。",
    bg: "bg9",
    speed: 0.4,
    audio: "ryoscan1.m4a",
    lines: 1
},

{ clear: true },

{
    text: "『ありがとうございます！危うく全財産を失うところでした』\n『このような情報を無償で提供してくださり感謝です』",
    bg: "bg9",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{
    text: "『日本にもこんな守護システムがあったなんて！』\n『海外の友人にも共有させていただきます』",
    bg: "bg9",
    speed: 0.3,
    audio: "ryoscan1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "SAKURA",
    text: "見て、RYOCHAN！効果は国境を越えているわ！\n韓国、台湾、東南アジアからも反響が！",
    bg: "bg10",
    speed: 0.3,
    audio: "success1.m4a",

    lines: 2
},

{
    text: "私たちが守ったのは日本人だけじゃない。\nアジア全体の投資家コミュニティよ！",
    bg: "bg10",
    speed: 0.3,
    audio: "success1.m4a",
    lines: 2
},

{ clear: true },

{
    text: "さらに他の研究者たちからも連絡が届いた。\n『私たちも同様のシステム開発に協力したい』",
    bg: "bg10",
    speed: 0.4,
    audio: "success1.m4a",
    lines: 2
},

{
    text: "『日本発の新しい金融セキュリティ技術として\n世界に広めていきましょう』",
    bg: "bg10",
    speed: 0.3,
    audio: "success1.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "RYOCHAN",
    text: "おいらの力が、こんなにたくさんの人を守れるなんて...。\n使命感が体中に湧いてくるワン！",
    bg: "bg10",
    speed: 0.3,
    audio: "success1.m4a",
    lines: 2
},

{
    speaker: "SAKURA",
    text: "これが『氣』の本当の力よ。\n一人の力が周りの人を動かし、",
    bg: "bg10",
    speed: 0.3,
    audio: "success1.m4a",
    lines: 2
},

{
    text: "その輪がどんどん広がっていく。\nこれこそが日本人の魂の真髄なのね。",
    bg: "bg10",
    speed: 0.3,
    audio: "success1.m4a",
    lines: 2
},

{ clear: true },
{
    text: "一方その頃・・・。",
    bg: "bg10",
    speed: 0.2,
    audio: "success1.m4a",
    lines: 2
},

{ clear: true },

// ========== シーン10：悪者の怒り（修正版） ==========

{
    text: "ハッカーグループの隠れ家。\n暗い部屋の中、リーダーは怒りに震えながら",
    bg: "bg14",
    speed: 0.4,
    lines: 2,
    scene: "scene10",
    sceneTitle: "悪者の逆襲誓い",
    audio: "shadow4.m4a",
    audioSwitchForced: true
},

{
    text: "携帯電話を壁に向かって投げつけた。\n画面が砕け散る音が静寂を破った。",
    bg: "bg14",
    speed: 0.4,
    audio: "shadow4.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "SHADOW 1",
    text: "誰だ！誰が俺たちのコードを分析した！？\nあの隠し関数は完璧だったはずだ！",
    bg: "bg14",
    speed: 0.3,
    audio: "shadow4.m4a",
    lines: 2
},

{
    text: "ディスプレイには彼らのプロジェクトに関する\n詳細な警告レポートが表示されていた。",
    bg: "bg12",
    speed: 0.4,
    audio: "shadow4.m4a",
    lines: 2
},

{ clear: true },

{
    text: "それは単なる告発ではなく、\n教育的で建設的な内容だった。",
    bg: "bg12",
    speed: 0.4,
    audio: "shadow4.m4a",
    lines: 2
},

{
    text: "投資家たちは恐怖ではなく理解を持って\n彼らのプロジェクトから離れていったのだ。",
    bg: "bg12",
    speed: 0.4,
    audio: "shadow4.m4a",
    lines: 2
},

{ clear: true },

{
    text: "これまでの粗暴な暴露とは違う。\nまるで子供に教えるかのような丁寧な説明で、",
    bg: "bg11",
    speed: 0.4,
    audio: "shadow4.m4a",
    lines: 2
},

{
    text: "彼らの完璧だと思っていた計画を\nあっさりと見破られていた。",
    bg: "bg11",
    speed: 0.4,
    audio: "shadow4.m4a",
    lines: 2
},

{
    text: "だからこそ、より多くの人々が信頼し、\n情報を拡散していったのだ。",
    bg: "bg11",
    speed: 0.4,
    audio: "shadow4.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "SHADOW 2",
    text: "ありえない...あのコードに隠した罠は\n最新の難読化技術を使っていたのに...",
    bg: "bg13",
    speed: 0.3,
    audio: "shadow4.m4a",
    lines: 2
},

{
    text: "どんなAIでも検出できないはずだった。\n一体何が俺たちのコードを見破ったんだ？",
    bg: "bg13",
    speed: 0.3,
    audio: "shadow4.m4a",
    lines: 2
},

{ clear: true },

{
    text: "リーダーは机を拳で強く叩いた。\nバン！という音が暗い部屋に響き渡り、モニターが揺れた。",
    bg: "bg14",
    speed: 0.4,
    audio: "shadow4.m4a",
    lines: 2
},

{
    speaker: "SHADOW 1",
    text: "この『RYO SCAN』とかいうシステムを作った奴らを\n必ず見つけ出してやる。",
    bg: "bg14",
    speed: 0.3,
    audio: "shadow4.m4a",
    lines: 2
},

{
    text: "そして次のプロジェクトは\nもっと巧妙に、もっと完璧に作り上げてやる！",
    bg: "bg14",
    speed: 0.3,
    audio: "shadow4.m4a",
    lines: 2
},

{ clear: true },

{
    text: "彼の目には復讐の炎が灯っていた。\nそれは『氣』の流れとは正反対の、",
    bg: "bg14",
    speed: 0.4,
    audio: "shadow4.m4a",
    lines: 2
},

{
    text: "暗く歪んだエネルギーだった。",
    bg: "bg14",
    speed: 0.3,
    audio: "shadow4.m4a",
    lines: 1
},

{ clear: true },

// ========== シーン11：希望のエンディング ==========

{
    text: "その夜、サクラのアパートの窓辺に座ったRYOCHANは、\n街の明かりを見つめていた。",
    bg: "bg15",
    speed: 0.4,
    lines: 2,
    scene: "scene3",
    sceneTitle: "新しい絆と希望",
    audio: "sakura2.m4a",
    audioSwitchForced: true
},

{
    text: "彼の体は青い『氣』の光を静かに纏っていた。\nその光は以前より強く、安定していた。",
    bg: "bg15",
    speed: 0.4,
    audio: "sakura2.m4a",
    lines: 2
},

{ clear: true },

{
    speaker: "SAKURA",
    text: "今日、私たちが成し遂げたことは\n単なる詐欺の阻止じゃないのよ。",
    bg: "bg15",
    speed: 0.3,
    audio: "sakura2.m4a",
    lines: 2
},

{
    text: "日本の心と現代技術の真の融合。\n失われかけた『氣』の力の復活。",
    bg: "bg15",
    speed: 0.3,
    audio: "sakura2.m4a",
    lines: 2
},

{ clear: true },

{
    text: "そして何より、一人一人の力が\n世界を変えることができるという証明よ。",
    bg: "bg15",
    speed: 0.3,
    audio: "sakura2.m4a",
    lines: 2
},

{
    speaker: "RYOCHAN",
    text: "おいらも感じているワン。\nこの使命は、おいら一人のものじゃない。",
    bg: "bg15",
    speed: 0.3,
    audio: "sakura2.m4a",
    lines: 2
},

{ clear: true },

{
    text: "みんなで守り、みんなで築いていくものなんだワン。\nこれが本当の『和』の力だワン。",
    bg: "bg15",
    speed: 0.3,
    audio: "sakura2.m4a",
    lines: 2
},

{
    speaker: "SAKURA",
    text: "でも戦いはまだ始まったばかり。\n今日は多くの人を守ることができたけれど、",
    bg: "bg15",
    speed: 0.3,
    audio: "sakura2.m4a",
    lines: 2
},

{
    text: "まだ見えない危険がたくさん潜んでいる。\nあなたと一緒なら、きっと乗り越えられるわ。",
    bg: "bg15",
    speed: 0.3,
    audio: "sakura2.m4a",
    lines: 2
},

{ clear: true },

{
    text: "RYOCHANは深く頷いた。\n彼の中で、新しい決意が燃えていた。",
    bg: "bg15",
    speed: 0.4,
    audio: "sakura2.m4a",
    lines: 2
},

{
    text: "かつて『氣』は『気』に簡略化され、\nその本質が失われてしまった。",
    bg: "bg15",
    speed: 0.4,
    audio: "sakura2.m4a",
    lines: 2
},

{ clear: true },

{
    text: "しかし今、その力は彼らの中で再び息づき始めていた。\n守護の力として。愛の力として。",
    bg: "bg15",
    speed: 0.4,
    audio: "sakura2.m4a",
    lines: 2
},

{
    text: "希望の力として。",
    bg: "bg15",
    speed: 0.3,
    audio: "sakura2.m4a",
    lines: 1
},

{ clear: true },

{
    text: "窓の外には都市の明かりが輝き、\nその光がRYOCHANとサクラの瞳に映り込んでいた。",
    bg: "bg15",
    speed: 0.4,
    audio: "sakura2.m4a",
    lines: 2
},

{
    text: "二人の絆から生まれた新たな物語が、\nここから始まろうとしていた。",
    bg: "bg15",
    speed: 0.3,
    audio: "sakura2.m4a",
    lines: 2
},

{ clear: true },

{
    text: "<span class='emphasis'>つづく・・・</span>",
    bg: "bg15",
    speed: 0.4,
    audio: "sakura2.m4a",
    lines: 2
}

];

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
    
    return { sceneMap, sceneList };
};

console.log('✅ [storyContent] 第2話『歪み』読み込み完了！');
console.log('📊 [storyContent] 総アイテム数:', storyContent.length);
console.log('🎬 [storyContent] シーンマッピング準備完了');
console.log('🎵 [storyContent] 音声切り替えポイント最適化完了');
