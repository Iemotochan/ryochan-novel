// 🌙========== かまいたちの夜風 複雑分岐ストーリー ==========🌙
console.log('🌙 [複雑分岐] ストーリーブランチ読み込み開始...');

// 複雑な分岐ストーリー定義
let complexStoryBranches = {
    // ========== プロローグ分岐 ==========
    prologue_investigation: [
        {
            text: "深夜2時。\n君の元に一通の謎めいたメッセージが届いた。",
            bg: "bg14",
            audio: "shadow4.m4a",
            speed: 0.4,
            lines: 2,
            scene: "prologue",
            sceneTitle: "深夜の呼び出し",
            clear: true
        },
        {
            text: "『助けて...巻き込まれた...信じられるのはあなただけ』\n\n送信者は...サクラ？",
            bg: "bg14",
            speed: 0.3,
            lines: 3
        },
        {
            type: 'choice',
            text: "緊急事態のようだ。どうする？",
            bg: "bg14",
            options: [
                { 
                    label: 'すぐに駆けつける', 
                    branch: 'rush_to_help',
                    action: () => {
                        flagManager.setFlag('trustedSakura');
                        flagManager.addPoints('trustPoints', 2);
                    }
                },
                { 
                    label: 'カゲマルに連絡を取る', 
                    branch: 'contact_kagemaru',
                    action: () => {
                        flagManager.setFlag('trustedKagemaru');
                        flagManager.addPoints('trustPoints', 1);
                    }
                },
                { 
                    label: '警戒しながら情報を集める', 
                    branch: 'cautious_approach',
                    action: () => {
                        flagManager.addPoints('mysteryPoints', 2);
                    }
                }
            ]
        }
    ],

    // ========== 急行ルート ==========
    rush_to_help: [
        {
            text: "深夜の街を駆け抜ける。\nサクラが指定した場所は...廃墟となったビルだった。",
            bg: "bg15",
            audio: "shadow3.m4a",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "建物の中は暗闇に包まれている。\n奥から微かな光が漏れていた。",
            bg: "bg15",
            speed: 0.3,
            lines: 2
        },
        {
            text: "「RYO-CHAN...来てくれたんだ」\n\n暗闇からサクラの声がする。",
            bg: "bg16",
            speed: 0.3,
            lines: 2,
            speaker: "？？？"
        },
        {
            type: 'choice',
            text: "しかし、何かがおかしい。\nサクラの氣が...歪んでいる？",
            bg: "bg16",
            options: [
                { 
                    label: '「サクラ、大丈夫？」と声をかける', 
                    branch: 'trust_sakura_trap',
                    condition: 'trustedSakura'
                },
                { 
                    label: '警戒しながら近づく', 
                    branch: 'cautious_sakura_approach',
                    action: () => flagManager.addPoints('mysteryPoints', 1)
                },
                { 
                    label: '罠だと判断して逃げる', 
                    branch: 'escape_trap',
                    action: () => {
                        flagManager.setFlag('doubtedSakura');
                        flagManager.addPoints('deathFlags', -1);
                    }
                }
            ]
        }
    ],

    // ========== カゲマル連絡ルート ==========
    contact_kagemaru: [
        {
            text: "カゲマルに連絡を取る。\n「ああ、実は俺も同じメッセージを受け取った」",
            bg: "bg14",
            audio: "shadow4.m4a",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル",
            clear: true
        },
        {
            text: "「でも、何かがおかしい。\nサクラの氣の痕跡が...複数の場所から感じるんだ」",
            bg: "bg14",
            speed: 0.4,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "「これは罠かもしれない。\nでも、本物のサクラが危険なら...」",
            bg: "bg14",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            type: 'choice',
            text: "カゲマルと共に行動することになった。\nどこから調査を始める？",
            bg: "bg14",
            options: [
                { 
                    label: 'サクラの自宅を調べる', 
                    branch: 'investigate_sakura_home',
                    action: () => flagManager.setFlag('investigatedSpiritual')
                },
                { 
                    label: '最後に会った場所へ向かう', 
                    branch: 'last_meeting_place',
                    action: () => flagManager.addPoints('mysteryPoints', 1)
                },
                { 
                    label: 'メッセージの発信源を追跡', 
                    branch: 'trace_message',
                    action: () => {
                        flagManager.setFlag('foundSecretDocument');
                        flagManager.addPoints('mysteryPoints', 2);
                    }
                }
            ]
        }
    ],

    // ========== 慎重な調査ルート ==========
    cautious_approach: [
        {
            text: "まずは冷静に状況を分析することにした。\nメッセージの内容を詳しく調べる。",
            bg: "bg14",
            audio: "ryoscan1.m4a",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "暗号のような文字列が含まれている。\n『RM-1947-XX-TRUTH』",
            bg: "bg14",
            speed: 0.3,
            lines: 2
        },
        {
            text: "この暗号は...以前サクラが話していた\n秘密のプロジェクトと関係がある？",
            bg: "bg14",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'choice',
            text: "重要な手がかりを見つけた。\n次の行動は？",
            bg: "bg14",
            options: [
                { 
                    label: '暗号を解読する', 
                    branch: 'decode_cipher',
                    action: () => {
                        flagManager.addPoints('mysteryPoints', 3);
                        flagManager.setFlag('foundSecretDocument');
                    }
                },
                { 
                    label: 'プロジェクトについて調査', 
                    branch: 'investigate_project',
                    action: () => flagManager.setFlag('investigatedMedical')
                },
                { 
                    label: '信頼できる仲間に相談', 
                    branch: 'consult_allies',
                    condition: { or: ['trustedKagemaru', 'trustedSakura'] }
                }
            ]
        }
    ],

    // ========== 罠ルート（サクラ）==========
    trust_sakura_trap: [
        {
            text: "「サクラ！」\n君は駆け寄ろうとした。",
            bg: "bg16",
            audio: "shadow3.m4a",
            speed: 0.3,
            lines: 2,
            clear: true
        },
        {
            text: "しかし、サクラの姿が歪み始める。\nそれは...ホログラム？",
            bg: "bg17",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「愚かな...」\n\n背後から冷たい声が響いた。",
            bg: "bg17",
            audio: "shadow4.m4a",
            speed: 0.2,
            lines: 2,
            speaker: "？？？"
        },
        {
            text: "振り返ると、白衣を着た謎の人物が立っていた。\n手には奇妙な装置が握られている。",
            bg: "bg18",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'choice',
            text: "危険だ！",
            bg: "bg18",
            options: [
                { 
                    label: '氣の力で対抗する', 
                    branch: 'fight_with_ki',
                    condition: 'acceptedPower',
                    action: () => flagManager.addPoints('mysteryPoints', 2)
                },
                { 
                    label: '隙を見て逃げる', 
                    branch: 'escape_from_trap',
                    action: () => flagManager.setFlag('escapedDanger')
                },
                { 
                    label: '相手の正体を問いただす', 
                    branch: 'confront_enemy',
                    action: () => flagManager.setFlag('metMysteriousPerson')
                }
            ]
        }
    ],

    // ========== 暗号解読ルート ==========
    decode_cipher: [
        {
            text: "暗号『RM-1947-XX-TRUTH』を解析する。\n\nRM...Ryochan Mission?",
            bg: "bg14",
            audio: "ryoscan1.m4a",
            speed: 0.3,
            lines: 2,
            clear: true
        },
        {
            text: "1947年...終戦直後。\nXX...未知の何か。\nTRUTH...真実。",
            bg: "bg14",
            speed: 0.4,
            lines: 3
        },
        {
            text: "古い政府文書のデータベースを検索すると...\n驚くべき記録が見つかった。",
            bg: "bg14",
            speed: 0.3,
            lines: 2
        },
        {
            text: "『氣感知能力者育成計画』\n\n君の能力は...偶然ではなかった？",
            bg: "bg14",
            audio: "shadow4.m4a",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'choice',
            text: "衝撃的な真実が明らかになった。\nこの情報をどうする？",
            bg: "bg14",
            options: [
                { 
                    label: 'さらに深く調査する', 
                    branch: 'deep_investigation',
                    action: () => {
                        flagManager.setFlag('learnedTruth');
                        flagManager.addPoints('mysteryPoints', 5);
                    }
                },
                { 
                    label: 'カゲマルとサクラに知らせる', 
                    branch: 'inform_allies',
                    condition: { and: ['trustedKagemaru', 'trustedSakura'] }
                },
                { 
                    label: 'この情報を隠す', 
                    branch: 'hide_truth',
                    action: () => flagManager.setFlag('soloRoute')
                }
            ]
        }
    ],

    // ========== 深層調査ルート ==========
    deep_investigation: [
        {
            text: "政府の極秘文書をさらに調査する。\n\n計画の首謀者は...",
            bg: "bg19",
            audio: "shadow4.m4a",
            speed: 0.3,
            lines: 2,
            clear: true
        },
        {
            text: "『Dr. 影山』\n\nカゲマル（影丸）との関連は？",
            bg: "bg19",
            speed: 0.4,
            lines: 2
        },
        {
            text: "そして『Project SAKURA』\n\n被験者番号003：さくら",
            bg: "bg19",
            speed: 0.3,
            lines: 2
        },
        {
            text: "君の仲間たちは...すべて計画の一部だったのか？",
            bg: "bg19",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'choice',
            text: "真実を知った今、誰を信じればいい？",
            bg: "bg19",
            options: [
                { 
                    label: '誰も信じない', 
                    branch: 'trust_no_one',
                    action: () => {
                        flagManager.setFlag('soloRoute');
                        flagManager.setFlag('doubtedKagemaru');
                        flagManager.setFlag('doubtedSakura');
                    }
                },
                { 
                    label: 'それでも仲間を信じる', 
                    branch: 'trust_despite_truth',
                    action: () => {
                        flagManager.addPoints('trustPoints', 5);
                        flagManager.addPoints('perfectClearFlags', 1);
                    }
                },
                { 
                    label: 'Dr.影山を探す', 
                    branch: 'find_dr_kageyama',
                    action: () => {
                        flagManager.setFlag('confrontedMastermind');
                        flagManager.addPoints('mysteryPoints', 3);
                    }
                }
            ]
        }
    ],

    // ========== Dr.影山対峙ルート ==========
    find_dr_kageyama: [
        {
            text: "資料に記されていた研究所跡地へ向かった。\n\n廃墟と化した建物の最深部...",
            bg: "bg20",
            audio: "shadow4.m4a",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "「よく来たな、被験者001」\n\n白髪の老人が振り返る。",
            bg: "bg20",
            speed: 0.3,
            lines: 2,
            speaker: "Dr.影山"
        },
        {
            text: "「君たちは私の最高傑作だ。\n氣を感知し、操る新人類...」",
            bg: "bg20",
            speed: 0.4,
            lines: 2,
            speaker: "Dr.影山"
        },
        {
            text: "「だが、制御できなくなった。\n君たちは...自我を持ちすぎた」",
            bg: "bg20",
            speed: 0.3,
            lines: 2,
            speaker: "Dr.影山"
        },
        {
            type: 'conditionalChoice',
            text: "最後の選択の時が来た。",
            bg: "bg20",
            choices: [
                {
                    condition: { and: ['trustedKagemaru', 'trustedSakura', 'learnedTruth'] },
                    options: [
                        { 
                            label: '仲間と共に新しい道を切り開く', 
                            branch: 'perfect_ending_route',
                            action: () => flagManager.addPoints('perfectClearFlags', 3)
                        },
                        { 
                            label: 'Dr.影山を説得する', 
                            branch: 'redemption_route'
                        }
                    ]
                },
                {
                    condition: 'soloRoute',
                    options: [
                        { 
                            label: '力ですべてを終わらせる', 
                            branch: 'destruction_ending'
                        },
                        { 
                            label: '真実を世界に公開する', 
                            branch: 'revelation_ending'
                        }
                    ]
                },
                {
                    // デフォルト選択肢
                    condition: true,
                    options: [
                        { 
                            label: '計画を阻止する', 
                            branch: 'stop_the_plan'
                        },
                        { 
                            label: '逃げる', 
                            branch: 'escape_ending',
                            action: () => flagManager.addPoints('deathFlags', 1)
                        }
                    ]
                }
            ]
        }
    ],

    // ========== パーフェクトエンディングルート ==========
    perfect_ending_route: [
        {
            text: "「カゲマル！サクラ！」\n\n仲間たちが駆けつけてきた。",
            bg: "bg21",
            audio: "success1.m4a",
            speed: 0.3,
            lines: 2,
            clear: true
        },
        {
            text: "「やっぱり、RYO-CHANは私たちを信じてくれた」\nサクラの瞳に涙が光る。",
            bg: "bg21",
            speed: 0.4,
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "「俺たちが何者であっても...\n大切なのは、今の俺たちだ」",
            bg: "bg21",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "三人の氣が共鳴し、温かな光を放つ。\nそれは、新しい希望の光だった。",
            bg: "bg21",
            speed: 0.4,
            lines: 2
        },
        {
            text: "Dr.影山は静かに微笑んだ。\n「これが...君たちの選んだ道か」",
            bg: "bg21",
            speed: 0.3,
            lines: 2,
            speaker: "Dr.影山"
        },
        {
            text: "そして新たな物語が始まる。\n過去に囚われず、未来を創造する物語が。",
            bg: "bg22",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'ending',
            text: '<span class="emphasis">Perfect End</span>\n『新世界の創造者たち』',
            bg: "bg22",
            audio: "success1.m4a",
            endingType: 'perfect',
            unlockables: ['all_cg', 'extra_story', 'developer_notes']
        }
    ],

    // ========== その他多数のルート ==========
    // 実際にはさらに50以上の分岐ルートを実装...
};

// 条件付き選択肢処理
function processConditionalChoice(choiceData) {
    for (const choice of choiceData.choices) {
        if (checkCondition(choice.condition)) {
            return choice.options;
        }
    }
    return [];
}

// エンディング種別
let endingTypes = {
    perfect: {
        title: 'Perfect End',
        description: 'すべての謎を解き、仲間との絆を深めた最高の結末',
        achievement: 'perfect_clear'
    },
    true: {
        title: 'True End',
        description: '真実にたどり着いた者だけが見る結末',
        achievement: 'truth_seeker'
    },
    goodKagemaru: {
        title: 'Good End - Shadow Path',
        description: 'カゲマルと共に歩む道',
        achievement: 'shadow_walker'
    },
    goodSakura: {
        title: 'Good End - Blossom Path',
        description: 'サクラと共に歩む道',
        achievement: 'cherry_blossom'
    },
    normal: {
        title: 'Normal End',
        description: '平凡だが平和な結末',
        achievement: 'survivor'
    },
    bad: {
        title: 'Bad End',
        description: '避けられなかった悲劇',
        achievement: 'tragedy'
    },
    destruction: {
        title: 'Destruction End',
        description: 'すべてを破壊した孤独な結末',
        achievement: 'destroyer'
    },
    revelation: {
        title: 'Revelation End',
        description: '世界に真実を暴露した結末',
        achievement: 'whistleblower'
    }
};

// complexStoryBranchesをグローバルstoryBranchesに統合
if (typeof window.storyBranches === 'undefined') {
    window.storyBranches = {};
}
Object.assign(window.storyBranches, complexStoryBranches);

console.log('🌙 [複雑分岐] ストーリーブランチ読み込み完了');