// 🕊️========== 平和なエンディング分岐 ==========🕊️
console.log('🕊️ [平和エンディング] 読み込み開始...');

// 平和なエンディング用分岐を追加
if (typeof window.storyBranches === 'undefined') {
    window.storyBranches = {};
}
window.storyBranches.peaceful_ending = [
        {
            text: "君は電話を無視することにした。\n\n深夜の怪しい電話に関わるべきではない。",
            bg: "bg14",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            scene: "peaceful1",
            sceneTitle: "平穏な選択",
            clear: true
        },
        {
            text: "翌朝、いつものように目覚める。\n昨夜の電話のことはすっかり忘れていた。",
            bg: "bg1",
            speed: 0.3,
            lines: 2
        },
        {
            text: "「おはよう、RYO-CHAN！」\nサクラが元気よく手を振っている。",
            bg: "bg2",
            speed: 0.3,
            audio: "sakura1.m4a",
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "「今日も平和だね〜」\nカゲマルも穏やかな表情だ。",
            bg: "bg3",
            speed: 0.3,
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "こうして、君の日常は続いていく。\n氣の力はあるが、それを使う必要のない平和な世界で。",
            bg: "bg4",
            speed: 0.4,
            audio: "success1.m4a",
            lines: 2
        },
        {
            type: 'ending',
            text: '<span class="emphasis">Peaceful End</span>\n『日常という名の奇跡』',
            bg: "bg4",
            audio: "success1.m4a",
            endingType: 'peaceful',
            unlockables: ['peaceful_cg', 'daily_life_story']
        }
    ];
    
console.log('🕊️ [平和エンディング] 分岐ストーリー追加完了');

// エンディングタイプに平和エンドを追加
if (typeof endingTypes !== 'undefined') {
    endingTypes.peaceful = {
        title: 'Peaceful End',
        description: '平凡だが幸せな日常を選んだ結末',
        achievement: 'peace_keeper'
    };
    
    console.log('🕊️ [平和エンディング] エンディングタイプ追加完了');
}

console.log('🕊️ [平和エンディング] 読み込み完了');