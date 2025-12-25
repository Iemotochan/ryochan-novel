// 🔧========== 不足している分岐ストーリー ==========🔧
console.log('🔧 [不足分岐] 不足している分岐ストーリー追加開始...');

// 不足している分岐を追加
if (typeof window.storyBranches === 'undefined') {
    window.storyBranches = {};
}

let missingBranches = {
    // タイムアウト分岐
    forced_injection: [
        {
            text: "時間切れ！\n謎の人物が注射器を君の首筋に刺した。",
            bg: "bg18",
            speed: 0.2,
            audio: "shadow4.m4a",
            lines: 2,
            scene: "forced1",
            sceneTitle: "強制注入",
            clear: true
        },
        {
            text: "意識が薄れていく...\n記憶が...消えて...",
            bg: "bg27",
            speed: 0.1,
            lines: 2
        },
        {
            type: 'ending',
            text: '<span class="emphasis">Bad End</span>\n『記憶の消失』',
            bg: "bg27",
            audio: "shadow4.m4a",
            endingType: 'bad'
        }
    ],
    
    // ハッキング分岐
    hack_system: [
        {
            text: "「システムに介入する」\n君の氣の力がデジタル世界に侵入した。",
            bg: "bg31",
            speed: 0.3,
            audio: "ryoscan1.m4a",
            lines: 2,
            scene: "hack1",
            sceneTitle: "システムハック",
            clear: true
        },
        {
            text: "コードが見える。データが流れる。\nそして...真実が明らかになる。",
            bg: "bg31",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'ending',
            text: '<span class="emphasis">True End</span>\n『デジタルの真実』',
            bg: "bg31",
            audio: "success1.m4a",
            endingType: 'true'
        }
    ],
    
    // 作者対話分岐
    talk_to_creator: [
        {
            text: "「こんにちは。\nあなたがこの物語の作者ですね？」",
            bg: "bg31",
            speed: 0.3,
            audio: "moonlight1.m4a",
            lines: 2,
            scene: "meta1",
            sceneTitle: "作者との対話",
            clear: true
        },
        {
            text: "『はい、その通りです。\nよくここまで辿り着きましたね』",
            bg: "bg31",
            speed: 0.4,
            lines: 2,
            speaker: "作者"
        },
        {
            text: "「この物語の意味は何ですか？」\n\n『それは...あなた自身が決めることです』",
            bg: "bg31",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'ending',
            text: '<span class="emphasis">Meta End</span>\n『第四の壁の向こう側』',
            bg: "bg31",
            audio: "success1.m4a",
            endingType: 'meta'
        }
    ],
    
    // 慎重なサクラアプローチ
    cautious_sakura_approach: [
        {
            text: "君は警戒しながらサクラに近づいた。\n何かがおかしい...この氣の歪み。",
            bg: "bg16",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2,
            scene: "cautious1",
            sceneTitle: "慎重な接近",
            clear: true
        },
        {
            text: "「RYO-CHAN...」\nサクラの声が二重に聞こえる？",
            bg: "bg16",
            speed: 0.3,
            lines: 2,
            speaker: "？？？"
        },
        {
            text: "偽物だ！\n君は素早く後退した。",
            bg: "bg17",
            speed: 0.2,
            lines: 2
        },
        {
            type: 'choice',
            text: "偽サクラの正体は？",
            bg: "bg17",
            options: [
                { 
                    label: '敵の罠だった', 
                    branch: 'enemy_trap_revealed'
                },
                { 
                    label: '本物のサクラを探す', 
                    branch: 'find_real_sakura'
                }
            ]
        }
    ],
    
    // 脱出分岐
    escape_trap: [
        {
            text: "君は直感を信じて逃げ出した。\n背後から追跡の足音が聞こえる。",
            bg: "bg17",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2,
            scene: "escape1",
            sceneTitle: "緊急脱出",
            clear: true
        },
        {
            text: "路地裏を駆け抜け、群衆に紛れる。\n一旦は安全だが...真実は何だったのか？",
            bg: "bg18",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'ending',
            text: '<span class="emphasis">Escape End</span>\n『謎を残したまま』',
            bg: "bg18",
            audio: "moonlight1.m4a",
            endingType: 'escape'
        }
    ],
    
    // spiritual分岐（追加）
    spiritual: [
        {
            text: "スピリチュアル詐欺編\n\n君は霊能力を利用した詐欺に立ち向かう。",
            bg: "bg4",
            speed: 0.3,
            audio: "sakura1.m4a",
            lines: 2,
            scene: "spiritual1",
            sceneTitle: "スピリチュアル詐欺編",
            clear: true
        },
        {
            text: "「あなたには強いオーラを感じます」\n怪しい霊能者が近づいてきた。",
            bg: "bg5",
            speed: 0.4,
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "サクラと共に、偽りの霊能力を見抜く。\n真実を暴く時が来た。",
            bg: "bg6",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'ending',
            text: '<span class="emphasis">Good End</span>\n『スピリチュアル詐欺撲滅』',
            bg: "bg7",
            audio: "success1.m4a",
            endingType: 'goodSakura'
        }
    ],
    
    // medical分岐（追加）
    medical: [
        {
            text: "医療詐欺編\n\n君は医療を悪用した詐欺に立ち向かう。",
            bg: "bg3",
            speed: 0.3,
            audio: "shadow3.m4a",
            lines: 2,
            scene: "medical1",
            sceneTitle: "医療詐欺編",
            clear: true
        },
        {
            text: "「この薬は保険適用外ですが効果的です」\n怪しい医師が高額な薬を勧めてくる。",
            bg: "bg4",
            speed: 0.4,
            lines: 2,
            speaker: "医師"
        },
        {
            text: "カゲマルと共に、偽りの医療を見抜く。\n患者を守る戦いが始まる。",
            bg: "bg5",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'ending',
            text: '<span class="emphasis">Good End</span>\n『医療詐欺撲滅』',
            bg: "bg6",
            audio: "success1.m4a",
            endingType: 'goodKagemaru'
        }
    ]
};

// missingBranchesをグローバルstoryBranchesに統合
Object.assign(window.storyBranches, missingBranches);

console.log('🔧 [不足分岐] 追加分岐ストーリー読み込み完了');

// エンディングタイプを追加
if (typeof endingTypes !== 'undefined') {
    endingTypes.meta = {
        title: 'Meta End',
        description: '第四の壁を越えた特別な結末',
        achievement: 'wall_breaker'
    };
    
    endingTypes.escape = {
        title: 'Escape End',
        description: '危険から逃れたが謎は残る',
        achievement: 'survivor'
    };
    
    console.log('🔧 [不足分岐] エンディングタイプ追加完了');
}

console.log('🔧 [不足分岐] 不足している分岐ストーリー追加完了');