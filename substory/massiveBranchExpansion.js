// 🌌========== 大規模分岐拡張システム ==========🌌
console.log('🌌 [大規模拡張] 超大規模分岐システム構築開始...');

// さらに多くの分岐を追加して真にかまいたちの夜レベルに
const massiveBranchExpansion = {
    // ========== 隠れ研究所ルート ==========
    hidden_laboratory_route: [
        {
            text: "廃病院の地下に隠された研究所を発見。\\n「ここが本当の実験場所だったのか...」",
            bg: "bg19",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2,
            scene: "hidden_lab1",
            sceneTitle: "隠れ研究所",
            clear: true
        },
        {
            text: "培養器の中に浮かぶ脳組織。\\n「これは...人間の脳？」",
            bg: "bg20",
            speed: 0.3,
            lines: 2
        },
        {
            text: "記録によると、失敗した被験者の脳が\\n研究材料として保存されている。",
            bg: "bg21",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「僕たちも失敗すれば\\nこうなっていたのか...」",
            bg: "bg21",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'choice',
            text: "この発見をどうする？",
            bg: "bg21",
            options: [
                { label: 'すべてを破壊する', branch: 'destroy_hidden_lab', action: () => flagManager.setFlag('destroyer') },
                { label: '証拠として記録する', branch: 'document_evidence', action: () => flagManager.setFlag('evidence_collector') },
                { label: '研究データを解析する', branch: 'analyze_research_data', action: () => flagManager.setFlag('data_analyst') },
                { label: '脳組織と対話を試みる', branch: 'communicate_with_brains', action: () => flagManager.setFlag('psychic_communicator') }
            ]
        }
    ],

    // ========== 脳組織対話ルート ==========
    communicate_with_brains: [
        {
            text: "氣の力を使って、保存された脳組織との\\n交信を試みる。",
            bg: "bg22",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "「...助け...て...」\\n微かな意識の声が聞こえる。",
            bg: "bg22",
            speed: 0.3,
            lines: 2,
            speaker: "保存された意識"
        },
        {
            text: "「君たちは...被験者だったのか？」",
            bg: "bg23",
            speed: 0.4,
            lines: 1
        },
        {
            text: "「001...から...019...まで...\\n私たちは...失敗作...」",
            bg: "bg23",
            speed: 0.3,
            lines: 2,
            speaker: "保存された意識"
        },
        {
            text: "19人もの被験者が実験で死亡し、\\n脳だけが保存されていた。",
            bg: "bg24",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'choice',
            text: "死んだ被験者たちをどう救う？",
            bg: "bg24",
            options: [
                { label: '脳を元の体に戻す実験', branch: 'brain_restoration_experiment', action: () => flagManager.setFlag('mad_scientist') },
                { label: '意識をデジタル世界に移す', branch: 'digital_consciousness_transfer', action: () => flagManager.setFlag('digital_savior') },
                { label: '平和に眠らせてあげる', branch: 'peaceful_brain_release', action: () => flagManager.setFlag('merciful_soul') },
                { label: '復讐を手伝う', branch: 'vengeful_brain_alliance', action: () => flagManager.setFlag('revenge_partner') }
            ]
        }
    ],

    // ========== デジタル意識転送ルート ==========
    digital_consciousness_transfer: [
        {
            text: "カゲマルの技術力を借りて、\\n意識をデジタル世界に移す計画を立てる。",
            bg: "bg25",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "「理論上は可能だが...\\n前例のない実験だ」",
            bg: "bg25",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "巨大なコンピューターシステムを構築。\\n19の仮想人格空間を作成する。",
            bg: "bg26",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「僕たちを...デジタルの世界に...」\\n被験者たちが希望を抱く。",
            bg: "bg26",
            speed: 0.3,
            lines: 2,
            speaker: "保存された意識"
        },
        {
            text: "転送実験開始。\\n一人ずつ慎重に意識を移していく。",
            bg: "bg27",
            speed: 0.4,
            lines: 2
        },
        {
            text: "成功！デジタル世界で19人の被験者が\\n新しい人生を始めることができた。",
            bg: "bg28",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'choice',
            text: "デジタル世界の住人たちとの関係は？",
            bg: "bg28",
            options: [
                { label: '定期的に交流を続ける', branch: 'digital_world_friendship', action: () => flagManager.setFlag('digital_friend') },
                { label: '彼らを現実世界に招待', branch: 'invite_to_real_world', action: () => flagManager.setFlag('world_bridge') },
                { label: 'デジタル世界を拡張する', branch: 'expand_digital_world', action: () => flagManager.setFlag('world_creator') },
                { label: '彼らの復讐を支援', branch: 'support_digital_revenge', action: () => flagManager.setFlag('revenge_enabler') }
            ]
        }
    ],

    // ========== 異次元侵入ルート ==========
    dimensional_invasion: [
        {
            text: "氣の力が異常に高まり、\\n次元の壁が破られてしまった。",
            bg: "bg29",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2,
            scene: "dimension1",
            sceneTitle: "次元の裂け目",
            clear: true
        },
        {
            text: "別次元の存在が現実世界に侵入。\\n「この世界を支配する」",
            bg: "bg30",
            speed: 0.3,
            lines: 2,
            speaker: "異次元存在"
        },
        {
            text: "「君が扉を開いたのだ」\\n異次元の王が君に語りかける。",
            bg: "bg31",
            speed: 0.4,
            lines: 2,
            speaker: "異次元の王"
        },
        {
            text: "「我々の世界では、超能力者が\\n支配階級として君臨している」",
            bg: "bg31",
            speed: 0.3,
            lines: 2,
            speaker: "異次元の王"
        },
        {
            type: 'choice',
            text: "異次元の王の提案は？",
            bg: "bg31",
            options: [
                { label: '異次元世界に移住する', branch: 'move_to_other_dimension', action: () => flagManager.setFlag('dimensional_immigrant') },
                { label: '両世界の架け橋になる', branch: 'become_dimensional_bridge', action: () => flagManager.setFlag('dimensional_diplomat') },
                { label: '異次元存在を追い返す', branch: 'repel_dimensional_invaders', action: () => flagManager.setFlag('dimensional_guardian') },
                { label: '異次元の技術を学ぶ', branch: 'learn_dimensional_technology', action: () => flagManager.setFlag('dimensional_student') }
            ]
        }
    ],

    // ========== 異次元移住エンディング ==========
    move_to_other_dimension: [
        {
            text: "君は異次元世界への移住を選択した。\\n「ここでなら、僕たちは自由だ」",
            bg: "bg14",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "サクラとカゲマルも一緒に\\n新しい世界へと旅立つ。",
            bg: "bg15",
            speed: 0.3,
            lines: 2
        },
        {
            text: "異次元では超能力者が普通の存在。\\n君たちは歓迎された。",
            bg: "bg16",
            speed: 0.4,
            lines: 2
        },
        {
            text: "**DIMENSION END: 新世界の住人**\\n\\n君たちは新しい世界で\\n真の自由を手に入れた。\\n地球での記憶は美しい思い出となった。",
            bg: "bg17",
            speed: 0.5,
            lines: 4
        }
    ],

    // ========== 機械融合ルート ==========
    cyborg_transformation: [
        {
            text: "実験の副作用で、君の体が\\n機械と融合し始めた。",
            bg: "bg18",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2,
            scene: "cyborg1",
            sceneTitle: "機械との融合",
            clear: true
        },
        {
            text: "「これは...ナノマシンか？」\\n体内で機械が自己増殖している。",
            bg: "bg19",
            speed: 0.3,
            lines: 2
        },
        {
            text: "しかし、恐怖と共に新たな能力も覚醒。\\nサイバー空間への直接アクセスが可能に。",
            bg: "bg20",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「君は新人類の先駆者だ」\\nDr.影山が現れた。",
            bg: "bg21",
            speed: 0.3,
            lines: 2,
            speaker: "Dr.影山"
        },
        {
            type: 'choice',
            text: "機械化をどう捉える？",
            bg: "bg21",
            options: [
                { label: '進化として受け入れる', branch: 'embrace_cyborg_evolution', action: () => flagManager.setFlag('evolution_accepter') },
                { label: '元の人間に戻りたい', branch: 'reverse_cyborg_process', action: () => flagManager.setFlag('humanity_preserver') },
                { label: '機械の力で世界を変える', branch: 'cyborg_world_changer', action: () => flagManager.setFlag('cyber_revolutionary') },
                { label: 'Dr.影山を機械化する', branch: 'convert_doctor_to_cyborg', action: () => flagManager.setFlag('conversion_revenge') }
            ]
        }
    ],

    // ========== サイボーグ革命ルート ==========
    cyborg_world_changer: [
        {
            text: "君は機械の力を使って\\n世界のシステムを根本から変えることにした。",
            bg: "bg22",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "全世界のネットワークに同時侵入。\\n情報格差を完全に撤廃する。",
            bg: "bg23",
            speed: 0.3,
            lines: 2
        },
        {
            text: "秘密情報、政府機密、企業内部文書\\nすべてが公開された。",
            bg: "bg24",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「これで世界に嘘はなくなった」\\n君の革命が始まった。",
            bg: "bg25",
            speed: 0.3,
            lines: 2
        },
        {
            text: "**CYBER END: デジタル革命家**\\n\\n君の行動により世界は透明化された。\\n情報の民主化を実現したが、\\n副作用も大きかった。",
            bg: "bg26",
            speed: 0.5,
            lines: 4
        }
    ],

    // ========== 宇宙進出ルート ==========
    space_exploration: [
        {
            text: "氣の力で重力を操作し、\\n宇宙空間への進出を試みる。",
            bg: "bg27",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            scene: "space1",
            sceneTitle: "宇宙への扉",
            clear: true
        },
        {
            text: "「地球を離れて、新しい惑星で\\n超能力者の文明を作ろう」",
            bg: "bg28",
            speed: 0.3,
            lines: 2
        },
        {
            text: "宇宙空間で氣のバリアを展開。\\n宇宙服なしでも生存可能。",
            bg: "bg29",
            speed: 0.4,
            lines: 2
        },
        {
            text: "火星に到達し、テラフォーミングを開始。\\n超能力による惑星改造。",
            bg: "bg30",
            speed: 0.3,
            lines: 2
        },
        {
            text: "**SPACE END: 宇宙開拓者**\\n\\n君は人類初の超能力宇宙飛行士となり、\\n新しい世界を切り開いた。\\n地球は故郷として心に残り続けた。",
            bg: "bg31",
            speed: 0.5,
            lines: 4
        }
    ],

    // ========== 記憶世界ルート ==========
    memory_world_exploration: [
        {
            text: "記憶回復装置の暴走により、\\n君の意識が記憶の世界に迷い込んだ。",
            bg: "bg14",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            scene: "memory_world1",
            sceneTitle: "記憶の世界",
            clear: true
        },
        {
            text: "ここは過去、現在、未来の記憶が\\n混在する不思議な空間。",
            bg: "bg15",
            speed: 0.3,
            lines: 2
        },
        {
            text: "子どもの頃の自分、実験中の自分、\\n未来の可能性の自分たちに出会う。",
            bg: "bg16",
            speed: 0.4,
            lines: 2
        },
        {
            text: "「君はどの自分を選ぶ？」\\n記憶の案内人が現れた。",
            bg: "bg17",
            speed: 0.3,
            lines: 2,
            speaker: "記憶の案内人"
        },
        {
            type: 'choice',
            text: "どの記憶を現実にする？",
            bg: "bg17",
            options: [
                { label: '無邪気な子ども時代', branch: 'childhood_reality', action: () => flagManager.setFlag('innocence_return') },
                { label: '実験前の普通の高校生', branch: 'normal_student_life', action: () => flagManager.setFlag('ordinary_life') },
                { label: '超能力者としての現在', branch: 'current_psychic_reality', action: () => flagManager.setFlag('power_acceptance') },
                { label: '希望に満ちた未来', branch: 'hopeful_future_reality', action: () => flagManager.setFlag('future_oriented') }
            ]
        }
    ],

    // ========== 希望の未来エンディング ==========
    hopeful_future_reality: [
        {
            text: "君は希望に満ちた未来を選択した。\\n記憶の世界から現実に戻る。",
            bg: "bg18",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "目を開けると、そこは平和な世界。\\n超能力者と一般人が共存している。",
            bg: "bg19",
            speed: 0.3,
            lines: 2
        },
        {
            text: "「おかえり」\\nサクラとカゲマルが微笑んでいる。",
            bg: "bg20",
            speed: 0.4,
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "「この世界では、君の夢が\\nすべて実現しているんだ」",
            bg: "bg20",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "**HOPE END: 理想の実現**\\n\\n君の強い意志が現実を変えた。\\n記憶の力で理想の世界を創造し、\\n真の平和を手に入れた。",
            bg: "bg21",
            speed: 0.5,
            lines: 4
        }
    ]
};

// 新しいクイックシーンも追加
const newQuickScenes = {
    'hidden_lab': { index: 0, title: '隠れ研究所', branch: 'hidden_laboratory_route' },
    'brain_comm': { index: 0, title: '脳組織との対話', branch: 'communicate_with_brains' },
    'digital_transfer': { index: 0, title: 'デジタル転送', branch: 'digital_consciousness_transfer' },
    'dimension_break': { index: 0, title: '次元の裂け目', branch: 'dimensional_invasion' },
    'cyborg_form': { index: 0, title: '機械融合', branch: 'cyborg_transformation' },
    'space_launch': { index: 0, title: '宇宙進出', branch: 'space_exploration' },
    'memory_world': { index: 0, title: '記憶の世界', branch: 'memory_world_exploration' }
};

// グローバルオブジェクトに追加
Object.assign(window.storyBranches, massiveBranchExpansion);
if (typeof quickScenes !== 'undefined') {
    Object.assign(quickScenes, newQuickScenes);
}

// 分岐統計の表示
function showBranchStatistics() {
    const totalBranches = Object.keys(window.storyBranches || {}).length;
    const endingBranches = Object.keys(window.storyBranches || {}).filter(key => 
        key.includes('ending') || key.includes('_end')
    ).length;
    
    console.log('🌌 [統計] 総分岐数:', totalBranches);
    console.log('🌌 [統計] エンディング数:', endingBranches);
    console.log('🌌 [統計] 通常分岐数:', totalBranches - endingBranches);
    
    return {
        total: totalBranches,
        endings: endingBranches,
        normal: totalBranches - endingBranches
    };
}

// 初期化時に統計表示
setTimeout(() => {
    const stats = showBranchStatistics();
    if (stats.total > 80) {
        console.log('✅ [目標達成] かまいたちの夜レベルの分岐数を達成！');
    }
}, 1000);

console.log('🌌 [大規模拡張] 追加されたストーリー数:', Object.keys(massiveBranchExpansion).length);
console.log('🌌 [大規模拡張] 超大規模分岐システム構築完了');
console.log('🌌 [大規模拡張] さらなる複雑性と充実したストーリーを実現');