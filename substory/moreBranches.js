// 🌸========== 追加の複雑な分岐ストーリー ==========🌸
console.log('🌸 [追加分岐] さらなるストーリーブランチ読み込み開始...');

let additionalBranches = {
    // ========== 裏切りルート ==========
    betrayal_route: [
        {
            text: "信じていた仲間が、ゆっくりと振り返る。\nその瞳に宿るのは...冷たい殺意。",
            bg: "bg23",
            audio: "shadow4.m4a",
            speed: 0.2,
            lines: 2,
            scene: "betrayal",
            sceneTitle: "裏切りの瞬間",
            clear: true
        },
        {
            text: "「ごめんね、RYO-CHAN」\n「でも、これが私の使命なの」",
            bg: "bg23",
            speed: 0.3,
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "サクラの手に握られた注射器。\nそれは...記憶を消去する薬物。",
            bg: "bg23",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'timedChoice',
            text: "時間がない！",
            bg: "bg23",
            timeLimit: 10,
            options: [
                { 
                    label: '反撃する', 
                    branch: 'counter_betrayal',
                    action: () => flagManager.setFlag('betrayalRoute')
                },
                { 
                    label: '説得を試みる', 
                    branch: 'persuade_traitor',
                    action: () => flagManager.addPoints('trustPoints', -3)
                },
                { 
                    label: '受け入れる', 
                    branch: 'accept_fate',
                    action: () => flagManager.addPoints('deathFlags', 2)
                }
            ],
            timeoutBranch: 'forced_injection' // 時間切れ時の分岐
        }
    ],

    // ========== サクラの自宅調査ルート ==========
    investigate_sakura_home: [
        {
            text: "サクラのマンションに到着した。\n部屋の扉が半開きになっている...",
            bg: "bg24",
            audio: "ryoscan1.m4a",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "中は荒らされていた。\n何者かが何かを探していたようだ。",
            bg: "bg24",
            speed: 0.3,
            lines: 2
        },
        {
            text: "「ここにも来ていたか...」\nカゲマルが床に残された痕跡を調べる。",
            bg: "bg24",
            speed: 0.4,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "隠し金庫を発見した。\n中には...日記と写真、そして謎のUSBメモリ。",
            bg: "bg25",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'itemChoice',
            text: "どれから調べる？",
            bg: "bg25",
            items: [
                { 
                    label: '日記を読む', 
                    branch: 'read_diary',
                    item: 'sakura_diary',
                    action: () => {
                        flagManager.setFlag('foundSecretDocument');
                        flagManager.addPoints('mysteryPoints', 2);
                    }
                },
                { 
                    label: '写真を確認', 
                    branch: 'check_photos',
                    item: 'mysterious_photos'
                },
                { 
                    label: 'USBの中身を見る', 
                    branch: 'usb_contents',
                    item: 'encrypted_usb',
                    requirement: 'investigatedMedical' // 条件付きアイテム
                }
            ]
        }
    ],

    // ========== 日記ルート ==========
    read_diary: [
        {
            text: "サクラの日記を開く。\n最後のページには震える文字で...",
            bg: "bg25",
            audio: "sakura2.m4a",
            speed: 0.3,
            lines: 2,
            clear: true
        },
        {
            text: "『私は知ってしまった。\nProject CHIMERAの真の目的を』",
            bg: "bg25",
            speed: 0.4,
            lines: 2,
            speaker: "サクラの日記"
        },
        {
            text: "『彼らは氣の力を兵器化しようとしている。\nそして、最初の実験体は...』",
            bg: "bg25",
            speed: 0.3,
            lines: 2,
            speaker: "サクラの日記"
        },
        {
            text: "ページが破られている。\n誰かが重要な部分を持ち去ったのか？",
            bg: "bg25",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'discoveryChoice',
            text: "衝撃的な内容だ。この情報は...",
            bg: "bg25",
            discovery: 'chimera_project',
            options: [
                { 
                    label: 'カゲマルと共有する', 
                    branch: 'share_with_kagemaru',
                    trust: 'kagemaru',
                    action: () => flagManager.setFlag('sharedInfo')
                },
                { 
                    label: '一人で追及する', 
                    branch: 'solo_investigation',
                    action: () => flagManager.setFlag('soloRoute')
                },
                { 
                    label: '破り捨てる', 
                    branch: 'destroy_evidence',
                    action: () => flagManager.addPoints('deathFlags', 1)
                }
            ]
        }
    ],

    // ========== 時限爆弾ルート ==========
    timed_escape_route: [
        {
            text: "警報が鳴り響く！\n『自爆装置作動。残り時間：5分』",
            bg: "bg26",
            audio: "shadow3.m4a",
            speed: 0.2,
            lines: 2,
            scene: "countdown",
            sceneTitle: "カウントダウン",
            clear: true
        },
        {
            text: "「くそっ！罠だったか！」\nカゲマルが舌打ちする。",
            bg: "bg26",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            type: 'multiChoice',
            text: "時間がない！何を優先する？（複数選択可）",
            bg: "bg26",
            timeLimit: 30,
            maxChoices: 2,
            options: [
                { 
                    label: '重要データを回収', 
                    id: 'save_data',
                    action: () => flagManager.addPoints('mysteryPoints', 3)
                },
                { 
                    label: '捕らわれた人を救出', 
                    id: 'save_prisoner',
                    action: () => {
                        flagManager.setFlag('savedVictim');
                        flagManager.addPoints('trustPoints', 2);
                    }
                },
                { 
                    label: '爆弾の解除を試みる', 
                    id: 'defuse_bomb',
                    action: () => flagManager.addPoints('perfectClearFlags', 1)
                },
                { 
                    label: '脱出経路を確保', 
                    id: 'secure_exit',
                    action: () => flagManager.setFlag('escapedDanger')
                }
            ],
            consequences: {
                'save_data,save_prisoner': 'heroic_escape',
                'defuse_bomb,secure_exit': 'technical_solution',
                'save_prisoner,secure_exit': 'safe_escape',
                'default': 'risky_escape'
            }
        }
    ],

    // ========== 記憶喪失ルート ==========
    amnesia_route: [
        {
            text: "目が覚めると...\n見知らぬ白い部屋にいた。",
            bg: "bg27",
            audio: "moonlight1.m4a",
            speed: 0.4,
            lines: 2,
            scene: "amnesia",
            sceneTitle: "失われた記憶",
            clear: true
        },
        {
            text: "「気がついたのね」\n\n白衣の女性が優しく微笑む。",
            bg: "bg27",
            speed: 0.3,
            lines: 2,
            speaker: "？？？"
        },
        {
            text: "「あなたは事故に遭って...\n記憶を失ってしまったの」",
            bg: "bg27",
            speed: 0.4,
            lines: 2,
            speaker: "医師"
        },
        {
            text: "でも、何かがおかしい。\n体の奥底で、何かが警告している。",
            bg: "bg27",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'memoryChoice',
            text: "かすかに残る記憶の断片...",
            bg: "bg27",
            fragments: [
                { text: "桜の花びらが舞う光景", trigger: 'sakura_memory' },
                { text: "影のような黒い存在", trigger: 'kagemaru_memory' },
                { text: "『氣』という言葉", trigger: 'ki_memory' }
            ],
            options: [
                { 
                    label: '医師を信じる', 
                    branch: 'trust_doctor',
                    action: () => flagManager.addPoints('deathFlags', 2)
                },
                { 
                    label: '疑いを持つ', 
                    branch: 'doubt_situation',
                    action: () => flagManager.addPoints('mysteryPoints', 2)
                },
                { 
                    label: '脱走を試みる', 
                    branch: 'escape_hospital',
                    requirement: 'ki_memory'
                }
            ]
        }
    ],

    // ========== パラレルワールドルート ==========
    parallel_world: [
        {
            text: "氣の暴走が時空の歪みを生んだ。\n気がつくと...別の世界線にいた。",
            bg: "bg28",
            audio: "shadow4.m4a",
            speed: 0.3,
            lines: 2,
            scene: "parallel",
            sceneTitle: "並行世界",
            clear: true
        },
        {
            text: "この世界では、カゲマルが敵として君を追っている。\nそしてサクラは...既に死んでいた。",
            bg: "bg28",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「RYO-CHAN...なぜこの世界に？」\n\n見覚えのない少女が話しかけてきた。",
            bg: "bg29",
            speed: 0.3,
            lines: 2,
            speaker: "？？？"
        },
        {
            text: "「私はユメ。この世界線のあなたの...\nパートナーだった人」",
            bg: "bg29",
            speed: 0.4,
            lines: 2,
            speaker: "ユメ"
        },
        {
            type: 'worldChoice',
            text: "元の世界に戻る方法を探すか、\nこの世界で新たな運命を受け入れるか？",
            bg: "bg29",
            worldState: {
                original: { kagemaru: 'ally', sakura: 'ally' },
                current: { kagemaru: 'enemy', sakura: 'dead', yume: 'ally' }
            },
            options: [
                { 
                    label: '元の世界への帰還を目指す', 
                    branch: 'return_to_original',
                    action: () => flagManager.setFlag('seekingReturn')
                },
                { 
                    label: 'この世界の謎を解明する', 
                    branch: 'investigate_parallel',
                    action: () => flagManager.addPoints('mysteryPoints', 4)
                },
                { 
                    label: '世界線を統合する', 
                    branch: 'merge_timelines',
                    requirement: { points: { type: 'mysteryPoints', operator: '>=', value: 10 } }
                }
            ]
        }
    ],

    // ========== 最終決戦ルート ==========
    final_confrontation: [
        {
            text: "すべての真実が明らかになった。\n最後の戦いが始まる。",
            bg: "bg30",
            audio: "shadow3.m4a",
            speed: 0.3,
            lines: 2,
            scene: "final_battle",
            sceneTitle: "最終決戦",
            clear: true
        },
        {
            text: "目の前に立つのは...\n『氣』を完全に制御した究極の存在。",
            bg: "bg30",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「私は、すべての可能性の集合体」\n「君たちが恐れ、求めた力の化身だ」",
            bg: "bg30",
            speed: 0.3,
            lines: 2,
            speaker: "究極存在"
        },
        {
            type: 'battleChoice',
            text: "最後の選択",
            bg: "bg30",
            battleState: {
                allyHP: 100,
                enemyHP: 500,
                kiPower: flagManager.getFlag('acceptedPower') ? 100 : 50
            },
            options: [
                { 
                    label: '仲間と力を合わせる', 
                    branch: 'united_attack',
                    requirement: { and: ['trustedKagemaru', 'trustedSakura'] },
                    effect: { damage: 200, cost: 30 }
                },
                { 
                    label: '氣の力を解放する', 
                    branch: 'ki_release',
                    requirement: 'acceptedPower',
                    effect: { damage: 150, cost: 50 }
                },
                { 
                    label: '対話を試みる', 
                    branch: 'negotiate_peace',
                    requirement: { points: { type: 'trustPoints', operator: '>=', value: 15 } },
                    effect: { peace: true }
                },
                { 
                    label: '自己犠牲', 
                    branch: 'sacrifice_ending',
                    effect: { ending: 'sacrifice' }
                }
            ]
        }
    ],

    // ========== ループルート ==========
    time_loop: [
        {
            text: "また、この場所...\n何度目だろう、この光景を見るのは。",
            bg: "bg1",
            audio: "ryoscan1.m4a",
            speed: 0.3,
            lines: 2,
            scene: "loop",
            sceneTitle: "永遠の輪廻",
            clear: true
        },
        {
            text: "「RYO-CHAN、今回は...覚えているの？」\nサクラが心配そうに見つめている。",
            bg: "bg1",
            speed: 0.4,
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "時間のループ。\n失敗するたびに、最初からやり直し。",
            bg: "bg1",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'loopChoice',
            text: "このループを断ち切るには...",
            bg: "bg1",
            loopCount: 7, // 7回目のループ
            memories: ['firstDeath', 'betrayal', 'sacrifice', 'failure'],
            options: [
                { 
                    label: '違う選択をする', 
                    branch: 'break_pattern',
                    action: () => flagManager.setFlag('loopAwareness')
                },
                { 
                    label: 'ループを受け入れる', 
                    branch: 'accept_loop',
                    action: () => flagManager.addPoints('deathFlags', -5)
                },
                { 
                    label: 'すべてを記憶したまま進む', 
                    branch: 'perfect_loop_memory',
                    requirement: { loopCount: 7 }
                }
            ]
        }
    ],

    // ========== 隠しルート：第四の壁 ==========
    fourth_wall_break: [
        {
            text: "ちょっと待って。\nこれって...ゲームだよね？",
            bg: "bg31",
            audio: "moonlight1.m4a",
            speed: 0.2,
            lines: 2,
            scene: "meta",
            sceneTitle: "第四の壁",
            clear: true
        },
        {
            text: "「そう、君は気づいてしまった」\n\n画面の向こうから声が聞こえる。",
            bg: "bg31",
            speed: 0.3,
            lines: 2,
            speaker: "？？？"
        },
        {
            text: "「私たちは物語の登場人物。\nそして君は...プレイヤー」",
            bg: "bg31",
            speed: 0.4,
            lines: 2,
            speaker: "？？？"
        },
        {
            type: 'metaChoice',
            text: "現実とフィクションの境界が曖昧になる...",
            bg: "bg31",
            options: [
                { 
                    label: 'ゲームを続ける', 
                    branch: 'continue_game',
                    action: () => flagManager.setFlag('metaAwareness')
                },
                { 
                    label: 'システムに介入する', 
                    branch: 'hack_system',
                    requirement: 'foundSecretDocument'
                },
                { 
                    label: '作者と対話する', 
                    branch: 'talk_to_creator',
                    special: true
                }
            ]
        }
    ]
};

// 特殊な分岐条件チェッカー
function checkSpecialBranchConditions(branchName) {
    const specialConditions = {
        'parallel_world': () => flagManager.getFlag('acceptedPower') && gameFlags.mysteryPoints >= 7,
        'time_loop': () => gameFlags.deathFlags >= 3,
        'fourth_wall_break': () => gameFlags.perfectClearFlags >= 2 && flagManager.getFlag('metaAwareness'),
        'true_mastermind': () => flagManager.getFlag('learnedTruth') && flagManager.getFlag('foundSecretDocument')
    };
    
    return specialConditions[branchName] ? specialConditions[branchName]() : true;
}

// エンディング集計システム
let endingCollection = {
    discovered: [],
    total: 25, // 全エンディング数
    
    addEnding(endingId) {
        if (!this.discovered.includes(endingId)) {
            this.discovered.push(endingId);
            this.saveProgress();
            return true;
        }
        return false;
    },
    
    getCompletionRate() {
        return Math.floor((this.discovered.length / this.total) * 100);
    },
    
    saveProgress() {
        localStorage.setItem('ryochanEndings', JSON.stringify(this.discovered));
    },
    
    loadProgress() {
        const saved = localStorage.getItem('ryochanEndings');
        if (saved) {
            this.discovered = JSON.parse(saved);
        }
    }
};

// additionalBranchesをグローバルstoryBranchesに統合
if (typeof window.storyBranches === 'undefined') {
    window.storyBranches = {};
}
Object.assign(window.storyBranches, additionalBranches);

console.log('🌸 [追加分岐] さらなるストーリーブランチ読み込み完了');