var gPlayData = {
    "beforelink": "player_001.html?501",//ファイル名は固定、後ろの数字だけ1個前のセクション
    "nextlink": "player_003.html?503",//ファイル名は固定、後ろの数字だけ1個後のセクション
    "jptitle": "第5課　談話練習1　親しい人に無理をきいてもらう",
    "djp": [//文章データ
        "1.（Ａ・Ｂ：同僚同士）",
        "Ａ：悪いけど、展示会の準備、お願いできるかな。",
        "Ｂ：えー⁈ 一人でやれって言うの⁈ 一緒にやるはずだったのに。",
        "Ａ：もちろん一緒にやるつもりだったよ。でも、幕張の展示会場でトラブルが起きちゃったんだから、行かないわけにはいかないよ。",
        "Ｂ：それはそうだけど、いくらなんでも、私一人じゃ無理だよ。",
        "Ａ：申し訳ないとは思ってる。でも、ほかに行ける人がいないんだよ。",
        "Ｂ：……わかった。",
        "Ａ：この借りは返すから。",

        "2. （Ａ・Ｂ：友人同士）",
        "Ａ：悪いけど、あしたのレストランの予約、キャンセルしてもらえるかな。",
        "Ｂ：えー⁈ 行かないって言うの⁈ やっと予約が取れたのに。",
        "Ａ：もちろん行けるものなら行きたいよ。でも、急に仕事が入っちゃったんだから、しょうがないでしょ。",
        "Ｂ：それはそうだけど、ずっと楽しみにしてたんだよ。何とかならないの。",
        "Ａ：申し訳ないとは思ってる。でも、お客さんから呼ばれた以上は、断るわけにはいかないよ。",
        "Ｂ：……わかった。",
        "Ａ：この埋め合わせはするから。",

        "3. （Ａ・Ｂ：友人同士）",
        "Ａ：悪いけど、僕の代わりに日曜日のサッカーの試合、出てくれないかな。",
        "Ｂ：えー⁈ 僕に出ろって言うの⁈ せっかくの休みなのに。",
        "Ａ：もちろん出られるものなら僕が出るよ。でも、この通り、足、怪我しちゃったんだ。",
        "Ｂ：それはそうだけど、もう何年もサッカーをやってないんだから、走れないよ。困るよ。",
        "Ａ：申し訳ないとは思ってる。でも、ほかに頼める人がいないんだ。一人欠けると、棄権になっちゃうんだ。頼むよ。",
        "Ｂ：……わかった。",
        "Ａ：このお礼は必ずするから。",

    ],
    //音声の再生パターンが3種類あるため、音声データの定義は3つあります。
    "gplaylistAB" : [//A+B両方を再生
        //談話練習1はsx_d1x_xx.mp3を使います。d1が目印です
        "s5_d10_01.mp3",//談話練習１or２

        "s5_d11_01.mp3",//「いち」
        "s5_d11_02.mp3",//Aさん
        "s5_d11_03.mp3",//Bさん
        "s5_d11_04.mp3",//Aさん
        "s5_d11_05.mp3",//Bさん
        "s5_d11_06.mp3",//Aさん
        "s5_d11_07.mp3",
        "s5_d11_08.mp3",

        "s5_d12_01.mp3",//「に」
        "s5_d12_02.mp3",
        "s5_d12_03.mp3",
        "s5_d12_04.mp3",
        "s5_d12_05.mp3",
        "s5_d12_06.mp3",
        "s5_d12_07.mp3",
        "s5_d12_08.mp3",

        "s5_d13_01.mp3",//「さん」
        "s5_d13_02.mp3",
        "s5_d13_03.mp3",
        "s5_d13_04.mp3",
        "s5_d13_05.mp3",
        "s5_d13_06.mp3",
        "s5_d13_07.mp3",
        "s5_d13_08.mp3",
    ],
    "gplaylistAx" : [//Aさんのみ再生
        //Bさんの音声は、再生時間を調べて”@＜秒数＞”と指定してください
        "s5_d10_01.mp3",//談話練習１or２

        "s5_d11_01.mp3",//「いち」
        "s5_d11_02.mp3",
        "@4",
        "s5_d11_04.mp3",
        "@4",
        "s5_d11_06.mp3",
        "@1",
        "s5_d11_08.mp3",

        "s5_d12_01.mp3",//「に」
        "s5_d12_02.mp3",
        "@4",
        "s5_d12_04.mp3",
        "@5",
        "s5_d12_06.mp3",
        "@1",
        "s5_d12_08.mp3",

        "s5_d13_01.mp3",//「さん」
        "s5_d13_02.mp3",
        "@5",
        "s5_d13_04.mp3",
        "@8",
        "s5_d13_06.mp3",
        "@1",
        "s5_d13_08.mp3",
    ],
    "gplaylistxB" : [//Bさんのみ再生
        //Aさんの音声は、再生時間を調べて”@＜秒数＞”と指定してください
        "s5_d10_01.mp3",//談話練習１or２

        "s5_d11_01.mp3",//「いち」
        "@4",
        "s5_d11_03.mp3",
        "@8",
        "s5_d11_05.mp3",
        "@5",
        "s5_d11_07.mp3",
        "@2",

        "s5_d12_01.mp3",//「に」
        "@4",
        "s5_d12_03.mp3",
        "@6",
        "s5_d12_05.mp3",
        "@6",
        "s5_d12_07.mp3",
        "@2",

        "s5_d13_01.mp3",//「さん」
        "@5",
        "s5_d13_03.mp3",
        "@7",
        "s5_d13_05.mp3",
        "@10",
        "s5_d13_07.mp3",
        "@3",
    ],
};
