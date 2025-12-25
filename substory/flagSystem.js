// 🎯========== フラグ管理システム ==========🎯
console.log('🎯 [フラグシステム] 初期化開始...');

// フラグ定義
let gameFlags = {
    // キャラクター関連フラグ
    trustedKagemaru: false,      // カゲマルを信頼した
    trustedSakura: false,        // サクラを信頼した
    doubtedKagemaru: false,      // カゲマルを疑った
    doubtedSakura: false,        // サクラを疑った
    
    // 重要選択フラグ
    investigatedMedical: false,   // 医療詐欺を調査した
    investigatedSpiritual: false, // スピリチュアル詐欺を調査した
    acceptedPower: false,         // 氣の力を受け入れた
    rejectedPower: false,         // 氣の力を拒絶した
    
    // 情報収集フラグ
    foundSecretDocument: false,   // 秘密文書を発見
    metMysteriousPerson: false,   // 謎の人物と遭遇
    learnedTruth: false,          // 真実を知った
    discoveredConspiracy: false,  // 陰謀を発見
    
    // 行動フラグ
    savedVictim: false,           // 被害者を救った
    failedToSave: false,          // 救助に失敗
    confrontedMastermind: false,  // 黒幕と対峙
    escapedDanger: false,         // 危険から逃れた
    
    // 関係性フラグ
    kagemaruRoute: false,         // カゲマルルート
    sakuraRoute: false,           // サクラルート
    soloRoute: false,             // 単独ルート
    betrayalRoute: false,         // 裏切りルート
    
    // エンディング条件フラグ
    perfectClearFlags: 0,         // パーフェクトクリア用カウンタ
    deathFlags: 0,                // バッドエンド用カウンタ
    mysteryPoints: 0,             // 謎解きポイント
    trustPoints: 0                // 信頼度ポイント
};

// フラグ操作関数
let flagManager = {
    // 安全なフラグ取得
    safeGetFlag(flagName) {
        if (typeof gameFlags === 'undefined') {
            console.warn('⚠️ [フラグ] gameFlags が初期化されていません');
            return false;
        }
        return gameFlags[flagName] || false;
    },
    // フラグをセット
    setFlag(flagName, value = true) {
        if (typeof gameFlags === 'undefined') {
            console.warn('⚠️ [フラグ] gameFlags が初期化されていません');
            return;
        }
        if (flagName in gameFlags) {
            gameFlags[flagName] = value;
            console.log(`🎯 [フラグ] ${flagName} = ${value}`);
            this.checkSpecialConditions();
            this.saveFlags();
        }
    },
    
    // フラグを取得
    getFlag(flagName) {
        return gameFlags[flagName] || false;
    },
    
    // ポイントを加算
    addPoints(pointType, amount) {
        if (typeof gameFlags === 'undefined') {
            console.warn('⚠️ [フラグ] gameFlags が初期化されていません');
            return;
        }
        if (pointType in gameFlags) {
            gameFlags[pointType] += amount;
            console.log(`🎯 [ポイント] ${pointType} += ${amount} (現在: ${gameFlags[pointType]})`);
            this.saveFlags();
        }
    },
    
    // 特殊条件をチェック
    checkSpecialConditions() {
        // 完全信頼ルート
        if (gameFlags.trustedKagemaru && gameFlags.trustedSakura && !gameFlags.doubtedKagemaru && !gameFlags.doubtedSakura) {
            gameFlags.perfectClearFlags++;
        }
        
        // 疑心暗鬼ルート
        if (gameFlags.doubtedKagemaru && gameFlags.doubtedSakura) {
            gameFlags.soloRoute = true;
        }
        
        // 真実到達条件
        if (gameFlags.investigatedMedical && gameFlags.investigatedSpiritual && gameFlags.foundSecretDocument) {
            gameFlags.learnedTruth = true;
        }
    },
    
    // フラグを保存（LocalStorage）
    saveFlags() {
        localStorage.setItem('ryochanFlags', JSON.stringify(gameFlags));
    },
    
    // フラグを読み込み
    loadFlags() {
        const saved = localStorage.getItem('ryochanFlags');
        if (saved) {
            Object.assign(gameFlags, JSON.parse(saved));
            console.log('🎯 [フラグ] セーブデータ読み込み完了');
        }
    },
    
    // フラグをリセット
    resetFlags() {
        Object.keys(gameFlags).forEach(key => {
            if (typeof gameFlags[key] === 'boolean') {
                gameFlags[key] = false;
            } else if (typeof gameFlags[key] === 'number') {
                gameFlags[key] = 0;
            }
        });
        this.saveFlags();
        console.log('🎯 [フラグ] 全フラグリセット完了');
    },
    
    // エンディング判定
    checkEndingCondition() {
        // パーフェクトエンド
        if (gameFlags.perfectClearFlags >= 3 && gameFlags.trustPoints >= 10 && gameFlags.mysteryPoints >= 8) {
            return 'perfect';
        }
        
        // トゥルーエンド
        if (gameFlags.learnedTruth && gameFlags.savedVictim && gameFlags.confrontedMastermind) {
            return 'true';
        }
        
        // グッドエンド（キャラ別）
        if (gameFlags.kagemaruRoute && gameFlags.trustedKagemaru && gameFlags.trustPoints >= 5) {
            return 'goodKagemaru';
        }
        if (gameFlags.sakuraRoute && gameFlags.trustedSakura && gameFlags.trustPoints >= 5) {
            return 'goodSakura';
        }
        
        // バッドエンド
        if (gameFlags.deathFlags >= 3 || gameFlags.betrayalRoute) {
            return 'bad';
        }
        
        // ノーマルエンド
        return 'normal';
    }
};

// 条件分岐ヘルパー関数
function checkCondition(condition) {
    if (typeof gameFlags === 'undefined') {
        console.warn('⚠️ [条件] gameFlags が初期化されていません');
        return false;
    }
    
    // 単純なフラグチェック
    if (typeof condition === 'string') {
        return flagManager.getFlag(condition);
    }
    
    // 複雑な条件式
    if (typeof condition === 'function') {
        return condition(gameFlags);
    }
    
    // 複数条件（AND）
    if (condition.and) {
        return condition.and.every(c => checkCondition(c));
    }
    
    // 複数条件（OR）
    if (condition.or) {
        return condition.or.some(c => checkCondition(c));
    }
    
    // ポイント条件
    if (condition.points) {
        const { type, operator, value } = condition.points;
        const current = gameFlags[type] || 0;
        
        switch (operator) {
            case '>=': return current >= value;
            case '>': return current > value;
            case '<=': return current <= value;
            case '<': return current < value;
            case '==': return current === value;
            default: return false;
        }
    }
    
    return false;
}

console.log('🎯 [フラグシステム] 初期化完了');