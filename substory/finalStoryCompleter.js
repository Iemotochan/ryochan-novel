// 🎯========== 最終ストーリー補完システム ==========🎯
console.log('🎯 [最終補完] 全分岐ストーリー最終補完開始...');

// 残りの分岐を完全に充実させる
const finalStoryBranches = {
    // ========== 政府との交渉ルート ==========
    negotiate_with_government: [
        {
            text: "君は政府との直接交渉を選択した。\\n「話し合いで解決したい」",
            bg: "bg15",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            scene: "government_negotiation1",
            sceneTitle: "政府との対話",
            clear: true
        },
        {
            text: "政府のエージェントが現れる。\\n「あなたが被験者001ですね」",
            bg: "bg15",
            speed: 0.3,
            lines: 2,
            speaker: "政府エージェント"
        },
        {
            text: "「この実験は国家機密です。\\nしかし、あなたの意見を聞きましょう」",
            bg: "bg16",
            speed: 0.4,
            lines: 2,
            speaker: "政府エージェント"
        },
        {
            text: "君は冷静に答える。\\n「実験は人権侵害だと思います」",
            bg: "bg16",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'choice',
            text: "政府との交渉方針は？",
            bg: "bg16",
            options: [
                { 
                    label: '全面的な実験停止を要求', 
                    branch: 'demand_full_shutdown',
                    action: () => flagManager.setFlag('firmNegotiator')
                },
                { 
                    label: '条件付きで協力を提案', 
                    branch: 'conditional_cooperation',
                    action: () => flagManager.setFlag('pragmaticDiplomat')
                },
                { 
                    label: '被験者の権利保護を要求', 
                    branch: 'demand_rights_protection',
                    action: () => flagManager.setFlag('rightsAdvocate')
                },
                { 
                    label: '公開告発を脅しに使う', 
                    branch: 'threaten_public_exposure',
                    action: () => flagManager.setFlag('strategicThreat')
                }
            ]
        }
    ],

    // ========== 条件付き協力ルート ==========
    conditional_cooperation: [
        {
            text: "「条件付きで協力しましょう。\\nただし、人道的な配慮が必要です」",
            bg: "bg17",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "政府エージェントが興味を示す。\\n「どのような条件でしょうか？」",
            bg: "bg17",
            speed: 0.3,
            lines: 2,
            speaker: "政府エージェント"
        },
        {
            text: "「被験者の同意を得ること、\\n安全性の保証、定期的な健康チェック」",
            bg: "bg18",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「そして、実験データの一部を\\n医学研究に活用させてください」",
            bg: "bg18",
            speed: 0.3,
            lines: 2
        },
        {
            text: "エージェントが考え込む。\\n「...興味深い提案ですね」",
            bg: "bg19",
            speed: 0.4,
            lines: 2,
            speaker: "政府エージェント"
        },
        {
            type: 'choice',
            text: "政府の反応は？",
            bg: "bg19",
            options: [
                { 
                    label: '条件を受け入れてもらう', 
                    branch: 'government_accepts_terms',
                    action: () => {
                        flagManager.setFlag('successfulNegotiation');
                        flagManager.addPoints('diplomaticVictory', 3);
                    }
                },
                { 
                    label: '一部修正を求められる', 
                    branch: 'negotiate_modifications',
                    action: () => flagManager.setFlag('partialSuccess')
                },
                { 
                    label: '条件を拒否される', 
                    branch: 'government_rejects_terms',
                    action: () => flagManager.setFlag('negotiationFailed')
                },
                { 
                    label: '時間をかけて検討される', 
                    branch: 'government_delays_decision',
                    action: () => flagManager.setFlag('delayedDecision')
                }
            ]
        }
    ],

    // ========== 記憶回復装置制作ルート ==========
    create_memory_device: [
        {
            text: "「記憶回復装置を作れば、\\nすべての被験者を救える」",
            bg: "bg20",
            speed: 0.4,
            audio: "success1.m4a",
            lines: 2,
            scene: "memory_device1",
            sceneTitle: "記憶回復装置",
            clear: true
        },
        {
            text: "カゲマルが技術面で協力する。\\n「俺のハッキング技術を使おう」",
            bg: "bg20",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "サクラが霊的な側面を補完。\\n「氣の力で記憶の封印を解除する」",
            bg: "bg21",
            speed: 0.4,
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "三人は秘密の研究を開始した。\\n昼間は普通に生活し、夜に開発作業。",
            bg: "bg21",
            speed: 0.3,
            lines: 2
        },
        {
            text: "数週間後、プロトタイプが完成。\\n「これで記憶を取り戻せるはず」",
            bg: "bg22",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'choice',
            text: "最初のテストをどうする？",
            bg: "bg22",
            options: [
                { 
                    label: '自分自身でテストする', 
                    branch: 'self_test_device',
                    action: () => flagManager.setFlag('selfTester')
                },
                { 
                    label: '他の被験者に試す', 
                    branch: 'test_on_other_subject',
                    action: () => flagManager.setFlag('cautionFirst')
                },
                { 
                    label: '動物実験から始める', 
                    branch: 'animal_testing_first',
                    action: () => flagManager.setFlag('scientificApproach')
                },
                { 
                    label: '装置をさらに改良する', 
                    branch: 'improve_device_further',
                    action: () => flagManager.setFlag('perfectionist')
                }
            ]
        }
    ],

    // ========== 自己テストルート ==========
    self_test_device: [
        {
            text: "「まず僕が試してみる。\\nリスクは僕が負うべきだ」",
            bg: "bg23",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "「危険すぎる！」\\nサクラが心配する。",
            bg: "bg23",
            speed: 0.3,
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "「でも、これが一番確実な方法だ」\\n君は装置を頭に装着する。",
            bg: "bg24",
            speed: 0.4,
            lines: 2
        },
        {
            text: "装置が起動する。\\n脳に電気信号が流れ込む。",
            bg: "bg24",
            speed: 0.3,
            lines: 2
        },
        {
            text: "突然、記憶が洪水のように蘇る。\\n実験室...研究者たち...痛み...",
            bg: "bg25",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「うああああああ！」\\n君は激痛に耐えながら記憶を受け入れる。",
            bg: "bg25",
            speed: 0.2,
            lines: 2
        },
        {
            type: 'timedChoice',
            text: "記憶の奔流が押し寄せる！",
            bg: "bg25",
            timeLimit: 4,
            options: [
                { 
                    label: '記憶を全て受け入れる', 
                    branch: 'accept_all_memories',
                    action: () => {
                        flagManager.setFlag('memoryRestored');
                        flagManager.addPoints('mysteryPoints', 5);
                    }
                },
                { 
                    label: '装置を停止する', 
                    branch: 'stop_device_emergency',
                    action: () => flagManager.setFlag('selfPreservation')
                },
                { 
                    label: '選択的に記憶を受け入れる', 
                    branch: 'selective_memory_restoration',
                    action: () => flagManager.setFlag('controlledRestoration')
                }
            ],
            timeoutBranch: 'memory_overload'
        }
    ],

    // ========== 記憶完全復活ルート ==========
    accept_all_memories: [
        {
            text: "すべての記憶が蘇った。\\n真実が明らかになる。",
            bg: "bg26",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            clear: true
        },
        {
            text: "政府の極秘プロジェクト「サイキック・ウォリアー」\\n超能力者による軍事作戦計画。",
            bg: "bg26",
            speed: 0.3,
            lines: 2
        },
        {
            text: "君たちは兵器にされるはずだった。\\nしかし、人間性が強すぎた。",
            bg: "bg27",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「そうだったのか...」\\n全ての謎が解けた瞬間。",
            bg: "bg27",
            speed: 0.3,
            lines: 2
        },
        {
            text: "記憶と共に、新たな能力も覚醒した。\\n氣の力が格段に増している。",
            bg: "bg28",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'choice',
            text: "新たな力をどう使う？",
            bg: "bg28",
            options: [
                { 
                    label: '他の被験者を全員救出', 
                    branch: 'mass_subject_rescue',
                    action: () => flagManager.setFlag('massRescuer')
                },
                { 
                    label: '政府と最終決戦', 
                    branch: 'final_government_battle',
                    action: () => flagManager.setFlag('psychicWarrior')
                },
                { 
                    label: '世界に真実を公表', 
                    branch: 'global_truth_revelation',
                    action: () => flagManager.setFlag('truthBringer')
                },
                { 
                    label: '平和的な解決を模索', 
                    branch: 'peaceful_resolution',
                    action: () => flagManager.setFlag('peaceSeeker')
                }
            ]
        }
    ],

    // ========== 世界的真実公表ルート ==========
    global_truth_revelation: [
        {
            text: "君は世界中のメディアに真実を公表することを決めた。",
            bg: "bg29",
            speed: 0.4,
            audio: "success1.m4a",
            lines: 2,
            scene: "global_truth1",
            sceneTitle: "世界への告発",
            clear: true
        },
        {
            text: "カゲマルのハッキング技術で\\n世界中のテレビ局を同時ハック。",
            bg: "bg29",
            speed: 0.3,
            lines: 2
        },
        {
            text: "「世界の皆さん、聞いてください。\\n政府が隠してきた真実があります」",
            bg: "bg30",
            speed: 0.4,
            lines: 2
        },
        {
            text: "氣の力で実際に物を浮かせながら\\n超能力の存在を証明する。",
            bg: "bg30",
            speed: 0.3,
            lines: 2
        },
        {
            text: "世界中が騒然となる。\\nSNSが炎上し、各国政府が緊急会議。",
            bg: "bg31",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「これまで隠されてきた超能力者たちを\\n人道的に保護してください」",
            bg: "bg31",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'choice',
            text: "世界の反応は？",
            bg: "bg31",
            options: [
                { 
                    label: '国際的な保護法が制定される', 
                    branch: 'international_protection_law',
                    action: () => {
                        flagManager.setFlag('worldChanger');
                        flagManager.addPoints('perfectClearFlags', 5);
                    }
                },
                { 
                    label: '一部の国が君を狙う', 
                    branch: 'international_manhunt',
                    action: () => flagManager.setFlag('worldwideTarget')
                },
                { 
                    label: '科学者たちが研究を申し出る', 
                    branch: 'scientific_collaboration',
                    action: () => flagManager.setFlag('scientificPartner')
                },
                { 
                    label: '世界が混乱に陥る', 
                    branch: 'world_chaos_ending',
                    action: () => {
                        flagManager.setFlag('chaosCreator');
                        flagManager.addPoints('deathFlags', 2);
                    }
                }
            ]
        }
    ],

    // ========== 国際保護法制定エンディング ==========
    international_protection_law: [
        {
            text: "君の勇気ある告発により、\\n国際連合が緊急総会を開催。",
            bg: "bg14",
            speed: 0.4,
            audio: "success1.m4a",
            lines: 2,
            clear: true
        },
        {
            text: "「超能力者人権保護条約」が\\n全会一致で可決された。",
            bg: "bg14",
            speed: 0.3,
            lines: 2
        },
        {
            text: "世界中の隠れた超能力者たちが\\n安全に暮らせる環境が整った。",
            bg: "bg15",
            speed: 0.4,
            lines: 2
        },
        {
            text: "君とサクラとカゲマルは\\n「超能力者権利擁護財団」を設立。",
            bg: "bg15",
            speed: 0.3,
            lines: 2
        },
        {
            text: "世界各地から相談が寄せられ、\\n多くの人々を救うことができた。",
            bg: "bg16",
            speed: 0.4,
            lines: 2
        },
        {
            text: "数年後...",
            bg: "bg16",
            speed: 0.3,
            lines: 1
        },
        {
            text: "「あの時、真実を話して本当によかった」\\nサクラが微笑みながら言う。",
            bg: "bg17",
            speed: 0.4,
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "「ああ、世界は変わったよ。\\nより良い方向に」",
            bg: "bg17",
            speed: 0.3,
            lines: 2
        },
        {
            text: "**TRUE END: 世界を変えた英雄**\\n\\n君の勇気が世界を救った。\\n超能力者と一般人が共存する\\n新しい時代の始まりだった。",
            bg: "bg18",
            speed: 0.5,
            lines: 4,
            scene: "world_hero_ending",
            sceneTitle: "世界を変えた英雄"
        }
    ],

    // ========== 科学的協力エンディング ==========
    scientific_collaboration: [
        {
            text: "世界中の科学者たちが\\n君に協力を申し出た。",
            bg: "bg19",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            clear: true
        },
        {
            text: "「超能力を科学的に解明し、\\n人類の進歩に役立てましょう」",
            bg: "bg19",
            speed: 0.3,
            lines: 2,
            speaker: "ノーベル賞学者"
        },
        {
            text: "君は条件を出した。\\n「被験者の安全と尊厳を最優先に」",
            bg: "bg20",
            speed: 0.4,
            lines: 2
        },
        {
            text: "国際的な研究チームが結成され、\\n人道的な研究が始まった。",
            bg: "bg20",
            speed: 0.3,
            lines: 2
        },
        {
            text: "超能力のメカニズムが解明され、\\n医学の革命的発展に繋がった。",
            bg: "bg21",
            speed: 0.4,
            lines: 2
        },
        {
            text: "パーキンソン病、アルツハイマー病\\n多くの難病治療に応用される。",
            bg: "bg21",
            speed: 0.3,
            lines: 2
        },
        {
            text: "**SCIENCE END: 人類進歩の橋渡し**\\n\\n君の選択が科学の発展を促し、\\n無数の命を救うことになった。\\n真の意味での人類の進歩だった。",
            bg: "bg22",
            speed: 0.5,
            lines: 4,
            scene: "science_progress_ending",
            sceneTitle: "人類進歩の橋渡し"
        }
    ]
};

// さらに複雑な分岐を追加
const complexEndingBranches = {
    // ========== 時間逆行エンディング ==========
    time_reversal_ending: [
        {
            text: "君の氣の力が限界を超えた瞬間、\\n時間そのものが逆行し始めた。",
            bg: "bg23",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2,
            scene: "time_reversal1",
            sceneTitle: "時の逆行",
            clear: true
        },
        {
            text: "すべてが元に戻っていく...\\n実験も、記憶操作も、すべて。",
            bg: "bg24",
            speed: 0.3,
            lines: 2
        },
        {
            text: "しかし、君の記憶だけは残っている。\\n「今度こそ、違う選択をしよう」",
            bg: "bg25",
            speed: 0.4,
            lines: 2
        },
        {
            text: "**TIME LOOP END: 永遠の機会**\\n\\n君は何度でもやり直すことができる。\\n完璧な結末を求めて、\\n時の輪廻は続く...",
            bg: "bg26",
            speed: 0.5,
            lines: 4
        }
    ],

    // ========== 犠牲エンディング ==========
    sacrifice_ending: [
        {
            text: "君は自分の命と引き換えに\\nすべての被験者を救うことを選んだ。",
            bg: "bg27",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2,
            scene: "sacrifice1",
            sceneTitle: "最大の犠牲",
            clear: true
        },
        {
            text: "氣の力を最大限に開放し、\\n記憶封印を一気に解除する。",
            bg: "bg28",
            speed: 0.3,
            lines: 2
        },
        {
            text: "世界中の被験者たちが\\n一斉に記憶を取り戻した。",
            bg: "bg29",
            speed: 0.4,
            lines: 2
        },
        {
            text: "しかし、君の生命力は尽きた...\\n「みんな...自由に生きて...」",
            bg: "bg30",
            speed: 0.3,
            lines: 2
        },
        {
            text: "**SACRIFICE END: 英雄の選択**\\n\\n君の犠牲により、\\n50人の被験者が救われた。\\n君の名前は永遠に語り継がれる。",
            bg: "bg31",
            speed: 0.5,
            lines: 4
        }
    ],

    // ========== 支配者エンディング ==========
    ruler_ending: [
        {
            text: "君は圧倒的な氣の力で\\n政府を制圧することを選んだ。",
            bg: "bg14",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2,
            scene: "ruler1",
            sceneTitle: "新たな支配者",
            clear: true
        },
        {
            text: "「この世界は超能力者が支配すべきだ」\\n君の考えが変わってしまった。",
            bg: "bg15",
            speed: 0.3,
            lines: 2
        },
        {
            text: "世界各国の政府が君に降伏。\\n新しい世界秩序が始まった。",
            bg: "bg16",
            speed: 0.4,
            lines: 2
        },
        {
            text: "しかし、力による支配は\\n本当の平和をもたらさなかった...",
            bg: "bg17",
            speed: 0.3,
            lines: 2
        },
        {
            text: "**DARK END: 暴君の誕生**\\n\\n君は世界の支配者となったが、\\n友情と愛を失ってしまった。\\n力の代償は大きかった。",
            bg: "bg18",
            speed: 0.5,
            lines: 4
        }
    ]
};

// 全てのブランチを統合
Object.assign(window.storyBranches, finalStoryBranches);
Object.assign(window.storyBranches, complexEndingBranches);

console.log('🎯 [最終補完] 追加されたストーリー数:', Object.keys(finalStoryBranches).length + Object.keys(complexEndingBranches).length);
console.log('🎯 [最終補完] 全分岐ストーリー最終補完完了');
console.log('🎯 [最終補完] 総分岐数:', Object.keys(window.storyBranches || {}).length, '以上');