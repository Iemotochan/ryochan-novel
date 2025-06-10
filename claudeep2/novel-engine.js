// 🚀========== RYO-CHANの冒険 ノベルエンジン v4.5 音声切り替えプロンプト版 ==========🚀
console.log('🚀 [エンジン] RYO-CHAN ノベルエンジン v4.5 音声切り替えプロンプト版 初期化中...');

// 🎯========== 重要：storyContent確認 ==========🎯
console.log('📚 [デバッグ] storyContent存在確認:', typeof storyContent !== 'undefined');
if (typeof storyContent !== 'undefined') {
    console.log('📚 [デバッグ] storyContent配列長:', storyContent.length);
    console.log('📚 [デバッグ] 最初の要素:', storyContent[0]);
} else {
    console.error('❌ [デバッグ] storyContent が定義されていません！');
}

// 以下は元のコードをそのまま使用

// 🎮========== コア変数（強化版） ==========🎮
const MAX_PARAGRAPHS = 6;
let currentTextIndex = 0, isAutoMode = false, autoModeTimer = null, baseTypeDelay = 30, isTyping = false;
let typingTimeout = null;
let textHistory = [], bgHistory = [], audioHistory = [];
let audioEnabled = false, firstInteraction = false;
let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
let isSafari = /^((?!chrome|android).*)*safari/i.test(navigator.userAgent);

// 🎵========== ローディング画面音声許可システム ==========🎵
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
let audioVolume = 0.5;

// 🎵========== ラジカセ（一台のみ存在） ==========🎵
let radioCassette = null; // 世界に一台のラジカセ
let currentAudioFile = null;

// 🎵========== 【新機能】プリロードシステム ==========🎵
let preloadedAudio = null; // プリロード用音声
let preloadedAudioFile = null; // プリロード済み音声ファイル名
let preloadTimer = null; // プリロードタイマー
let isPreloadingCancelled = false; // プリロードキャンセルフラグ

// 🔇========== ミュート状態永続化システム ==========🔇
let isMuted = false;
let muteStateInitialized = false;

// 📝========== 【強化】フォントサイズ管理システム ==========📝
let currentFontSize = 3; // 0=極小, 1=小, 2=やや小, 3=標準, 4=やや大, 5=大, 6=極大
let fontSizeScale = [0.6, 0.75, 0.9, 1.0, 1.2, 1.5, 1.8]; // より大胆な変更幅

// 👆========== タッチコントロール変数 ==========👆
let touchStartTime = 0;
let touchStartX = 0;
let touchStartY = 0;
let lastTapTime = 0;
let isTouch = false;

// 🎵========== 音声切り替えプロンプトシステム ==========🎵
let audioSwitchPrompt = null;
let pendingAudioSwitch = null;
let isWaitingForAudioSwitchTouch = false;
let audioSwitchParticles = [];

// 🖼️========== DOM要素 ==========🖼️
const textContainer = document.getElementById('textContainer');
const textContent = document.getElementById('textContent');
const titleScreen = document.getElementById('titleScreen');
const loadingContainer = document.getElementById('loadingContainer');
const titleBgVideo = document.getElementById('titleBgVideo');
const novelContainer = document.getElementById('novelContainer');
const audioNotice = document.getElementById('audioNotice');
let currentBgId = null;

// DOM要素取得後にログ出力
console.log('🔍 [DOM確認] textContainer:', textContainer);
console.log('🔍 [DOM確認] titleBgVideo:', titleBgVideo);
console.log('🔍 [DOM確認] loadingContainer:', loadingContainer);
console.log('🔍 [DOM確認] novelContainer:', novelContainer);
console.log('🔍 [エンジン] デバイス検出 - iOS:', isIOS, 'Safari:', isSafari);

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

// 🎬========== 【iPad Safari修正】ローディング動画強制再生システム ==========🎬
function ensureLoadingVideoPlays() {
    console.log('🎬 [ローディング動画] iPad Safari対応版 再生確認システム開始');
    
    if (!titleBgVideo) {
        console.error('❌ [ローディング動画] titleBgVideo要素が見つかりません');
        return;
    }
    
    titleBgVideo.setAttribute('playsinline', 'true');
    titleBgVideo.setAttribute('webkit-playsinline', 'true');
    titleBgVideo.muted = true;
    titleBgVideo.autoplay = true;
    
    titleBgVideo.addEventListener('loadeddata', () => {
        console.log('✅ [ローディング動画] 動画データ読み込み完了');
        attemptVideoPlay();
    });
    
    titleBgVideo.addEventListener('canplay', () => {
        console.log('✅ [ローディング動画] 動画再生準備完了');
        attemptVideoPlay();
    });
    
    titleBgVideo.addEventListener('play', () => {
        console.log('🎬 [ローディング動画] 動画再生開始成功');
    });
    
    titleBgVideo.addEventListener('error', (e) => {
        console.error('❌ [ローディング動画] 動画エラー:', e);
    });
    
    attemptVideoPlay();
    setTimeout(() => attemptVideoPlay(), 500);
    setTimeout(() => attemptVideoPlay(), 1000);
    setTimeout(() => attemptVideoPlay(), 2000);
}

function attemptVideoPlay() {
    if (!titleBgVideo) return;
    
    console.log('🎬 [ローディング動画] 再生試行中...');
    try {
        titleBgVideo.muted = true;
        titleBgVideo.autoplay = true;
        const playPromise = titleBgVideo.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log('✅ [ローディング動画] 自動再生成功');
                })
                .catch(error => {
                    console.log('⚠️ [ローディング動画] 自動再生失敗、ユーザーインタラクション待ち:', error.message);
                    
                    const playOnInteraction = () => {
                        titleBgVideo.play()
                            .then(() => {
                                console.log('✅ [ローディング動画] インタラクション後の再生成功');
                                document.removeEventListener('click', playOnInteraction);
                                document.removeEventListener('touchend', playOnInteraction);
                            })
                            .catch(e => console.log('❌ [ローディング動画] インタラクション後も再生失敗:', e));
                    };
                    
                    document.addEventListener('click', playOnInteraction, { once: true });
                    document.addEventListener('touchend', playOnInteraction, { once: true });
                });
        }
    } catch (error) {
        console.error('❌ [ローディング動画] 再生試行でエラー:', error);
    }
}

// 🎵========== ローディング画面音声許可システム（強化版） ==========🎵
function createLoadingAudioPrompt() {
    console.log('🎵 [ローディング音声] 音声許可プロンプトを作成');
    
    const loadingText = document.getElementById('loadingText');
    if (!loadingText) {
        console.error('❌ [ローディング音声] loadingText要素が見つかりません');
        return;
    }
    
    setTimeout(() => {
        if (isLoadingPhase && !loadingAudioEnabled) {
            console.log('🎵 [ローディング音声] 音声許可ボタンを表示');
            
            loadingText.innerHTML = `
                <div style="margin-bottom: 15px; font-size: 1.1rem;">RYO-CHANの冒険 読み込み中...</div>
                <div style="margin-bottom: 12px; font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.4;">
                    ⚠️ 最初の音声読み込みは、再生開始まで<br>数秒お待ちいただく場合があります
                </div>
                <div style="margin-bottom: 15px; font-size: 0.9rem; color: rgba(255,255,255,0.8);">
                    🎵 より豊かな体験のためにモバイルでお試しください
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
                    margin-top: 10px;
                    font-family: 'Yuji Syuku', serif;
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(99,102,241,0.4)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(99,102,241,0.3)';">
                    🎵 音声付きで冒険する
                </button>
                <div style="font-size: 0.8rem; color: rgba(255,255,255,0.6); margin-top: 10px;">
                    クリックして音声を有効化（推奨）
                </div>
            `;
            
            setTimeout(() => {
                const audioBtn = document.getElementById('loadingAudioBtn');
                if (audioBtn) {
                    loadingAudioButton = audioBtn;
                    audioBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        enableLoadingAudio();
                    });
                    audioBtn.addEventListener('touchend', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        enableLoadingAudio();
                    });
                    console.log('✅ [ローディング音声] 音声許可ボタンのイベントリスナー設定完了');
                }
            }, 100);
        }
    }, 3000);
}

function enableLoadingAudio() {
    console.log('🎵 [ローディング音声] ローディング画面で音声許可を取得中...');
    loadingAudioEnabled = true;
    audioEnabled = true;
    firstInteraction = true;
    initializeMuteState();
    
    if (loadingAudioButton) {
        loadingAudioButton.innerHTML = '✅ 音声有効化完了！';
        loadingAudioButton.style.background = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
        loadingAudioButton.style.cursor = 'default';
        loadingAudioButton.disabled = true;
        loadingAudioButton.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            if (loadingAudioButton) {
                loadingAudioButton.style.transform = 'scale(1)';
            }
        }, 150);
    }
    
    const loadingText = document.getElementById('loadingText');
    if (loadingText) {
        setTimeout(() => {
            loadingText.innerHTML = `
                <div style="margin-bottom: 15px; font-size: 1.1rem;">RYO-CHANの冒険 読み込み中...</div>
                <div style="
                    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
                    border: none;
                    border-radius: 25px;
                    padding: 10px 20px;
                    color: white;
                    font-size: 0.9rem;
                    font-weight: 600;
                    box-shadow: 0 4px 15px rgba(16,185,129,0.3);
                    margin-top: 10px;
                    display: inline-block;
                    font-family: 'Yuji Syuku', serif;
                ">
                    ✅ 音声準備完了 - 冒険開始をお待ちください
                </div>
                <div style="font-size: 0.8rem; color: rgba(255,255,255,0.8); margin-top: 10px;">
                    🎶 音声付きでお楽しみいただけます
                </div>
            `;
        }, 500);
    }
    
    console.log('✅ [ローディング音声] ローディング画面での音声許可取得完了！');
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

// 🎬========== 【完全修正】現在のシーン判定 ==========🎬
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

// 📝========== 【強化】フォントサイズ管理システム ==========📝
function setupFontSizeControls() {
    console.log('📝 [フォント] 強化フォントサイズコントロールを設定');
    // 初期フォントサイズを適用
    applyFontSize();
}

function adjustFontSize(direction) {
    const oldSize = currentFontSize;
    if (direction === 'smaller' && currentFontSize > 0) {
        currentFontSize--;
    } else if (direction === 'larger' && currentFontSize < fontSizeScale.length - 1) {
        currentFontSize++;
    }
    
    if (oldSize !== currentFontSize) {
        applyFontSize();
        updateFontSizeButtons();
        console.log('📝 [フォント] フォントサイズ変更:', oldSize, '→', currentFontSize, 'スケール:', fontSizeScale[currentFontSize]);
    }
}

function applyFontSize() {
    if (!textContainer) return;
    
    const scale = fontSizeScale[currentFontSize];
    const baseSize = window.innerWidth <= 600 ? 22 : (window.innerWidth <= 768 ? 23 : 24);
    const finalSize = Math.round(baseSize * scale);
    
    console.log('📝 [フォント] フォント適用 - ベース:', baseSize, 'スケール:', scale, '最終:', finalSize);
    
    // テキストコンテナに直接適用
    textContainer.style.fontSize = finalSize + 'px';
    
    // 既存の段落にも適用
    const paragraphs = textContainer.querySelectorAll('.text-paragraph');
    paragraphs.forEach(p => {
        p.style.fontSize = finalSize + 'px';
    });
}

function updateFontSizeButtons() {
    const fontSizeSmall = document.getElementById('fontSizeSmall');
    const fontSizeLarge = document.getElementById('fontSizeLarge');
    
    if (fontSizeSmall && fontSizeLarge) {
        // ボタンの状態を更新
        fontSizeSmall.classList.toggle('disabled', currentFontSize <= 0);
        fontSizeLarge.classList.toggle('disabled', currentFontSize >= fontSizeScale.length - 1);
        
        fontSizeSmall.classList.toggle('active', currentFontSize < 3);
        fontSizeLarge.classList.toggle('active', currentFontSize > 3);
        
        console.log('📝 [フォント] ボタン状態更新 - 小:', currentFontSize < 3, '大:', currentFontSize > 3);
    }
}

// 👆========== タップガイド管理 ==========👆
function setupTapGuide() {
    const tapGuide = document.getElementById('click-prompt');
    if (!tapGuide) return;
    
    const hideTextButton = document.getElementById('hideTextButton');
    if (hideTextButton) {
        hideTextButton.addEventListener('click', function() {
            tapGuide.classList.toggle('hidden');
        });
    }
    
    const autoButton = document.getElementById('autoButton');
    if (autoButton) {
        autoButton.addEventListener('click', function() {
            setTimeout(() => {
                if (isAutoMode) {
                    tapGuide.style.opacity = '0.3';
                } else {
                    tapGuide.style.opacity = '';
                }
            }, 100);
        });
    }
}

// 🔘========== 【英語版と同じ】ボタン検出システム ==========🔘
function isButtonElement(element) {
    const buttonSelectors = [
        '.control-button',
        '.language-button',
        '.audio-notice',
        '.ending-btn',
        '#loadingAudioBtn',
        '.font-size-button',
        '.audio-switch-prompt'
    ];
    
    for (let selector of buttonSelectors) {
        if (element.matches && element.matches(selector)) return true;
        if (element.closest && element.closest(selector)) return true;
    }
    
    return element.closest && (
        element.closest('.controls') ||
        element.closest('.font-size-controls') ||
        element.closest('.ending-overlay')
    );
}

// 🎯========== 【英語版と同じ】タッチエリア検証 ==========🎯
function isValidTapArea(x, y) {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    if (y < 80 || y > windowHeight - 120 || x < 20 || x > windowWidth - 20) {
        return false;
    }
    
    const endingOverlay = document.querySelector('.ending-overlay');
    if (endingOverlay && endingOverlay.classList.contains('active')) {
        return false;
    }
    
    return true;
}

// 🎵========== 音声切り替えプロンプトシステム ==========🎵
function checkAutoModeAudioSwitch(currentContent, nextContent) {
    if (!isAutoMode || !nextContent) return false;
    
    const currentAudio = currentContent.audio;
    const nextAudio = nextContent.audio;
    
    // 音声切り替えが必要な場合
    if (nextAudio && nextAudio !== currentAudio) {
        console.log('🎵 [自動モード] 音声切り替え検出:', currentAudio, '→', nextAudio);
        
        // 自動再生を一時停止
        pauseAutoModeForAudioSwitch();
        
        // 切り替え予定音声を保存
        pendingAudioSwitch = nextAudio;
        
        // 美しいプロンプトを表示
        showAudioSwitchPrompt();
        
        return true; // 自動進行を停止
    }
    
    return false; // 通常の自動進行継続
}

function pauseAutoModeForAudioSwitch() {
    if (autoModeTimer) {
        clearTimeout(autoModeTimer);
        autoModeTimer = null;
    }
    isWaitingForAudioSwitchTouch = true;
    console.log('⏸️ [自動モード] 音声切り替えのため一時停止');
}

function showAudioSwitchPrompt() {
    // 既存のプロンプトを削除
    if (audioSwitchPrompt) {
        hideAudioSwitchPrompt();
    }
    
    console.log('🎵 [プロンプト] 音声切り替えプロンプト表示');
    
    audioSwitchPrompt = document.createElement('div');
    audioSwitchPrompt.className = 'audio-switch-prompt';
    audioSwitchPrompt.innerHTML = `
        <div class="prompt-bg-glow"></div>
        <div class="prompt-content">
            <div class="prompt-icon-container">
                <div class="prompt-icon">🎵</div>
                <div class="prompt-pulse"></div>
            </div>
            <div class="prompt-text">音楽が変わります</div>
            <div class="prompt-sub">タッチして続行</div>
            <div class="prompt-touch-indicator">
                <div class="touch-ripple"></div>
                <div class="touch-ripple" style="animation-delay: 0.5s;"></div>
                <div class="touch-ripple" style="animation-delay: 1s;"></div>
            </div>
        </div>
        <div class="prompt-border-glow"></div>
    `;
    
    document.body.appendChild(audioSwitchPrompt);
    
    // タッチイベント設定
    audioSwitchPrompt.addEventListener('click', handleAudioSwitchTouch);
    audioSwitchPrompt.addEventListener('touchend', handleAudioSwitchTouch);
    
    // パーティクルエフェクト開始
    startAudioSwitchParticles();
    
    // 美しいフェードイン
    requestAnimationFrame(() => {
        audioSwitchPrompt.classList.add('active');
    });
}

function handleAudioSwitchTouch(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!isWaitingForAudioSwitchTouch) return;
    
    console.log('✅ [音声切り替え] ユーザーインタラクション取得');
    
    // タッチエフェクト
    createTouchExplosion(e.clientX || e.changedTouches?.[0]?.clientX || window.innerWidth/2, e.clientY || e.changedTouches?.[0]?.clientY || window.innerHeight/2);
    
    // プロンプト隠す
    hideAudioSwitchPrompt();
    
    // 音声切り替え実行
    setTimeout(() => {
        executeAudioSwitchAndResume();
    }, 300);
}

function hideAudioSwitchPrompt() {
    if (!audioSwitchPrompt) return;
    
    console.log('🎵 [プロンプト] 音声切り替えプロンプト非表示');
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
    console.log('🔄 [音声切り替え] 音声切り替え実行とオート再開');
    
    // 音声切り替え実行
    if (pendingAudioSwitch) {
        playAudio(pendingAudioSwitch);
        pendingAudioSwitch = null;
    }
    
    // フラグリセット
    isWaitingForAudioSwitchTouch = false;
    
    // 自動再生再開
    setTimeout(() => {
        if (isAutoMode) {
            console.log('▶️ [自動モード] 再開');
            autoModeTimer = setTimeout(nextStory, 1200);
        }
    }, 400);
}

// パーティクルエフェクトシステム
function startAudioSwitchParticles() {
    audioSwitchParticles = [];
    
    function createParticle() {
        if (!audioSwitchPrompt || !document.body.contains(audioSwitchPrompt)) return;
        
        const particle = document.createElement('div');
        particle.className = 'audio-switch-particle';
        
        // ランダムな音符記号
        const notes = ['♪', '♫', '♬', '🎵', '🎶'];
        particle.textContent = notes[Math.floor(Math.random() * notes.length)];
        
        // ランダムな位置とアニメーション
        const side = Math.floor(Math.random() * 4); // 0:上, 1:右, 2:下, 3:左
        let startX, startY, endX, endY;
        
        switch(side) {
            case 0: // 上から
                startX = Math.random() * window.innerWidth;
                startY = -50;
                endX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
                endY = window.innerHeight / 2;
                break;
            case 1: // 右から
                startX = window.innerWidth + 50;
                startY = Math.random() * window.innerHeight;
                endX = window.innerWidth / 2;
                endY = window.innerHeight / 2 + (Math.random() - 0.5) * 200;
                break;
            case 2: // 下から
                startX = Math.random() * window.innerWidth;
                startY = window.innerHeight + 50;
                endX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
                endY = window.innerHeight / 2;
                break;
            case 3: // 左から
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
        
        // アニメーション開始
        requestAnimationFrame(() => {
            particle.classList.add('animate');
        });
        
        // パーティクル削除
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
    
    // パーティクル生成間隔
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
    
    // 爆発パーティクル作成
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

// 📏========== lines指定システム ==========📏
function getTextLinesFromContent(content) {
    if (content.lines && typeof content.lines === 'number') {
        console.log('📏 [lines] 指定されたlines値を使用:', content.lines);
        return content.lines;
    }
    
    if (!content || !content.text) return 2;
    
    const cleanText = content.text.replace(/<[^>]*>/g, '');
    const length = cleanText.length;
    
    if (content.text.includes("<span class='emphasis'>")) {
        console.log('📏 [lines] タイトルテキスト検出 - デフォルト2行');
        return 2;
    } else if (length <= 35) {
        console.log('📏 [lines] 短文検出 - デフォルト2行');
        return 2;
    } else {
        console.log('📏 [lines] 長文検出 - デフォルト4行');
        return 4;
    }
}

function applyLinesBasedSpacing(element, content) {
    const lines = getTextLinesFromContent(content);
    element.classList.remove('lines-2', 'lines-4', 'title-text');
    
    if (content.text && content.text.includes("<span class='emphasis'>")) {
        element.classList.add('title-text');
        console.log('📐 [spacing] タイトルクラス適用');
    } else if (lines <= 2) {
        element.classList.add('lines-2');
        console.log('📐 [spacing] 2行クラス適用');
    } else {
        element.classList.add('lines-4');
        console.log('📐 [spacing] 4行クラス適用');
    }
    
    element.setAttribute('data-lines', lines);
}

// 📝========== テキスト管理システム ==========📝
function shouldClearText(content) {
    if (content.text && content.text.includes("<span class='emphasis'>")) {
        console.log('🧹 [テキスト管理] タイトル検出 - テキストをクリア');
        return true;
    }
    
    if (content.clear) {
        console.log('🧹 [テキスト管理] clearコマンド検出 - テキストをクリア');
        return true;
    }
    
    const newTextLines = getTextLinesFromContent(content);
    let existingTotalLines = 0;
    
    for (let i = 0; i < textContent.children.length; i++) {
        const child = textContent.children[i];
        const lines = parseInt(child.getAttribute('data-lines') || '2');
        existingTotalLines += lines;
    }
    
    const maxTotalLines = window.innerHeight < 600 ? 8 : 10;
    
    if (existingTotalLines + newTextLines > maxTotalLines) {
        console.log('🧹 [テキスト管理] 総行数制限超過 - 古いテキストを削除');
        return 'remove-old';
    }
    
    return false;
}

function manageTextDisplay(content) {
    const clearAction = shouldClearText(content);
    
    if (clearAction === true) {
        clearAllText();
        if (content.clear) {
            setTimeout(() => {
                console.log('🔄 [clear] clearコマンド後の自動進行');
                currentTextIndex++;
                showNextText();
            }, 300);
            return true;
        }
        return;
    } else if (clearAction === 'remove-old') {
        const newTextLines = getTextLinesFromContent(content);
        
        while (textContent.children.length > 0) {
            let existingTotalLines = 0;
            for (let i = 0; i < textContent.children.length; i++) {
                const child = textContent.children[i];
                const lines = parseInt(child.getAttribute('data-lines') || '2');
                existingTotalLines += lines;
            }
            
            const maxTotalLines = window.innerHeight < 600 ? 8 : 10;
            if (existingTotalLines + newTextLines <= maxTotalLines) {
                break;
            }
            
            const firstChild = textContent.firstChild;
            if (firstChild && firstChild.parentNode) {
                console.log('🗑️ [テキスト管理] 行数制限のため古いテキストを削除');
                firstChild.parentNode.removeChild(firstChild);
            } else {
                break;
            }
        }
    }
    
    console.log('📊 [テキスト管理] 最終段落数:', textContent.children.length);
    return false;
}

function clearAllText() {
    console.log('🧹 [テキスト管理] 全テキストクリア実行');
    textContent.innerHTML = '';
    console.log('✅ [テキスト管理] 全テキストクリア完了');
}

// 🎬========== エンディングダイアログシステム ==========🎬
function showEndingDialog() {
    console.log('🎬 [エンディング] 控えめなエンディングダイアログを作成中...');
    
    const overlay = document.createElement('div');
    overlay.className = 'ending-overlay';
    overlay.innerHTML = `
        <div class="ending-dialog">
            <div class="ending-glow"></div>
            <div class="ending-content">
                <div class="ending-title">✨ 冒険は続く ✨</div>
                <div class="ending-message">
                    RYO-CHANプロジェクトについて<br>もっと知りたいですか？
                </div>
                <div class="ending-buttons">
                    <button class="ending-btn ending-btn-primary" id="visitSiteBtn">
                        <i class="fas fa-external-link-alt"></i> サイトを見る
                    </button>
                    <button class="ending-btn ending-btn-secondary" id="stayHereBtn">
                        <i class="fas fa-heart"></i> ここに留まる
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
            console.log('🌐 [エンディング] サイト訪問ボタンがクリックされました - https://ryochan.com へ移動');
            try {
                const newWindow = window.open('https://ryochan.com', '_blank', 'noopener,noreferrer');
                
                if (newWindow) {
                    console.log('✅ [エンディング] 新しいタブでサイトを開きました');
                    overlay.style.animation = 'fadeOut 1s ease-out forwards';
                    setTimeout(() => {
                        if (document.body.contains(overlay)) {
                            document.body.removeChild(overlay);
                        }
                    }, 1000);
                } else {
                    console.log('⚠️ [エンディング] ポップアップブロック検出 - 同じタブで移動');
                    overlay.style.animation = 'fadeToWhite 2s ease-out forwards';
                    setTimeout(() => {
                        window.location.href = 'https://ryochan.com';
                    }, 1500);
                }
            } catch (error) {
                console.error('❌ [エンディング] window.open失敗:', error);
                console.log('🔄 [エンディング] フォールバック: 同じタブで移動');
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
            console.log('❤️ [エンディング] 留まるボタンがクリックされました');
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

// ⌨️========== タイプライター効果 ==========⌨️
function typewriterShow(element, content, delay, callback) {
    const startTime = performance.now();
    let idx = 0, txt = content.text;
    element.innerHTML = '';
    if (content.speaker) element.innerHTML = `<span class="character-name">${content.speaker}:</span>`;
    const span = document.createElement('span');
    element.appendChild(span);
    
    // 現在のフォントサイズを適用
    const scale = fontSizeScale[currentFontSize];
    const baseSize = window.innerWidth <= 600 ? 22 : (window.innerWidth <= 768 ? 23 : 24);
    const finalSize = Math.round(baseSize * scale);
    element.style.fontSize = finalSize + 'px';
    
    if (txt.startsWith("<span")) {
        span.innerHTML = txt;
        isTyping = false;
        if (callback) callback();
        return;
    }
    
    console.log('⌨️ [タイピング] タイプライター開始:', txt.substring(0, 30) + '...', '遅延:', delay, 'ms');
    
    isTyping = true;
    
    function nextChar() {
        if (!isTyping) {
            console.log('⚠️ [タイピング] 外部から停止されました');
            return;
        }
        
        span.innerHTML = txt.slice(0, idx);
        
        requestAnimationFrame(() => {
            textContainer.scrollLeft = textContainer.scrollWidth;
        });
        
        if (idx < txt.length) {
            idx++;
            typingTimeout = setTimeout(nextChar, delay);
        } else {
            span.innerHTML = txt;
            isTyping = false;
            const endTime = performance.now();
            console.log('✅ [タイピング]', Math.round(endTime - startTime), 'msで完了');
            if (callback) callback();
        }
    }
    
    nextChar();
}

function completeTypewriter() {
    if (isTyping && textContent.lastChild) {
        console.log('⏩ [タイピング] タイプライターを強制完了');
        clearTimeout(typingTimeout);
        let span = textContent.lastChild.querySelector('span:last-child');
        if (span) span.innerHTML = storyContent[currentTextIndex].text;
        isTyping = false;
    }
}

// 🖼️========== 【iPad Safari修正】背景管理 ==========🖼️
function showBackground(bgId) {
    if (!bgId || bgId === currentBgId) return;
    console.log('🖼️ [背景] 背景変更:', currentBgId, '→', bgId, 'iPad Safari対応');
    
    requestAnimationFrame(() => {
        document.querySelectorAll('.background').forEach(bg => {
            bg.classList.remove('active');
            let v = bg.querySelector('video');
            if (v) {
                v.pause();
                v.currentTime = 0;
            }
        });
        
        let bg = document.getElementById(bgId);
        if (bg) {
            bg.classList.add('active');
            let v = bg.querySelector('video');
            if (v) {
                v.muted = true;
                v.setAttribute('playsinline', 'true');
                v.setAttribute('webkit-playsinline', 'true');
                v.currentTime = 0;
                
                const playVideo = () => {
                    v.play()
                        .then(() => {
                            console.log('✅ [背景動画] 再生成功:', bgId);
                        })
                        .catch(error => {
                            console.log('⚠️ [背景動画] 再生失敗:', bgId, error.message);
                            setTimeout(() => {
                                v.play().catch(e => console.log('❌ [背景動画] 再試行も失敗:', e));
                            }, 100);
                        });
                };
                
                playVideo();
                setTimeout(playVideo, 50);
                setTimeout(playVideo, 200);
            }
            currentBgId = bgId;
        }
    });
}

// 📄========== メインストーリー表示機能（ローディング音声許可対応版） ==========📄
function showNextText() {
    try {
        if (typeof storyContent === 'undefined' || !Array.isArray(storyContent)) {
            console.error('❌ [メイン] storyContent が存在しないか配列ではありません');
            return;
        }
        
        if (currentTextIndex >= storyContent.length) {
            console.log('📚 [ストーリー] ストーリー完了');
            return;
        }
        
        const content = storyContent[currentTextIndex];
        if (!content) {
            console.error('❌ [メイン] インデックス', currentTextIndex, 'のコンテンツが存在しません');
            return;
        }
        
        if (content.clear) {
            console.log('🔄 [メイン] clearコマンド検出 - 自動進行処理');
            const autoProgress = manageTextDisplay(content);
            if (autoProgress) {
                return;
            }
        }
        
        if (!content.text || !content.text.trim()) {
            currentTextIndex++;
            showNextText();
            return;
        }
        
        console.log('📄 [メイン] テキスト表示:', currentTextIndex, 'lines:', getTextLinesFromContent(content), content.text.substring(0, 50) + '...');
        
        const autoProgress = manageTextDisplay(content);
        if (autoProgress) {
            return;
        }
        
        setTimeout(() => {
            showTextContent(content);
        }, 50);
        
    } catch(e) {
        console.error("❌ [メイン] ストーリーエラー:", e);
    }
}

// 🎵========== 【革新的】音声切り替え判定ベース自動進行システム ==========🎵
function showTextContent(content) {
    if (content.text && content.text.includes("つづく")) {
        console.log('🎬 [エンディング] "つづく..."を検出');
        showEndingContent(content);
        return;
    }
    
    if (content.bg) showBackground(content.bg);
    
    if (content.audio && (loadingAudioEnabled || audioEnabled)) {
        console.log('📻 [メイン] ラジカセ音声再生 - ローディング許可:', loadingAudioEnabled, '通常許可:', audioEnabled);
        playAudio(content.audio);
    } else if (content.audio && !loadingAudioEnabled && !audioEnabled) {
        console.log('🎵 [メイン] 音声許可が必要 - audioNoticeを表示');
        audioNotice.style.display = 'flex';
    }
    
    const p = document.createElement('div');
    p.className = 'text-paragraph';
    p.style.background = 'transparent';
    p.style.border = 'none';
    p.style.outline = 'none';
    p.style.boxShadow = 'none';
    p.style.padding = '0';
    
    applyLinesBasedSpacing(p, content);
    textContent.appendChild(p);
    
    const speedFactor = content.speed || 1;
    const finalDelay = Math.max(5, Math.round(baseTypeDelay / speedFactor));
    console.log('⌨️ [メイン] タイピング設定 - ベース遅延:', baseTypeDelay, 'スピード係数:', speedFactor, '最終遅延:', finalDelay);
    
    typewriterShow(p, content, finalDelay, () => {
        p.style.opacity = 1;
        requestAnimationFrame(() => {
            textContainer.scrollLeft = textContainer.scrollWidth;
        });
        
        if (isAutoMode && !isWaitingForAudioSwitchTouch) {
            // 【重要】次のコンテンツとの音声切り替えチェック
            const nextContent = storyContent[currentTextIndex + 1];
            
            if (checkAutoModeAudioSwitch(content, nextContent)) {
                // 音声切り替えプロンプト表示中 - 自動進行停止
                console.log('🎵 [自動進行] 音声切り替えプロンプト表示中');
                return;
            }
            
            // 通常の自動進行
            autoModeTimer = setTimeout(nextStory, 1800);
        }
    });
}

function showEndingContent(content) {
    if (content.bg) showBackground(content.bg);
    if (content.audio && (loadingAudioEnabled || audioEnabled)) playAudio(content.audio);
    
    const p = document.createElement('div');
    p.className = 'text-paragraph';
    p.style.background = 'transparent';
    p.style.border = 'none';
    p.style.outline = 'none';
    p.style.boxShadow = 'none';
    p.style.padding = '0';
    
    applyLinesBasedSpacing(p, content);
    textContent.appendChild(p);
    
    const speedFactor = content.speed || 1;
    const finalDelay = Math.max(5, Math.round(baseTypeDelay / speedFactor));
    
    typewriterShow(p, content, finalDelay, () => {
        p.style.opacity = 1;
        requestAnimationFrame(() => {
            textContainer.scrollLeft = textContainer.scrollWidth;
        });
        
        console.log('🎬 [エンディング] 3秒の瞑想期間を開始...');
        
        setTimeout(() => {
            console.log('🎬 [エンディング] 瞑想期間完了、ダイアログを表示');
            showEndingDialog();
        }, 3000);
    });
}

function nextStory() {
    currentTextIndex++;
    showNextText();
}

// 🎵========== オーディオ許可システム（従来版） ==========🎵
function enableAudio() {
    if (!audioEnabled && !loadingAudioEnabled) {
        audioEnabled = true;
        firstInteraction = true;
        audioNotice.style.display = 'none';
        console.log('📻 [オーディオ] ユーザーインタラクションによりラジカセが有効になりました！');
        
        initializeMuteState();
        
        if (storyContent[currentTextIndex] && storyContent[currentTextIndex].audio) {
            console.log('📻 [オーディオ] 現在のストーリー音声をラジカセで再生:', storyContent[currentTextIndex].audio);
            playAudio(storyContent[currentTextIndex].audio);
        }
    }
}

// ✨========== ビジュアルエフェクト ==========✨
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

// 👆========== 【英語版と同じ】タッチコントロールシステム ==========👆
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
        console.log('📻 [Tap] ラジカセを有効化');
        enableAudio();
        return;
    }
    
    if (isTyping) {
        completeTypewriter();
        return;
    }
    
    nextStory();
}

// 🎮========== コントロールボタン設定システム ==========🎮
function setupControlButtons() {
    console.log('🎮 [コントロール] コントロールボタンのイベントリスナーを設定');
    
    const muteButton = document.getElementById('muteButton');
    const autoButton = document.getElementById('autoButton');
    const hideTextButton = document.getElementById('hideTextButton');
    const backSceneButton = document.getElementById('backSceneButton');
    const forwardSceneButton = document.getElementById('forwardSceneButton');
    
    // フォントサイズボタン設定
    const fontSizeSmall = document.getElementById('fontSizeSmall');
    const fontSizeLarge = document.getElementById('fontSizeLarge');
    
    if (fontSizeSmall) {
        fontSizeSmall.addEventListener('click', function(e) {
            e.stopPropagation();
            adjustFontSize('smaller');
        });
        console.log('✅ [コントロール] 小さいAボタンリスナー設定完了');
    }
    
    if (fontSizeLarge) {
        fontSizeLarge.addEventListener('click', function(e) {
            e.stopPropagation();
            adjustFontSize('larger');
        });
        console.log('✅ [コントロール] 大きいAボタンリスナー設定完了');
    }
    
    if (muteButton) {
        muteButton.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMute();
            console.log('🔇 [コントロール] ミュート切替完了:', isMuted);
            document.querySelectorAll('video').forEach(v => v.muted = true);
        });
        console.log('✅ [コントロール] ミュートボタンリスナー設定完了');
    }
    
    if (autoButton) {
        autoButton.addEventListener('click', function(e) {
            e.stopPropagation();
            enableAudio();
            isAutoMode = !isAutoMode;
            autoButton.innerHTML = isAutoMode ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
            
            if (!isAutoMode && autoModeTimer) {
                clearTimeout(autoModeTimer);
                autoModeTimer = null;
            }
            if (isAutoMode && !isTyping) autoModeTimer = setTimeout(nextStory, 1800);
            autoButton.classList.toggle('active');
        });
        console.log('✅ [コントロール] オートボタンリスナー設定完了');
    }
    
    if (hideTextButton) {
        hideTextButton.addEventListener('click', function(e) {
            e.stopPropagation();
            textContainer.classList.toggle('hidden');
            hideTextButton.classList.toggle('active');
        });
        console.log('✅ [コントロール] テキスト非表示ボタンリスナー設定完了');
    }
    
    if (backSceneButton) {
        backSceneButton.addEventListener('click', function(e) {
            e.stopPropagation();
            enableAudio();
            console.log('🎬 [ボタン] 前のシーンボタンがクリックされました');
            goToPreviousScene();
        });
        console.log('✅ [コントロール] 前のシーンボタンリスナー設定完了');
    }
    
    if (forwardSceneButton) {
        forwardSceneButton.addEventListener('click', function(e) {
            e.stopPropagation();
            enableAudio();
            console.log('🎬 [ボタン] 次のシーンボタンがクリックされました');
            goToNextScene();
        });
        console.log('✅ [コントロール] 次のシーンボタンリスナー設定完了');
    }
    
    console.log('✅ [コントロール] 全コントロールボタンのイベントリスナー設定完了');
}

function stopAutoMode() {
    if (isAutoMode) {
        isAutoMode = false;
        const autoButton = document.getElementById('autoButton');
        if (autoButton) {
            autoButton.innerHTML = '<i class="fas fa-play"></i>';
            autoButton.classList.remove('active');
        }
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

// 🚀========== 初期化機能（ローディング音声許可対応版） ==========🚀
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

// 🎯========== 【iPad Safari対応】DOMコンテンツロードイベント ==========🎯
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 [エンジン] DOM読み込み完了（音声切り替えプロンプト版v4.5）、iOS:', isIOS, 'Safari:', isSafari);
    
    novelContainer.style.display = 'none';
    audioNotice.style.display = 'none';
    initializeTextContainerTransparency();
    initializeMuteState();
    setupFontSizeControls();
    setupTapGuide();
    ensureLoadingVideoPlays();
    createLoadingAudioPrompt();
    
    if (isSafari) {
        console.log('📱 [iPad Safari] 背景動画のpreload設定を最適化');
        document.querySelectorAll('.background video').forEach(video => {
            video.setAttribute('preload', 'metadata');
            video.setAttribute('playsinline', 'true');
            video.setAttribute('webkit-playsinline', 'true');
            video.muted = true;
        });
    }
    
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
    
    setTimeout(() => {
        clearInterval(loadingTimer);
        loadingBar.style.width = '100%';
        startAfterLoading();
    }, totalTime);
    
    // 🎯========== イベントリスナー ==========🎯
    audioNotice.addEventListener('touchend', function(e) {
        e.stopPropagation();
        e.preventDefault();
        console.log('📻 [audioNotice] タッチエンド - ラジカセを有効化');
        enableAudio();
    });
    
    audioNotice.addEventListener('click', function(e) {
        if (!('ontouchstart' in window)) {
            e.stopPropagation();
            console.log('📻 [audioNotice] クリック - ラジカセを有効化');
            enableAudio();
        }
    });
    
    novelContainer.addEventListener('touchstart', function(e) {
        handleTouchStart(e);
    }, { passive: false });
    
    novelContainer.addEventListener('touchend', function(e) {
        handleTouchEnd(e);
    }, { passive: false });
    
    novelContainer.addEventListener('click', function(e) {
        handleClick(e);
    });
    
    novelContainer.addEventListener('contextmenu', function(e) {
        if (!isButtonElement(e.target)) {
            e.preventDefault();
        }
    });
    
    novelContainer.addEventListener('selectstart', function(e) {
        if (!isButtonElement(e.target)) {
            e.preventDefault();
        }
    });
    
    novelContainer.addEventListener('dragstart', function(e) {
        if (!isButtonElement(e.target)) {
            e.preventDefault();
        }
    });
});

console.log('✅ [エンジン] RYO-CHAN ノベルエンジン v4.5 音声切り替えプロンプト版 読み込み成功！📻🎉');