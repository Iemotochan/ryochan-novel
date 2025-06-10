// ========== RYO-CHAN's Adventure - Perfect Space Engine v5.0 ========== 
console.log('🚀 [ENGINE] Perfect Space Engine v5.0 Initializing...');

// ========== Core Variables (Enhanced Edition) ========== 
const MAX_PARAGRAPHS = 15;
let currentTextIndex = 0, isAutoMode = false, autoModeTimer = null, isMuted = false, baseTypeDelay = 30, isTyping = false;
let typingTimeout = null;
let audioVolume = 0.5;
let textHistory = [], bgHistory = [], audioHistory = [];
let audioEnabled = false, firstInteraction = false;
let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

// ========== Enhanced Audio State Management ========== 
let loadingAudioEnabled = false;
let isLoadingPhase = true;
let loadingAudioButton = null;

// 🗺️========== シーンマッピングシステム ==========🗺️
let sceneMap = {};
let sceneList = [];
let currentSceneIndex = 1;
let storyInitialized = false;

// 🔊========== 【シンプル】ラジカセ一台理論音声システム ==========🔊
let isSceneSkipping = false;
let lastSceneSkipTime = 0;

// 🎵========== ラジカセ（一台のみ存在） ==========🎵
let radioCassette = null; // 世界に一台のラジカセ
let currentAudioFile = null;

// 🎵========== 【新機能】プリロードシステム ==========🎵
let preloadedAudio = null; // プリロード用音声
let preloadedAudioFile = null; // プリロード済み音声ファイル名
let preloadTimer = null; // プリロードタイマー
let isPreloadingCancelled = false; // プリロードキャンセルフラグ

// 🎵========== 音声切り替えプロンプトシステム ==========🎵
let audioSwitchPrompt = null;
let pendingAudioSwitch = null;
let isWaitingForAudioSwitchTouch = false;
let audioSwitchParticles = [];

// 🔇========== ミュート状態永続化システム ==========🔇
let muteStateInitialized = false;

// ========== Touch Control Variables ========== 
let touchStartTime = 0;
let touchStartX = 0;
let touchStartY = 0;
let lastTapTime = 0;
let isTouch = false;

// ========== DOM Elements ========== 
const textContainer = document.getElementById('textContainer'), textContent = document.getElementById('textContent');
const titleScreen = document.getElementById('titleScreen'), loadingContainer = document.getElementById('loadingContainer');
const titleBgVideo = document.getElementById('titleBgVideo');
const novelContainer = document.getElementById('novelContainer');
const audioNotice = document.getElementById('audioNotice');
const muteButton = document.getElementById('muteButton'), autoButton = document.getElementById('autoButton'), hideTextButton = document.getElementById('hideTextButton');
const backSceneButton = document.getElementById('backSceneButton'), forwardSceneButton = document.getElementById('forwardSceneButton');
const settingsButton = document.getElementById('settingsButton'), settingsPanel = document.getElementById('settingsPanel');
const fontSizeRange = document.getElementById('fontSizeRange'), fontSizeValue = document.getElementById('fontSizeValue');

let currentBgId = null;
let currentTextPosition = 'center';

console.log('🔍 [ENGINE] Device detection - iOS:', isIOS);

// ========== 🚨 PERFECT FIX: Ultimate Space System (No HTML Entities) ========== 
function perfectSpaceNormalization(text) {
    if (!text) return text;
    
    // Step 1: 基本的な正規化（スペースをそのまま保持）
    let normalized = text
        .replace(/\.(?!\s)/g, '. ')      // ピリオド後にスペースがない場合のみ追加
        .replace(/\?(?!\s)/g, '? ')      // クエスチョン後にスペースがない場合のみ追加
        .replace(/!(?!\s)/g, '! ')       // エクスクラメーション後にスペースがない場合のみ追加
        .replace(/,(?!\s)/g, ', ')       // カンマ後にスペースがない場合のみ追加
        .replace(/;(?!\s)/g, '; ')       // セミコロン後にスペースがない場合のみ追加
        .replace(/\)(?!\s)/g, ') ')      // 閉じ括弧後にスペースがない場合のみ追加
        .replace(/\s{2,}/g, ' ')         // 複数スペースを単一スペースに
        .trim();
    
    // 🚨 重要: HTMLエンティティは使わず、スペースをそのまま保持
    return normalized;
}

// ========== 🚨 CSS アニメーション確保システム ========== 
function ensurePromptAnimations() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes promBgGlow {
            0% { opacity: 0.2; transform: scale(1); }
            100% { opacity: 0.4; transform: scale(1.02); }
        }
        @keyframes musicFloat {
            0% { transform: translateY(0px) rotate(-5deg); }
            100% { transform: translateY(-8px) rotate(5deg); }
        }
        @keyframes musicPulse {
            0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        @keyframes textShimmer {
            0% { filter: brightness(1); }
            100% { filter: brightness(1.2); }
        }
        @keyframes subTextPulse {
            0% { opacity: 0.6; }
            100% { opacity: 1; }
        }
        @keyframes pointFinger {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        @keyframes touchRipple {
            0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }
        @keyframes borderRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

    if (!document.head.querySelector('style[data-prompt-animations]')) {
        styleSheet.setAttribute('data-prompt-animations', 'true');
        document.head.appendChild(styleSheet);
        console.log('✅ [Prompt] Animation styles ensured');
    }
}

// ========== 🎵 Audio Switch Prompt System ========== 
function checkAutoModeAudioSwitch(currentContent, nextContent) {
    console.log('🔍 [Audio Switch Check] === DEBUG START ===');
    console.log('  - isAutoMode:', isAutoMode);
    console.log('  - isWaitingForAudioSwitchTouch:', isWaitingForAudioSwitchTouch);
    console.log('  - nextContent exists:', !!nextContent);

    if (!isAutoMode || !nextContent) {
        console.log('🚫 [Audio Switch Check] Conditions not met, exiting');
        return false;
    }

    if (isWaitingForAudioSwitchTouch) {
        console.log('🚫 [Audio Switch Check] Already waiting, skipping');
        return false;
    }

    const currentAudio = currentContent.audio;
    
    // 次の音声を持つコンテンツを探す（clearオブジェクトをスキップ）
    let nextAudio = null;
    let searchIndex = currentTextIndex + 1;
    
    while (searchIndex < storyContent.length) {
        const content = storyContent[searchIndex];
        if (content && content.audio) {
            nextAudio = content.audio;
            break;
        }
        searchIndex++;
    }

    console.log('  - Current audio:', currentAudio);
    console.log('  - Next audio found at index', searchIndex, ':', nextAudio);

    if (nextAudio && nextAudio !== currentAudio) {
        console.log('🎵 [Audio Switch Check] *** AUDIO SWITCH DETECTED ***');
        
        ensurePromptAnimations();
        pauseAutoModeForAudioSwitch();
        pendingAudioSwitch = nextAudio;
        
        console.log('🎵 [Audio Switch Check] Calling showAudioSwitchPrompt...');
        try {
            showAudioSwitchPrompt();
            console.log('✅ [Audio Switch Check] showAudioSwitchPrompt called successfully');
        } catch (error) {
            console.error('❌ [Audio Switch Check] Error in showAudioSwitchPrompt:', error);
        }

        console.log('🔍 [Audio Switch Check] === DEBUG END ===');
        return true;
    }

    console.log('➡️ [Audio Switch Check] No audio change, continuing normally');
    console.log('🔍 [Audio Switch Check] === DEBUG END ===');
    return false;
}

function pauseAutoModeForAudioSwitch() {
    if (autoModeTimer) {
        clearTimeout(autoModeTimer);
        autoModeTimer = null;
    }
    isWaitingForAudioSwitchTouch = true;
    console.log('⏸️ [Auto Mode] Paused for audio switch');
}

function showAudioSwitchPrompt() {
    console.log('🎵 [Prompt] Starting audio switch prompt display');

    if (audioSwitchPrompt) {
        console.log('🗑️ [Prompt] Removing existing prompt');
        hideAudioSwitchPrompt();
    }

    try {
        console.log('🎵 [Prompt] Creating audio switch prompt element');

        audioSwitchPrompt = document.createElement('div');
        audioSwitchPrompt.className = 'audio-switch-prompt';

        audioSwitchPrompt.style.cssText = `
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) scale(0.7) !important;
            background: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,20,40,0.95) 100%) !important;
            border: 2px solid #6366F1 !important;
            border-radius: 25px !important;
            padding: 30px 40px !important;
            z-index: 9999 !important;
            cursor: pointer !important;
            opacity: 0 !important;
            transition: all 0.7s cubic-bezier(0.4, 0.0, 0.2, 1) !important;
            backdrop-filter: blur(10px) !important;
            box-shadow: 0 20px 60px rgba(99,102,241,0.3), 0 0 80px rgba(99,102,241,0.2) !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
            color: white !important;
            text-align: center !important;
            min-width: 300px !important;
        `;

        audioSwitchPrompt.innerHTML = `
            <div style="
                position: absolute;
                top: -10px; left: -10px; right: -10px; bottom: -10px;
                background: linear-gradient(45deg, #6366F1, #a5b4fc, #6366F1);
                border-radius: 30px;
                opacity: 0.3;
                z-index: -1;
                animation: promBgGlow 3s ease-in-out infinite alternate;
            "></div>

            <div style="text-align: center; color: white; position: relative; z-index: 1;">
                <div style="position: relative; display: inline-block; margin-bottom: 15px;">
                    <div style="
                        font-size: 3rem;
                        display: block;
                        animation: musicFloat 2s ease-in-out infinite alternate;
                        filter: drop-shadow(0 0 20px #6366F1);
                    ">🎵</div>
                    <div style="
                        position: absolute;
                        top: 50%; left: 50%;
                        width: 80px; height: 80px;
                        border: 3px solid #6366F1;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        animation: musicPulse 2s ease-out infinite;
                    "></div>
                </div>

                <div style="
                    font-size: 1.3rem;
                    font-weight: 700;
                    margin-bottom: 8px;
                    background: linear-gradient(45deg, #FFD700, #FFA500);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: textShimmer 3s ease-in-out infinite alternate;
                ">Scene is Changing</div>

                <div style="
                    font-size: 0.95rem;
                    color: rgba(255,255,255,0.8);
                    margin-bottom: 20px;
                    animation: subTextPulse 2s ease-in-out infinite alternate;
                ">Touch to Continue</div>

                <div style="
                    position: relative;
                    width: 60px; height: 60px;
                    margin: 0 auto;
                    border: 2px solid rgba(99,102,241,0.5);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                    <div style="font-size: 1.5rem; animation: pointFinger 1.5s ease-in-out infinite;">👆</div>
                    <div style="
                        position: absolute;
                        top: 50%; left: 50%;
                        width: 40px; height: 40px;
                        border: 2px solid #6366F1;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        animation: touchRipple 2s ease-out infinite;
                    "></div>
                    <div style="
                        position: absolute;
                        top: 50%; left: 50%;
                        width: 40px; height: 40px;
                        border: 2px solid #6366F1;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        animation: touchRipple 2s ease-out infinite;
                        animation-delay: 0.5s;
                    "></div>
                </div>
            </div>

            <div style="
                position: absolute;
                top: -2px; left: -2px; right: -2px; bottom: -2px;
                background: linear-gradient(45deg, transparent, #6366F1, transparent, #a5b4fc, transparent, #6366F1, transparent);
                border-radius: 27px;
                z-index: -1;
                animation: borderRotate 4s linear infinite;
            "></div>
        `;

        console.log('✅ [Prompt] Audio switch prompt element created');

        document.body.appendChild(audioSwitchPrompt);
        console.log('✅ [Prompt] Audio switch prompt added to DOM');

        audioSwitchPrompt.addEventListener('click', handleAudioSwitchTouch);
        audioSwitchPrompt.addEventListener('touchend', handleAudioSwitchTouch);
        console.log('✅ [Prompt] Event listeners attached');

        startAudioSwitchParticles();
        console.log('✅ [Prompt] Particle effects started');

        setTimeout(() => {
            if (audioSwitchPrompt && document.body.contains(audioSwitchPrompt)) {
                console.log('🎬 [Prompt] Starting fade-in animation');
                audioSwitchPrompt.style.opacity = '1';
                audioSwitchPrompt.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        }, 100);

        setTimeout(() => {
            if (audioSwitchPrompt && document.body.contains(audioSwitchPrompt)) {
                console.log('⏰ [Prompt] Auto-timeout after 5 seconds');
                handleAudioSwitchTouch({ 
                    stopPropagation: () => {}, 
                    preventDefault: () => {}, 
                    clientX: window.innerWidth / 2, 
                    clientY: window.innerHeight / 2 
                });
            }
        }, 5000);

    } catch (error) {
        console.error('❌ [Prompt] Error creating audio switch prompt:', error);
        setTimeout(() => {
            if (confirm('🎵 Scene is changing. Touch OK to continue.')) {
                executeAudioSwitchAndResume();
            }
        }, 100);
    }
}

function handleAudioSwitchTouch(e) {
    e.stopPropagation();
    e.preventDefault();
    
    if (!isWaitingForAudioSwitchTouch) return;

    console.log('✅ [Audio Switch] User interaction acquired');

    createTouchExplosion(
        e.clientX || e.changedTouches?.[0]?.clientX || window.innerWidth/2,
        e.clientY || e.changedTouches?.[0]?.clientY || window.innerHeight/2
    );

    hideAudioSwitchPrompt();

    setTimeout(() => {
        executeAudioSwitchAndResume();
    }, 300);
}

function hideAudioSwitchPrompt() {
    if (!audioSwitchPrompt) return;

    console.log('🎵 [Prompt] Hiding audio switch prompt');
    audioSwitchPrompt.classList.add('fade-out');
    stopAudioSwitchParticles();

    setTimeout(() => {
        if (audioSwitchPrompt && document.body.contains(audioSwitchPrompt)) {
            document.body.removeChild(audioSwitchPrompt);
        }
        audioSwitchPrompt = null;
    }, 600);
}

function executeAudioSwitchAndResume() {
    console.log('🔄 [Audio Switch Execute] Starting');

    if (pendingAudioSwitch) {
        console.log('🎵 [Audio Switch Execute] Switching audio:', pendingAudioSwitch);
        playAudio(pendingAudioSwitch);
        pendingAudioSwitch = null;
    }

    isWaitingForAudioSwitchTouch = false;
    console.log('✅ [Audio Switch Execute] Flags reset complete');

    setTimeout(() => {
        if (isAutoMode) {
            console.log('▶️ [Audio Switch Execute] Auto mode resuming');
            autoModeTimer = setTimeout(nextStory, 1200);
        }
    }, 400);
}

function resetAudioSwitchFlags() {
    console.log('🚨 [Emergency Reset] Force resetting audio switch flags');
    isWaitingForAudioSwitchTouch = false;
    pendingAudioSwitch = null;

    if (audioSwitchPrompt) {
        hideAudioSwitchPrompt();
    }
}

// Particle effect system
function startAudioSwitchParticles() {
    audioSwitchParticles = [];

    function createParticle() {
        if (!audioSwitchPrompt || !document.body.contains(audioSwitchPrompt)) return;

        const particle = document.createElement('div');
        particle.className = 'audio-switch-particle';

        const notes = ['♪', '♫', '♬', '🎵', '🎶'];
        particle.textContent = notes[Math.floor(Math.random() * notes.length)];

        const side = Math.floor(Math.random() * 4);
        let startX, startY, endX, endY;

        switch(side) {
            case 0:
                startX = Math.random() * window.innerWidth;
                startY = -50;
                endX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
                endY = window.innerHeight / 2;
                break;
            case 1:
                startX = window.innerWidth + 50;
                startY = Math.random() * window.innerHeight;
                endX = window.innerWidth / 2;
                endY = window.innerHeight / 2 + (Math.random() - 0.5) * 200;
                break;
            case 2:
                startX = Math.random() * window.innerWidth;
                startY = window.innerHeight + 50;
                endX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
                endY = window.innerHeight / 2;
                break;
            case 3:
                startX = -50;
                startY = Math.random() * window.innerHeight;
                endX = window.innerWidth / 2;
                endY = window.innerHeight / 2 + (Math.random() - 0.5) * 200;
                break;
        }

        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        particle.style.setProperty('--end-x', endX + 'px');
        particle.style.setProperty('--end-y', endY + 'px');

        document.body.appendChild(particle);
        audioSwitchParticles.push(particle);

        requestAnimationFrame(() => {
            particle.classList.add('animate');
        });

        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
            const index = audioSwitchParticles.indexOf(particle);
            if (index > -1) {
                audioSwitchParticles.splice(index, 1);
            }
        }, 3000);
    }

    const particleInterval = setInterval(() => {
        if (!audioSwitchPrompt || !document.body.contains(audioSwitchPrompt)) {
            clearInterval(particleInterval);
            return;
        }
        createParticle();
    }, 400);
}

function stopAudioSwitchParticles() {
    audioSwitchParticles.forEach(particle => {
        if (document.body.contains(particle)) {
            particle.classList.add('fade-out');
            setTimeout(() => {
                if (document.body.contains(particle)) {
                    document.body.removeChild(particle);
                }
            }, 300);
        }
    });
    audioSwitchParticles = [];
}

function createTouchExplosion(x, y) {
    const explosion = document.createElement('div');
    explosion.className = 'touch-explosion';
    explosion.style.left = x + 'px';
    explosion.style.top = y + 'px';

    document.body.appendChild(explosion);

    for (let i = 0; i < 12; i++) {
        const fragment = document.createElement('div');
        fragment.className = 'explosion-fragment';
        fragment.textContent = '✨';

        const angle = (i / 12) * Math.PI * 2;
        const distance = 80 + Math.random() * 40;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;

        fragment.style.left = x + 'px';
        fragment.style.top = y + 'px';
        fragment.style.setProperty('--end-x', endX + 'px');
        fragment.style.setProperty('--end-y', endY + 'px');

        document.body.appendChild(fragment);

        requestAnimationFrame(() => {
            fragment.classList.add('explode');
        });

        setTimeout(() => {
            if (document.body.contains(fragment)) {
                document.body.removeChild(fragment);
            }
        }, 1000);
    }

    setTimeout(() => {
        if (document.body.contains(explosion)) {
            document.body.removeChild(explosion);
        }
    }, 1000);
}

// ========== 【完全修正版】音声管理システム強化 ========== 
// 🎵========== 【完全修正版】ラジカセ完全停止機能（プリロード対応版） ==========🎵
function stopRadioCassette() {
    console.log('📻 [ラジカセ] 完全停止開始...');
    
    // プリロードもクリーンアップ
    cleanupPreloadedAudio();
    
    if (radioCassette) {
        try {
            // 1. 再生停止
            radioCassette.pause();
            
            // 2. 時間リセット
            radioCassette.currentTime = 0;
            
            // 3. 全イベントリスナー削除
            radioCassette.onended = null;
            radioCassette.onerror = null;
            radioCassette.onloadstart = null;
            radioCassette.oncanplay = null;
            radioCassette.oncanplaythrough = null;
            radioCassette.onloadeddata = null;
            radioCassette.onloadedmetadata = null;
            radioCassette.onplay = null;
            radioCassette.onpause = null;
            radioCassette.onvolumechange = null;
            
            // 4. ソースを空にしてリソース解放
            radioCassette.src = '';
            radioCassette.srcObject = null;
            
            // 5. ロード停止
            radioCassette.load();
            
            console.log('📻 [ラジカセ] 完全停止処理完了');
        } catch (e) {
            console.log('⚠️ [ラジカセ] 停止処理でエラー:', e);
        }
        
        // 6. 参照を完全にクリア
        radioCassette = null;
    }
    
    // 7. 現在の音声ファイル情報もクリア
    currentAudioFile = null;
    
    console.log('✅ [ラジカセ] 完全停止・メモリクリア完了');
}

// 🎵========== プリロード音声クリーンアップ機能 ==========🎵
function cleanupPreloadedAudio() {
    console.log('🧹 [プリロード] クリーンアップ開始...');
    
    // プリロードタイマーキャンセル
    if (preloadTimer) {
        clearTimeout(preloadTimer);
        preloadTimer = null;
        console.log('⏹️ [プリロード] タイマーキャンセル');
    }
    
    // プリロードキャンセルフラグ設定
    isPreloadingCancelled = true;
    
    // プリロード音声の完全停止
    if (preloadedAudio) {
        try {
            preloadedAudio.pause();
            preloadedAudio.currentTime = 0;
            preloadedAudio.src = '';
            preloadedAudio.load();
            console.log('📻 [プリロード] 音声インスタンス停止');
        } catch (e) {
            console.log('⚠️ [プリロード] 停止処理でエラー:', e);
        }
        preloadedAudio = null;
    }
    
    preloadedAudioFile = null;
    console.log('✅ [プリロード] クリーンアップ完了');
}

// 🎵========== 【新機能】安全なプリロードシステム ==========🎵
function preloadNextAudio() {
    if (!loadingAudioEnabled && (!audioEnabled || !firstInteraction)) {
        console.log('⚠️ [プリロード] 音声権限がないためスキップ');
        return;
    }
    
    // 次の音声ファイルを予測
    const nextAudioFile = predictNextAudioFile();
    if (!nextAudioFile || nextAudioFile === currentAudioFile || nextAudioFile === preloadedAudioFile) {
        return; // プリロード不要
    }
    
    console.log('📻 [プリロード] 次の音声をプリロード開始:', nextAudioFile);
    
    // 既存のプリロードをクリーンアップ
    cleanupPreloadedAudio();
    
    // キャンセルフラグリセット
    isPreloadingCancelled = false;
    
    // 少し遅延してからプリロード開始（連打対策）
    preloadTimer = setTimeout(() => {
        if (isPreloadingCancelled) {
            console.log('🚫 [プリロード] キャンセルされました');
            return;
        }
        
        try {
            const audioPath = `audio/${nextAudioFile.includes('.') ? nextAudioFile : nextAudioFile + '.m4a'}`;
            
            preloadedAudio = new Audio();
            preloadedAudio.preload = 'auto';
            preloadedAudio.loop = true;
            
            // プリロード完了リスナー
            preloadedAudio.addEventListener('canplaythrough', function() {
                if (!isPreloadingCancelled && preloadedAudio) {
                    console.log('✅ [プリロード] 音声プリロード完了:', nextAudioFile);
                    preloadedAudioFile = nextAudioFile;
                }
            }, { once: true });
            
            // エラーハンドリング
            preloadedAudio.addEventListener('error', function(e) {
                console.log('❌ [プリロード] プリロードエラー:', e);
                cleanupPreloadedAudio();
            }, { once: true });
            
            // ソース設定とロード開始
            preloadedAudio.src = audioPath;
            preloadedAudio.load();
            
        } catch (error) {
            console.error('❌ [プリロード] プリロード作成エラー:', error);
            cleanupPreloadedAudio();
        }
    }, 800); // 0.8秒の遅延でスキップ連打を回避
}

// 🔮========== 次の音声ファイル予測機能 ==========🔮
function predictNextAudioFile() {
    if (!storyContent || currentTextIndex >= storyContent.length - 1) {
        return null;
    }
    
    // 次の数個のコンテンツを確認して音声を探す
    for (let i = currentTextIndex + 1; i < Math.min(currentTextIndex + 5, storyContent.length); i++) {
        const content = storyContent[i];
        if (content && content.audio && content.audio !== currentAudioFile) {
            console.log('🔮 [予測] 次の音声ファイル予測:', content.audio);
            return content.audio;
        }
    }
    
    return null;
}

// ========== ENHANCED: Scene Navigation with Strong Debounce ========== 
function getCurrentScene() {
    for (let i = sceneList.length - 1; i >= 0; i--) {
        if (currentTextIndex >= sceneList[i].startIndex) {
            return sceneList[i];
        }
    }
    return sceneList[0] || null;
}

function getCurrentSceneIndex() {
    for (let i = sceneList.length - 1; i >= 0; i--) {
        if (currentTextIndex >= sceneList[i].startIndex) {
            return i;
        }
    }
    return 0;
}

// 🎬========== 【シンプル】シーンナビゲーション ==========🎬

function goToPreviousScene() {
    const currentTime = Date.now();
    if (currentTime - lastSceneSkipTime < 500) {
        console.log('🚫 [戻る] シーンスキップデバウンス - 高速すぎます');
        return;
    }
    lastSceneSkipTime = currentTime;
    
    const currentSceneIdx = getCurrentSceneIndex();
    if (currentSceneIdx <= 0) {
        console.log('🎬 [戻る] 既に最初のシーンです');
        return;
    }
    
    const targetScene = sceneList[currentSceneIdx - 1];
    console.log('🎬 [戻る] 前のシーンに移動:', targetScene.title);
    executeSceneJump(targetScene);
}

function goToNextScene() {
    const currentTime = Date.now();
    if (currentTime - lastSceneSkipTime < 500) {
        console.log('🚫 [進む] シーンスキップデバウンス - 高速すぎます');
        return;
    }
    lastSceneSkipTime = currentTime;
    
    const currentSceneIdx = getCurrentSceneIndex();
    if (currentSceneIdx >= sceneList.length - 1) {
        console.log('🎬 [進む] 既に最後のシーンです');
        return;
    }
    
    const targetScene = sceneList[currentSceneIdx + 1];
    console.log('🎬 [進む] 次のシーンに移動:', targetScene.title);
    executeSceneJump(targetScene);
}

function executeSceneJump(targetScene) {
    console.log('🎬 [実行ジャンプ] 開始:', targetScene.title);
    stopAutoMode();
    clearAllText();
    isSceneSkipping = true;
    currentTextIndex = targetScene.startIndex;
    
    // 📻 ラジカセを確実に停止
    console.log('📻 [実行ジャンプ] シーンジャンプ前にラジカセ停止');
    stopRadioCassette();
    
    setTimeout(() => {
        console.log('🎬 [実行ジャンプ] シーン開始実行');
        showNextText();
        setTimeout(() => {
            isSceneSkipping = false;
            console.log('🎬 [実行ジャンプ] シーン遷移完了');
        }, 200);
    }, 100);
}

// 🎵========== 【シンプル・確実】ラジカセ音声システム（プリロード対応版） ==========🎵
function playAudio(audioFile) {
    console.log('📻 [ラジカセ] 音声要求:', audioFile);
    
    if (!audioFile) {
        console.log('❌ [ラジカセ] 音声ファイルが指定されていません');
        return;
    }
    
    // 権限チェック
    if (!loadingAudioEnabled && (!audioEnabled || !firstInteraction)) {
        console.log('⚠️ [ラジカセ] 権限が必要');
        audioNotice.style.display = 'flex';
        return;
    }
    
    // 同じ音声なら何もしない
    if (audioFile === currentAudioFile && radioCassette) {
        console.log('🎵 [ラジカセ] 同じ音声継続 - 何もしません');
        // 次の音声をプリロード
        preloadNextAudio();
        return;
    }
    
    // プリロード済みの音声か確認
    if (audioFile === preloadedAudioFile && preloadedAudio) {
        console.log('⚡ [ラジカセ] プリロード済み音声を使用:', audioFile);
        usePreloadedAudio(audioFile);
    } else {
        // 異なる音声なら切り替え
        console.log('🎶 [ラジカセ] 音声切り替え:', currentAudioFile, '→', audioFile);
        startRadioCassette(audioFile);
    }
}

// 🎵========== プリロード済み音声使用機能 ==========🎵
function usePreloadedAudio(audioFile) {
    console.log('⚡ [プリロード使用] プリロード済み音声を使用開始:', audioFile);
    
    // 既存のラジカセを停止（プリロードはクリーンアップしない）
    if (radioCassette) {
        try {
            radioCassette.pause();
            radioCassette.currentTime = 0;
            radioCassette.src = '';
            radioCassette.load();
        } catch (e) {
            console.log('⚠️ [プリロード使用] 既存ラジカセ停止エラー:', e);
        }
        radioCassette = null;
    }
    
    // プリロード済み音声をラジカセに移行
    radioCassette = preloadedAudio;
    currentAudioFile = audioFile;
    
    // プリロード変数をクリア（移行完了）
    preloadedAudio = null;
    preloadedAudioFile = null;
    
    // ミュート状態に応じて再生
    if (!isMuted && radioCassette) {
        radioCassette.play()
            .then(() => {
                console.log('✅ [プリロード使用] プリロード音声再生開始成功');
                audioNotice.style.display = 'none';
                // 次の音声をプリロード
                preloadNextAudio();
            })
            .catch(error => {
                console.error('❌ [プリロード使用] プリロード音声再生失敗:', error);
            });
    } else {
        console.log('🔇 [プリロード使用] ミュート中のため再生をスキップ');
        audioNotice.style.display = 'none';
        // 次の音声をプリロード
        preloadNextAudio();
    }
}

// 🎵========== 【安全強化版】ラジカセ開始機能（プリロード対応版） ==========🎵
function startRadioCassette(audioFile) {
    console.log('📻 [ラジカセ開始] 安全開始プロセス:', audioFile);
    
    // 1. 既存の音声を確実に停止
    stopRadioCassette();
    
    // 2. 少し時間を置いてからリソース作成
    setTimeout(() => {
        try {
            const audioPath = `audio/${audioFile.includes('.') ? audioFile : audioFile + '.m4a'}`;
            
            // 3. 新しい Audio インスタンス作成
            radioCassette = new Audio();
            
            // 4. 基本設定
            radioCassette.loop = true;
            radioCassette.preload = 'auto';
            
            // 5. イベントリスナー設定（一度だけ実行）
            radioCassette.addEventListener('canplaythrough', function() {
                console.log('✅ [ラジカセ開始] 音声読み込み完了');
                if (!isMuted && radioCassette) {
                    radioCassette.play()
                        .then(() => {
                            console.log('✅ [ラジカセ開始] 音声再生開始成功');
                            audioNotice.style.display = 'none';
                            // 次の音声をプリロード
                            preloadNextAudio();
                        })
                        .catch(error => {
                            console.error('❌ [ラジカセ開始] 音声再生失敗:', error);
                        });
                } else {
                    console.log('🔇 [ラジカセ開始] ミュート中のため再生をスキップ');
                    audioNotice.style.display = 'none';
                    // 次の音声をプリロード
                    preloadNextAudio();
                }
            }, { once: true });
            
            radioCassette.addEventListener('error', function(e) {
                console.error('❌ [ラジカセ開始] 音声読み込み失敗:', e);
                stopRadioCassette(); // エラー時は完全停止
            }, { once: true });
            
            // 6. ソース設定とロード
            radioCassette.src = audioPath;
            currentAudioFile = audioFile;
            radioCassette.load();
            
        } catch (error) {
            console.error('❌ [ラジカセ開始] 作成プロセスでエラー:', error);
            stopRadioCassette();
        }
    }, 50); // 50ms の安全な遅延
}

// 🗺️========== ストーリーマッピング初期化 ==========🗺️
function initializeStoryMapping() {
    if (storyInitialized) return;
    
    console.log('🗺️ [マッピング] シーンベースストーリーマッピングを初期化中...');
    
    if (typeof storyContent === 'undefined' || !Array.isArray(storyContent)) {
        console.error('❌ [マッピング] storyContent が存在しないか配列ではありません');
        return;
    }
    
    if (typeof buildSceneMap === 'function') {
        const mappingResult = buildSceneMap();
        sceneMap = mappingResult.sceneMap;
        sceneList = mappingResult.sceneList;
    } else {
        buildFallbackSceneMap();
    }
    
    console.log('🗺️ [マッピング] 完全なシーンマップ:');
    sceneList.forEach((scene, index) => {
        console.log(`  ${index + 1}. ${scene.title} (${scene.id}) - インデックス: ${scene.startIndex}, 音声: ${scene.audio || 'なし'}`);
    });
    
    storyInitialized = true;
}

function buildFallbackSceneMap() {
    sceneMap = {};
    sceneList = [];
    
    storyContent.forEach((content, index) => {
        if (content.scene) {
            const sceneInfo = {
                id: content.scene,
                title: content.sceneTitle || content.scene,
                startIndex: index,
                audio: content.audio || null
            };
            sceneMap[content.scene] = sceneInfo;
            sceneList.push(sceneInfo);
        }
    });
    
    console.log('🗺️ [フォールバック] シーンマッピング構築完了:', sceneList.length, 'シーン');
}

// ========== Video Management ========== 
function ensureLoadingVideoPlays() {
    console.log('🎬 [Loading Video] Starting play system');

    if (!titleBgVideo) {
        console.error('❌ [Loading Video] titleBgVideo not found');
        return;
    }

    function attemptPlay() {
        if (titleBgVideo.paused) {
            console.log('🎬 [Loading Video] Attempting play...');

            const playPromise = titleBgVideo.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => console.log('✅ [Loading Video] Play successful'))
                    .catch(() => {
                        console.log('⚠️ [Loading Video] Auto-play blocked');

                        const playOnInteraction = () => {
                            titleBgVideo.play()
                                .then(() => console.log('✅ [Loading Video] Play after interaction'))
                                .catch(e => console.log('❌ [Loading Video] Play failed:', e));
                        };

                        document.addEventListener('click', playOnInteraction, { once: true });
                        document.addEventListener('touchend', playOnInteraction, { once: true });
                    });
            }
        }
    }

    if (titleBgVideo.readyState >= 2) {
        attemptPlay();
    } else {
        titleBgVideo.addEventListener('loadeddata', attemptPlay, { once: true });
    }
}

// ========== Loading Audio System ========== 
function createLoadingAudioPrompt() {
    console.log('🎵 [Loading Audio] Creating prompt');

    const loadingText = document.getElementById('loadingText');
    if (!loadingText) return;

    setTimeout(() => {
        if (isLoadingPhase && !loadingAudioEnabled) {
            loadingText.innerHTML = `
                <div style="margin-bottom: 15px; font-size: 1.1rem; font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400;">Loading RYO-CHAN's Adventure...</div>
                <div style="margin-bottom: 15px; font-size: 0.9rem; color: rgba(255,255,255,0.8); font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 400;">
                    🎵 Enhanced Experience Available
                </div>
                <button id="loadingAudioBtn" style="
                    background: linear-gradient(135deg, #6366F1 0%, #a5b4fc 100%);
                    border: none;
                    border-radius: 25px;
                    padding: 12px 24px;
                    color: white;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    box-shadow: 0 4px 15px rgba(99,102,241,0.3);
                    transition: all 0.3s ease;
                    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
                "
                onmouseover="this.style.transform='translateY(-2px)';"
                onmouseout="this.style.transform='translateY(0)';">
                    🎵 Enable Audio
                </button>
            `;

            setTimeout(() => {
                const audioBtn = document.getElementById('loadingAudioBtn');
                if (audioBtn) {
                    loadingAudioButton = audioBtn;
                    audioBtn.addEventListener('click', enableLoadingAudio);
                    audioBtn.addEventListener('touchend', enableLoadingAudio);
                }
            }, 100);
        }
    }, 3000);
}

function enableLoadingAudio() {
    console.log('🎵 [Loading Audio] Enabling audio...');

    loadingAudioEnabled = true;
    audioEnabled = true;
    firstInteraction = true;

    initializeMuteState();

    if (loadingAudioButton) {
        loadingAudioButton.innerHTML = '✅ Audio Ready!';
        loadingAudioButton.style.background = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
        loadingAudioButton.disabled = true;
    }

    console.log('✅ [Loading Audio] Audio enabled successfully!');
}

// ========== Mute State Management ========== 
// 🔇========== ミュート状態管理システム ==========🔇
function initializeMuteState() {
    if (!muteStateInitialized) {
        const savedMuteState = localStorage.getItem('ryochan_mute_state');
        if (savedMuteState !== null) {
            isMuted = savedMuteState === 'true';
            console.log('🔇 [ミュート] 保存されたミュート状態を復元:', isMuted);
        }
        updateMuteButtonDisplay();
        muteStateInitialized = true;
    }
}

function saveMuteState() {
    localStorage.setItem('ryochan_mute_state', isMuted.toString());
    console.log('💾 [ミュート] ミュート状態を保存:', isMuted);
}

function updateMuteButtonDisplay() {
    const muteButton = document.getElementById('muteButton');
    if (muteButton) {
        muteButton.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
        console.log('🔇 [ミュート] ボタン表示更新:', isMuted ? 'ミュート' : 'アンミュート');
    }
}

function toggleMute() {
    isMuted = !isMuted;
    console.log('🔇 [ミュート] 状態切替:', isMuted);
    updateMuteButtonDisplay();
    saveMuteState();
    updateAudioVolume();
}

// 🔇========== 【確実修正版】ミュート機能 ==========🔇
function updateAudioVolume() {
    console.log('🔊 [ミュート] 状態更新開始:', isMuted);
    
    if (radioCassette && radioCassette.src) {
        try {
            if (isMuted) {
                // ミュート時：確実に停止
                if (!radioCassette.paused) {
                    radioCassette.pause();
                    console.log('🔇 [ミュート] 音声停止完了');
                }
            } else {
                // アンミュート時：安全に再生
                if (radioCassette.paused && radioCassette.readyState >= 3) {
                    radioCassette.play()
                        .then(() => {
                            console.log('🔊 [ミュート] 音声再開成功');
                        })
                        .catch(error => {
                            console.log('⚠️ [ミュート] 音声再開失敗:', error.message);
                            // 再開に失敗した場合は再構築
                            if (currentAudioFile) {
                                console.log('🔄 [ミュート] 音声システム再構築');
                                startRadioCassette(currentAudioFile);
                            }
                        });
                }
            }
        } catch (e) {
            console.log('⚠️ [ミュート] 処理エラー:', e);
            // エラー時は音声システムをリセット
            if (currentAudioFile && !isMuted) {
                console.log('🔄 [ミュート] エラー復旧のため音声システム再構築');
                startRadioCassette(currentAudioFile);
            }
        }
    }
}

// ========== Text Position System ========== 
function setTextPosition(position) {
    if (!position || position === currentTextPosition) return;

    console.log('📍 [Position] Changing to:', position);

    textContainer.classList.remove('text-position-top', 'text-position-center', 'text-position-bottom');

    switch(position) {
        case 'top':
            textContainer.classList.add('text-position-top');
            break;
        case 'bottom':
            textContainer.classList.add('text-position-bottom');
            break;
        case 'center':
        default:
            textContainer.classList.add('text-position-center');
            break;
    }

    currentTextPosition = position;
}

// ========== Button Detection ========== 
function isButtonElement(element) {
    const buttonSelectors = [
        '.control-button',
        '.settings-button', 
        '.language-button',
        '.audio-notice',
        '.ending-btn',
        '#loadingAudioBtn',
        '.audio-switch-prompt'
    ];

    for (let selector of buttonSelectors) {
        if (element.matches && element.matches(selector)) return true;
        if (element.closest && element.closest(selector)) return true;
    }

    return element.closest && (
        element.closest('.controls') ||
        element.closest('.settings-panel') ||
        element.closest('.ending-overlay')
    );
}

// ========== Touch Area Validation ========== 
function isValidTapArea(x, y) {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    if (y < 80 || y > windowHeight - 120 || x < 20 || x > windowWidth - 20) {
        return false;
    }

    if (settingsPanel && settingsPanel.classList.contains('active')) {
        const panelRect = settingsPanel.getBoundingClientRect();
        if (x >= panelRect.left && x <= panelRect.right && y >= panelRect.top && y <= panelRect.bottom) {
            return false;
        }
    }

    const endingOverlay = document.querySelector('.ending-overlay');
    if (endingOverlay && endingOverlay.classList.contains('active')) {
        return false;
    }

    return true;
}

// ========== History and Display ========== 
function saveToHistory() {
    setTimeout(() => {
        textHistory.push({
            index: currentTextIndex,
            content: textContent.innerHTML,
            bgId: currentBgId,
            audioFile: currentAudioFile,
            textPosition: currentTextPosition
        });

        if (textHistory.length > 50) {
            textHistory.shift();
        }
    }, 5);
}

function clearAllText() {
    console.log('🧹 [Text] Clearing all text');
    textContent.innerHTML = '';
}

// ========== 🚨 PERFECT FIX: Enhanced Typewriter Effect (No HTML Entities) ========== 
function typewriterShow(element, content, delay, callback) {
    let idx = 0;
    let txt = content.text;

    // 🚨 重要: 新しい処理でスペースを確実に保護（HTMLエンティティなし）
    const processedText = perfectSpaceNormalization(txt);
    
    console.log('⌨️ [Typing] Original:', txt.substring(0, 50) + '...');
    console.log('⌨️ [Typing] Processed:', processedText.substring(0, 50) + '...');

    element.innerHTML = '';

    // Character name handling
    if (content.speaker) {
        const speakerSpan = document.createElement('span');
        speakerSpan.className = 'character-name';
        speakerSpan.textContent = content.speaker + ': ';
        element.appendChild(speakerSpan);
    }

    // Create text span with perfect spacing
    const textSpan = document.createElement('span');
    textSpan.className = 'typewriter-text';
    element.appendChild(textSpan);

    // Handle special formatting (episode titles, etc.)
    if (processedText.startsWith("<span")) {
        textSpan.innerHTML = processedText;
        isTyping = false;
        if (callback) callback();
        return;
    }

    console.log('⌨️ [Typing] Starting perfect typewriter...');
    isTyping = true;

    function nextChar() {
        if (!isTyping) return;

        // 🚨 重要: textContentを使用してスペースを確実に表示
        const currentText = processedText.slice(0, idx);
        textSpan.textContent = currentText;

        // Auto-scroll
        requestAnimationFrame(() => {
            textContainer.scrollTop = textContainer.scrollHeight;
        });

        if (idx < processedText.length) {
            idx++;
            typingTimeout = setTimeout(nextChar, delay);
        } else {
            // 🚨 最終確認: 完全なテキストを設定
            textSpan.textContent = processedText;
            isTyping = false;
            console.log('✅ [Typing] Complete with perfect spacing');
            if (callback) callback();
        }
    }

    nextChar();
}

function completeTypewriter() {
    if (isTyping && textContent.lastChild) {
        console.log('⏩ [Typing] Force complete with perfect spacing');
        clearTimeout(typingTimeout);

        const textSpan = textContent.lastChild.querySelector('.typewriter-text');
        if (textSpan && storyContent[currentTextIndex]) {
            // 🚨 重要: 強制完了時も新しい処理を適用
            const processedText = perfectSpaceNormalization(storyContent[currentTextIndex].text);
            textSpan.textContent = processedText;
            console.log('✅ [Typing] Force complete - perfect final text');
        }
        isTyping = false;
    }
}

// ========== Background Management ========== 
function showBackground(bgId) {
    if (!bgId || bgId === currentBgId) return;

    requestAnimationFrame(() => {
        document.querySelectorAll('.background').forEach(bg => {
            bg.classList.remove('active');
            let v = bg.querySelector('video');
            if (v) v.pause();
        });

        let bg = document.getElementById(bgId);
        if (bg) {
            bg.classList.add('active');
            let v = bg.querySelector('video');
            if (v) {
                v.currentTime = 0;
                v.play().catch(() => {});
            }
            currentBgId = bgId;
        }
    });
}

// ========== Ending Dialog ========== 
function showEndingDialog() {
    console.log('🎬 [Ending] Creating ending dialog...');

    const overlay = document.createElement('div');
    overlay.className = 'ending-overlay';
    overlay.innerHTML = `
        <div class="ending-dialog">
            <div class="ending-glow"></div>
            <div class="ending-content">
                <div class="ending-title">✨ Adventure Awaits ✨</div>
                <div class="ending-message">
                    Discover more about<br>the RYO-CHAN project?
                </div>
                <div class="ending-buttons">
                    <button class="ending-btn ending-btn-primary" id="visitSiteBtn">
                        <i class="fas fa-external-link-alt"></i> Visit Site
                    </button>
                    <button class="ending-btn ending-btn-secondary" id="stayHereBtn">
                        <i class="fas fa-heart"></i> Stay
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    const visitBtn = document.getElementById('visitSiteBtn');
    const stayBtn = document.getElementById('stayHereBtn');

    if (visitBtn) {
        visitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            try {
                const newWindow = window.open('https://ryochan.com', '_blank', 'noopener,noreferrer');
                if (newWindow) {
                    overlay.style.animation = 'fadeOut 1s ease-out forwards';
                    setTimeout(() => {
                        if (document.body.contains(overlay)) {
                            document.body.removeChild(overlay);
                        }
                    }, 1000);
                } else {
                    overlay.style.animation = 'fadeToWhite 2s ease-out forwards';
                    setTimeout(() => {
                        window.location.href = 'https://ryochan.com';
                    }, 1500);
                }
            } catch (error) {
                overlay.style.animation = 'fadeToWhite 2s ease-out forwards';
                setTimeout(() => {
                    window.location.href = 'https://ryochan.com';
                }, 1500);
            }
        });
    }

    if (stayBtn) {
        stayBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            overlay.style.animation = 'fadeOut 1s ease-out forwards';
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 1000);
        });
    }

    setTimeout(() => {
        overlay.classList.add('active');
        setTimeout(() => {
            const dialog = overlay.querySelector('.ending-dialog');
            if (dialog) {
                dialog.classList.add('active');
            }
        }, 500);
    }, 100);
}

// ========== Main Story Display ========== 
function showNextText() {
    try {
        if (typeof storyContent === 'undefined' || !Array.isArray(storyContent)) {
            console.error('❌ [Main] storyContent not available');
            return;
        }

        if (currentTextIndex >= storyContent.length) {
            console.log('📚 [Story] Complete');
            return;
        }

        const content = storyContent[currentTextIndex];
        if (!content) {
            console.error('❌ [Main] Content not found at index:', currentTextIndex);
            return;
        }

        if (!content.text || !content.text.trim()) {
            currentTextIndex++;
            showNextText();
            return;
        }

        console.log('📄 [Main] Showing:', currentTextIndex, content.text.substring(0, 50) + '...');

        if (content.text && content.text.includes("To be continued")) {
            console.log('🎬 [Ending] "To be continued..." detected');

            saveToHistory();
            if (content.bg) showBackground(content.bg);
            if (content.position) setTextPosition(content.position);
            if (content.audio && (loadingAudioEnabled || audioEnabled)) playAudio(content.audio);

            const p = document.createElement('p');
            p.className = 'text-paragraph';
            textContent.appendChild(p);

            while(textContent.children.length > MAX_PARAGRAPHS) {
                textContent.removeChild(textContent.firstChild);
            }

            const speedFactor = content.speed || 1;
            const finalDelay = Math.max(5, Math.round(baseTypeDelay / speedFactor));

            typewriterShow(p, content, finalDelay, () => {
                p.style.opacity = 1;
                requestAnimationFrame(() => {
                    textContainer.scrollTop = textContainer.scrollHeight;
                });

                setTimeout(() => {
                    showEndingDialog();
                }, 3000);
            });

            return;
        }

        saveToHistory();
        if (content.bg) showBackground(content.bg);
        if (content.position) setTextPosition(content.position);

        if (content.audio && (loadingAudioEnabled || audioEnabled)) {
            console.log('🎵 [Main] Playing audio:', content.audio);
            playAudio(content.audio);
        } else if (content.audio && !loadingAudioEnabled && !audioEnabled) {
            console.log('🎵 [Main] Audio permission needed');
            audioNotice.style.display = 'flex';
        }

        const p = document.createElement('p');
        p.className = 'text-paragraph';
        textContent.appendChild(p);

        while(textContent.children.length > MAX_PARAGRAPHS) {
            textContent.removeChild(textContent.firstChild);
        }

        const speedFactor = content.speed || 1;
        const finalDelay = Math.max(5, Math.round(baseTypeDelay / speedFactor));

        typewriterShow(p, content, finalDelay, () => {
            p.style.opacity = 1;
            requestAnimationFrame(() => {
                textContainer.scrollTop = textContainer.scrollHeight;
            });

            if (isAutoMode && !isWaitingForAudioSwitchTouch) {
                const nextContent = storyContent[currentTextIndex + 1];

                if (checkAutoModeAudioSwitch(content, nextContent)) {
                    console.log('🎵 [Auto Progress] Audio switch prompt showing');
                    return;
                }

                autoModeTimer = setTimeout(nextStory, 1800);
            }
        });

    } catch(e) {
        console.error("❌ [Main] Error:", e);
        alert("Story error: " + e.message);
    }
}

function nextStory() {
    currentTextIndex++;
    showNextText();
}

// ========== Visual Effects ========== 
function sparkEffect(x, y) {
    const main = document.createElement('div');
    main.className = Math.random() > 0.5 ? 'effect blue-aura' : 'effect red-aura';
    main.style.width = '140px';
    main.style.height = '140px';
    main.style.left = (x - 70) + 'px';
    main.style.top = (y - 70) + 'px';
    document.body.appendChild(main);
    setTimeout(() => {
        if (main.parentNode) main.parentNode.removeChild(main);
    }, 900);

    const colors = ['#4db8ff', '#ff4d4d'];
    for (let i = 0; i < 36; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 6 + 2;
        p.style.backgroundColor = color;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.boxShadow = `0 0 ${Math.floor(size*2)}px ${color}`;
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 160 + 60;
        const xMove = Math.cos(angle) * distance;
        const yMove = Math.sin(angle) * distance;
        const rotation = Math.random() * 720 - 360;
        p.style.setProperty('--x', `${xMove}px`);
        p.style.setProperty('--y', `${yMove}px`);
        p.style.setProperty('--r', `${rotation}deg`);
        p.style.left = (x - size/2) + 'px';
        p.style.top = (y - size/2) + 'px';
        const duration = Math.random() * 600 + 800;
        p.style.animationDuration = `${duration}ms`;
        document.body.appendChild(p);
        setTimeout(() => {
            if (p.parentNode) p.parentNode.removeChild(p);
        }, duration);
    }
}

// ========== Touch Control ========== 
function handleTouchStart(e) {
    if (isButtonElement(e.target)) return;

    const currentTime = Date.now();
    if (currentTime - lastTapTime < 300) {
        e.preventDefault();
        return;
    }

    isTouch = true;
    touchStartTime = currentTime;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    e.preventDefault();
}

function handleTouchEnd(e) {
    if (isButtonElement(e.target)) return;
    if (!isTouch) return;

    const currentTime = Date.now();
    const touchDuration = currentTime - touchStartTime;

    if (touchDuration > 400) {
        isTouch = false;
        e.preventDefault();
        return;
    }

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const moveDistance = Math.sqrt(
        Math.pow(endX - touchStartX, 2) + Math.pow(endY - touchStartY, 2)
    );

    if (moveDistance > 15) {
        isTouch = false;
        e.preventDefault();
        return;
    }

    if (!isValidTapArea(endX, endY)) {
        isTouch = false;
        e.preventDefault();
        return;
    }

    lastTapTime = currentTime;
    isTouch = false;
    console.log('✅ [Touch] Valid tap');
    handleValidTap(endX, endY);
    e.preventDefault();
}

function handleClick(e) {
    if (isButtonElement(e.target)) return;
    if (isTouch || 'ontouchstart' in window) return;

    const currentTime = Date.now();
    if (currentTime - lastTapTime < 300) return;

    if (!isValidTapArea(e.clientX, e.clientY)) return;

    lastTapTime = currentTime;
    console.log('✅ [Click] Valid click');
    handleValidTap(e.clientX, e.clientY);
}

function handleValidTap(x, y) {
    sparkEffect(x, y);

    if (!loadingAudioEnabled && !audioEnabled) {
        console.log('🎵 [Tap] Enabling audio');
        enableAudio();
        return;
    }

    if (isTyping) {
        completeTypewriter();
        return;
    }

    nextStory();
}

// ========== Audio Permission (Legacy) ========== 
function enableAudio() {
    if (!audioEnabled && !loadingAudioEnabled) {
        audioEnabled = true;
        firstInteraction = true;
        audioNotice.style.display = 'none';
        console.log('🎵 [Audio] Enabled by tap');

        initializeMuteState();

        if (storyContent[currentTextIndex] && storyContent[currentTextIndex].audio) {
            console.log('🎵 [Audio] Playing current:', storyContent[currentTextIndex].audio);
            playAudio(storyContent[currentTextIndex].audio);
        }
    }
}

function stopAutoMode() {
    if (isAutoMode) {
        isAutoMode = false;
        autoButton.innerHTML = '<i class="fas fa-play"></i>';
        autoButton.classList.remove('active');
        if (autoModeTimer) {
            clearTimeout(autoModeTimer);
            autoModeTimer = null;
        }
    }

    if (isTyping) {
        clearTimeout(typingTimeout);
        isTyping = false;
    }
}

// ========== Initialization ==========
function startAfterLoading() {
    titleScreen.classList.add('hide');
    titleBgVideo.classList.add('hide');

    setTimeout(() => {
        titleScreen.style.display = 'none';
        titleBgVideo.style.display = 'none';
        novelContainer.style.display = '';
        isLoadingPhase = false;

        setupControlButtons();
        initializeStoryMapping();

        if (!loadingAudioEnabled && storyContent[0] && storyContent[0].audio) {
            audioNotice.style.display = 'flex';
        }

        showNextText();
    }, 1500);
}

function initializeTextContainerTransparency() {
    textContainer.style.background = 'transparent';
    textContainer.style.border = 'none';
    textContainer.style.backdropFilter = 'none';
    textContainer.style.boxShadow = 'none';
    setTextPosition('center');
}

function setupControlButtons() {
    console.log('🎮 [Controls] Setting up buttons with enhanced debounce');

    if (muteButton) {
        muteButton.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMute();
            document.querySelectorAll('video').forEach(v => v.muted = true);
        });
    }

    if (autoButton) {
        autoButton.addEventListener('click', function(e) {
            e.stopPropagation();
            enableAudio();

            if (!isAutoMode) {
                resetAudioSwitchFlags();
            }

            isAutoMode = !isAutoMode;
            autoButton.innerHTML = isAutoMode ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
            if (!isAutoMode && autoModeTimer) {
                clearTimeout(autoModeTimer);
                autoModeTimer = null;
            }
            if (isAutoMode && !isTyping && !isWaitingForAudioSwitchTouch) {
                autoModeTimer = setTimeout(nextStory, 1800);
            }
            autoButton.classList.toggle('active');
        });
    }

    if (hideTextButton) {
        hideTextButton.addEventListener('click', function(e) {
            e.stopPropagation();
            textContainer.classList.toggle('hidden');
            hideTextButton.classList.toggle('active');
        });
    }

    if (backSceneButton) {
        backSceneButton.addEventListener('click', function(e) {
            e.stopPropagation();
            enableAudio();
            console.log('🎬 [Button] Previous scene clicked');
            goToPreviousScene();
        });
    }

    if (forwardSceneButton) {
        forwardSceneButton.addEventListener('click', function(e) {
            e.stopPropagation();
            enableAudio();
            console.log('🎬 [Button] Next scene clicked');
            goToNextScene();
        });
    }

    console.log('✅ [Controls] All buttons set up with enhanced protection');
}

// ========== DOM Content Loaded ========== 
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 [ENGINE] Perfect Space Engine v5.0 loaded, iOS:', isIOS);

    ensurePromptAnimations();

    novelContainer.style.display = 'none';
    audioNotice.style.display = 'none';

    initializeTextContainerTransparency();
    initializeMuteState();
    ensureLoadingVideoPlays();
    createLoadingAudioPrompt();

    const loadingBar = document.getElementById('loadingBar');
    let progress = 0;
    const intervalMs = 100;
    const totalTime = 10000;
    const steps = totalTime / intervalMs;
    const progressStep = 100 / steps;

    let loadingTimer = setInterval(() => {
        progress += progressStep;
        if (progress > 100) progress = 100;
        loadingBar.style.width = progress + '%';
    }, intervalMs);

    // 🎵========== First Audio File Preloading ==========🎵
    let firstAudioPreloaded = false;
    let loadingComplete = false;
    
    function checkLoadingCompletion() {
        if (loadingComplete && (firstAudioPreloaded || !storyContent[0]?.audio)) {
            console.log('✅ [Loading] All complete - Starting main content');
            clearInterval(loadingTimer);
            loadingBar.style.width = '100%';
            startAfterLoading();
        }
    }
    
    // Preload first audio file
    if (storyContent[0]?.audio) {
        const firstAudio = new Audio();
        firstAudio.preload = 'auto';
        firstAudio.src = 'audio/' + storyContent[0].audio;
        
        firstAudio.addEventListener('canplaythrough', () => {
            console.log('✅ [Loading] First audio loaded:', storyContent[0].audio);
            firstAudioPreloaded = true;
            checkLoadingCompletion();
        }, { once: true });
        
        firstAudio.addEventListener('error', () => {
            console.log('⚠️ [Loading] First audio failed, continuing');
            firstAudioPreloaded = true;
            checkLoadingCompletion();
        }, { once: true });
        
        // Timeout (max 15 seconds)
        setTimeout(() => {
            if (!firstAudioPreloaded) {
                console.log('⏰ [Loading] Audio loading timeout, continuing');
                firstAudioPreloaded = true;
                checkLoadingCompletion();
            }
        }, 15000);
    } else {
        firstAudioPreloaded = true;
    }
    
    setTimeout(() => {
        loadingComplete = true;
        checkLoadingCompletion();
    }, totalTime);

    // Event Listeners
    audioNotice.addEventListener('touchend', function(e) {
        e.stopPropagation();
        e.preventDefault();
        enableAudio();
    });

    audioNotice.addEventListener('click', function(e) {
        if (!('ontouchstart' in window)) {
            e.stopPropagation();
            enableAudio();
        }
    });

    novelContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
    novelContainer.addEventListener('touchend', handleTouchEnd, { passive: false });
    novelContainer.addEventListener('click', handleClick);

    novelContainer.addEventListener('contextmenu', function(e) {
        if (!isButtonElement(e.target)) e.preventDefault();
    });

    novelContainer.addEventListener('selectstart', function(e) {
        if (!isButtonElement(e.target)) e.preventDefault();
    });

    novelContainer.addEventListener('dragstart', function(e) {
        if (!isButtonElement(e.target)) e.preventDefault();
    });

    // Settings Panel
    if (settingsButton) {
        settingsButton.addEventListener('click', function(e) {
            e.stopPropagation();
            settingsPanel.classList.toggle('active');
            settingsButton.classList.toggle('active');
        });
    }

    if (settingsPanel) {
        settingsPanel.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    if (fontSizeRange) {
        fontSizeRange.addEventListener('input', function() {
            textContainer.style.fontSize = this.value + "px";
            if (fontSizeValue) {
                fontSizeValue.textContent = this.value + "px";
            }
        });
    }

// 🎮========== ページライフサイクル完全クリーンアップ ==========🎮
window.addEventListener('beforeunload', function() {
    console.log('🧹 [クリーンアップ] ページ離脱前の完全クリーンアップ');
    stopRadioCassette();
});

window.addEventListener('pagehide', function() {
    console.log('🧹 [クリーンアップ] ページ非表示時の完全クリーンアップ');
    stopRadioCassette();
});

// 🔄========== ページ表示時の音声システム再初期化 ==========🔄
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        console.log('🔄 [復帰] ページキャッシュからの復帰を検出');
        stopRadioCassette();
        // 現在のストーリーに応じて音声を再開
        setTimeout(() => {
            if (currentTextIndex < storyContent.length && storyContent[currentTextIndex].audio) {
                playAudio(storyContent[currentTextIndex].audio);
            }
        }, 100);
    }
});
});

console.log('✅ [エンジン] RYO-CHAN English ノベルエンジン v4.5 Radio Cassette版 読み込み成功！📻🎉');