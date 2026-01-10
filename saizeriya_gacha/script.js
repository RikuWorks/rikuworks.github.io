/*
 * This file is derived from saizeriya-menus
 * https://github.com/ryohidaka/saizeriya-menus
 *
 * Original Copyright (c) 2024 Ryo Hidaka
 * Licensed under the MIT License
 *
 * Modifications Copyright (c) 2026 rikuworks
 * - Ingredient classification added
 * - Menu structure modified
 */


const MENUS = [
    {
      "id": 1202,
      "name": "小エビのサラダ",
      "price": 350,
      "calorie": 192,
      "salt": 1.5,
      "category": "グランド",
      "genre": "サラダ",
      "is_alcohol": false,
      "icon": "🥗",
    },
    {
      "id": 1205,
      "name": "わかめのサラダ",
      "price": 350,
      "calorie": 174,
      "salt": 2.9,
      "category": "グランド",
      "genre": "サラダ",
      "is_alcohol": false,
      "icon": "🥗",
    },
    {
      "id": 1207,
      "name": "モッツァレラのサラダ",
      "price": 400,
      "calorie": 243,
      "salt": 0.6,
      "category": "グランド",
      "genre": "サラダ",
      "is_alcohol": false,
      "icon": "🥗",
    },
    {
      "id": 1208,
      "name": "グリーンサラダ",
      "price": 350,
      "calorie": 166,
      "salt": 0.7,
      "category": "グランド",
      "genre": "サラダ",
      "is_alcohol": false,
      "icon": "🥗",
    },
    {
      "id": 1209,
      "name": "チキンのサラダ",
      "price": 350,
      "calorie": 224,
      "salt": 1.3,
      "category": "グランド",
      "genre": "サラダ",
      "is_alcohol": false,
      "icon": "🥗",
    },
    {
      "id": 1301,
      "name": "コーンクリームスープ",
      "price": 150,
      "calorie": 154,
      "salt": 1,
      "category": "グランド",
      "genre": "スープ",
      "is_alcohol": false,
      "icon": "🥣",
    },
    {
      "id": 1305,
      "name": "田舎風ミネストローネ",
      "price": 300,
      "calorie": 227,
      "salt": 3,
      "category": "グランド",
      "genre": "スープ",
      "is_alcohol": false,
      "icon": "🥣",
    },
    {
      "id": 1307,
      "name": "たまねぎのズッパ",
      "price": 300,
      "calorie": 228,
      "salt": 2,
      "category": "グランド",
      "genre": "スープ",
      "is_alcohol": false,
      "icon": "🥣",
    },
    {
      "id": 1401,
      "name": "辛味チキン",
      "price": 300,
      "calorie": 295,
      "salt": 1.8,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🍗",
    },
    {
      "id": 1402,
      "name": "アロスティチーニ（ラムの串焼き）",
      "price": 400,
      "calorie": 224,
      "salt": 0.6,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🍢",
    },
    {
      "id": 1403,
      "name": "ほうれん草のソテー",
      "price": 200,
      "calorie": 223,
      "salt": 1.2,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🥬",
    },
    {
      "id": 1404,
      "name": "ポップコーンシュリンプ",
      "price": 300,
      "calorie": 234,
      "salt": 1.2,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🍤",
    },
    {
      "id": 1405,
      "name": "エスカルゴのオーブン焼き",
      "price": 400,
      "calorie": 220,
      "salt": 1.3,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🥘",
    },
    {
      "id": 1406,
      "name": "小エビのカクテル",
      "price": 280,
      "calorie": 126,
      "salt": 2.3,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🍤",
    },
    {
      "id": 1407,
      "name": "チョリソー（辛味ソーセージ）",
      "price": 400,
      "calorie": 425,
      "salt": 2.9,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🌭",
    },
    {
      "id": 1408,
      "name": "蒸し鶏の香味ソース",
      "price": 280,
      "calorie": 192,
      "salt": 2.4,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🐔",
    },
    {
      "id": 1410,
      "name": "ムール貝のガーリック焼き",
      "price": 400,
      "calorie": 170,
      "salt": 1.4,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🦪",
    },
    {
      "id": 1411,
      "name": "アスパラガスの温サラダ",
      "price": 300,
      "calorie": 80,
      "salt": 0.7,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🥗",
    },
    {
      "id": 1413,
      "name": "キャロットラペ",
      "price": 200,
      "calorie": 93,
      "salt": 0.9,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🥕",
    },
    {
      "id": 1414,
      "name": "モッツァレラトマト",
      "price": 430,
      "calorie": 255,
      "salt": 0.2,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🍅",
    },
    {
      "id": 1415,
      "name": "カリッとポテト",
      "price": 280,
      "calorie": 389,
      "salt": 2.1,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🥔",
    },
    {
      "id": 1416,
      "name": "ポテトのグリル",
      "price": 300,
      "calorie": 307,
      "salt": 1.6,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🥔",
    },
    {
      "id": 1417,
      "name": "バッファローモッツァレラのカプレーゼ",
      "price": 430,
      "calorie": 254,
      "salt": 0.4,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🍅",
    },
    {
      "id": 1422,
      "name": "ハモン・セラーノ",
      "price": 320,
      "calorie": 39,
      "salt": 0.9,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🍖",
    },
    {
      "id": 1423,
      "name": "生ハムとバッファローモッツァレラの盛合せ",
      "price": 500,
      "calorie": 146,
      "salt": 1,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🧀",
    },
    {
      "id": 1425,
      "name": "柔らか青豆の温サラダ",
      "price": 200,
      "calorie": 216,
      "salt": 1.4,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🫛",
    },
    {
      "id": 1435,
      "name": "スイートコーン",
      "price": 200,
      "calorie": 134 ,
      "salt": 0,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🥗",
    },
    {
      "id": 1452,
      "name": "アロスティチーニ（ラムの串焼き）(Wサイズ)",
      "price": 800,
      "calorie": 188,
      "salt": 0.7,
      "category": "グランド",
      "genre": "前菜・おつまみ",
      "is_alcohol": false,
      "icon": "🍢",
    },
    {
      "id": 2101,
      "name": "ミラノ風ドリア",
      "price": 300,
      "calorie": 521,
      "salt": 2.5,
      "category": "グランド",
      "genre": "ドリア\u0026グラタン",
      "is_alcohol": false,
      "icon": "🥘",
    },
    {
      "id": 2103,
      "name": "半熟卵のミラノ風ドリア",
      "price": 350,
      "calorie": 604,
      "salt": 2.7,
      "category": "グランド",
      "genre": "ドリア\u0026グラタン",
      "is_alcohol": false,
      "icon": "🥘",
    },
    {
      "id": 2106,
      "name": "タラコとエビのドリア",
      "price": 400,
      "calorie": 578,
      "salt": 2.8,
      "category": "グランド",
      "genre": "ドリア\u0026グラタン",
      "is_alcohol": false,
      "icon": "🥘",
    },
    {
      "id": 2108,
      "name": "焼チーズ ミラノ風ドリア",
      "price": 350,
      "calorie": 652,
      "salt": 2.9,
      "category": "グランド",
      "genre": "ドリア\u0026グラタン",
      "is_alcohol": false,
      "icon": "🥘",
    },
    {
      "id": 2109,
      "name": "エビとタラコのクリームグラタン（全粒粉）",
      "price": 400,
      "calorie": 481,
      "salt": 2.1,
      "category": "グランド",
      "genre": "ドリア\u0026グラタン",
      "is_alcohol": false,
      "icon": "🥘",
    },
    {
      "id": 2110,
      "name": "タラコとポップコーンシュリンプのドリア",
      "price": 400,
      "calorie": 617,
      "salt": 2.8,
      "category": "グランド",
      "genre": "ドリア\u0026グラタン",
      "is_alcohol": false,
      "icon": "🥘",
    },
    {
      "id": 2115,
      "name": "ポップコーンシュリンプとタラコのクリームグラタン（全粒粉）",
      "price": 430,
      "calorie": 591,
      "salt": 2.6,
      "category": "グランド",
      "genre": "ドリア\u0026グラタン",
      "is_alcohol": false,
      "icon": "🥘",
    },
    {
      "id": 2203,
      "name": "バッファローモッツァレラのマルゲリータピザ",
      "price": 400,
      "calorie": 544,
      "salt": 2.4,
      "category": "グランド",
      "genre": "ピザ",
      "is_alcohol": false,
      "icon": "🍕",
    },
    {
      "id": 2204,
      "name": "野菜ときのこのピザ",
      "price": 400,
      "calorie": 593,
      "salt": 3.2,
      "category": "グランド",
      "genre": "ピザ",
      "is_alcohol": false,
      "icon": "🍕",
    },
    {
      "id": 2206,
      "name": "たっぷりコーンのピザ",
      "price": 400,
      "calorie": 624,
      "salt": 2.6,
      "category": "グランド",
      "genre": "ピザ",
      "is_alcohol": false,
      "icon": "🍕",
    },
    {
      "id": 2208,
      "name": "ソーセージピザ",
      "price": 400,
      "calorie": 710,
      "salt": 4.1,
      "category": "グランド",
      "genre": "ピザ",
      "is_alcohol": false,
      "icon": "🍕",
    },
    {
      "id": 2301,
      "name": "タラコソースシシリー風",
      "price": 400,
      "calorie": 538,
      "salt": 2.2,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2303,
      "name": "ペペロンチーノ",
      "price": 300,
      "calorie": 582,
      "salt": 1.9,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2304,
      "name": "パルマ風スパゲティ",
      "price": 400,
      "calorie": 753,
      "salt": 3.1,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2305,
      "name": "カルボナーラ",
      "price": 500,
      "calorie": 799,
      "salt": 3.1,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2306,
      "name": "ミートソースボロニア風",
      "price": 400,
      "calorie": 604,
      "salt": 3.6,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2310,
      "name": "スープ入り塩味ボンゴレ",
      "price": 500,
      "calorie": 872,
      "salt": 2.5,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2316,
      "name": "半熟卵のミートソースボロニア風",
      "price": 450,
      "calorie": 673,
      "salt": 3.8,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2317,
      "name": "半熟卵のぺペロンチーノ",
      "price": 350,
      "calorie": 665,
      "salt": 2.1,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2320,
      "name": "小エビのタラコソース",
      "price": 540,
      "calorie": 594,
      "salt": 2.8,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2321,
      "name": "きのことほうれん草のクリームスパゲッティ",
      "price": 600,
      "calorie": 856,
      "salt": 3.7,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2325,
      "name": "ペンネアラビアータ（全粒粉）",
      "price": 400,
      "calorie": 444,
      "salt": 2.8,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2328,
      "name": "イカの墨入りセピアソース",
      "price": 500,
      "calorie": 603,
      "salt": 1.8,
      "category": "グランド",
      "genre": "パスタ",
      "is_alcohol": false,
      "icon": "🍝",
    },
    {
      "id": 2402,
      "name": "若鶏のディアボラ風",
      "price": 500,
      "calorie": 673,
      "salt": 2.8,
      "category": "グランド",
      "genre": "ハンバーグ",
      "is_alcohol": false,
      "icon": "🐔",
    },
    {
      "id": 2403,
      "name": "イタリアンハンバーグ",
      "price": 500,
      "calorie": 670,
      "salt": 3,
      "category": "グランド",
      "genre": "ハンバーグ",
      "is_alcohol": false,
      "icon": "🍖",
    },
    {
      "id": 2404,
      "name": "柔らかチキンのチーズ焼き",
      "price": 500,
      "calorie": 725,
      "salt": 2.8,
      "category": "グランド",
      "genre": "ハンバーグ",
      "is_alcohol": false,
      "icon": "🐔",
    },
    {
      "id": 2406,
      "name": "ハンバーグステーキ",
      "price": 400,
      "calorie": 571,
      "salt": 2.5,
      "category": "グランド",
      "genre": "ハンバーグ",
      "is_alcohol": false,
      "icon": "🍖",
    },
    {
      "id": 2407,
      "name": "ディアボラ風ハンバーグ",
      "price": 500,
      "calorie": 618,
      "salt": 3.1,
      "category": "グランド",
      "genre": "ハンバーグ",
      "is_alcohol": false,
      "icon": "🍖",
    },
    {
      "id": 2413,
      "name": "ラム（仔羊）と野菜のグリル",
      "price": 870,
      "calorie": 371,
      "salt": 2.4,
      "category": "グランド",
      "genre": "ハンバーグ",
      "is_alcohol": false,
      "icon": "🍖",
    },
    {
      "id": 2418,
      "name": "ミックスグリル",
      "price": 650,
      "calorie": 779,
      "salt": 3.6,
      "category": "グランド",
      "genre": "ハンバーグ",
      "is_alcohol": false,
      "icon": "🍖",
    },
    {
      "id": 3101,
      "name": "ライス",
      "price": 150,
      "calorie": 303,
      "salt": 0,
      "category": "グランド",
      "genre": "ライス・パン",
      "is_alcohol": false,
      "icon": "🍚",
    },
    {
      "id": 3102,
      "name": "ラージライス",
      "price": 200,
      "calorie": 303,
      "salt": 0,
      "category": "グランド",
      "genre": "ライス・パン",
      "is_alcohol": false,
      "icon": "🍚",
    },
    {
      "id": 3103,
      "name": "スモールライス",
      "price": 100,
      "calorie": 303,
      "salt": 0,
      "category": "グランド",
      "genre": "ライス・パン",
      "is_alcohol": false,
      "icon": "🍚",
    },
    {
      "id": 3104,
      "name": "シナモンプチフォッカ",
      "price": 200,
      "calorie": 246,
      "salt": 0.8,
      "category": "グランド",
      "genre": "ライス・パン",
      "is_alcohol": false,
      "icon": "🍞",
    },
    {
      "id": 3106,
      "name": "プチフォッカ",
      "price": 150,
      "calorie": 214,
      "salt": 0.8,
      "category": "グランド",
      "genre": "ライス・パン",
      "is_alcohol": false,
      "icon": "🍞",
    },
    {
      "id": 3108,
      "name": "ミニフィセル",
      "price": 150,
      "calorie": 189,
      "salt": 1,
      "category": "グランド",
      "genre": "ライス・パン",
      "is_alcohol": false,
      "icon": "🥖",
    },
    {
      "id": 3109,
      "name": "ガーリックトースト",
      "price": 200,
      "calorie": 245,
      "salt": 1.1,
      "category": "グランド",
      "genre": "ライス・パン",
      "is_alcohol": false,
      "icon": "🥖",
    },
    {
      "id": 3110,
      "name": "フォッカチオ",
      "price": 150,
      "calorie": 241,
      "salt": 0.6,
      "category": "グランド",
      "genre": "ライス・パン",
      "is_alcohol": false,
      "icon": "🍞",
    },
    {
      "id": 3111,
      "name": "ガーリックフォッカチオ",
      "price": 200,
      "calorie": 297,
      "salt": 0,
      "category": "グランド",
      "genre": "ライス・パン",
      "is_alcohol": false,
      "icon": "🍞",
    },
    {
      "id": 3112,
      "name": "シナモンフォッカチオ",
      "price": 200,
      "calorie": 273,
      "salt": 0,
      "category": "グランド",
      "genre": "ライス・パン",
      "is_alcohol": false,
      "icon": "🍞",
    },
    {
      "id": 3201,
      "name": "ティラミス　クラシコ",
      "price": 300,
      "calorie": 229,
      "salt": 0.1,
      "category": "グランド",
      "genre": "デザート ",
      "is_alcohol": false,
      "icon": "🧁",
    },
    {
      "id": 3204,
      "name": "ジェラート＆シナモンプチフォッカ",
      "price": 450,
      "calorie": 372,
      "salt": 0.9,
      "category": "グランド",
      "genre": "デザート ",
      "is_alcohol": false,
      "icon": "🍨",
    },
    {
      "id": 3205,
      "name": "ミルクジェラート",
      "price": 250,
      "calorie": 121,
      "salt": 0.1,
      "category": "グランド",
      "genre": "デザート ",
      "is_alcohol": false,
      "icon": "🍨",
    },
    {
      "id": 3206,
      "name": "イタリアンプリン",
      "price": 250,
      "calorie": 216,
      "salt": 0.1,
      "category": "グランド",
      "genre": "デザート ",
      "is_alcohol": false,
      "icon": "🍮",
    },
    {
      "id": 3207,
      "name": "チョコレートケーキ",
      "price": 300,
      "calorie": 166,
      "salt": 0.1,
      "category": "グランド",
      "genre": "デザート ",
      "is_alcohol": false,
      "icon": "🍰",
    },
    {
      "id": 3212,
      "name": "プリンとティラミス　クラシコの盛合せ",
      "price": 500,
      "calorie": 445,
      "salt": 0.2,
      "category": "グランド",
      "genre": "デザート ",
      "is_alcohol": false,
      "icon": "🍮",
    },
    {
      "id": 3213,
      "name": "トリフアイスクリーム",
      "price": 350,
      "calorie": 164,
      "salt": 0.1,
      "category": "グランド",
      "genre": "デザート ",
      "is_alcohol": false,
      "icon": "🍨",
    },
    {
      "id": 3214,
      "name": "ジェラート＆シナモンフォッカチオ",
      "price": 450,
      "calorie": 393,
      "salt": 0.7,
      "category": "グランド",
      "genre": "デザート ",
      "is_alcohol": false,
      "icon": "🍨",
    },
    {
      "id": 3215,
      "name": "コーヒーゼリー＆ミルクジェラート",
      "price": 350,
      "calorie": 165,
      "salt": 0.1,
      "category": "グランド",
      "genre": "デザート ",
      "is_alcohol": false,
      "icon": "🍨",
    },
    {
      "id": 3301,
      "name": "生ビール キリン一番搾り　ジョッキ",
      "price": 400,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ビール・サワー・ノンアルコール",
      "is_alcohol": true,
      "icon": "🍺",
    },
    {
      "id": 3302,
      "name": "生ビール キリン一番搾り　グラスビール",
      "price": 300,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ビール・サワー・ノンアルコール",
      "is_alcohol": true,
      "icon": "🍺",
    },
    {
      "id": 3303,
      "name": "ノンアルコール アサヒドライゼロ",
      "price": 250,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ビール・サワー・ノンアルコール",
      "is_alcohol": false,
      "icon": "🍺",
    },
    {
      "id": 3304,
      "name": "サワー キリン氷結シチリア産レモン",
      "price": 350,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ビール・サワー・ノンアルコール",
      "is_alcohol": true,
      "icon": "🍺",
    },
    {
      "id": 3306,
      "name": "グラッパ (30ml)",
      "price": 300,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ビール・サワー・ノンアルコール",
      "is_alcohol": true,
      "icon": "🍺",
    },
    {
      "id": 3401,
      "name": "グラスワイン (120ml)　赤",
      "price": 100,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍷",
    },
    {
      "id": 3402,
      "name": "グラスワイン (120ml)　白",
      "price": 100,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍷",
    },
    {
      "id": 3403,
      "name": "デカンタ (250ml)　赤",
      "price": 200,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍷",
    },
    {
      "id": 3404,
      "name": "デカンタ (250ml)　白",
      "price": 200,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍷",
    },
    {
      "id": 3405,
      "name": "デカンタ (500ml)　赤",
      "price": 400,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍷",
    },
    {
      "id": 3406,
      "name": "デカンタ (500ml)　白",
      "price": 400,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍷",
    },
    {
      "id": 3407,
      "name": "マグナム (1500ml)　赤",
      "price": 1100,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍾",
    },
    {
      "id": 3408,
      "name": "マグナム (1500ml)　白",
      "price": 1100,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍾",
    },
    {
      "id": 3412,
      "name": "ランブルスコロゼ【(ロゼ・発泡)甘口】",
      "price": 1100,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍾",
    },
    {
      "id": 3413,
      "name": "ドンラファエロ【(白・発泡)辛口】",
      "price": 1100,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍾",
    },
    {
      "id": 3414,
      "name": "ランブルスコセッコ【(赤・発泡)辛口】",
      "price": 1100,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍾",
    },
    {
      "id": 3415,
      "name": "ベルデッキオ【(白)辛口】",
      "price": 1100,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍾",
    },
    {
      "id": 3416,
      "name": "キャンティ【(赤)辛口】",
      "price": 1100,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍾",
    },
    {
      "id": 3419,
      "name": "キャンティ ルフィナ リゼルバ【(赤)辛口】",
      "price": 2200,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ワイン",
      "is_alcohol": true,
      "icon": "🍾",
    },
    {
      "id": 4301,
      "name": "トッピング半熟卵",
      "price": 50,
      "calorie": 83,
      "salt": 0.2,
      "category": "グランド",
      "genre": "トッピング",
      "is_alcohol": false,
      "icon": "🥚",
    },
    {
      "id": 4304,
      "name": "トッピング野菜ソース",
      "price": 100,
      "calorie": 72,
      "salt": 0.3,
      "category": "グランド",
      "genre": "トッピング",
      "is_alcohol": false,
      "icon": "🥗",
    },
    {
      "id": 4307,
      "name": "トッピング粉チーズ（グランモラビア）",
      "price": 100,
      "calorie": 91,
      "salt": 0.6,
      "category": "グランド",
      "genre": "トッピング",
      "is_alcohol": false,
      "icon": "🧀",
    },
    {
      "id": 5101,
      "name": "セットドリンクバー",
      "price": 200,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ドリンクバー",
      "is_alcohol": false,
      "icon": "🥤",
    },
    {
      "id": 5103,
      "name": "ドリンクバー単品",
      "price": 300,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ドリンクバー",
      "is_alcohol": false,
      "icon": "🥤",
    },
    {
      "id": 5305,
      "name": "サイゼリヤ　ドレッシング (500ml)",
      "price": 500,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ドレッシング・オリーブオイル",
      "is_alcohol": false,
      "icon": "🧂",
    },
    {
      "id": 5306,
      "name": "エクストラ・バージン・オリーブオイル (500ml)",
      "price": 1200,
      "calorie": 0,
      "salt": 0,
      "category": "グランド",
      "genre": "ドレッシング・オリーブオイル",
      "is_alcohol": false,
      "icon": "🧂",
    }
  ]


/* =====================
   DOM
===================== */
const startBtn = document.getElementById("startBtn");
const feedbackDiv = document.getElementById("feedback");
const tweetBtn = document.getElementById("tweetBtn");

/* =====================
   単品ガチャ
===================== */
startBtn.addEventListener("click", () => {
  const minPrice = Number(document.getElementById("minPrice").value) || 0;
  const maxPrice = Number(document.getElementById("maxPrice").value) || Infinity;
  const allowAlcohol = document.getElementById("allowAlcohol").checked;

  const filtered = MENUS.filter(item => {
    if (item.price < minPrice) return false;
    if (item.price > maxPrice) return false;
    if (!allowAlcohol && item.is_alcohol) return false;
    return true;
  });

  if (filtered.length === 0) {
    feedbackDiv.innerHTML = "条件に合うメニューがありません";
    tweetBtn.style.display = "none";
    return;
  }

  const item = filtered[Math.floor(Math.random() * filtered.length)];

  feedbackDiv.innerHTML = `
    <div style="text-align:center;">
      <div style="font-size:48px;">${item.icon}</div>
      <h3>${item.name}</h3>
      <p>🧾 注文番号：<b>${item.id}</b></p>
      <p>${item.genre}</p>
      <hr>
      <p>💴 税込価格：<b>${item.price} 円</b></p>
      <p>🔥 カロリー：${item.calorie} kcal</p>
      <p>🧂 塩分：${item.salt} g</p>
    </div>
  `;

  showTweetSingle(item);
});

/* =====================
   ドカ食いセット定義
===================== */
const SETS = [
  { name: "スペシャルセット", min: 1800, max: 2000 },
  { name: "アドバンスセット", min: 2000, max: 2500 },
  { name: "チャレンジセット", min: 2500, max: 3000 },
  { name: "パーフェクトセット", min: 3000, max: 3500 }
];

/* =====================
   セット生成
===================== */
function generateCalorieSet(minCal, maxCal, minPrice, maxPrice) {
  let totalCal = 0;
  let totalPrice = 0;
  let selected = [];

  const pool = MENUS.filter(m => !m.is_alcohol);

  let safety = 0;
  while (totalCal < minCal && safety < 1000) {
    const item = pool[Math.floor(Math.random() * pool.length)];
    selected.push(item);
    totalCal += item.calorie;
    totalPrice += item.price;
    safety++;
  }

  if (totalCal > maxCal) return null;
  if (totalPrice < minPrice) return null;
  if (totalPrice > maxPrice) return null;

  return { selected, totalCal, totalPrice };
}

/* =====================
   セットガチャ実行
===================== */
function runSetGacha(index) {
  const set = SETS[index];

  const minSetPrice =
    Number(document.getElementById("minSetPrice").value) || 0;
  const maxSetPrice =
    Number(document.getElementById("maxSetPrice").value) || Infinity;

  let result = null;

  for (let i = 0; i < 100; i++) {
    result = generateCalorieSet(
      set.min,
      set.max,
      minSetPrice,
      maxSetPrice
    );
    if (result) break;
  }

  if (!result) {
    feedbackDiv.innerHTML = "条件に合うセットが生成できませんでした";
    tweetBtn.style.display = "none";
    return;
  }

  feedbackDiv.innerHTML = `
    <h3 style="text-align:center;">🔥 ${set.name}</h3>
    <p style="text-align:center;">
      🔥 合計 ${result.totalCal} kcal<br>
      💴 合計 ${result.totalPrice} 円
    </p>
    <hr>
    ${result.selected.map(item => `
      <p>
        ${item.icon} ${item.name}
        （${item.calorie} kcal / ${item.price} 円 / 注文番号 ${item.id}）
      </p>
    `).join("")}
  `;

  showTweetSet(set.name, result);
}

/* =====================
   ツイート
===================== */
function showTweetSingle(item) {
  const pageUrl = "https://rikuworks.github.io/saizeriya_gacha/saizeriya_gacha.html";
  const text =
    `サイゼリヤ単品ガチャ🍝\n` +
    `【${item.id}】${item.name}\n` +
    `💴 ${item.price}円 / 🔥 ${item.calorie}kcal\n` +
    `\n\n🔗 ${pageUrl}\n` +
    `#サイゼリヤ #単品ガチャ`;

  setupTweet(text);
}

function showTweetSet(setName, result) {
  const pageUrl = "https://rikuworks.github.io/saizeriya_gacha/saizeriya_gacha.html";

  const text =
    `🔥 ${setName}に挑戦！\n` +
    `💴 ${result.totalPrice}円 / 🔥 ${result.totalCal}kcal\n` +
    result.selected.map(i => `・${i.name}`).join("\n") +
    `🔗${pageUrl}\n` +
    `#サイゼリヤ #ドカ食い`;

  setupTweet(text);
}

function setupTweet(text) {
  const url =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(text);

  tweetBtn.style.display = "block";
  tweetBtn.onclick = () => {
    window.open(url, "_blank");
  };
}
