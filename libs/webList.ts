type web = {
    title:string,
    content: string,
    example:string,
    photo: string
}

export const webList: web[] = [
    {
        title: "HP・LP作成",
        content: "企業様のHPや大学の体育会部活動、個人ブログまで幅広く作成しています。",
        example: "ページ下部にございます",
        photo: "/images/only-text.svg"
    },
    {
        title:"システム開発",
        content: "作って終わりではなく、改善を繰り返すことで、お客様の要求にお応えします。",
        example:"アポイント管理システム、読書管理アプリ、日本酒提案アプリ",
        photo: "/images/only-text.svg"
    },
    {
        title:"効率化・DX",
        content: "「ちょっと面倒だな」と思う業務を一度相談してみてください",
        example:"CSV自動変換アプリ、エクセルテンプレート作成、エクセルマクロ作成",
        photo: "/images/only-text.svg"
    },
    {
        title:"ECサイトカスタマイズ",
        content: "便利な一方で、思うようにカスタマイズできない方のお手伝いをします",
        example:"BASE、サブスクストア、Biiino",
        photo: "/images/only-text.svg"
    },
]