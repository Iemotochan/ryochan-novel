// 🌟========== 完全版分岐ストーリー ==========🌟
console.log('🌟 [完全分岐] 充実した分岐ストーリー構築開始...');

// 各分岐ルートの完全版ストーリー
const completeBranchStories = {
    // ========== 仲間完全信頼ルート ==========
    trust_friends_completely: [
        {
            text: "君は迷わず決断した。\n「カゲマル、サクラ、君たちを完全に信じる」",
            bg: "bg7",
            speed: 0.3,
            audio: "sakura1.m4a",
            lines: 2,
            scene: "trust1",
            sceneTitle: "絆の力",
            clear: true
        },
        {
            text: "二人の表情が明るくなる。\n「ありがとう、RYO-CHAN」",
            bg: "bg7",
            speed: 0.4,
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "「実は...俺たちも君に隠し事があった」\nカゲマルが重い口を開く。",
            bg: "bg8",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "「俺たちは...政府の特殊機関の一員だ。\n君を監視する任務を受けていた」",
            bg: "bg8",
            speed: 0.4,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "「でも、一緒にいるうちに...本当の友情が生まれた」\nサクラの声に涙が混じる。",
            bg: "bg9",
            speed: 0.3,
            lines: 2,
            speaker: "サクラ"
        },
        {
            type: 'choice',
            text: "衝撃的な告白を聞いてどう思う？",
            bg: "bg9",
            options: [
                { 
                    label: '「それでも友達だ」', 
                    branch: 'true_friendship',
                    action: () => {
                        flagManager.setFlag('trueUnderstanding');
                        flagManager.addPoints('perfectClearFlags', 2);
                    }
                },
                { 
                    label: '「なぜ今まで黙っていた？」', 
                    branch: 'hurt_but_understanding',
                    action: () => flagManager.addPoints('trustPoints', 1)
                },
                { 
                    label: '「一緒に真実を暴こう」', 
                    branch: 'alliance_formation',
                    action: () => {
                        flagManager.setFlag('rebellionAlliance');
                        flagManager.addPoints('mysteryPoints', 3);
                    }
                }
            ]
        }
    ],

    // ========== 真の友情ルート ==========
    true_friendship: [
        {
            text: "君の言葉に、二人は驚きを隠せない。\n「君は...怒らないのか？」",
            bg: "bg10",
            speed: 0.4,
            audio: "success1.m4a",
            lines: 2,
            speaker: "カゲマル",
            clear: true
        },
        {
            text: "「友情に任務も監視も関係ない。\n大切なのは今の君たちの気持ちだ」",
            bg: "bg10",
            speed: 0.3,
            lines: 2
        },
        {
            text: "その瞬間、三人の周りに温かい光が包む。\n氣の共鳴が最高潮に達した。",
            bg: "bg11",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「もう何も隠すことはない。\n一緒に真実を見つけよう」",
            bg: "bg11",
            speed: 0.3,
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "三人は手を取り合った。\n新たな冒険の始まりだった。",
            bg: "bg12",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'choice',
            text: "次に向かう場所は？",
            bg: "bg12",
            options: [
                { 
                    label: '政府機関に乗り込む', 
                    branch: 'government_infiltration',
                    action: () => flagManager.setFlag('directConfrontation')
                },
                { 
                    label: 'Dr.影山を探す', 
                    branch: 'find_dr_kageyama',
                    action: () => flagManager.setFlag('seekingMastermind')
                },
                { 
                    label: '他の被験者を探す', 
                    branch: 'find_other_subjects',
                    action: () => flagManager.setFlag('rescueMission')
                }
            ]
        }
    ],

    // ========== 仲間疑惑ルート ==========
    suspect_friends: [
        {
            text: "君は内心で警戒を強める。\n表面上は普通を装いながら...",
            bg: "bg13",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2,
            scene: "suspicion1",
            sceneTitle: "疑心暗鬼",
            clear: true
        },
        {
            text: "カゲマルが何かをポケットに隠した。\nサクラは頻繁にメールをチェックしている。",
            bg: "bg13",
            speed: 0.3,
            lines: 2
        },
        {
            text: "「RYO-CHAN、大丈夫？」\nサクラが心配そうに見つめる。",
            bg: "bg14",
            speed: 0.4,
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "「ああ、ちょっと疲れただけだ」\n君は嘘をついた。",
            bg: "bg14",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'choice',
            text: "疑いを確かめるためにどうする？",
            bg: "bg14",
            options: [
                { 
                    label: 'カゲマルのポケットを調べる', 
                    branch: 'investigate_kagemaru',
                    action: () => flagManager.setFlag('kagemaruSuspicion')
                },
                { 
                    label: 'サクラのメールを盗み見る', 
                    branch: 'spy_on_sakura',
                    action: () => flagManager.setFlag('sakuraSuspicion')
                },
                { 
                    label: '二人を別々に試す', 
                    branch: 'test_both_separately',
                    action: () => flagManager.setFlag('masterManipulator')
                },
                { 
                    label: '第三者に相談する', 
                    branch: 'seek_outside_help',
                    action: () => flagManager.setFlag('externalAlliance')
                }
            ]
        }
    ],

    // ========== カゲマル調査ルート ==========
    investigate_kagemaru: [
        {
            text: "深夜、カゲマルが寝ている隙に\nポケットの中身を調べることにした。",
            bg: "bg15",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2,
            scene: "kagemaru_investigation",
            sceneTitle: "深夜の調査",
            clear: true
        },
        {
            text: "手に触れたのは...小さな発信機だった。\nそして暗号化されたメモ。",
            bg: "bg15",
            speed: 0.3,
            lines: 2
        },
        {
            text: "メモには『対象の行動パターン変化を確認』\n『必要に応じて記憶調整を実行』とある。",
            bg: "bg16",
            speed: 0.4,
            lines: 2
        },
        {
            text: "カゲマルが目を覚ました。\n「RYO-CHAN...何をしている？」",
            bg: "bg16",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            type: 'timedChoice',
            text: "バレてしまった！",
            bg: "bg16",
            timeLimit: 6,
            options: [
                { 
                    label: '正直に話す', 
                    branch: 'honest_confrontation',
                    action: () => flagManager.setFlag('honestNature')
                },
                { 
                    label: '嘘をつく', 
                    branch: 'lie_to_kagemaru',
                    action: () => flagManager.setFlag('deceptiveNature')
                },
                { 
                    label: '逃げる', 
                    branch: 'flee_from_kagemaru',
                    action: () => flagManager.setFlag('survivalist')
                }
            ],
            timeoutBranch: 'kagemaru_catches_you'
        }
    ],

    // ========== 記憶追求ルート ==========
    pursue_memories: [
        {
            text: "君は記憶の断片を手がかりに、\n失われた過去を追い求めることにした。",
            bg: "bg17",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            scene: "memory_pursuit1",
            sceneTitle: "過去への扉",
            clear: true
        },
        {
            text: "白い部屋の記憶を頼りに街を歩く。\n見覚えのある建物を探して...",
            bg: "bg18",
            speed: 0.3,
            lines: 2
        },
        {
            text: "古い病院の前で立ち止まる。\nここだ...間違いない。",
            bg: "bg19",
            speed: 0.4,
            lines: 2
        },
        {
            text: "受付の看護師が君を見て驚く。\n「あら...お久しぶりです」",
            bg: "bg19",
            speed: 0.3,
            lines: 2,
            speaker: "看護師"
        },
        {
            text: "「えっ？僕のことを知っているんですか？」",
            bg: "bg19",
            speed: 0.4,
            lines: 1
        },
        {
            text: "「もちろんです。あなたは私たちの\n特別な患者でしたから」",
            bg: "bg20",
            speed: 0.3,
            lines: 2,
            speaker: "看護師"
        },
        {
            type: 'choice',
            text: "看護師にどう対応する？",
            bg: "bg20",
            options: [
                { 
                    label: '詳しく教えて欲しい', 
                    branch: 'ask_for_details',
                    action: () => flagManager.setFlag('informationSeeker')
                },
                { 
                    label: 'カルテを見せて欲しい', 
                    branch: 'request_medical_records',
                    action: () => flagManager.setFlag('evidenceCollector')
                },
                { 
                    label: 'Dr.影山について聞く', 
                    branch: 'ask_about_doctor',
                    action: () => flagManager.setFlag('directQuestioner')
                },
                { 
                    label: '他の患者について聞く', 
                    branch: 'ask_about_other_patients',
                    action: () => flagManager.setFlag('compassionateNature')
                }
            ]
        }
    ],

    // ========== カルテ調査ルート ==========
    request_medical_records: [
        {
            text: "「カルテを見せていただけませんか？\n自分の過去を知りたいんです」",
            bg: "bg20",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "看護師は困惑した表情を見せる。\n「それは...規則上難しいのですが...」",
            bg: "bg20",
            speed: 0.3,
            lines: 2,
            speaker: "看護師"
        },
        {
            text: "「でも、あなたの状況を考えると...\n少しお待ちください」",
            bg: "bg21",
            speed: 0.4,
            lines: 2,
            speaker: "看護師"
        },
        {
            text: "持参されたファイルには衝撃的な内容が...\n『プロジェクト・プシュケ　被験者001』",
            bg: "bg21",
            speed: 0.3,
            lines: 2
        },
        {
            text: "『記憶操作実験　成功率98.7%』\n『副作用：断片的記憶の復活』",
            bg: "bg22",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「これは...僕に行われた実験の記録？」",
            bg: "bg22",
            speed: 0.3,
            lines: 1
        },
        {
            text: "「申し訳ありません...私たちも\n指示に従っただけなんです」",
            bg: "bg22",
            speed: 0.4,
            lines: 2,
            speaker: "看護師"
        },
        {
            type: 'choice',
            text: "この真実をどう受け止める？",
            bg: "bg22",
            options: [
                { 
                    label: '怒りを爆発させる', 
                    branch: 'explosive_anger',
                    action: () => {
                        flagManager.setFlag('rageFilled');
                        flagManager.addPoints('deathFlags', 1);
                    }
                },
                { 
                    label: '冷静に事実を受け入れる', 
                    branch: 'calm_acceptance',
                    action: () => {
                        flagManager.setFlag('rationalMind');
                        flagManager.addPoints('mysteryPoints', 2);
                    }
                },
                { 
                    label: '看護師を責める', 
                    branch: 'blame_nurse',
                    action: () => flagManager.setFlag('blamingNature')
                },
                { 
                    label: 'さらなる真実を要求', 
                    branch: 'demand_full_truth',
                    action: () => {
                        flagManager.setFlag('relentlessSeeker');
                        flagManager.addPoints('mysteryPoints', 3);
                    }
                }
            ]
        }
    ],

    // ========== 物的証拠詳細調査 ==========
    caught_off_guard: [
        {
            text: "君は反応できずに、背後の人物に\n肩を掴まれてしまった。",
            bg: "bg23",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2,
            scene: "caught1",
            sceneTitle: "捕獲",
            clear: true
        },
        {
            text: "「やはり来たか...被験者001」\n低い声が君の耳元で響く。",
            bg: "bg23",
            speed: 0.4,
            lines: 2,
            speaker: "？？？"
        },
        {
            text: "振り返ると、白衣を着た中年の男性。\nDr.影山その人だった。",
            bg: "bg24",
            speed: 0.3,
            lines: 2
        },
        {
            text: "「記憶の断片が復活したようだな。\n予想していたことだが...厄介だ」",
            bg: "bg24",
            speed: 0.4,
            lines: 2,
            speaker: "Dr.影山"
        },
        {
            type: 'choice',
            text: "Dr.影山との直接対峙！",
            bg: "bg24",
            options: [
                { 
                    label: '「なぜこんなことを！」', 
                    branch: 'confront_doctor_emotionally',
                    action: () => flagManager.setFlag('emotionalConfrontation')
                },
                { 
                    label: '「実験の目的は何だ？」', 
                    branch: 'question_experiment_purpose',
                    action: () => flagManager.setFlag('logicalQuestioner')
                },
                { 
                    label: '氣の力で対抗する', 
                    branch: 'use_ki_against_doctor',
                    condition: 'psychicInvestigator',
                    action: () => flagManager.setFlag('psychicWarrior')
                },
                { 
                    label: '逃走を試みる', 
                    branch: 'attempt_escape_from_doctor',
                    action: () => flagManager.setFlag('escapeArtist')
                }
            ]
        }
    ],

    // ========== Dr.影山との対話ルート ==========
    question_experiment_purpose: [
        {
            text: "「実験の目的は何だったんですか？\n僕たちに何をしたかったんですか？」",
            bg: "bg25",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "Dr.影山は複雑な表情を浮かべる。\n「君は...優秀な被験者だった」",
            bg: "bg25",
            speed: 0.3,
            lines: 2,
            speaker: "Dr.影山"
        },
        {
            text: "「人類の進化。氣という未知の力を\n科学的に解明し、制御すること」",
            bg: "bg26",
            speed: 0.4,
            lines: 2,
            speaker: "Dr.影山"
        },
        {
            text: "「しかし、君たちは予想以上に\n強い自我を持っていた」",
            bg: "bg26",
            speed: 0.3,
            lines: 2,
            speaker: "Dr.影山"
        },
        {
            text: "「制御不能になったため、\n記憶を消去するしかなかった」",
            bg: "bg27",
            speed: 0.4,
            lines: 2,
            speaker: "Dr.影山"
        },
        {
            type: 'choice',
            text: "Dr.影山の説明をどう受け取る？",
            bg: "bg27",
            options: [
                { 
                    label: '「それは間違っている」', 
                    branch: 'reject_doctors_philosophy',
                    action: () => flagManager.setFlag('moralStance')
                },
                { 
                    label: '「理解できる部分もある」', 
                    branch: 'partially_understand_doctor',
                    action: () => flagManager.setFlag('nuancedThinking')
                },
                { 
                    label: '「他の被験者はどうなった？」', 
                    branch: 'ask_about_other_subjects',
                    action: () => flagManager.setFlag('caresAboutOthers')
                },
                { 
                    label: '「実験を続けるつもりか？」', 
                    branch: 'ask_about_future_plans',
                    action: () => flagManager.setFlag('futureOriented')
                }
            ]
        }
    ]
};

// グローバルstoryBranchesに統合
Object.assign(window.storyBranches, completeBranchStories);

console.log('🌟 [完全分岐] 追加されたストーリー数:', Object.keys(completeBranchStories).length);
console.log('🌟 [完全分岐] 充実した分岐ストーリー構築完了');