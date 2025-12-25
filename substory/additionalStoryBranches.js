// 🎭========== 追加ストーリー分岐 ==========🎭
console.log('🎭 [追加ストーリー] さらなる分岐ストーリー構築開始...');

const additionalStoryBranches = {
    // ========== 政府機関潜入ルート ==========
    government_infiltration: [
        {
            text: "三人は政府の秘密施設に向かった。\n高層ビルの地下に隠された研究所。",
            bg: "bg28",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2,
            scene: "government1",
            sceneTitle: "政府への挑戦",
            clear: true
        },
        {
            text: "「警備が厳重だな」\nカゲマルが周囲を確認する。",
            bg: "bg28",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "「氣で警備システムを無効化できるかも」\nサクラが提案する。",
            bg: "bg29",
            speed: 0.4,
            lines: 2,
            speaker: "サクラ"
        },
        {
            type: 'multiChoice',
            text: "潜入方法を選択（複数選択可）",
            bg: "bg29",
            maxChoices: 2,
            options: [
                { id: 'psychic_infiltration', label: '氣でセキュリティ突破' },
                { id: 'hacking_systems', label: 'カゲマルのハッキング' },
                { id: 'stealth_entry', label: '隠密潜入' },
                { id: 'direct_assault', label: '正面突破' }
            ],
            consequences: {
                'psychic_infiltration,hacking_systems': 'perfect_infiltration',
                'psychic_infiltration,stealth_entry': 'silent_infiltration',
                'hacking_systems,direct_assault': 'tech_assault',
                'stealth_entry,direct_assault': 'confusing_approach',
                'default': 'basic_infiltration'
            }
        }
    ],

    // ========== 完璧潜入ルート ==========
    perfect_infiltration: [
        {
            text: "サクラの氣とカゲマルの技術が完璧に融合した。\nすべてのセキュリティが無力化される。",
            bg: "bg30",
            speed: 0.3,
            audio: "success1.m4a",
            lines: 2,
            clear: true
        },
        {
            text: "施設の最深部へと進む三人。\n巨大なデータベースが姿を現した。",
            bg: "bg31",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「プロジェクト・プシュケの全容が\nここにある」",
            bg: "bg31",
            speed: 0.3,
            lines: 2
        },
        {
            text: "データには驚愕の事実が記載されていた。\n被験者は君たちだけではなかった...",
            bg: "bg31",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'choice',
            text: "データをどうする？",
            bg: "bg31",
            options: [
                { 
                    label: 'すべてを公開する', 
                    branch: 'expose_all_data',
                    action: () => {
                        flagManager.setFlag('whistleblower');
                        flagManager.addPoints('perfectClearFlags', 2);
                    }
                },
                { 
                    label: '被験者データのみ保護', 
                    branch: 'protect_subject_data',
                    action: () => flagManager.setFlag('protector')
                },
                { 
                    label: 'データを破壊する', 
                    branch: 'destroy_all_data',
                    action: () => flagManager.setFlag('destroyer')
                },
                { 
                    label: '証拠として保存', 
                    branch: 'preserve_evidence',
                    action: () => flagManager.setFlag('evidenceKeeper')
                }
            ]
        }
    ],

    // ========== 他の被験者発見ルート ==========
    find_other_subjects: [
        {
            text: "データベースから他の被験者の情報を探る。\n全国に散らばる50名の被験者リスト。",
            bg: "bg14",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            scene: "other_subjects1",
            sceneTitle: "仲間たちの行方",
            clear: true
        },
        {
            text: "多くは記憶を消去されて\n普通の生活を送っている。",
            bg: "bg15",
            speed: 0.3,
            lines: 2
        },
        {
            text: "しかし、一部の被験者は\n記憶が蘇り始めているようだ。",
            bg: "bg16",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「彼らを救わなければ」\nサクラが決意を込めて言う。",
            bg: "bg16",
            speed: 0.3,
            lines: 2,
            speaker: "サクラ"
        },
        {
            type: 'choice',
            text: "被験者たちをどう救う？",
            bg: "bg16",
            options: [
                { 
                    label: '一人ずつ直接接触', 
                    branch: 'contact_subjects_individually',
                    action: () => flagManager.setFlag('personalApproach')
                },
                { 
                    label: 'ネットワークを構築', 
                    branch: 'build_subject_network',
                    action: () => flagManager.setFlag('networkBuilder')
                },
                { 
                    label: '記憶回復装置を作る', 
                    branch: 'create_memory_device',
                    action: () => flagManager.setFlag('inventor')
                },
                { 
                    label: '政府と交渉する', 
                    branch: 'negotiate_with_government',
                    action: () => flagManager.setFlag('diplomat')
                }
            ]
        }
    ],

    // ========== 個別接触ルート ==========
    contact_subjects_individually: [
        {
            text: "最初に接触したのは、\n東京で普通のサラリーマンをしている田村さん。",
            bg: "bg17",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "「僕のことを知っているって？\nでも、記憶にないんですが...」",
            bg: "bg17",
            speed: 0.3,
            lines: 2,
            speaker: "田村さん"
        },
        {
            text: "君は慎重に氣の力を使って\n封印された記憶に触れる。",
            bg: "bg18",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「あ...ああ！思い出した！\n白い部屋...実験...すべて本当だったんだ！」",
            bg: "bg18",
            speed: 0.3,
            lines: 2,
            speaker: "田村さん"
        },
        {
            type: 'choice',
            text: "記憶を取り戻した田村さんにどう接する？",
            bg: "bg18",
            options: [
                { 
                    label: '真実をすべて話す', 
                    branch: 'tell_full_truth_to_subject',
                    action: () => flagManager.setFlag('truthTeller')
                },
                { 
                    label: '段階的に情報を与える', 
                    branch: 'gradual_information_sharing',
                    action: () => flagManager.setFlag('carefulEducator')
                },
                { 
                    label: '仲間として迎える', 
                    branch: 'welcome_as_ally',
                    action: () => flagManager.addPoints('trustPoints', 2)
                },
                { 
                    label: '記憶を再び封印する', 
                    branch: 'reseal_memories',
                    action: () => flagManager.setFlag('protectiveNature')
                }
            ]
        }
    ],

    // ========== 怒り爆発ルート ==========
    explosive_anger: [
        {
            text: "「ふざけるな！僕を実験動物扱いして！」\n君の怒りが爆発した。",
            bg: "bg19",
            speed: 0.2,
            audio: "shadow4.m4a",
            lines: 2,
            scene: "anger1",
            sceneTitle: "怒りの炎",
            clear: true
        },
        {
            text: "氣の力が制御を失い、\n周囲の物が宙に浮き始める。",
            bg: "bg20",
            speed: 0.3,
            lines: 2
        },
        {
            text: "「落ち着いてください！」\n看護師が怯えながら後ずさる。",
            bg: "bg20",
            speed: 0.4,
            lines: 2,
            speaker: "看護師"
        },
        {
            text: "君の怒りは止まらない。\n病院全体が震動し始めた。",
            bg: "bg21",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'timedChoice',
            text: "このままでは危険だ！",
            bg: "bg21",
            timeLimit: 5,
            options: [
                { 
                    label: '自分を制御する', 
                    branch: 'control_psychic_rage',
                    action: () => flagManager.setFlag('selfControl')
                },
                { 
                    label: '怒りを解放する', 
                    branch: 'unleash_full_power',
                    action: () => {
                        flagManager.setFlag('psychicExplosion');
                        flagManager.addPoints('deathFlags', 2);
                    }
                },
                { 
                    label: 'その場から逃げる', 
                    branch: 'flee_in_rage',
                    action: () => flagManager.setFlag('rageFlee')
                }
            ],
            timeoutBranch: 'uncontrolled_psychic_explosion'
        }
    ],

    // ========== 氣の力暴走ルート ==========
    unleash_full_power: [
        {
            text: "君は怒りに身を任せた。\n氣の力が制御不能に暴走する！",
            bg: "bg22",
            speed: 0.2,
            audio: "shadow4.m4a",
            lines: 2,
            clear: true
        },
        {
            text: "病院の窓ガラスが次々と割れ、\n電子機器がショートしていく。",
            bg: "bg23",
            speed: 0.3,
            lines: 2
        },
        {
            text: "「これは...予想以上の力だ」\n隠れ見していたDr.影山が呟く。",
            bg: "bg23",
            speed: 0.4,
            lines: 2,
            speaker: "Dr.影山"
        },
        {
            text: "突然、カゲマルとサクラが現れた。\n「RYO-CHAN、やめろ！」",
            bg: "bg24",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            type: 'choice',
            text: "仲間の声が聞こえる...",
            bg: "bg24",
            options: [
                { 
                    label: '仲間の声に応える', 
                    branch: 'respond_to_friends_call',
                    condition: { or: ['trustedKagemaru', 'trustedSakura'] },
                    action: () => flagManager.setFlag('friendshipPower')
                },
                { 
                    label: '彼らも敵だと思う', 
                    branch: 'consider_friends_enemies',
                    action: () => {
                        flagManager.setFlag('totalParanoia');
                        flagManager.addPoints('deathFlags', 1);
                    }
                },
                { 
                    label: '力をさらに高める', 
                    branch: 'amplify_psychic_power',
                    action: () => flagManager.setFlag('powerSeeker')
                },
                { 
                    label: '自分を犠牲にして止める', 
                    branch: 'sacrifice_to_stop_power',
                    action: () => flagManager.setFlag('selfSacrifice')
                }
            ]
        }
    ],

    // ========== 冷静受容ルート ==========
    calm_acceptance: [
        {
            text: "君は深呼吸をして、\n感情を落ち着かせることにした。",
            bg: "bg25",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            scene: "calm1",
            sceneTitle: "冷静な受容",
            clear: true
        },
        {
            text: "「事実は事実として受け入れます。\n大切なのは、これからどうするかです」",
            bg: "bg25",
            speed: 0.3,
            lines: 2
        },
        {
            text: "看護師は君の冷静さに驚く。\n「あなたは...本当に強い方ですね」",
            bg: "bg26",
            speed: 0.4,
            lines: 2,
            speaker: "看護師"
        },
        {
            text: "「他にも同じような被験者がいるなら、\n彼らを助けたい」",
            bg: "bg26",
            speed: 0.3,
            lines: 2
        },
        {
            text: "「実は...まだ実験は続いているんです。\n新しい被験者たちが...」",
            bg: "bg27",
            speed: 0.4,
            lines: 2,
            speaker: "看護師"
        },
        {
            type: 'choice',
            text: "現在進行中の実験について聞く",
            bg: "bg27",
            options: [
                { 
                    label: '新しい被験者を救う', 
                    branch: 'save_new_subjects',
                    action: () => flagManager.setFlag('heroicMission')
                },
                { 
                    label: '実験を内部から阻止', 
                    branch: 'sabotage_from_inside',
                    action: () => flagManager.setFlag('infiltrator')
                },
                { 
                    label: '看護師と協力する', 
                    branch: 'ally_with_nurse',
                    action: () => flagManager.setFlag('insideAlliance')
                },
                { 
                    label: '証拠を集めて告発', 
                    branch: 'gather_evidence_for_exposure',
                    action: () => flagManager.setFlag('legalApproach')
                }
            ]
        }
    ],

    // ========== 新被験者救出ルート ==========
    save_new_subjects: [
        {
            text: "「新しい被験者がどこにいるか\n教えてください」",
            bg: "bg28",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "「地下の実験室に...3人の子供たちが。\nまだ記憶操作は行われていません」",
            bg: "bg28",
            speed: 0.3,
            lines: 2,
            speaker: "看護師"
        },
        {
            text: "君は立ち上がった。\n「案内してください」",
            bg: "bg29",
            speed: 0.4,
            lines: 2
        },
        {
            text: "地下へ向かう途中、\n警備員に遭遇してしまった。",
            bg: "bg30",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'choice',
            text: "警備員にどう対処する？",
            bg: "bg30",
            options: [
                { 
                    label: '氣で眠らせる', 
                    branch: 'psychic_sleep_guard',
                    action: () => flagManager.setFlag('nonViolentApproach')
                },
                { 
                    label: '説得を試みる', 
                    branch: 'persuade_guard',
                    action: () => flagManager.setFlag('negotiator')
                },
                { 
                    label: '正面から突破', 
                    branch: 'fight_guard',
                    action: () => flagManager.setFlag('directFighter')
                },
                { 
                    label: '看護師に頼む', 
                    branch: 'rely_on_nurse',
                    action: () => flagManager.setFlag('teamwork')
                }
            ]
        }
    ]
};

// グローバルstoryBranchesに統合
Object.assign(window.storyBranches, additionalStoryBranches);

console.log('🎭 [追加ストーリー] 追加されたストーリー数:', Object.keys(additionalStoryBranches).length);
console.log('🎭 [追加ストーリー] さらなる分岐ストーリー構築完了');