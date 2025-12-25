// 🌙========== かまいたちの夜風 真の複雑分岐システム ==========🌙
console.log('🌙 [真の分岐] かまいたちの夜風複雑分岐システム構築開始...');

// メインストーリーに複数の分岐ポイントを追加
const enhancedStoryContent = [
    // ========== 第一分岐点：調査方法の選択 ==========
    {
        text: "夜が更けていく。\n君の前に3つの手がかりが現れた。",
        bg: "bg2",
        speed: 0.3,
        audio: "shadow4.m4a",
        lines: 2,
        scene: "investigation_choice",
        sceneTitle: "調査方法の選択",
        clear: true
    },
    {
        type: 'choice',
        text: "どの手がかりから追及する？",
        bg: "bg2",
        options: [
            { 
                label: '怪しいメールを追跡', 
                branch: 'email_investigation',
                description: 'デジタルの足跡を辿る',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('digitalInvestigator');
                        flagManager.addPoints('mysteryPoints', 2);
                    }
                }
            },
            { 
                label: '現場の物的証拠を調べる', 
                branch: 'physical_evidence',
                description: '現実世界の手がかりを重視',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('physicalInvestigator');
                        flagManager.addPoints('mysteryPoints', 2);
                    }
                }
            },
            { 
                label: '人的関係を探る', 
                branch: 'human_relations',
                description: '人間関係の謎を解く',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('socialInvestigator');
                        flagManager.addPoints('trustPoints', 2);
                    }
                }
            },
            { 
                label: '氣の力で直感的に探る', 
                branch: 'psychic_investigation',
                description: '超自然的な力に頼る',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('psychicInvestigator');
                        flagManager.addPoints('mysteryPoints', 3);
                    }
                }
            }
        ]
    }
];

// 各調査ルートのストーリー
const investigationBranches = {
    // ========== メール調査ルート ==========
    email_investigation: [
        {
            text: "君はコンピューターに向かった。\nメールヘッダーを解析し、送信者を追跡する。",
            bg: "bg3",
            speed: 0.4,
            audio: "ryoscan1.m4a",
            lines: 2,
            scene: "email1",
            sceneTitle: "デジタル探偵",
            clear: true
        },
        {
            text: "IPアドレスから判明した住所は...\n廃墟となった研究所だった。",
            bg: "bg4",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'choice',
            text: "研究所に向かうか？",
            bg: "bg4",
            options: [
                { 
                    label: '一人で向かう', 
                    branch: 'lab_alone',
                    action: () => flagManager.setFlag('soloInvestigation')
                },
                { 
                    label: 'カゲマルと行く', 
                    branch: 'lab_with_kagemaru',
                    action: () => flagManager.setFlag('kagemaruPartner')
                },
                { 
                    label: 'サクラと行く', 
                    branch: 'lab_with_sakura',
                    action: () => flagManager.setFlag('sakuraPartner')
                },
                { 
                    label: '警察に通報する', 
                    branch: 'police_route',
                    action: () => flagManager.setFlag('lawfulApproach')
                }
            ]
        }
    ],

    // ========== 物的証拠ルート ==========
    physical_evidence: [
        {
            text: "現場に残された謎の薬品を分析する。\n化学的な手がかりを求めて...",
            bg: "bg5",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            scene: "evidence1",
            sceneTitle: "科学捜査",
            clear: true
        },
        {
            text: "分析結果は衝撃的だった。\nこの薬品は...記憶操作薬だ。",
            bg: "bg6",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'timedChoice',
            text: "突然、背後から足音が聞こえる！",
            bg: "bg6",
            timeLimit: 8,
            options: [
                { 
                    label: '振り返って確認', 
                    branch: 'confront_stalker',
                    action: () => flagManager.setFlag('brave')
                },
                { 
                    label: '隠れて様子を見る', 
                    branch: 'hide_and_observe',
                    action: () => flagManager.setFlag('cautious')
                },
                { 
                    label: 'すぐに逃げる', 
                    branch: 'escape_immediately',
                    action: () => flagManager.setFlag('survival_instinct')
                }
            ],
            timeoutBranch: 'caught_off_guard'
        }
    ],

    // ========== 人間関係調査ルート ==========
    human_relations: [
        {
            text: "関係者への聞き込みを開始する。\n最初に話を聞くのは...",
            bg: "bg7",
            speed: 0.4,
            audio: "sakura1.m4a",
            lines: 2,
            scene: "interview1",
            sceneTitle: "人間関係の迷宮",
            clear: true
        },
        {
            type: 'choice',
            text: "誰から話を聞く？",
            bg: "bg7",
            options: [
                { 
                    label: '事件の第一発見者', 
                    branch: 'first_witness',
                    action: () => flagManager.setFlag('witnessContact')
                },
                { 
                    label: '被害者の家族', 
                    branch: 'victim_family',
                    action: () => flagManager.setFlag('familyContact')
                },
                { 
                    label: '職場の同僚', 
                    branch: 'workplace_colleagues',
                    action: () => flagManager.setFlag('colleagueContact')
                },
                { 
                    label: '近所の住民', 
                    branch: 'neighborhood_residents',
                    action: () => flagManager.setFlag('neighborContact')
                }
            ]
        }
    ],

    // ========== 超能力調査ルート ==========
    psychic_investigation: [
        {
            text: "君は目を閉じ、氣の流れに意識を集中した。\n見えてくるのは...過去の残響。",
            bg: "bg8",
            speed: 0.3,
            audio: "shadow3.m4a",
            lines: 2,
            scene: "psychic1",
            sceneTitle: "第六感の調査",
            clear: true
        },
        {
            text: "ビジョンが浮かぶ。\n白衣の人物が何かを隠している...そして恐怖に震える被害者。",
            bg: "bg9",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'choice',
            text: "ビジョンをさらに深く探るか？",
            bg: "bg9",
            options: [
                { 
                    label: '深層意識に潜る', 
                    branch: 'deep_psychic_dive',
                    action: () => {
                        flagManager.setFlag('psychicMaster');
                        flagManager.addPoints('mysteryPoints', 5);
                    }
                },
                { 
                    label: '物理的証拠と照合する', 
                    branch: 'psychic_physical_combo',
                    action: () => flagManager.setFlag('balancedInvestigator')
                },
                { 
                    label: '他の人にもビジョンを見せる', 
                    branch: 'shared_vision',
                    condition: { or: ['trustedKagemaru', 'trustedSakura'] }
                }
            ]
        }
    ],

    // ========== 研究所単独潜入ルート ==========
    lab_alone: [
        {
            text: "深夜の研究所。\n君は一人、暗闇の中を進む。",
            bg: "bg10",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2,
            scene: "lab_solo1",
            sceneTitle: "孤独な潜入",
            clear: true
        },
        {
            text: "地下に続く階段を発見した。\n下からは奇妙な光が漏れている。",
            bg: "bg11",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'multiChoice',
            text: "地下で何をする？（複数選択可）",
            bg: "bg11",
            maxChoices: 2,
            options: [
                { id: 'search_documents', label: '文書を調べる' },
                { id: 'check_equipment', label: '実験装置を調査' },
                { id: 'find_exit', label: '別の出口を探す' },
                { id: 'hide_evidence', label: '証拠を隠す' }
            ],
            consequences: {
                'search_documents,check_equipment': 'full_lab_investigation',
                'search_documents,find_exit': 'quick_escape_with_intel',
                'check_equipment,find_exit': 'sabotage_and_escape',
                'hide_evidence,find_exit': 'cover_up_route',
                'default': 'incomplete_investigation'
            }
        }
    ],

    // ========== 証人接触ルート ==========
    first_witness: [
        {
            text: "第一発見者の田中さんに会いに行く。\n彼は明らかに動揺している。",
            bg: "bg12",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            scene: "witness1",
            sceneTitle: "証人の証言",
            clear: true
        },
        {
            text: "「あの日...確かに変な音が聞こえたんです。\nでも、誰も信じてくれなくて...」",
            bg: "bg12",
            speed: 0.3,
            lines: 2,
            speaker: "田中さん"
        },
        {
            type: 'choice',
            text: "田中さんの話をどう受け取る？",
            bg: "bg12",
            options: [
                { 
                    label: '全面的に信じる', 
                    branch: 'trust_witness_fully',
                    action: () => flagManager.setFlag('trustingNature')
                },
                { 
                    label: '半信半疑で聞く', 
                    branch: 'skeptical_listening',
                    action: () => flagManager.setFlag('analyticalMind')
                },
                { 
                    label: '嘘を見抜こうとする', 
                    branch: 'detect_lies',
                    action: () => flagManager.setFlag('suspiciousNature')
                },
                { 
                    label: '氣で真偽を確かめる', 
                    branch: 'psychic_truth_detection',
                    condition: 'psychicInvestigator'
                }
            ]
        }
    ],

    // ========== 深層心理潜入ルート ==========
    deep_psychic_dive: [
        {
            text: "意識を深層へ沈める。\n現実と幻想の境界が曖昧になっていく...",
            bg: "bg13",
            speed: 0.2,
            audio: "shadow3.m4a",
            lines: 2,
            scene: "psychic_deep1",
            sceneTitle: "意識の深淵",
            clear: true
        },
        {
            text: "そこで君が見たものは...\n自分自身の記憶だった。消された記憶。",
            bg: "bg14",
            speed: 0.3,
            lines: 2
        },
        {
            text: "君も...実験の被験者だったのか？",
            bg: "bg14",
            speed: 0.4,
            lines: 1
        },
        {
            type: 'conditionalChoice',
            text: "この真実を受け入れるか？",
            bg: "bg14",
            choices: [
                {
                    condition: { points: { type: 'mysteryPoints', operator: '>=', value: 8 } },
                    options: [
                        { 
                            label: '真実を受け入れる', 
                            branch: 'accept_self_truth',
                            action: () => flagManager.setFlag('selfAware')
                        },
                        { 
                            label: '記憶を完全に取り戻す', 
                            branch: 'recover_all_memories',
                            action: () => flagManager.setFlag('memoryRestored')
                        }
                    ]
                },
                {
                    condition: true,
                    options: [
                        { 
                            label: '拒絶して逃げる', 
                            branch: 'deny_truth',
                            action: () => flagManager.setFlag('inDenial')
                        },
                        { 
                            label: '現実に戻る', 
                            branch: 'return_to_reality'
                        }
                    ]
                }
            ]
        }
    ]
};

// ========== さらなる複雑分岐：記憶回復後のルート ==========
const memoryRecoveryBranches = {
    recover_all_memories: [
        {
            text: "すべてを思い出した。\n君は...Dr.影山の最初の成功例だった。",
            bg: "bg15",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2,
            scene: "memory_recovery1",
            sceneTitle: "失われた過去",
            clear: true
        },
        {
            text: "カゲマルもサクラも...君を監視するために配置された存在。\nしかし、彼らの感情は本物だった。",
            bg: "bg16",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'choice',
            text: "仲間たちをどう思う？",
            bg: "bg16",
            options: [
                { 
                    label: '裏切られたと感じる', 
                    branch: 'betrayal_felt',
                    action: () => {
                        flagManager.setFlag('feelingBetrayed');
                        flagManager.setFlag('doubtedKagemaru');
                        flagManager.setFlag('doubtedSakura');
                    }
                },
                { 
                    label: '理解を示す', 
                    branch: 'understanding_friends',
                    action: () => {
                        flagManager.setFlag('forgivingNature');
                        flagManager.addPoints('trustPoints', 3);
                    }
                },
                { 
                    label: '利用し返す', 
                    branch: 'manipulate_back',
                    action: () => flagManager.setFlag('manipulative')
                },
                { 
                    label: '真実を問いただす', 
                    branch: 'demand_truth',
                    action: () => flagManager.setFlag('seekingTruth')
                }
            ]
        }
    ],

    // ========== 裏切り感情ルート ==========
    betrayal_felt: [
        {
            text: "怒りが込み上げてくる。\nすべてが嘘だったのか。",
            bg: "bg17",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2,
            scene: "betrayal1",
            sceneTitle: "裏切りの怒り",
            clear: true
        },
        {
            type: 'choice',
            text: "復讐するか、それとも...",
            bg: "bg17",
            options: [
                { 
                    label: 'Dr.影山に復讐する', 
                    branch: 'revenge_route',
                    action: () => flagManager.setFlag('revengePath')
                },
                { 
                    label: 'すべてを暴露する', 
                    branch: 'expose_everything',
                    action: () => flagManager.setFlag('whistleblower')
                },
                { 
                    label: '一人で消える', 
                    branch: 'disappear_alone',
                    action: () => flagManager.setFlag('hermitPath')
                },
                { 
                    label: '記憶を再び消す', 
                    branch: 'erase_memories_again',
                    action: () => flagManager.setFlag('memoryErasure')
                }
            ]
        }
    ]
};

// 全分岐をグローバルstoryBranchesに統合
if (typeof window.storyBranches === 'undefined') {
    window.storyBranches = {};
}

Object.assign(window.storyBranches, investigationBranches);
Object.assign(window.storyBranches, memoryRecoveryBranches);

console.log('🌙 [真の分岐] 追加分岐数:', Object.keys(investigationBranches).length + Object.keys(memoryRecoveryBranches).length);
console.log('🌙 [真の分岐] かまいたちの夜風複雑分岐システム構築完了');