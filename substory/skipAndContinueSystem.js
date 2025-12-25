// ⚡========== スキップ&継続システム ==========⚡
console.log('⚡ [スキップ] スキップ&継続システム構築開始...');

// スキップ機能の強化
let skipMode = false;
let skipSpeed = 10; // スキップ時の速度（ミリ秒）
let autoSkipToChoice = false;

// クリアフラグ管理
let clearedBranches = new Set();
let hasReachedMainBranching = false;

// キーボードショートカット
document.addEventListener('keydown', function(e) {
    // Spaceキーでスキップモード切り替え
    if (e.code === 'Space') {
        e.preventDefault();
        toggleSkipMode();
    }
    
    // Ctrl+Sで選択肢まで自動スキップ
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        startAutoSkipToChoice();
    }
    
    // Escapeでスキップ停止
    if (e.code === 'Escape') {
        e.preventDefault();
        stopAllSkipping();
    }
});

// スキップモード切り替え
function toggleSkipMode() {
    skipMode = !skipMode;
    
    const skipIndicator = document.getElementById('skipIndicator') || createSkipIndicator();
    
    if (skipMode) {
        skipIndicator.style.display = 'block';
        skipIndicator.innerHTML = '⚡ SKIP モード (Space: 解除)';
        console.log('⚡ [スキップ] スキップモード開始');
        
        // スキップモードでの高速テキスト表示
        if (typeof showNextText === 'function') {
            const originalDelay = baseTypeDelay;
            baseTypeDelay = 1; // 超高速
            
            // 自動で次のテキストを表示
            const skipInterval = setInterval(() => {
                if (!skipMode) {
                    clearInterval(skipInterval);
                    baseTypeDelay = originalDelay;
                    return;
                }
                
                // 選択肢に到達したらスキップ停止
                if (currentTextIndex < storyContent.length && 
                    storyContent[currentTextIndex]?.type === 'choice') {
                    stopSkipMode();
                    clearInterval(skipInterval);
                    return;
                }
                
                showNextText();
            }, skipSpeed);
        }
    } else {
        skipIndicator.style.display = 'none';
        console.log('⚡ [スキップ] スキップモード終了');
    }
}

// スキップインジケーター作成
function createSkipIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'skipIndicator';
    indicator.style.cssText = `
        position: fixed;
        top: 60px;
        left: 20px;
        background: rgba(255, 0, 0, 0.8);
        color: white;
        padding: 10px 15px;
        border-radius: 20px;
        font-family: 'Noto Serif JP', serif;
        font-weight: bold;
        z-index: 999;
        display: none;
        animation: pulse 2s infinite;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(indicator);
    
    return indicator;
}

// 選択肢まで自動スキップ
function startAutoSkipToChoice() {
    autoSkipToChoice = true;
    const indicator = document.getElementById('skipIndicator') || createSkipIndicator();
    indicator.style.display = 'block';
    indicator.style.background = 'rgba(0, 150, 255, 0.8)';
    indicator.innerHTML = '🎯 選択肢まで自動スキップ中... (Esc: 停止)';
    
    console.log('🎯 [自動スキップ] 選択肢まで自動スキップ開始');
    
    const autoSkipInterval = setInterval(() => {
        if (!autoSkipToChoice) {
            clearInterval(autoSkipInterval);
            return;
        }
        
        // 選択肢に到達チェック
        if (currentTextIndex < storyContent.length && 
            storyContent[currentTextIndex]?.type === 'choice') {
            autoSkipToChoice = false;
            indicator.style.display = 'none';
            console.log('🎯 [自動スキップ] 選択肢に到達、停止');
            clearInterval(autoSkipInterval);
            return;
        }
        
        // メインの分岐点に到達チェック
        if (currentTextIndex >= 1067) { // 深夜の着信
            autoSkipToChoice = false;
            indicator.style.display = 'none';
            hasReachedMainBranching = true;
            console.log('🎯 [自動スキップ] メイン分岐に到達、停止');
            clearInterval(autoSkipInterval);
            return;
        }
        
        if (typeof showNextText === 'function') {
            showNextText();
        }
    }, 50); // 20倍速スキップ
}

// スキップ停止
function stopSkipMode() {
    skipMode = false;
    const indicator = document.getElementById('skipIndicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

function stopAllSkipping() {
    skipMode = false;
    autoSkipToChoice = false;
    const indicator = document.getElementById('skipIndicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
    console.log('⚡ [スキップ] 全スキップ機能停止');
}

// カフェ選択肢の拡張：短い分岐の後に継続
function enhanceCafeBranches() {
    // spiritual分岐の最後に継続選択肢を追加
    if (typeof storyBranches !== 'undefined' && storyBranches.spiritual) {
        const spiritualBranch = storyBranches.spiritual;
        
        // 最後のエントリを修正
        const lastIndex = spiritualBranch.length - 1;
        if (spiritualBranch[lastIndex]?.text?.includes('スピリチュアル詐欺編 完')) {
            // Good endの代わりに継続選択肢を追加
            spiritualBranch[lastIndex] = {
                text: "スピリチュアル詐欺を解決した夜。\\n事件は解決したが、これは始まりに過ぎなかった。",
                bg: "bg12",
                speed: 0.4,
                audio: "moonlight1.m4a",
                lines: 2,
                clear: true
            };
            
            spiritualBranch.push({
                type: 'choice',
                text: "この事件をきっかけに、\\n君は大きな陰謀の存在を感じ取った。\\n\\nどうする？",
                bg: "bg13",
                lines: 3,
                options: [
                    { 
                        label: '本格的な調査を開始する', 
                        branch: 'main_continue',
                        description: 'より深い真実を追求...',
                        action: () => {
                            if (typeof flagManager !== 'undefined') {
                                flagManager.setFlag('spiritualCaseCleared');
                                flagManager.addPoints('mysteryPoints', 2);
                            }
                        }
                    },
                    { 
                        label: '平穏な日常に戻る', 
                        branch: 'peaceful_ending',
                        description: '事件は終わり、平和を選ぶ...'
                    },
                    { 
                        label: '他の事件も調査してみる', 
                        branch: 'side_investigations',
                        description: '街に隠れる他の問題を探る...',
                        action: () => {
                            if (typeof flagManager !== 'undefined') {
                                flagManager.setFlag('serialInvestigator');
                            }
                        }
                    }
                ]
            });
        }
    }
    
    // medical分岐も同様に拡張
    if (typeof storyBranches !== 'undefined' && storyBranches.medical) {
        const medicalBranch = storyBranches.medical;
        
        // 最後に継続選択肢を追加（同様の処理）
        medicalBranch.push({
            text: "医療詐欺を解決した後...\\n君は更なる真実の存在を感じていた。",
            bg: "bg14",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            clear: true
        });
        
        medicalBranch.push({
            type: 'choice',
            text: "この体験が君を変えた。\\n次は何をするべきか？",
            bg: "bg14",
            lines: 2,
            options: [
                { 
                    label: '深層の陰謀を調査する', 
                    branch: 'main_continue',
                    description: '真の敵を見つけ出す...',
                    action: () => {
                        if (typeof flagManager !== 'undefined') {
                            flagManager.setFlag('medicalCaseCleared');
                            flagManager.addPoints('mysteryPoints', 2);
                        }
                    }
                },
                { 
                    label: '同じような詐欺を探す', 
                    branch: 'side_investigations',
                    description: '街の闇をさらに暴く...'
                },
                { 
                    label: '力を鍛える', 
                    branch: 'power_training',
                    description: '氣の力をより深く理解する...'
                }
            ]
        });
    }
}

// メイン継続ブランチの作成
const mainContinueBranch = {
    main_continue: [
        {
            text: "君は真実を追求することを決めた。\\nカフェでの事件は氷山の一角だった。",
            bg: "bg1",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            scene: "main_transition",
            sceneTitle: "真実への道",
            clear: true
        },
        {
            text: "その夜、携帯電話が鳴った。\\n深夜2時。発信者不明。",
            bg: "bg14",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2
        },
        {
            text: "これが、すべての始まりとなる\\n運命の電話だった。",
            bg: "bg14",
            speed: 0.3,
            lines: 2
        },
        {
            type: 'jumpTo',
            target: 1067, // 深夜の着信シーンへジャンプ
            action: () => {
                console.log('🔗 [継続] メイン分岐へ接続');
                hasReachedMainBranching = true;
            }
        }
    ],
    
    side_investigations: [
        {
            text: "君は街に潜む他の問題を\\n調査することにした。",
            bg: "bg2",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "数週間後、より大きな陰謀の\\n存在を確信するに至った。",
            bg: "bg3",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'jumpTo',
            target: 1067 // メイン分岐へ
        }
    ],
    
    power_training: [
        {
            text: "君は氣の力を鍛えることにした。\\n修行の日々が始まる。",
            bg: "bg4",
            speed: 0.4,
            lines: 2,
            clear: true
        },
        {
            text: "力が強くなった時、\\n新たな事件の知らせが届いた。",
            bg: "bg5",
            speed: 0.4,
            lines: 2
        },
        {
            type: 'jumpTo',
            target: 1067 // メイン分岐へ
        }
    ]
};

// jumpTo機能の実装
function executeJumpTo(target) {
    if (typeof target === 'number') {
        // メインストーリーの特定行にジャンプ
        currentTextIndex = target;
        isInBranchMode = false;
        currentBranchName = 'main';
        
        // テキストをクリアして新しい位置から開始
        if (typeof clearAllText === 'function') {
            clearAllText();
        }
        
        setTimeout(() => {
            if (typeof showNextText === 'function') {
                showNextText();
            }
        }, 300);
        
        console.log('🚀 [ジャンプ] メインストーリー', target, '行目にジャンプ');
    }
}

// 分岐システムにjumpTo機能を追加
if (typeof window !== 'undefined') {
    window.executeJumpTo = executeJumpTo;
}

// グローバルに追加
if (typeof storyBranches !== 'undefined') {
    Object.assign(storyBranches, mainContinueBranch);
} else if (typeof window !== 'undefined' && window.storyBranches) {
    Object.assign(window.storyBranches, mainContinueBranch);
}

// UI作成
function createSkipUI() {
    const skipUI = document.createElement('div');
    skipUI.id = 'skipUI';
    skipUI.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 15px;
        border-radius: 10px;
        font-family: 'Noto Serif JP', serif;
        font-size: 14px;
        z-index: 100;
        border: 1px solid #6366F1;
    `;
    
    skipUI.innerHTML = `
        <div style="margin-bottom: 10px; color: #6366F1; font-weight: bold;">⚡ スキップ操作</div>
        <div>Space: スキップモード</div>
        <div>Ctrl+S: 選択肢まで自動スキップ</div>
        <div>Esc: 停止</div>
    `;
    
    document.body.appendChild(skipUI);
}

// 初期化
setTimeout(() => {
    enhanceCafeBranches();
    createSkipUI();
    console.log('⚡ [スキップ] スキップ&継続システム構築完了');
    console.log('⚡ [スキップ] Space: スキップ, Ctrl+S: 選択肢まで自動スキップ');
}, 1000);

console.log('⚡ [スキップ] スキップ&継続システム初期化完了');