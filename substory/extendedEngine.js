// 🌙========== 拡張分岐システム関数 ==========🌙
console.log('🌙 [拡張エンジン] 拡張分岐システム初期化中...');

// ⏱️========== 時限選択システム ==========⏱️
function showTimedChoice(content) {
    console.log('⏱️ [時限選択] 開始:', content);
    isInBranchMode = true;
    currentBranchData = content;
    
    // テキストを表示
    if (content.bg) showBackground(content.bg);
    if (content.audio && audioEnabled) playAudio(content.audio);
    
    const p = document.createElement('div');
    p.className = 'text-paragraph';
    applyLinesBasedSpacing(p, content);
    textContent.appendChild(p);
    
    const speedFactor = content.speed || 0.3;
    const finalDelay = Math.max(5, Math.round(baseTypeDelay / speedFactor));
    
    typewriterShow(p, content, finalDelay, () => {
        // カウントダウンタイマーを表示
        const timerDisplay = document.createElement('div');
        timerDisplay.className = 'timed-choice-timer';
        timerDisplay.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            color: #ff0000;
            background: rgba(0,0,0,0.8);
            padding: 20px 40px;
            border-radius: 10px;
            border: 2px solid #ff0000;
            font-family: 'Yuji Syuku', serif;
            z-index: 100;
            animation: pulse 1s infinite;
        `;
        
        let timeLeft = content.timeLimit || 10;
        timerDisplay.textContent = timeLeft;
        document.body.appendChild(timerDisplay);
        
        // タイマーアニメーション
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: translate(-50%, -50%) scale(1); }
                50% { transform: translate(-50%, -50%) scale(1.1); }
                100% { transform: translate(-50%, -50%) scale(1); }
            }
        `;
        document.head.appendChild(style);
        
        // カウントダウン
        timedChoiceTimer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            
            if (timeLeft <= 3) {
                timerDisplay.style.color = '#ff0000';
                timerDisplay.style.fontSize = '4rem';
            }
            
            if (timeLeft <= 0) {
                clearInterval(timedChoiceTimer);
                timerDisplay.remove();
                style.remove();
                
                // タイムアウト時の分岐
                if (content.timeoutBranch) {
                    selectBranch(content.timeoutBranch);
                } else {
                    // デフォルトで最初の選択肢を選ぶ
                    selectBranch(content.options[0].branch);
                }
            }
        }, 1000);
        
        // 選択肢を表示
        setTimeout(() => {
            showChoiceButtons(content.options, () => {
                // 選択されたらタイマーをクリア
                if (timedChoiceTimer) {
                    clearInterval(timedChoiceTimer);
                    timerDisplay.remove();
                    style.remove();
                }
            });
        }, 300);
    });
}

// 🔍========== 条件付き選択システム ==========🔍
function showConditionalChoice(content) {
    console.log('🔍 [条件選択] 開始:', content);
    
    // 条件に合う選択肢を取得
    const availableOptions = processConditionalChoice(content);
    
    if (availableOptions.length === 0) {
        console.log('⚠️ [条件選択] 利用可能な選択肢がありません');
        // 選択肢がない場合は通常のテキストとして表示
        isInBranchMode = false;
        showTextContent(content);
        return;
    }
    
    // 通常の選択として処理
    const modifiedContent = {
        ...content,
        type: 'choice',
        options: availableOptions
    };
    
    showChoices(modifiedContent);
}

// 📋========== 複数選択システム ==========📋
function showMultiChoice(content) {
    console.log('📋 [複数選択] 開始:', content);
    isInBranchMode = true;
    currentBranchData = content;
    multiChoiceSelections = [];
    
    // テキストを表示
    if (content.bg) showBackground(content.bg);
    if (content.audio && audioEnabled) playAudio(content.audio);
    
    const p = document.createElement('div');
    p.className = 'text-paragraph';
    applyLinesBasedSpacing(p, content);
    textContent.appendChild(p);
    
    const speedFactor = content.speed || 0.3;
    const finalDelay = Math.max(5, Math.round(baseTypeDelay / speedFactor));
    
    typewriterShow(p, content, finalDelay, () => {
        // 複数選択UI
        const multiChoiceContainer = document.createElement('div');
        multiChoiceContainer.className = 'multi-choice-container';
        multiChoiceContainer.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0,0,0,0.95);
            border: 2px solid #6366F1;
            border-radius: 20px;
            padding: 30px;
            max-width: 500px;
            z-index: 100;
        `;
        
        // 説明文
        const instruction = document.createElement('div');
        instruction.style.cssText = `
            color: white;
            font-size: 1.2rem;
            margin-bottom: 20px;
            text-align: center;
            font-family: 'Noto Serif JP', serif;
        `;
        instruction.textContent = `最大${content.maxChoices || 2}つまで選択可能`;
        multiChoiceContainer.appendChild(instruction);
        
        // 選択肢
        const optionsContainer = document.createElement('div');
        optionsContainer.style.cssText = `
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        
        content.options.forEach((option, index) => {
            const checkbox = document.createElement('label');
            checkbox.style.cssText = `
                display: flex;
                align-items: center;
                padding: 15px;
                background: rgba(99,102,241,0.1);
                border: 1px solid #6366F1;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s ease;
                color: white;
                font-family: 'Noto Serif JP', serif;
            `;
            
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.value = option.id;
            input.style.cssText = `
                margin-right: 15px;
                width: 20px;
                height: 20px;
            `;
            
            input.addEventListener('change', (e) => {
                if (e.target.checked) {
                    multiChoiceSelections.push(option.id);
                    checkbox.style.background = 'rgba(99,102,241,0.3)';
                } else {
                    multiChoiceSelections = multiChoiceSelections.filter(id => id !== option.id);
                    checkbox.style.background = 'rgba(99,102,241,0.1)';
                }
                
                // 最大選択数チェック
                const checkboxes = optionsContainer.querySelectorAll('input[type="checkbox"]');
                if (multiChoiceSelections.length >= (content.maxChoices || 2)) {
                    checkboxes.forEach(cb => {
                        if (!cb.checked) cb.disabled = true;
                    });
                } else {
                    checkboxes.forEach(cb => cb.disabled = false);
                }
            });
            
            const label = document.createElement('span');
            label.textContent = option.label;
            
            checkbox.appendChild(input);
            checkbox.appendChild(label);
            optionsContainer.appendChild(checkbox);
        });
        
        multiChoiceContainer.appendChild(optionsContainer);
        
        // 決定ボタン
        const confirmButton = document.createElement('button');
        confirmButton.textContent = '決定';
        confirmButton.style.cssText = `
            margin-top: 20px;
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #6366F1 0%, #a5b4fc 100%);
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            font-family: 'Noto Serif JP', serif;
            transition: all 0.3s ease;
        `;
        
        confirmButton.addEventListener('click', () => {
            if (multiChoiceSelections.length === 0) {
                alert('少なくとも1つ選択してください');
                return;
            }
            
            // 選択結果に基づいて分岐を決定
            const selectionKey = multiChoiceSelections.sort().join(',');
            const branch = content.consequences[selectionKey] || content.consequences['default'];
            
            // 選択肢のアクションを実行
            multiChoiceSelections.forEach(id => {
                const option = content.options.find(opt => opt.id === id);
                if (option && option.action) {
                    option.action();
                }
            });
            
            multiChoiceContainer.remove();
            selectBranch(branch);
        });
        
        multiChoiceContainer.appendChild(confirmButton);
        document.body.appendChild(multiChoiceContainer);
        
        // タイムリミットがある場合
        if (content.timeLimit) {
            let timeLeft = content.timeLimit;
            const timerDisplay = document.createElement('div');
            timerDisplay.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                color: #ff0000;
                font-size: 1.5rem;
                font-family: 'Yuji Syuku', serif;
            `;
            timerDisplay.textContent = timeLeft;
            multiChoiceContainer.appendChild(timerDisplay);
            
            const timer = setInterval(() => {
                timeLeft--;
                timerDisplay.textContent = timeLeft;
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    multiChoiceContainer.remove();
                    selectBranch(content.consequences['default'] || content.consequences[Object.keys(content.consequences)[0]]);
                }
            }, 1000);
        }
    });
}

// 🏁========== エンディングノード処理 ==========🏁
function showEndingNode(content) {
    console.log('🏁 [エンディング] 処理開始:', content);
    
    // エンディングタイプを記録
    if (content.endingType) {
        flagManager.setFlag('reachedEnding', true);
        flagManager.setFlag(`ending_${content.endingType}`, true);
        
        // エンディング実績を追加
        if (typeof endingCollection !== 'undefined') {
            endingCollection.addEnding(content.endingType);
        }
    }
    
    // テキストを表示
    if (content.bg) showBackground(content.bg);
    if (content.audio && audioEnabled) playAudio(content.audio);
    
    const p = document.createElement('div');
    p.className = 'text-paragraph ending-text';
    p.style.cssText = `
        text-align: center;
        font-size: 1.5rem;
        color: #ffd700;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    `;
    applyLinesBasedSpacing(p, content);
    textContent.appendChild(p);
    
    const speedFactor = content.speed || 0.1;
    const finalDelay = Math.max(5, Math.round(baseTypeDelay / speedFactor));
    
    typewriterShow(p, content, finalDelay, () => {
        setTimeout(() => {
            showEndingModal(content);
        }, 2000);
    });
}

// 🎭========== エンディングモーダル ==========🎭
function showEndingModal(content) {
    const modal = document.createElement('div');
    modal.className = 'ending-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 200;
        opacity: 0;
        transition: opacity 1s ease;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        border: 3px solid #ffd700;
        border-radius: 20px;
        padding: 40px;
        max-width: 600px;
        text-align: center;
        color: white;
        font-family: 'Noto Serif JP', serif;
        box-shadow: 0 0 50px rgba(255,215,0,0.5);
    `;
    
    // エンディングタイトル
    const title = document.createElement('h2');
    title.style.cssText = `
        font-size: 2.5rem;
        color: #ffd700;
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    `;
    title.textContent = endingTypes[content.endingType]?.title || 'Ending';
    modalContent.appendChild(title);
    
    // エンディング説明
    const description = document.createElement('p');
    description.style.cssText = `
        font-size: 1.2rem;
        line-height: 1.8;
        margin-bottom: 30px;
        color: rgba(255,255,255,0.9);
    `;
    description.textContent = endingTypes[content.endingType]?.description || '';
    modalContent.appendChild(description);
    
    // 実績解除
    if (content.unlockables) {
        const unlocks = document.createElement('div');
        unlocks.style.cssText = `
            margin: 20px 0;
            padding: 20px;
            background: rgba(99,102,241,0.2);
            border-radius: 10px;
            border: 1px solid #6366F1;
        `;
        unlocks.innerHTML = `
            <div style="color: #a5b4fc; font-size: 1.1rem; margin-bottom: 10px;">🏆 解除された要素:</div>
            ${content.unlockables.map(item => `<div style="color: white;">✓ ${item}</div>`).join('')}
        `;
        modalContent.appendChild(unlocks);
    }
    
    // 達成率
    if (typeof endingCollection !== 'undefined') {
        const completion = document.createElement('div');
        completion.style.cssText = `
            margin: 20px 0;
            font-size: 1.1rem;
            color: #a5b4fc;
        `;
        completion.textContent = `エンディング達成率: ${endingCollection.getCompletionRate()}%`;
        modalContent.appendChild(completion);
    }
    
    // ボタンコンテナ
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 30px;
    `;
    
    // タイトルに戻るボタン
    const titleButton = document.createElement('button');
    titleButton.textContent = 'タイトルに戻る';
    titleButton.style.cssText = `
        padding: 15px 30px;
        background: linear-gradient(135deg, #6366F1 0%, #a5b4fc 100%);
        border: none;
        border-radius: 25px;
        color: white;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Noto Serif JP', serif;
    `;
    titleButton.addEventListener('click', () => {
        location.reload();
    });
    
    // もう一度プレイボタン
    const replayButton = document.createElement('button');
    replayButton.textContent = 'もう一度プレイ';
    replayButton.style.cssText = `
        padding: 15px 30px;
        background: transparent;
        border: 2px solid #ffd700;
        border-radius: 25px;
        color: #ffd700;
        font-size: 1.1rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Noto Serif JP', serif;
    `;
    replayButton.addEventListener('click', () => {
        flagManager.resetFlags();
        location.reload();
    });
    
    buttonContainer.appendChild(titleButton);
    buttonContainer.appendChild(replayButton);
    modalContent.appendChild(buttonContainer);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // フェードイン
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 100);
}

// 🔄========== 既存の分岐システムとの統合 ==========🔄
function integrateWithExistingSystem() {
    // 既存のselectBranch関数を拡張
    const originalSelectBranch = window.selectBranch;
    
    window.selectBranch = function(branchName) {
        console.log('🔄 [統合] 分岐選択:', branchName);
        
        // 分岐履歴を記録
        if (typeof gameFlags !== 'undefined') {
            branchHistory.push({
                from: currentBranchName,
                to: branchName,
                timestamp: Date.now(),
                flags: JSON.parse(JSON.stringify(gameFlags))
            });
        }
        
        currentBranchName = branchName;
        
        // オリジナルの処理を実行
        if (originalSelectBranch) {
            originalSelectBranch(branchName);
        } else {
            // フォールバック処理
            loadBranchStory(branchName);
        }
    };
    
    // showUnlockModal関数が不足している場合の追加
    if (typeof window.showUnlockModal === 'undefined') {
        window.showUnlockModal = function(unlockType) {
            console.log('🎁 [アンロック] モーダル表示:', unlockType);
            alert(`🎁 ${unlockType} をアンロックしました！`);
        };
    }
}

// 📚========== 分岐ストーリー読み込み ==========📚
function loadBranchStory(branchName) {
    console.log('📚 [読み込み] 分岐ストーリー:', branchName);
    
    // 複雑な分岐を優先的にチェック
    let branchContent = null;
    
    if (typeof complexStoryBranches !== 'undefined' && complexStoryBranches[branchName]) {
        branchContent = complexStoryBranches[branchName];
        console.log('🌙 [読み込み] 複雑な分岐ストーリーを使用');
    } else if (typeof additionalBranches !== 'undefined' && additionalBranches[branchName]) {
        branchContent = additionalBranches[branchName];
        console.log('🌸 [読み込み] 追加分岐ストーリーを使用');
    } else if (typeof window.storyBranches !== 'undefined' && window.storyBranches[branchName]) {
        branchContent = window.storyBranches[branchName];
        console.log('🌿 [読み込み] 基本分岐ストーリーを使用');
    }
    
    if (branchContent) {
        // 既存のテキストをクリア
        textContent.innerHTML = '';
        
        // 分岐ストーリーを設定
        currentTextIndex = 0;
        storyContent = branchContent;
        
        // 分岐モードを解除
        isInBranchMode = false;
        choiceElements = [];
        
        // ストーリーを開始
        showNextText();
    } else {
        console.error('❌ [読み込み] 分岐ストーリーが見つかりません:', branchName);
    }
}

// 初期化時に統合
function initializeExtendedSystem() {
    // フラグシステム初期化
    if (typeof flagManager !== 'undefined') {
        flagManager.loadFlags();
        console.log('🎯 [初期化] フラグシステム読み込み完了');
    }
    
    // エンディングコレクション初期化
    if (typeof endingCollection !== 'undefined') {
        endingCollection.loadProgress();
        console.log('🏁 [初期化] エンディングコレクション読み込み完了');
    }
    
    // 既存システムとの統合
    integrateWithExistingSystem();
    
    console.log('🌙 [初期化] 拡張システム初期化完了');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExtendedSystem);
} else {
    initializeExtendedSystem();
}

console.log('🌙 [拡張エンジン] 拡張分岐システム初期化完了');