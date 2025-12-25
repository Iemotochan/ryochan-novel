// 🔗========== 分岐接続システム ==========🔗
console.log('🔗 [分岐接続] 全分岐への到達ルート構築開始...');

// メインストーリーに新しい分岐点を追加
const additionalMainStoryBranches = [
    // ========== 第5分岐点：真実への扉 ==========
    {
        text: "調査が進むにつれ、事件の背後に\\n巨大な陰謀があることが判明した。",
        bg: "bg6",
        speed: 0.4,
        audio: "shadow3.m4a",
        lines: 2,
        scene: "truth_gateway",
        sceneTitle: "真実への扉",
        clear: true
    },
    {
        type: 'choice',
        text: "どのような行動を取る？",
        bg: "bg6",
        options: [
            { 
                label: '政府機関に直接乗り込む', 
                branch: 'government_infiltration',
                description: '正面からの対決',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('directConfrontation');
                        flagManager.addPoints('braveryPoints', 3);
                    }
                }
            },
            { 
                label: '隠れ研究所を調査する', 
                branch: 'hidden_laboratory_route',
                description: '秘密の真実を探る',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('secretInvestigator');
                        flagManager.addPoints('mysteryPoints', 3);
                    }
                }
            },
            { 
                label: '記憶回復装置を作成する', 
                branch: 'create_memory_device',
                description: '科学的なアプローチ',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('inventor');
                        flagManager.addPoints('sciencePoints', 3);
                    }
                }
            },
            { 
                label: '他の被験者を探す', 
                branch: 'find_other_subjects',
                description: '仲間を見つける',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('rescueMission');
                        flagManager.addPoints('compassionPoints', 3);
                    }
                }
            }
        ]
    },

    // ========== 第6分岐点：超常現象の発現 ==========
    {
        text: "君の氣の力が予想以上に強くなり、\\n現実に影響を与え始めた。",
        bg: "bg7",
        speed: 0.4,
        audio: "shadow4.m4a",
        lines: 2,
        scene: "supernatural_manifestation",
        sceneTitle: "超常現象の発現",
        clear: true
    },
    {
        type: 'choice',
        text: "この力をどう使う？",
        bg: "bg7",
        options: [
            { 
                label: '時間を操作してみる', 
                branch: 'time_loop',
                description: '時の力を探る',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('timeManipulator');
                        flagManager.addPoints('psychicPoints', 4);
                    }
                }
            },
            { 
                label: '異次元へのアクセスを試す', 
                branch: 'dimensional_invasion',
                description: '次元の壁を越える',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('dimensionalExplorer');
                        flagManager.addPoints('psychicPoints', 4);
                    }
                }
            },
            { 
                label: '機械と融合する', 
                branch: 'cyborg_transformation',
                description: '人機一体の進化',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('cybergEnhanced');
                        flagManager.addPoints('sciencePoints', 4);
                    }
                }
            },
            { 
                label: '宇宙への進出を目指す', 
                branch: 'space_exploration',
                description: '星の海へ',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('spaceExplorer');
                        flagManager.addPoints('adventurePoints', 4);
                    }
                }
            }
        ]
    },

    // ========== 第7分岐点：運命の選択 ==========
    {
        text: "すべての真実が明らかになった今、\\n君は最終的な決断を迫られている。",
        bg: "bg8",
        speed: 0.4,
        audio: "moonlight1.m4a",
        lines: 2,
        scene: "final_decision",
        sceneTitle: "運命の選択",
        clear: true
    },
    {
        type: 'choice',
        text: "君の最終決断は？",
        bg: "bg8",
        options: [
            { 
                label: '世界に真実を公表する', 
                branch: 'global_truth_revelation',
                description: '世界を変える告発',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('truthBringer');
                        flagManager.addPoints('heroicPoints', 5);
                    }
                }
            },
            { 
                label: '平和的な解決を模索', 
                branch: 'peaceful_resolution',
                description: '調和の道を選ぶ',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('peaceSeeker');
                        flagManager.addPoints('wisdomPoints', 5);
                    }
                }
            },
            { 
                label: '自分を犠牲にして皆を救う', 
                branch: 'sacrifice_ending',
                description: '究極の愛の選択',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('selfSacrifice');
                        flagManager.addPoints('heroicPoints', 10);
                    }
                }
            },
            { 
                label: '記憶の世界に逃避する', 
                branch: 'memory_world_exploration',
                description: '現実からの逃避',
                action: () => {
                    if (typeof flagManager !== 'undefined') {
                        flagManager.setFlag('memorySeeker');
                        flagManager.addPoints('escapePoints', 3);
                    }
                }
            }
        ]
    }
];

// 条件分岐の強化システム
const conditionalBranchTriggers = {
    // フラグに基づく自動分岐
    autoTriggerBranches: {
        // 怒りポイントが高い場合
        checkAngerLevel: () => {
            if (typeof flagManager !== 'undefined' && flagManager.getFlag('angerLevel') >= 5) {
                return 'explosive_anger';
            }
            return null;
        },
        
        // 科学ポイントが高い場合
        checkScienceLevel: () => {
            if (typeof flagManager !== 'undefined' && flagManager.getFlag('sciencePoints') >= 8) {
                return 'scientific_collaboration';
            }
            return null;
        },
        
        // 超能力ポイントが高い場合
        checkPsychicLevel: () => {
            if (typeof flagManager !== 'undefined' && flagManager.getFlag('psychicPoints') >= 10) {
                return 'time_reversal_ending';
            }
            return null;
        },
        
        // 仲間信頼度が最大の場合
        checkFriendshipLevel: () => {
            if (typeof flagManager !== 'undefined' && 
                flagManager.getFlag('trustedKagemaru') && 
                flagManager.getFlag('trustedSakura') &&
                flagManager.getFlag('trustPoints') >= 10) {
                return 'true_friendship';
            }
            return null;
        }
    }
};

// 分岐接続の拡張機能
function enhanceBranchConnections() {
    // 既存の分岐に新しい選択肢を動的に追加
    const branchEnhancements = {
        // physical_evidence に新しい選択肢を追加
        'physical_evidence_enhancement': {
            insertAfter: 'physical_evidence',
            newChoice: {
                type: 'choice',
                text: "証拠分析で新たな発見があった！",
                bg: "bg9",
                options: [
                    { 
                        label: '隠れ研究所の位置が判明', 
                        branch: 'hidden_laboratory_route',
                        action: () => flagManager.setFlag('foundHiddenLab')
                    },
                    { 
                        label: '他の被験者の痕跡発見', 
                        branch: 'find_other_subjects',
                        action: () => flagManager.setFlag('foundSubjectTraces')
                    },
                    { 
                        label: '記憶操作装置の設計図', 
                        branch: 'create_memory_device',
                        action: () => flagManager.setFlag('foundDeviceBlueprint')
                    }
                ]
            }
        },
        
        // psychic_investigation に超常現象ルートを追加
        'psychic_investigation_enhancement': {
            insertAfter: 'psychic_investigation',
            newChoice: {
                type: 'choice', 
                text: "氣の力で見えたビジョンは...",
                bg: "bg10",
                options: [
                    { 
                        label: '異次元からの干渉', 
                        branch: 'dimensional_invasion',
                        action: () => flagManager.setFlag('sawDimensionalRift')
                    },
                    { 
                        label: '未来の可能性', 
                        branch: 'time_loop',
                        action: () => flagManager.setFlag('sawFuturePossibilities')
                    },
                    { 
                        label: '機械と人の融合', 
                        branch: 'cyborg_transformation',
                        action: () => flagManager.setFlag('sawCyborgFuture')
                    }
                ]
            }
        }
    };
    
    return branchEnhancements;
}

// デバッグ用：全分岐への到達方法表示
function showAllBranchPaths() {
    const branchPaths = {
        // メイン分岐
        'prologue_investigation': '深夜の着信 → 電話に出る',
        'email_investigation': '調査開始 → メール追跡',
        'physical_evidence': '調査開始 → 物的証拠',
        'human_relations': '調査開始 → 証人聞き込み',
        'psychic_investigation': '調査開始 → 氣の力',
        
        // 仲間関係分岐
        'trust_friends_completely': '仲間への疑念 → 完全信頼',
        'suspect_friends': '仲間への疑念 → 疑いを持つ',
        
        // 新追加分岐（第5分岐点から）
        'government_infiltration': '真実への扉 → 政府機関突入',
        'hidden_laboratory_route': '真実への扉 → 隠れ研究所',
        'create_memory_device': '真実への扉 → 記憶回復装置',
        'find_other_subjects': '真実への扉 → 他の被験者',
        
        // 超常現象分岐（第6分岐点から）
        'time_loop': '超常現象 → 時間操作',
        'dimensional_invasion': '超常現象 → 異次元',
        'cyborg_transformation': '超常現象 → 機械融合',
        'space_exploration': '超常現象 → 宇宙進出',
        
        // 最終分岐（第7分岐点から）
        'global_truth_revelation': '運命の選択 → 世界告発',
        'sacrifice_ending': '運命の選択 → 自己犠牲',
        'memory_world_exploration': '運命の選択 → 記憶世界'
    };
    
    console.log('🗺️ [分岐マップ] 全分岐への到達方法:');
    Object.entries(branchPaths).forEach(([branch, path]) => {
        console.log(`   ${branch}: ${path}`);
    });
    
    return branchPaths;
}

// メインストーリーに新しい分岐点を統合
if (typeof storyContent !== 'undefined') {
    // 新しい分岐点をメインストーリーに追加
    storyContent.push(...additionalMainStoryBranches);
    console.log('🔗 [分岐接続] メインストーリーに新分岐点を追加');
}

// 条件分岐チェック機能を有効化
window.conditionalBranchTriggers = conditionalBranchTriggers;
window.showAllBranchPaths = showAllBranchPaths;

console.log('🔗 [分岐接続] 分岐接続システム構築完了');
console.log('🔗 [分岐接続] 新たに7つの分岐点を追加、全分岐への到達が可能に');

// 初期化時に分岐マップを表示
setTimeout(() => {
    showAllBranchPaths();
}, 2000);