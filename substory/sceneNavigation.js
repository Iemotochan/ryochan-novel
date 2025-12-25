// 🗺️========== シーンナビゲーション拡張 ==========🗺️
console.log('🗺️ [シーンナビ] シーンナビゲーション拡張開始...');

// シーン一覧とクイックアクセス
let quickScenes = {
    // メインストーリー
    'main_start': { index: 0, title: 'メインストーリー開始', branch: 'main' },
    'epilogue_start': { index: 1047, title: '新たな始まり', branch: 'main' },
    'main_branch': { index: 1067, title: '最初の分岐点', branch: 'main' },
    'investigation_start': { index: 1108, title: '調査の始まり', branch: 'main' },
    'friends_suspicion': { index: 1177, title: '仲間への疑念', branch: 'main' },
    'memory_fragments': { index: 1238, title: '失われた記憶', branch: 'main' },
    
    // カゲマル分岐
    'kagemaru1': { index: 0, title: '白衣の影', branch: 'kagemaru' },
    'kagemaru_medical': { index: 5, title: '医療の闇', branch: 'kagemaru' },
    
    // サクラ分岐
    'sakura1': { index: 0, title: '霊視の迷宮', branch: 'sakura' },
    'sakura_spiritual': { index: 5, title: 'スピリチュアル真実', branch: 'sakura' },
    
    // 調査分岐
    'email_invest': { index: 0, title: 'メール調査', branch: 'email_investigation' },
    'physical_evidence': { index: 0, title: '物的証拠', branch: 'physical_evidence' },
    'human_relations': { index: 0, title: '人間関係調査', branch: 'human_relations' },
    'psychic_invest': { index: 0, title: '超能力調査', branch: 'psychic_investigation' },
    'lab_alone': { index: 0, title: '研究所単独', branch: 'lab_alone' },
    'witness_contact': { index: 0, title: '証人接触', branch: 'first_witness' },
    'deep_psychic': { index: 0, title: '深層心理', branch: 'deep_psychic_dive' },
    'memory_recovery': { index: 0, title: '記憶回復', branch: 'recover_all_memories' },
    'betrayal_felt': { index: 0, title: '裏切り感情', branch: 'betrayal_felt' },
    
    // 複雑分岐
    'prologue': { index: 0, title: '深夜の呼び出し', branch: 'prologue_investigation' },
    'rush_help': { index: 0, title: '急行ルート', branch: 'rush_to_help' },
    'cautious': { index: 0, title: '慎重な調査', branch: 'cautious_approach' },
    'betrayal': { index: 0, title: '裏切りの瞬間', branch: 'betrayal_route' },
    'amnesia': { index: 0, title: '失われた記憶', branch: 'amnesia_route' },
    'parallel': { index: 0, title: '並行世界', branch: 'parallel_world' },
    'final_battle': { index: 0, title: '最終決戦', branch: 'final_confrontation' },
    'time_loop': { index: 0, title: '永遠の輪廻', branch: 'time_loop' },
    
    // エンディング分岐
    'perfect_end': { index: 0, title: 'パーフェクトエンド', branch: 'perfect_ending_route' },
    'peaceful_end': { index: 0, title: '平和なエンディング', branch: 'peaceful_ending' }
};

// デバッグ用シーンジャンプ機能
function jumpToScene(sceneKey) {
    if (!quickScenes[sceneKey]) {
        console.error('❌ [シーンジャンプ] 無効なシーンキー:', sceneKey);
        return;
    }
    
    const scene = quickScenes[sceneKey];
    console.log('🗺️ [シーンジャンプ] ジャンプ実行:', scene.title);
    
    if (scene.branch === 'main') {
        // メインストーリーにジャンプ
        currentTextIndex = scene.index;
        clearAllText();
        setTimeout(() => showNextText(), 300);
    } else {
        // 分岐ストーリーにジャンプ
        loadBranchStory(scene.branch);
        if (scene.index > 0) {
            setTimeout(() => {
                currentTextIndex = scene.index;
                clearAllText();
                setTimeout(() => showNextText(), 300);
            }, 500);
        }
    }
}

// デバッグメニューの作成
function createDebugMenu() {
    // デバッグモードチェック
    const urlParams = new URLSearchParams(window.location.search);
    const debugMode = urlParams.get('debug') === 'true' || localStorage.getItem('ryochanDebug') === 'true';
    
    if (!debugMode) return;
    
    console.log('🛠️ [デバッグ] デバッグメニュー作成中...');
    
    const debugPanel = document.createElement('div');
    debugPanel.id = 'debugPanel';
    debugPanel.style.cssText = `
        position: fixed;
        top: 10px;
        left: 10px;
        background: rgba(0,0,0,0.9);
        border: 2px solid #00ff00;
        border-radius: 10px;
        padding: 15px;
        color: #00ff00;
        font-family: monospace;
        font-size: 12px;
        z-index: 1000;
        max-width: 300px;
        max-height: 400px;
        overflow-y: auto;
    `;
    
    debugPanel.innerHTML = `
        <div style="margin-bottom: 10px; color: #ffff00; font-weight: bold;">🛠️ DEBUG MENU</div>
        <button onclick="toggleDebugMenu()" style="margin-bottom: 10px; background: #333; color: #00ff00; border: 1px solid #00ff00; padding: 5px;">閉じる</button>
        <div style="margin-bottom: 10px;">
            <strong>クイックジャンプ:</strong>
        </div>
        <div id="sceneButtons"></div>
        <div style="margin-top: 10px;">
            <strong>フラグ操作:</strong><br>
            <button onclick="flagManager.resetFlags()" style="background: #ff0000; color: white; border: none; padding: 3px 8px; margin: 2px;">フラグリセット</button>
            <button onclick="showCurrentFlags()" style="background: #0066ff; color: white; border: none; padding: 3px 8px; margin: 2px;">フラグ表示</button>
        </div>
        <div style="margin-top: 10px;">
            <strong>システム:</strong><br>
            <button onclick="location.reload()" style="background: #666; color: white; border: none; padding: 3px 8px; margin: 2px;">リロード</button>
        </div>
    `;
    
    const sceneButtons = debugPanel.querySelector('#sceneButtons');
    Object.keys(quickScenes).forEach(key => {
        const scene = quickScenes[key];
        const btn = document.createElement('button');
        btn.textContent = scene.title;
        btn.onclick = () => jumpToScene(key);
        btn.style.cssText = `
            display: block;
            width: 100%;
            margin: 2px 0;
            padding: 3px 8px;
            background: #333;
            color: #00ff00;
            border: 1px solid #00ff00;
            border-radius: 3px;
            cursor: pointer;
            font-size: 10px;
        `;
        sceneButtons.appendChild(btn);
    });
    
    document.body.appendChild(debugPanel);
    
    // デバッグメニュー表示状態を管理
    window.debugMenuVisible = true;
}

// デバッグメニューの表示/非表示切り替え
window.toggleDebugMenu = function() {
    const debugPanel = document.getElementById('debugPanel');
    if (debugPanel) {
        if (window.debugMenuVisible) {
            debugPanel.style.display = 'none';
            window.debugMenuVisible = false;
        } else {
            debugPanel.style.display = 'block';
            window.debugMenuVisible = true;
        }
    }
};

// 現在のフラグを表示
window.showCurrentFlags = function() {
    if (typeof gameFlags === 'undefined') {
        alert('フラグシステムが初期化されていません');
        return;
    }
    
    const flagsInfo = [];
    Object.keys(gameFlags).forEach(key => {
        const value = gameFlags[key];
        if (value !== false && value !== 0) {
            flagsInfo.push(`${key}: ${value}`);
        }
    });
    
    if (flagsInfo.length === 0) {
        alert('設定されているフラグはありません');
    } else {
        alert('現在のフラグ:\n' + flagsInfo.join('\n'));
    }
};

// キーボードショートカット
document.addEventListener('keydown', function(e) {
    // Ctrl+Shift+D でデバッグメニュー表示/非表示
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        const current = localStorage.getItem('ryochanDebug') === 'true';
        localStorage.setItem('ryochanDebug', (!current).toString());
        location.reload();
    }
    
    // デバッグモードでのショートカット
    const debugMode = localStorage.getItem('ryochanDebug') === 'true';
    if (debugMode) {
        switch(e.key) {
            case 'F1':
                e.preventDefault();
                jumpToScene('main_start');
                break;
            case 'F2':
                e.preventDefault();
                jumpToScene('main_branch');
                break;
            case 'F3':
                e.preventDefault();
                jumpToScene('prologue');
                break;
            case 'F9':
                e.preventDefault();
                if (typeof flagManager !== 'undefined') {
                    flagManager.resetFlags();
                    alert('フラグをリセットしました');
                }
                break;
        }
    }
});

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    // URLパラメータまたはローカルストレージでデバッグモードをチェック
    setTimeout(() => {
        createDebugMenu();
    }, 2000);
});

console.log('🗺️ [シーンナビ] シーンナビゲーション拡張完了');
console.log('🛠️ [デバッグ] Ctrl+Shift+D でデバッグメニュー有効化');
console.log('🛠️ [デバッグ] F1-F3でクイックジャンプ、F9でフラグリセット');