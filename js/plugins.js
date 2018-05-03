// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"Yanfly Engine Scriptsの大元となる機能です。\r\nRPGツクールMVのバグを修正したり、様々なカスタムを行います。","parameters":{"---スクリーン---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Open Console":"false","Reposition Battlers":"true","---ゴールド---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"a lotta","---アイテム---":"","Default Max":"99","Quantity Text Size":"20","---ステータス---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---バトル---":"","Animation Rate":"4","Flash Target":"false","---フォント---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"24","Text Align":"left","---ウィンドウ---":"","Digit Grouping":"true","Line Height":"30","Icon Width":"32","Icon Height":"20","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"12","Menu TP Bar":"true","---ウィンドウカラー---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"メッセージの表示方法や機能をカスタマイズすることができます。","parameters":{"---一般---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward":"Input.isPressed('pagedown')","Word Wrapping":"false","Description Wrap":"false","---フォント---":"","Font Name":"GameFont","Font Size":"24","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]"}},
{"name":"Yami_SkipTitle","status":true,"description":"テストプレイ用にタイトルシーンを飛ばすことができます。","parameters":{}},
{"name":"YED_WordWrap","status":true,"description":"文章の改行機能を提供します。長文を適切な位置で改行します。","parameters":{"Break Word":"false"}},
{"name":"ChangeTileSize","status":true,"description":"48x48以外のグリッドサイズのマップを使用可能にします。","parameters":{"Tile Size":"32","Tileset Image Folder":"img/tilesets32/","Parallax Image Folder":"img/parallaxes32/"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"リージョンを用いて、イベントおよびプレイヤーの移動制限を行います。","parameters":{"Player Restrict":"1","Event Restrict":"3","All Restrict":"0","Player Allow":"0","Event Allow":"0","All Allow":"0"}},
{"name":"移動グラ消し","status":true,"description":"","parameters":{}},
{"name":"CustomizeMaxSaveFile","status":true,"description":"最大セーブファイル数変更プラグイン","parameters":{"セーブファイル数":"20"}},
{"name":"SaveFileDrawFace","status":true,"description":"セーブファイルのフェイス表示プラグイン","parameters":{"表示行数":"5","マップ名表示":"OFF","ゲームタイトル非表示":"ON"}},
{"name":"TerraxLighting","status":true,"description":"v1.5.1 Creates an extra layer that darkens a map and adds lightsources!","parameters":{"Player radius":"300","Add to options":"Yes","Option menu entry":"Lighting effects","Reset Lights":"No","Save DaynightHours":"0","Save DaynightMinutes":"0","Save DaynightSeconds":"0","Flashlight offset":"0","Screensize X":"1280","Screensize Y":"720","Kill Switch":"No"}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"ON","ピクチャ番号の変数番号":"0","ポインタX座標の変数番号":"0","ポインタY座標の変数番号":"0","タッチ操作抑制":"OFF"}},
{"name":"OnlineAvatar","status":true,"description":"Firebaseを使ってプレイヤーをオンライン同期します。","parameters":{"apiKey":"AIzaSyA6fAijohIJXxh6-lGGpDLAQhts0WGXnKc","authDomain":"rxhpsychosis.firebaseapp.com","databaseURL":"https://rxhpsychosis.firebaseio.com","avatarEvent":"1","syncSwitchStart":"401","syncSwitchEnd":"405","syncVariableStart":"151","syncVariableEnd":"260"}},
{"name":"TemplateEvent","status":true,"description":"テンプレートイベントプラグイン","parameters":{"テンプレートマップID":"009","イベントIDを維持":"true","上書き禁止":"true"}},
{"name":"EventReSpawn","status":true,"description":"イベント動的生成プラグイン","parameters":{}},
{"name":"a","status":true,"description":"","parameters":{}},
{"name":"EventDebugger","status":true,"description":"イベントデバッグプラグイン","parameters":{"ステップ開始":"F7","ステップイン":"F11","ステップオーバー":"F10","続行":"F6","表示切替":"F12","変数監視":"F1","監視最大数":"3","イベントテスト":"ON","機能キー抑制":"OFF","OK動作":"F11","キャンセル動作":"F6","スクリプトデバッグ":"1","CTRLで無効化":"ON"}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{}},
{"name":"TriggerExtension","status":true,"description":"タッチでイベントを実行するなど、イベントページのトリガーを拡張します","parameters":{}},
{"name":"TMNamePop","status":true,"description":"イベントの頭上に文字列を表示する機能を追加します。","parameters":{"backOpacity":"150","fontSize":"20","fontOutlineWidth":"4","fontOutlineColor":"rgba(0, 0, 0, 0.5)","width":"300","useRoundRect":"0","roundRectRadius":"6"}},
{"name":"TMNamePop2","status":true,"description":"イベントの頭上に文字列を表示する機能を追加します。","parameters":{"backOpacity":"0","fontSize":"15","fontOutlineWidth":"4","fontOutlineColor":"rgba(0, 0, 100, 0.5)","width":"160","useRoundRect":"0","roundRectRadius":"6"}},
{"name":"111_InputForm","status":true,"description":"フォーム作って文字入力（修正版）","parameters":{}},
{"name":"ThroughFailedToLoad","status":true,"description":"ロード失敗エラーのすり抜けプラグイン","parameters":{"テストプレー時無効":"OFF"}},
{"name":"OriginalTimer","status":true,"description":"オリジナルタイマー","parameters":{"TimerSave":"NO"}},
{"name":"SlotMachine","status":true,"description":"Slot Machine scene","parameters":{"Variable ID":"7","Help Text":"カーソルキーの上でベット、カーソルキーの下でスタート","Won Text":"Win Coin枚獲得","Lost Text":"残念でした。","Replay Text":"もう一度やりますか？","Coin Full Text":"コイン枚数が制限に達しました。","Bet Text":"ベット","Spin Text":"スピン","Yes Text":"はい","No Text":"いいえ"}},
{"name":"TMCommonEventKey","status":true,"description":"任意のキーにコモンイベントを設定し、マップシーンで\nショートカットキーとして利用できるようにします。","parameters":{"commonKey0":"0","commonKey1":"0","commonKey2":"0","commonKey3":"0","commonKey4":"0","commonKey5":"0","commonKey6":"0","commonKey7":"0","commonKey8":"0","commonKey9":"0","commonKeyA":"0","commonKeyB":"0","commonKeyC":"140","commonKeyD":"0","commonKeyE":"0","commonKeyF":"0","commonKeyG":"0","commonKeyH":"0","commonKeyI":"0","commonKeyJ":"0","commonKeyK":"0","commonKeyL":"0","commonKeyM":"0","commonKeyN":"0","commonKeyO":"0","commonKeyP":"0","commonKeyQ":"0","commonKeyR":"0","commonKeyS":"0","commonKeyT":"0","commonKeyU":"0","commonKeyV":"0","commonKeyW":"0","commonKeyX":"0","commonKeyY":"0","commonKeyZ":"0","commonKeyF1":"0","commonKeyF2":"0","commonKeyF3":"0","commonKeyF4":"0","commonKeyF5":"0","commonKeyF6":"0","commonKeyF7":"0","commonKeyF8":"0","commonKeyF9":"0","commonKeyF10":"0","commonKeyF11":"0","commonKeyF12":"0","freeMove":"false"}},
{"name":"GALV_VisualNovelChoices","status":true,"description":"(v.1.6) Changes how the \"Choice\" message boxes display to appear more like visual novels.","parameters":{"Command Width":"300","Command Height":"48","Always Middle":"false","Message Gap":"0","Disabled Button":"3"}},
{"name":"Saba_Performance","status":true,"description":"","parameters":{}},
{"name":"YEP_ExternalLinks","status":true,"description":"v1.01 Link back to your home page through the title screen\nand also be able to link your players from within the game.","parameters":{"Home Page URL":"https://www.freem.ne.jp/win/game/16887","Home Page Text":"rxh","Popup Blocker Notice":"The link was blocked by a pop-up blocker."}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"SCGetDistance","status":true,"description":"２つのイベントまたはイベントと座標との距離を求めます。","parameters":{}},
{"name":"MKR_PlayerSensor","status":true,"description":"(v2.3.4) プレイヤー探索プラグイン","parameters":{"探索設定":"====================================","Sensor_Switch":"A","Lost_Sensor_Switch":"","Both_Sensor":"OFF","Terrain_Decision":"ON","Auto_Sensor":"false","Event_Decision":"ON","Region_Decision":"[]","Real_Range_X":"0.000","Real_Range_Y":"0.000","視界設定":"====================================","Range_Visible":"OFF","Range_Color":"blue","Range_Opacity":"60","Player_Found":"{\"Ballon\":\"0\",\"Se\":\"{\\\"Name\\\":\\\"\\\",\\\"Volume\\\":\\\"90\\\",\\\"Pitch\\\":\\\"100\\\",\\\"Pan\\\":\\\"0\\\"}\",\"Common_Event\":\"0\",\"Delay\":\"0\"}","Player_Lost":"{\"Ballon\":\"0\",\"Se\":\"{\\\"Name\\\":\\\"\\\",\\\"Volume\\\":\\\"90\\\",\\\"Pitch\\\":\\\"100\\\",\\\"Pan\\\":\\\"0\\\"}\",\"Common_Event\":\"0\",\"Delay\":\"0\"}"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"varIDforPlugin","status":true,"description":"【末尾に導入】\nプラグイン引数に変数の値を採用","parameters":{}}
];