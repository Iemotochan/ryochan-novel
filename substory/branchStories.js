console.log('🌸 [分岐ストーリー] ブランチストーリー読み込み開始...');

// ========== 分岐ストーリー定義 ==========

let originalStoryBranches = {
    // カゲマル分岐：医療の闇と利権構造
    kagemaru: [
        {
            text: "<span class='emphasis'>カゲマル編『白衣の影』</span>",
            bg: "bg2",
            speed: 0.1,
            audio: "shadow4.m4a",
            lines: 0,
            scene: "kagemaru1",
            sceneTitle: "白衣の影",
            clear: true
        },
        {
            text: "「RYO-CHAN、散歩がてら気になる場所があるんだ」\nカゲマルの声には珍しく深刻な響きがあった。",
            bg: "bg2",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "彼が向かったのは都心の高級医療ビル。\n一見すると最先端の医療施設だった。",
            bg: "bg3",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2
        },
        {
            text: "「ここで何か...氣の歪みを感じるんだ」\nカゲマルの瞳が金色に光る。",
            bg: "bg3",
            speed: 0.3,
            audio: "shadow4.m4a", 
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "受付の美しい看護師が微笑みかけてくる。\nしかし、その笑顔の奥に何か冷たいものが潜んでいた。",
            bg: "bg4",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2
        },
        {
            text: "「本日はどのような症状でしょうか？」\n「実は...最近疲れやすくて」",
            bg: "bg4",
            speed: 0.3,
            audio: "moonlight1.m4a",
            lines: 2,
            speaker: "看護師"
        },
        {
            text: "次々と「必要な検査」が提案される。\n血液検査、MRI、CT、遺伝子検査...費用は膨らんでいく。",
            bg: "bg5",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2
        },
        {
            text: "「検査の結果、軽度の炎症反応が...」\n医師の言葉に患者の表情が暗くなる。",
            bg: "bg5",
            speed: 0.3,
            audio: "moonlight1.m4a",
            lines: 2,
            speaker: "医師"
        },
        {
            text: "「予防的に薬を処方しましょう。\nこちらは保険適用外ですが、効果的です」",
            bg: "bg6",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            speaker: "医師"
        },
        {
            text: "カゲマルの目に映る氣の流れ。\n医師の周りには濁った黒い氣が渦巻いていた。",
            bg: "bg6",
            speed: 0.3,
            audio: "shadow3.m4a",
            lines: 2
        },
        {
            text: "しかし...患者への想いは本物だった。\n医師も制度の犠牲者なのかもしれない。",
            bg: "bg7",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2
        },
        {
            text: "「先生...本当に患者のためを思って？」\nカゲマルの問いかけに、医師の手が震えた。",
            bg: "bg7",
            speed: 0.3,
            audio: "shadow3.m4a",
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "「昔は...患者を救いたい一心だった。\nでも、病院経営、保険制度、製薬会社...」",
            bg: "bg8",
            speed: 0.4,
            audio: "ryoscan1.m4a",
            lines: 2,
            speaker: "医師"
        },
        {
            text: "「いつの間にか、治すより診続けることが\n求められるようになってしまった」",
            bg: "bg8",
            speed: 0.3,
            audio: "ryoscan1.m4a",
            lines: 2,
            speaker: "医師"
        },
        {
            text: "医師の瞳に涙が光る。\n本来の志と現実の狭間で苦しんでいたのだ。",
            bg: "bg9",
            speed: 0.4,
            audio: "sakura1.m4a",
            lines: 2
        },
        {
            text: "「でも、患者の氣は嘘をつかない。\n本当に必要な治療と、そうでないものが見えるんだ」",
            bg: "bg9",
            speed: 0.3,
            audio: "sakura1.m4a",
            lines: 2,
            speaker: "カゲマル"
        },
        {
            text: "医師は静かに頷いた。\n「君たちのような存在が必要だったのかもしれない」",
            bg: "bg10",
            speed: 0.4,
            audio: "sakura2.m4a",
            lines: 2,
            speaker: "医師"
        },
        {
            text: "その日から、この医療センターは変わり始めた。\n本当に必要な医療だけを提供する場所として。",
            bg: "bg11",
            speed: 0.3,
            audio: "success1.m4a",
            lines: 2
        },
        {
            type: 'unlock',
            text: 'カゲマル編をクリア！\n医療の真実を見抜く力を手に入れました。',
            bg: "bg12",
            audio: "success1.m4a",
            action: () => {
                showUnlockModal('kagemaru');
            }
        }
    ],

    // サクラ分岐：スピリチュアルの光と影
    sakura: [
        {
            text: "<span class='emphasis'>サクラ編『霊視の迷宮』</span>",
            bg: "bg2",
            speed: 0.1,
            audio: "sakura1.m4a",
            lines: 0,
            scene: "sakura1",
            sceneTitle: "霊視の迷宮",
            clear: true
        },
        {
            text: "「RYO-CHAN、面白い人がいるの。\n一緒に会ってみない？」",
            bg: "bg2",
            speed: 0.3,
            audio: "sakura1.m4a",
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "サクラが向かったのは都内の雑居ビル。\n「スピリチュアル・ヒーリングサロン」の看板が見えた。",
            bg: "bg3",
            speed: 0.4,
            audio: "sakura1.m4a",
            lines: 2
        },
        {
            text: "「いらっしゃいませ。お待ちしておりました」\n白い服を着た女性が神秘的な微笑みを浮かべる。",
            bg: "bg4",
            speed: 0.3,
            audio: "moonlight1.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "「あなたには...とても強いオーラを感じます。\n特別な力をお持ちですね」",
            bg: "bg4",
            speed: 0.4,
            audio: "moonlight1.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "部屋には水晶やパワーストーンが並んでいる。\n確かに何かエネルギーのようなものを感じる...",
            bg: "bg5",
            speed: 0.3,
            audio: "moonlight1.m4a",
            lines: 2
        },
        {
            text: "「このブレスレット、特別価格で20万円。\nあなたの運命を変える力があります」",
            bg: "bg6",
            speed: 0.4,
            audio: "shadow3.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "サクラの氣の感覚が警鐘を鳴らす。\nでも...この人の能力は本物だと感じていた。",
            bg: "bg6",
            speed: 0.3,
            audio: "shadow3.m4a",
            lines: 2
        },
        {
            text: "「あなたも感じるでしょう？私にも見えるのです。\n氣の流れ、人の心の奥底にあるもの」",
            bg: "bg7",
            speed: 0.4,
            audio: "ryoscan1.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "確かに霊能者の瞳には何かが宿っていた。\n偽物ではない...でも、何かが歪んでいる。",
            bg: "bg7",
            speed: 0.3,
            audio: "ryoscan1.m4a",
            lines: 2
        },
        {
            text: "「なぜ、本物の能力を持ちながら\nお金を要求するのですか？」",
            bg: "bg8",
            speed: 0.4,
            audio: "ryoscan1.m4a",
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "霊能者の表情が一瞬曇る。\n「私にも...生活があるから」",
            bg: "bg8",
            speed: 0.3,
            audio: "shadow4.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "「昔は無償で人を助けていました。\nでも、偽物たちが高額で商売を始めて...」",
            bg: "bg9",
            speed: 0.4,
            audio: "shadow4.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "「本物が無償なら、偽物の方が信頼される。\n皮肉なものです」",
            bg: "bg9",
            speed: 0.3,
            audio: "sakura2.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "サクラは理解した。\n真の能力者も、歪んだ世界の犠牲者なのだと。",
            bg: "bg10",
            speed: 0.4,
            audio: "sakura2.m4a",
            lines: 2
        },
        {
            text: "「でも、お金ではなく本当の価値を\n人々に伝える方法があるはず」",
            bg: "bg10",
            speed: 0.3,
            audio: "sakura2.m4a",
            lines: 2,
            speaker: "サクラ"
        },
        {
            text: "霊能者の目に希望の光が宿る。\n「あなたたちとなら...新しい道が見えるかもしれません」",
            bg: "bg11",
            speed: 0.4,
            audio: "success1.m4a",
            lines: 2,
            speaker: "霊能者"
        },
        {
            text: "真の霊能力とテクノロジーの融合。\n新たな可能性が生まれようとしていた。",
            bg: "bg12",
            speed: 0.3,
            audio: "success1.m4a",
            lines: 2
        },
        {
            type: 'unlock',
            text: 'サクラ編をクリア！\nスピリチュアルな真実を見抜く力を手に入れました。',
            bg: "bg13",
            audio: "success1.m4a",
            action: () => {
                showUnlockModal('sakura');
            }
        }
    ]
};

// ========== 本編ストーリーへの分岐ポイント追加 ==========
// 既存のstoryContentの最後に追加する分岐ノード

const branchingPoint = {
    type: 'choice',
    text: '物語は無事に終わった。\n平和な午後、二人が君をランチに誘っている。\n\n誰と一緒に行こうか？',
    bg: "bg14",
    audio: "sakura1.m4a",
    lines: 4,
    options: [
        { 
            label: 'カゲマルと行く', 
            branch: 'kagemaru',
            description: '影の真実を探る旅へ...'
        },
        { 
            label: 'サクラと行く', 
            branch: 'sakura',
            description: '光と闇の境界を歩む...'
        }
    ]
};

// 統合ストーリーブランチ（グローバル変数が未定義の場合のみ作成）
if (typeof window.storyBranches === 'undefined') {
    window.storyBranches = { ...originalStoryBranches };
} else {
    // 既存のstoryBranchesに追加
    Object.assign(window.storyBranches, originalStoryBranches);
}

console.log('🌸 [分岐ストーリー] ブランチストーリー読み込み完了');