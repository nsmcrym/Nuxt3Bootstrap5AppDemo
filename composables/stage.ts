export const useStage = () => useState("stage", () => {
    return {
        dam: "シェケナダム",
        tl: "通常",
        explanation: [
            { text: "かなり難しい。特徴は広い、起伏が激しいなど。" },
            { text: "く位置がコンテナを中心に三方向に分かれているため処理が遅れると別方向から湧いてきたシャケに挟まれる。特に沿岸組は起伏のせいで発見が遅れやすく処理に向かう余裕すらないという状況も多い。" },
            { text: "索敵が本当に大事になるステージで四秒に一回確認するレベルでもやりすぎではないと思う。" },
            { text: "桟橋側は特に危険でザコを寄せるなどで安置を作るなど工夫しよう。正面から突っ切るともれなく海の藻屑になる。三回目の攻撃をされているとスペシャルを考えるべき状況。" },

        ],
    }
})