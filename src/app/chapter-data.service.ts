import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ChapterDataService implements InMemoryDbService {
  createDb() {
    const chapters = [
      { id: 1, name: '1-50' },
      { id: 2, name: '51-100' },
      { id: 3, name: '101-150' },
      { id: 4, name: '151-200' },
      { id: 5, name: '201-250' },
      { id: 6, name: '251-300' },
      { id: 7, name: '301-350' },
      { id: 8, name: '351-400' },
      { id: 9, name: '401-450' },
      { id: 10, name: '451-500' },
      { id: 11, name: '501-550' },
      { id: 12, name: '551-600' },
      { id: 13, name: '601-650' },
      { id: 14, name: '651-700' },
      { id: 15, name: '701-750' },
      { id: 16, name: '751-800' },
      { id: 17, name: '801-850' },
      { id: 18, name: '851-900' },
      { id: 19, name: '901-950' },
      { id: 20, name: '951-1000' }
    ];

    const contents = 
    [
      {
        "id": 0,
        "content": []
      },
      {
        "id": 1,
        "content": [
          {
            "number": 1,
            "word": "的",
            "pinyin": "de"
          },
          {
            "number": 2,
            "word": "一",
            "pinyin": "yī"
          },
          {
            "number": 3,
            "word": "是",
            "pinyin": "shì"
          },
          {
            "number": 4,
            "word": "了",
            "pinyin": "liǎo"
          },
          {
            "number": 5,
            "word": "我",
            "pinyin": "wǒ"
          },
          {
            "number": 6,
            "word": "不",
            "pinyin": "bù"
          },
          {
            "number": 7,
            "word": "人",
            "pinyin": "rén"
          },
          {
            "number": 8,
            "word": "在",
            "pinyin": "zài"
          },
          {
            "number": 9,
            "word": "他",
            "pinyin": "tā"
          },
          {
            "number": 10,
            "word": "有",
            "pinyin": "yǒu"
          },
          {
            "number": 11,
            "word": "这",
            "pinyin": "zhè"
          },
          {
            "number": 12,
            "word": "个",
            "pinyin": "gè"
          },
          {
            "number": 13,
            "word": "上",
            "pinyin": "shàng"
          },
          {
            "number": 14,
            "word": "们",
            "pinyin": "mén"
          },
          {
            "number": 15,
            "word": "来",
            "pinyin": "lái"
          },
          {
            "number": 16,
            "word": "到",
            "pinyin": "dào"
          },
          {
            "number": 17,
            "word": "时",
            "pinyin": "shí"
          },
          {
            "number": 18,
            "word": "大",
            "pinyin": "dà"
          },
          {
            "number": 19,
            "word": "地",
            "pinyin": "dì"
          },
          {
            "number": 20,
            "word": "为",
            "pinyin": "wéi"
          },
          {
            "number": 21,
            "word": "子",
            "pinyin": "zǐ"
          },
          {
            "number": 22,
            "word": "中",
            "pinyin": "zhōng"
          },
          {
            "number": 23,
            "word": "你",
            "pinyin": "nǐ"
          },
          {
            "number": 24,
            "word": "说",
            "pinyin": "shuō"
          },
          {
            "number": 25,
            "word": "生",
            "pinyin": "shēng"
          },
          {
            "number": 26,
            "word": "国",
            "pinyin": "guó"
          },
          {
            "number": 27,
            "word": "年",
            "pinyin": "nián"
          },
          {
            "number": 28,
            "word": "着",
            "pinyin": "zhuó"
          },
          {
            "number": 29,
            "word": "就",
            "pinyin": "jiù"
          },
          {
            "number": 30,
            "word": "那",
            "pinyin": "nà"
          },
          {
            "number": 31,
            "word": "和",
            "pinyin": "hé"
          },
          {
            "number": 32,
            "word": "要",
            "pinyin": "yào"
          },
          {
            "number": 33,
            "word": "她",
            "pinyin": "tā"
          },
          {
            "number": 34,
            "word": "出",
            "pinyin": "chū"
          },
          {
            "number": 35,
            "word": "也",
            "pinyin": "yě"
          },
          {
            "number": 36,
            "word": "得",
            "pinyin": "dé"
          },
          {
            "number": 37,
            "word": "里",
            "pinyin": "lǐ"
          },
          {
            "number": 38,
            "word": "后",
            "pinyin": "hòu"
          },
          {
            "number": 39,
            "word": "自",
            "pinyin": "zì"
          },
          {
            "number": 40,
            "word": "以",
            "pinyin": "yǐ"
          },
          {
            "number": 41,
            "word": "会",
            "pinyin": "huì"
          },
          {
            "number": 42,
            "word": "家",
            "pinyin": "jiā"
          },
          {
            "number": 43,
            "word": "可",
            "pinyin": "kě"
          },
          {
            "number": 44,
            "word": "下",
            "pinyin": "xià"
          },
          {
            "number": 45,
            "word": "而",
            "pinyin": "ér"
          },
          {
            "number": 46,
            "word": "过",
            "pinyin": "guò"
          },
          {
            "number": 47,
            "word": "天",
            "pinyin": "tiān"
          },
          {
            "number": 48,
            "word": "去",
            "pinyin": "qù"
          },
          {
            "number": 49,
            "word": "能",
            "pinyin": "néng"
          },
          {
            "number": 50,
            "word": "对",
            "pinyin": "duì"
          }
        ]
      },
      {
        "id": 2,
        "content": [
          {
            "number": 51,
            "word": "小",
            "pinyin": "xiǎo"
          },
          {
            "number": 52,
            "word": "多",
            "pinyin": "duō"
          },
          {
            "number": 53,
            "word": "然",
            "pinyin": "rán"
          },
          {
            "number": 54,
            "word": "于",
            "pinyin": "yú"
          },
          {
            "number": 55,
            "word": "心",
            "pinyin": "xīn"
          },
          {
            "number": 56,
            "word": "学",
            "pinyin": "xué"
          },
          {
            "number": 57,
            "word": "么",
            "pinyin": "mó"
          },
          {
            "number": 58,
            "word": "之",
            "pinyin": "zhī"
          },
          {
            "number": 59,
            "word": "都",
            "pinyin": "dū"
          },
          {
            "number": 60,
            "word": "好",
            "pinyin": "hǎo"
          },
          {
            "number": 61,
            "word": "看",
            "pinyin": "kàn"
          },
          {
            "number": 62,
            "word": "起",
            "pinyin": "qǐ"
          },
          {
            "number": 63,
            "word": "发",
            "pinyin": "fā"
          },
          {
            "number": 64,
            "word": "当",
            "pinyin": "dāng"
          },
          {
            "number": 65,
            "word": "没",
            "pinyin": "méi"
          },
          {
            "number": 66,
            "word": "成",
            "pinyin": "chéng"
          },
          {
            "number": 67,
            "word": "只",
            "pinyin": "zhī"
          },
          {
            "number": 68,
            "word": "如",
            "pinyin": "rú"
          },
          {
            "number": 69,
            "word": "事",
            "pinyin": "shì"
          },
          {
            "number": 70,
            "word": "把",
            "pinyin": "bǎ"
          },
          {
            "number": 71,
            "word": "还",
            "pinyin": "huán"
          },
          {
            "number": 72,
            "word": "用",
            "pinyin": "yòng"
          },
          {
            "number": 73,
            "word": "第",
            "pinyin": "dì"
          },
          {
            "number": 74,
            "word": "样",
            "pinyin": "yàng"
          },
          {
            "number": 75,
            "word": "道",
            "pinyin": "dào"
          },
          {
            "number": 76,
            "word": "想",
            "pinyin": "xiǎng"
          },
          {
            "number": 77,
            "word": "作",
            "pinyin": "zuò"
          },
          {
            "number": 78,
            "word": "种",
            "pinyin": "zhǒng"
          },
          {
            "number": 79,
            "word": "开",
            "pinyin": "kāi"
          },
          {
            "number": 80,
            "word": "美",
            "pinyin": "měi"
          },
          {
            "number": 81,
            "word": "总",
            "pinyin": "zǒng"
          },
          {
            "number": 82,
            "word": "从",
            "pinyin": "cóng"
          },
          {
            "number": 83,
            "word": "无",
            "pinyin": "wú"
          },
          {
            "number": 84,
            "word": "情",
            "pinyin": "qíng"
          },
          {
            "number": 85,
            "word": "己",
            "pinyin": "jǐ"
          },
          {
            "number": 86,
            "word": "面",
            "pinyin": "miàn"
          },
          {
            "number": 87,
            "word": "最",
            "pinyin": "zuì"
          },
          {
            "number": 88,
            "word": "女",
            "pinyin": "nǚ"
          },
          {
            "number": 89,
            "word": "但",
            "pinyin": "dàn"
          },
          {
            "number": 90,
            "word": "现",
            "pinyin": "xiàn"
          },
          {
            "number": 91,
            "word": "前",
            "pinyin": "qián"
          },
          {
            "number": 92,
            "word": "些",
            "pinyin": "xiē"
          },
          {
            "number": 93,
            "word": "所",
            "pinyin": "suǒ"
          },
          {
            "number": 94,
            "word": "同",
            "pinyin": "tóng"
          },
          {
            "number": 95,
            "word": "日",
            "pinyin": "rì"
          },
          {
            "number": 96,
            "word": "手",
            "pinyin": "shǒu"
          },
          {
            "number": 97,
            "word": "又",
            "pinyin": "yòu"
          },
          {
            "number": 98,
            "word": "行",
            "pinyin": "háng"
          },
          {
            "number": 99,
            "word": "意",
            "pinyin": "yì"
          },
          {
            "number": 100,
            "word": "动",
            "pinyin": "dòng"
          }
        ]
      },
      {
        "id": 3,
        "content": [
          {
            "number": 101,
            "word": "方",
            "pinyin": "fāng"
          },
          {
            "number": 102,
            "word": "期",
            "pinyin": "qī"
          },
          {
            "number": 103,
            "word": "它",
            "pinyin": "tā"
          },
          {
            "number": 104,
            "word": "头",
            "pinyin": "tóu"
          },
          {
            "number": 105,
            "word": "经",
            "pinyin": "jīng"
          },
          {
            "number": 106,
            "word": "长",
            "pinyin": "cháng"
          },
          {
            "number": 107,
            "word": "儿",
            "pinyin": "ér"
          },
          {
            "number": 108,
            "word": "回",
            "pinyin": "huí"
          },
          {
            "number": 109,
            "word": "位",
            "pinyin": "wèi"
          },
          {
            "number": 110,
            "word": "分",
            "pinyin": "fēn"
          },
          {
            "number": 111,
            "word": "爱",
            "pinyin": "ài"
          },
          {
            "number": 112,
            "word": "老",
            "pinyin": "lǎo"
          },
          {
            "number": 113,
            "word": "因",
            "pinyin": "yīn"
          },
          {
            "number": 114,
            "word": "很",
            "pinyin": "hěn"
          },
          {
            "number": 115,
            "word": "给",
            "pinyin": "gěi"
          },
          {
            "number": 116,
            "word": "名",
            "pinyin": "míng"
          },
          {
            "number": 117,
            "word": "法",
            "pinyin": "fǎ"
          },
          {
            "number": 118,
            "word": "间",
            "pinyin": "jiān"
          },
          {
            "number": 119,
            "word": "斯",
            "pinyin": "sī"
          },
          {
            "number": 120,
            "word": "知",
            "pinyin": "zhī"
          },
          {
            "number": 121,
            "word": "世",
            "pinyin": "shì"
          },
          {
            "number": 122,
            "word": "什",
            "pinyin": "shí"
          },
          {
            "number": 123,
            "word": "两",
            "pinyin": "liǎng"
          },
          {
            "number": 124,
            "word": "次",
            "pinyin": "cì"
          },
          {
            "number": 125,
            "word": "使",
            "pinyin": "shǐ"
          },
          {
            "number": 126,
            "word": "身",
            "pinyin": "shēn"
          },
          {
            "number": 127,
            "word": "者",
            "pinyin": "zhě"
          },
          {
            "number": 128,
            "word": "被",
            "pinyin": "bèi"
          },
          {
            "number": 129,
            "word": "高",
            "pinyin": "gāo"
          },
          {
            "number": 130,
            "word": "已",
            "pinyin": "yǐ"
          },
          {
            "number": 131,
            "word": "亲",
            "pinyin": "qīn"
          },
          {
            "number": 132,
            "word": "其",
            "pinyin": "qí"
          },
          {
            "number": 133,
            "word": "进",
            "pinyin": "jìn"
          },
          {
            "number": 134,
            "word": "此",
            "pinyin": "cǐ"
          },
          {
            "number": 135,
            "word": "话",
            "pinyin": "huà"
          },
          {
            "number": 136,
            "word": "常",
            "pinyin": "cháng"
          },
          {
            "number": 137,
            "word": "与",
            "pinyin": "yǔ"
          },
          {
            "number": 138,
            "word": "活",
            "pinyin": "huó"
          },
          {
            "number": 139,
            "word": "正",
            "pinyin": "zhèng"
          },
          {
            "number": 140,
            "word": "感",
            "pinyin": "gǎn"
          },
          {
            "number": 141,
            "word": "见",
            "pinyin": "jiàn"
          },
          {
            "number": 142,
            "word": "明",
            "pinyin": "míng"
          },
          {
            "number": 143,
            "word": "问",
            "pinyin": "wèn"
          },
          {
            "number": 144,
            "word": "力",
            "pinyin": "lì"
          },
          {
            "number": 145,
            "word": "理",
            "pinyin": "lǐ"
          },
          {
            "number": 146,
            "word": "尔",
            "pinyin": "ěr"
          },
          {
            "number": 147,
            "word": "点",
            "pinyin": "diǎn"
          },
          {
            "number": 148,
            "word": "文",
            "pinyin": "wén"
          },
          {
            "number": 149,
            "word": "几",
            "pinyin": "jī"
          },
          {
            "number": 150,
            "word": "定",
            "pinyin": "dìng"
          }
        ]
      },
      {
        "id": 4,
        "content": [
          {
            "number": 151,
            "word": "本",
            "pinyin": "běn"
          },
          {
            "number": 152,
            "word": "公",
            "pinyin": "gōng"
          },
          {
            "number": 153,
            "word": "特",
            "pinyin": "tè"
          },
          {
            "number": 154,
            "word": "做",
            "pinyin": "zuò"
          },
          {
            "number": 155,
            "word": "外",
            "pinyin": "wài"
          },
          {
            "number": 156,
            "word": "孩",
            "pinyin": "hái"
          },
          {
            "number": 157,
            "word": "相",
            "pinyin": "xiāng"
          },
          {
            "number": 158,
            "word": "西",
            "pinyin": "xī"
          },
          {
            "number": 159,
            "word": "果",
            "pinyin": "guǒ"
          },
          {
            "number": 160,
            "word": "走",
            "pinyin": "zǒu"
          },
          {
            "number": 161,
            "word": "将",
            "pinyin": "jiāng"
          },
          {
            "number": 162,
            "word": "月",
            "pinyin": "yuè"
          },
          {
            "number": 163,
            "word": "十",
            "pinyin": "shí"
          },
          {
            "number": 164,
            "word": "实",
            "pinyin": "shí"
          },
          {
            "number": 165,
            "word": "向",
            "pinyin": "xiàng"
          },
          {
            "number": 166,
            "word": "声",
            "pinyin": "shēng"
          },
          {
            "number": 167,
            "word": "车",
            "pinyin": "chē"
          },
          {
            "number": 168,
            "word": "全",
            "pinyin": "quán"
          },
          {
            "number": 169,
            "word": "信",
            "pinyin": "xìn"
          },
          {
            "number": 170,
            "word": "重",
            "pinyin": "zhòng"
          },
          {
            "number": 171,
            "word": "三",
            "pinyin": "sān"
          },
          {
            "number": 172,
            "word": "机",
            "pinyin": "jī"
          },
          {
            "number": 173,
            "word": "工",
            "pinyin": "gōng"
          },
          {
            "number": 174,
            "word": "物",
            "pinyin": "wù"
          },
          {
            "number": 175,
            "word": "气",
            "pinyin": "qì"
          },
          {
            "number": 176,
            "word": "每",
            "pinyin": "měi"
          },
          {
            "number": 177,
            "word": "并",
            "pinyin": "bìng"
          },
          {
            "number": 178,
            "word": "别",
            "pinyin": "bié"
          },
          {
            "number": 179,
            "word": "真",
            "pinyin": "zhēn"
          },
          {
            "number": 180,
            "word": "打",
            "pinyin": "dǎ"
          },
          {
            "number": 181,
            "word": "太",
            "pinyin": "tài"
          },
          {
            "number": 182,
            "word": "新",
            "pinyin": "xīn"
          },
          {
            "number": 183,
            "word": "比",
            "pinyin": "bǐ"
          },
          {
            "number": 184,
            "word": "才",
            "pinyin": "cái"
          },
          {
            "number": 185,
            "word": "便",
            "pinyin": "biàn"
          },
          {
            "number": 186,
            "word": "夫",
            "pinyin": "fū"
          },
          {
            "number": 187,
            "word": "再",
            "pinyin": "zài"
          },
          {
            "number": 188,
            "word": "书",
            "pinyin": "shū"
          },
          {
            "number": 189,
            "word": "部",
            "pinyin": "bù"
          },
          {
            "number": 190,
            "word": "水",
            "pinyin": "shuǐ"
          },
          {
            "number": 191,
            "word": "像",
            "pinyin": "xiàng"
          },
          {
            "number": 192,
            "word": "眼",
            "pinyin": "yǎn"
          },
          {
            "number": 193,
            "word": "等",
            "pinyin": "děng"
          },
          {
            "number": 194,
            "word": "体",
            "pinyin": "tǐ"
          },
          {
            "number": 195,
            "word": "却",
            "pinyin": "què"
          },
          {
            "number": 196,
            "word": "加",
            "pinyin": "jiā"
          },
          {
            "number": 197,
            "word": "电",
            "pinyin": "diàn"
          },
          {
            "number": 198,
            "word": "主",
            "pinyin": "zhǔ"
          },
          {
            "number": 199,
            "word": "界",
            "pinyin": "jiè"
          },
          {
            "number": 200,
            "word": "门",
            "pinyin": "mén"
          }
        ]
      },
      {
        "id": 5,
        "content": [
          {
            "number": 201,
            "word": "利",
            "pinyin": "lì"
          },
          {
            "number": 202,
            "word": "海",
            "pinyin": "hǎi"
          },
          {
            "number": 203,
            "word": "受",
            "pinyin": "shòu"
          },
          {
            "number": 204,
            "word": "听",
            "pinyin": "tīng"
          },
          {
            "number": 205,
            "word": "表",
            "pinyin": "biǎo"
          },
          {
            "number": 206,
            "word": "德",
            "pinyin": "dé"
          },
          {
            "number": 207,
            "word": "少",
            "pinyin": "shǎo"
          },
          {
            "number": 208,
            "word": "克",
            "pinyin": "kè"
          },
          {
            "number": 209,
            "word": "代",
            "pinyin": "dài"
          },
          {
            "number": 210,
            "word": "员",
            "pinyin": "yuán"
          },
          {
            "number": 211,
            "word": "许",
            "pinyin": "xǔ"
          },
          {
            "number": 212,
            "word": "稜",
            "pinyin": "léng"
          },
          {
            "number": 213,
            "word": "先",
            "pinyin": "xiān"
          },
          {
            "number": 214,
            "word": "口",
            "pinyin": "kǒu"
          },
          {
            "number": 215,
            "word": "由",
            "pinyin": "yóu"
          },
          {
            "number": 216,
            "word": "死",
            "pinyin": "sǐ"
          },
          {
            "number": 217,
            "word": "安",
            "pinyin": "ān"
          },
          {
            "number": 218,
            "word": "写",
            "pinyin": "xiě"
          },
          {
            "number": 219,
            "word": "性",
            "pinyin": "xìng"
          },
          {
            "number": 220,
            "word": "马",
            "pinyin": "mǎ"
          },
          {
            "number": 221,
            "word": "光",
            "pinyin": "guāng"
          },
          {
            "number": 222,
            "word": "白",
            "pinyin": "bái"
          },
          {
            "number": 223,
            "word": "或",
            "pinyin": "huò"
          },
          {
            "number": 224,
            "word": "住",
            "pinyin": "zhù"
          },
          {
            "number": 225,
            "word": "难",
            "pinyin": "nán"
          },
          {
            "number": 226,
            "word": "望",
            "pinyin": "wàng"
          },
          {
            "number": 227,
            "word": "教",
            "pinyin": "jiào"
          },
          {
            "number": 228,
            "word": "命",
            "pinyin": "mìng"
          },
          {
            "number": 229,
            "word": "花",
            "pinyin": "huā"
          },
          {
            "number": 230,
            "word": "结",
            "pinyin": "jié"
          },
          {
            "number": 231,
            "word": "乐",
            "pinyin": "lè"
          },
          {
            "number": 232,
            "word": "色",
            "pinyin": "sè"
          },
          {
            "number": 233,
            "word": "更",
            "pinyin": "gēng"
          },
          {
            "number": 234,
            "word": "拉",
            "pinyin": "lā"
          },
          {
            "number": 235,
            "word": "东",
            "pinyin": "dōng"
          },
          {
            "number": 236,
            "word": "神",
            "pinyin": "shén"
          },
          {
            "number": 237,
            "word": "记",
            "pinyin": "jì"
          },
          {
            "number": 238,
            "word": "处",
            "pinyin": "chǔ"
          },
          {
            "number": 239,
            "word": "让",
            "pinyin": "ràng"
          },
          {
            "number": 240,
            "word": "母",
            "pinyin": "mǔ"
          },
          {
            "number": 241,
            "word": "父",
            "pinyin": "fù"
          },
          {
            "number": 242,
            "word": "应",
            "pinyin": "yīng"
          },
          {
            "number": 243,
            "word": "直",
            "pinyin": "zhí"
          },
          {
            "number": 244,
            "word": "字",
            "pinyin": "zì"
          },
          {
            "number": 245,
            "word": "场",
            "pinyin": "cháng"
          },
          {
            "number": 246,
            "word": "帄",
            "pinyin": "dīng"
          },
          {
            "number": 247,
            "word": "报",
            "pinyin": "bào"
          },
          {
            "number": 248,
            "word": "友",
            "pinyin": "yǒu"
          },
          {
            "number": 249,
            "word": "关",
            "pinyin": "guān"
          },
          {
            "number": 250,
            "word": "放",
            "pinyin": "fàng"
          }
        ]
      },
      {
        "id": 6,
        "content": [
          {
            "number": 251,
            "word": "至",
            "pinyin": "zhì"
          },
          {
            "number": 252,
            "word": "张",
            "pinyin": "zhāng"
          },
          {
            "number": 253,
            "word": "认",
            "pinyin": "rèn"
          },
          {
            "number": 254,
            "word": "接",
            "pinyin": "jiē"
          },
          {
            "number": 255,
            "word": "告",
            "pinyin": "gào"
          },
          {
            "number": 256,
            "word": "入",
            "pinyin": "rù"
          },
          {
            "number": 257,
            "word": "笑",
            "pinyin": "xiào"
          },
          {
            "number": 258,
            "word": "内",
            "pinyin": "nèi"
          },
          {
            "number": 259,
            "word": "英",
            "pinyin": "yīng"
          },
          {
            "number": 260,
            "word": "军",
            "pinyin": "jūn"
          },
          {
            "number": 261,
            "word": "候",
            "pinyin": "hòu"
          },
          {
            "number": 262,
            "word": "民",
            "pinyin": "mín"
          },
          {
            "number": 263,
            "word": "岁",
            "pinyin": "suì"
          },
          {
            "number": 264,
            "word": "往",
            "pinyin": "wǎng"
          },
          {
            "number": 265,
            "word": "何",
            "pinyin": "hé"
          },
          {
            "number": 266,
            "word": "度",
            "pinyin": "dù"
          },
          {
            "number": 267,
            "word": "山",
            "pinyin": "shān"
          },
          {
            "number": 268,
            "word": "觉",
            "pinyin": "jué"
          },
          {
            "number": 269,
            "word": "路",
            "pinyin": "lù"
          },
          {
            "number": 270,
            "word": "带",
            "pinyin": "dài"
          },
          {
            "number": 271,
            "word": "万",
            "pinyin": "wàn"
          },
          {
            "number": 272,
            "word": "男",
            "pinyin": "nán"
          },
          {
            "number": 273,
            "word": "边",
            "pinyin": "biān"
          },
          {
            "number": 274,
            "word": "风",
            "pinyin": "fēng"
          },
          {
            "number": 275,
            "word": "解",
            "pinyin": "jiě"
          },
          {
            "number": 276,
            "word": "叫",
            "pinyin": "jiào"
          },
          {
            "number": 277,
            "word": "任",
            "pinyin": "rèn"
          },
          {
            "number": 278,
            "word": "金",
            "pinyin": "jīn"
          },
          {
            "number": 279,
            "word": "快",
            "pinyin": "kuài"
          },
          {
            "number": 280,
            "word": "原",
            "pinyin": "yuán"
          },
          {
            "number": 281,
            "word": "吃",
            "pinyin": "chī"
          },
          {
            "number": 282,
            "word": "妈",
            "pinyin": "mā"
          },
          {
            "number": 283,
            "word": "变",
            "pinyin": "biàn"
          },
          {
            "number": 284,
            "word": "通",
            "pinyin": "tōng"
          },
          {
            "number": 285,
            "word": "师",
            "pinyin": "shī"
          },
          {
            "number": 286,
            "word": "立",
            "pinyin": "lì"
          },
          {
            "number": 287,
            "word": "象",
            "pinyin": "xiàng"
          },
          {
            "number": 288,
            "word": "数",
            "pinyin": "shù"
          },
          {
            "number": 289,
            "word": "四",
            "pinyin": "sì"
          },
          {
            "number": 290,
            "word": "失",
            "pinyin": "shī"
          },
          {
            "number": 291,
            "word": "满",
            "pinyin": "mǎn"
          },
          {
            "number": 292,
            "word": "战",
            "pinyin": "zhàn"
          },
          {
            "number": 293,
            "word": "远",
            "pinyin": "yuǎn"
          },
          {
            "number": 294,
            "word": "格",
            "pinyin": "gé"
          },
          {
            "number": 295,
            "word": "士",
            "pinyin": "shì"
          },
          {
            "number": 296,
            "word": "音",
            "pinyin": "yīn"
          },
          {
            "number": 297,
            "word": "轻",
            "pinyin": "qīng"
          },
          {
            "number": 298,
            "word": "目",
            "pinyin": "mù"
          },
          {
            "number": 299,
            "word": "条",
            "pinyin": "tiáo"
          },
          {
            "number": 300,
            "word": "呢",
            "pinyin": "ní"
          }
        ]
      },
      {
        "id": 7,
        "content": [
          {
            "number": 301,
            "word": "病",
            "pinyin": "bìng"
          },
          {
            "number": 302,
            "word": "始",
            "pinyin": "shǐ"
          },
          {
            "number": 303,
            "word": "达",
            "pinyin": "dá"
          },
          {
            "number": 304,
            "word": "深",
            "pinyin": "shēn"
          },
          {
            "number": 305,
            "word": "完",
            "pinyin": "wán"
          },
          {
            "number": 306,
            "word": "今",
            "pinyin": "jīn"
          },
          {
            "number": 307,
            "word": "提",
            "pinyin": "tí"
          },
          {
            "number": 308,
            "word": "求",
            "pinyin": "qiú"
          },
          {
            "number": 309,
            "word": "清",
            "pinyin": "qīng"
          },
          {
            "number": 310,
            "word": "王",
            "pinyin": "wáng"
          },
          {
            "number": 311,
            "word": "化",
            "pinyin": "huà"
          },
          {
            "number": 312,
            "word": "空",
            "pinyin": "kōng"
          },
          {
            "number": 313,
            "word": "业",
            "pinyin": "yè"
          },
          {
            "number": 314,
            "word": "思",
            "pinyin": "sī"
          },
          {
            "number": 315,
            "word": "切",
            "pinyin": "qiē"
          },
          {
            "number": 316,
            "word": "怎",
            "pinyin": "zěn"
          },
          {
            "number": 317,
            "word": "非",
            "pinyin": "fēi"
          },
          {
            "number": 318,
            "word": "找",
            "pinyin": "zhǎo"
          },
          {
            "number": 319,
            "word": "片",
            "pinyin": "piàn"
          },
          {
            "number": 320,
            "word": "罗",
            "pinyin": "luó"
          },
          {
            "number": 321,
            "word": "钱",
            "pinyin": "qián"
          },
          {
            "number": 322,
            "word": "紶",
            "pinyin": "qū"
          },
          {
            "number": 323,
            "word": "吗",
            "pinyin": "má"
          },
          {
            "number": 324,
            "word": "语",
            "pinyin": "yǔ"
          },
          {
            "number": 325,
            "word": "元",
            "pinyin": "yuán"
          },
          {
            "number": 326,
            "word": "喜",
            "pinyin": "xǐ"
          },
          {
            "number": 327,
            "word": "曾",
            "pinyin": "zēng"
          },
          {
            "number": 328,
            "word": "离",
            "pinyin": "lí"
          },
          {
            "number": 329,
            "word": "飞",
            "pinyin": "fēi"
          },
          {
            "number": 330,
            "word": "科",
            "pinyin": "kē"
          },
          {
            "number": 331,
            "word": "言",
            "pinyin": "yán"
          },
          {
            "number": 332,
            "word": "干",
            "pinyin": "gān"
          },
          {
            "number": 333,
            "word": "流",
            "pinyin": "liú"
          },
          {
            "number": 334,
            "word": "欢",
            "pinyin": "huān"
          },
          {
            "number": 335,
            "word": "约",
            "pinyin": "yuē"
          },
          {
            "number": 336,
            "word": "各",
            "pinyin": "gè"
          },
          {
            "number": 337,
            "word": "即",
            "pinyin": "jí"
          },
          {
            "number": 338,
            "word": "指",
            "pinyin": "zhǐ"
          },
          {
            "number": 339,
            "word": "合",
            "pinyin": "hé"
          },
          {
            "number": 340,
            "word": "反",
            "pinyin": "fǎn"
          },
          {
            "number": 341,
            "word": "题",
            "pinyin": "tí"
          },
          {
            "number": 342,
            "word": "必",
            "pinyin": "bì"
          },
          {
            "number": 343,
            "word": "该",
            "pinyin": "gāi"
          },
          {
            "number": 344,
            "word": "论",
            "pinyin": "lùn"
          },
          {
            "number": 345,
            "word": "交",
            "pinyin": "jiāo"
          },
          {
            "number": 346,
            "word": "终",
            "pinyin": "zhōng"
          },
          {
            "number": 347,
            "word": "林",
            "pinyin": "lín"
          },
          {
            "number": 348,
            "word": "请",
            "pinyin": "qǐng"
          },
          {
            "number": 349,
            "word": "医",
            "pinyin": "yī"
          },
          {
            "number": 350,
            "word": "晚",
            "pinyin": "wǎn"
          }
        ]
      },
      {
        "id": 8,
        "content": [
          {
            "number": 351,
            "word": "制",
            "pinyin": "zhì"
          },
          {
            "number": 352,
            "word": "球",
            "pinyin": "qiú"
          },
          {
            "number": 353,
            "word": "决",
            "pinyin": "jué"
          },
          {
            "number": 354,
            "word": "窢",
            "pinyin": "huò"
          },
          {
            "number": 355,
            "word": "传",
            "pinyin": "chuán"
          },
          {
            "number": 356,
            "word": "画",
            "pinyin": "huà"
          },
          {
            "number": 357,
            "word": "保",
            "pinyin": "bǎo"
          },
          {
            "number": 358,
            "word": "读",
            "pinyin": "dú"
          },
          {
            "number": 359,
            "word": "运",
            "pinyin": "yùn"
          },
          {
            "number": 360,
            "word": "及",
            "pinyin": "jí"
          },
          {
            "number": 361,
            "word": "则",
            "pinyin": "zé"
          },
          {
            "number": 362,
            "word": "房",
            "pinyin": "fáng"
          },
          {
            "number": 363,
            "word": "早",
            "pinyin": "zǎo"
          },
          {
            "number": 364,
            "word": "院",
            "pinyin": "yuàn"
          },
          {
            "number": 365,
            "word": "量",
            "pinyin": "liáng"
          },
          {
            "number": 366,
            "word": "苦",
            "pinyin": "kǔ"
          },
          {
            "number": 367,
            "word": "火",
            "pinyin": "huǒ"
          },
          {
            "number": 368,
            "word": "布",
            "pinyin": "bù"
          },
          {
            "number": 369,
            "word": "品",
            "pinyin": "pǐn"
          },
          {
            "number": 370,
            "word": "近",
            "pinyin": "jìn"
          },
          {
            "number": 371,
            "word": "坐",
            "pinyin": "zuò"
          },
          {
            "number": 372,
            "word": "产",
            "pinyin": "chǎn"
          },
          {
            "number": 373,
            "word": "答",
            "pinyin": "dá"
          },
          {
            "number": 374,
            "word": "星",
            "pinyin": "xīng"
          },
          {
            "number": 375,
            "word": "精",
            "pinyin": "jīng"
          },
          {
            "number": 376,
            "word": "视",
            "pinyin": "shì"
          },
          {
            "number": 377,
            "word": "五",
            "pinyin": "wǔ"
          },
          {
            "number": 378,
            "word": "连",
            "pinyin": "lián"
          },
          {
            "number": 379,
            "word": "司",
            "pinyin": "sī"
          },
          {
            "number": 380,
            "word": "巴",
            "pinyin": "bā"
          },
          {
            "number": 381,
            "word": "奇",
            "pinyin": "qí"
          },
          {
            "number": 382,
            "word": "管",
            "pinyin": "guǎn"
          },
          {
            "number": 383,
            "word": "类",
            "pinyin": "lèi"
          },
          {
            "number": 384,
            "word": "未",
            "pinyin": "wèi"
          },
          {
            "number": 385,
            "word": "朋",
            "pinyin": "péng"
          },
          {
            "number": 386,
            "word": "且",
            "pinyin": "qiě"
          },
          {
            "number": 387,
            "word": "婚",
            "pinyin": "hūn"
          },
          {
            "number": 388,
            "word": "台",
            "pinyin": "tái"
          },
          {
            "number": 389,
            "word": "夜",
            "pinyin": "yè"
          },
          {
            "number": 390,
            "word": "青",
            "pinyin": "qīng"
          },
          {
            "number": 391,
            "word": "北",
            "pinyin": "běi"
          },
          {
            "number": 392,
            "word": "队",
            "pinyin": "duì"
          },
          {
            "number": 393,
            "word": "久",
            "pinyin": "jiǔ"
          },
          {
            "number": 394,
            "word": "乎",
            "pinyin": "hū"
          },
          {
            "number": 395,
            "word": "越",
            "pinyin": "yuè"
          },
          {
            "number": 396,
            "word": "观",
            "pinyin": "guān"
          },
          {
            "number": 397,
            "word": "落",
            "pinyin": "là"
          },
          {
            "number": 398,
            "word": "尽",
            "pinyin": "jìn"
          },
          {
            "number": 399,
            "word": "形",
            "pinyin": "xíng"
          },
          {
            "number": 400,
            "word": "影",
            "pinyin": "yǐng"
          }
        ]
      },
      {
        "id": 9,
        "content": [
          {
            "number": 401,
            "word": "红",
            "pinyin": "hóng"
          },
          {
            "number": 402,
            "word": "爸",
            "pinyin": "bà"
          },
          {
            "number": 403,
            "word": "百",
            "pinyin": "bǎi"
          },
          {
            "number": 404,
            "word": "令",
            "pinyin": "líng"
          },
          {
            "number": 405,
            "word": "周",
            "pinyin": "zhōu"
          },
          {
            "number": 406,
            "word": "吧",
            "pinyin": "bā"
          },
          {
            "number": 407,
            "word": "识",
            "pinyin": "shí"
          },
          {
            "number": 408,
            "word": "步",
            "pinyin": "bù"
          },
          {
            "number": 409,
            "word": "希",
            "pinyin": "xī"
          },
          {
            "number": 410,
            "word": "亚",
            "pinyin": "yà"
          },
          {
            "number": 411,
            "word": "术",
            "pinyin": "shù"
          },
          {
            "number": 412,
            "word": "留",
            "pinyin": "liú"
          },
          {
            "number": 413,
            "word": "市",
            "pinyin": "shì"
          },
          {
            "number": 414,
            "word": "半",
            "pinyin": "bàn"
          },
          {
            "number": 415,
            "word": "热",
            "pinyin": "rè"
          },
          {
            "number": 416,
            "word": "送",
            "pinyin": "sòng"
          },
          {
            "number": 417,
            "word": "兴",
            "pinyin": "xīng"
          },
          {
            "number": 418,
            "word": "造",
            "pinyin": "zào"
          },
          {
            "number": 419,
            "word": "谈",
            "pinyin": "tán"
          },
          {
            "number": 420,
            "word": "容",
            "pinyin": "róng"
          },
          {
            "number": 421,
            "word": "极",
            "pinyin": "jí"
          },
          {
            "number": 422,
            "word": "随",
            "pinyin": "suí"
          },
          {
            "number": 423,
            "word": "演",
            "pinyin": "yǎn"
          },
          {
            "number": 424,
            "word": "收",
            "pinyin": "shōu"
          },
          {
            "number": 425,
            "word": "首",
            "pinyin": "shǒu"
          },
          {
            "number": 426,
            "word": "根",
            "pinyin": "gēn"
          },
          {
            "number": 427,
            "word": "讲",
            "pinyin": "jiǎng"
          },
          {
            "number": 428,
            "word": "整",
            "pinyin": "zhěng"
          },
          {
            "number": 429,
            "word": "式",
            "pinyin": "shì"
          },
          {
            "number": 430,
            "word": "取",
            "pinyin": "qǔ"
          },
          {
            "number": 431,
            "word": "照",
            "pinyin": "zhào"
          },
          {
            "number": 432,
            "word": "办",
            "pinyin": "bàn"
          },
          {
            "number": 433,
            "word": "强",
            "pinyin": "qiáng"
          },
          {
            "number": 434,
            "word": "石",
            "pinyin": "shí"
          },
          {
            "number": 435,
            "word": "古",
            "pinyin": "gǔ"
          },
          {
            "number": 436,
            "word": "华",
            "pinyin": "huá"
          },
          {
            "number": 437,
            "word": "諣",
            "pinyin": "huà"
          },
          {
            "number": 438,
            "word": "拿",
            "pinyin": "ná"
          },
          {
            "number": 439,
            "word": "计",
            "pinyin": "jì"
          },
          {
            "number": 440,
            "word": "您",
            "pinyin": "nín"
          },
          {
            "number": 441,
            "word": "装",
            "pinyin": "zhuāng"
          },
          {
            "number": 442,
            "word": "似",
            "pinyin": "sì"
          },
          {
            "number": 443,
            "word": "足",
            "pinyin": "zú"
          },
          {
            "number": 444,
            "word": "双",
            "pinyin": "shuāng"
          },
          {
            "number": 445,
            "word": "妻",
            "pinyin": "qī"
          },
          {
            "number": 446,
            "word": "尼",
            "pinyin": "ní"
          },
          {
            "number": 447,
            "word": "转",
            "pinyin": "zhuǎn"
          },
          {
            "number": 448,
            "word": "诉",
            "pinyin": "sù"
          },
          {
            "number": 449,
            "word": "米",
            "pinyin": "mǐ"
          },
          {
            "number": 450,
            "word": "称",
            "pinyin": "chēng"
          }
        ]
      },
      {
        "id": 10,
        "content": [
          {
            "number": 451,
            "word": "丽",
            "pinyin": "lì"
          },
          {
            "number": 452,
            "word": "客",
            "pinyin": "kè"
          },
          {
            "number": 453,
            "word": "南",
            "pinyin": "nán"
          },
          {
            "number": 454,
            "word": "领",
            "pinyin": "lǐng"
          },
          {
            "number": 455,
            "word": "节",
            "pinyin": "jié"
          },
          {
            "number": 456,
            "word": "衣",
            "pinyin": "yī"
          },
          {
            "number": 457,
            "word": "站",
            "pinyin": "zhàn"
          },
          {
            "number": 458,
            "word": "黑",
            "pinyin": "hēi"
          },
          {
            "number": 459,
            "word": "刻",
            "pinyin": "kè"
          },
          {
            "number": 460,
            "word": "统",
            "pinyin": "tǒng"
          },
          {
            "number": 461,
            "word": "断",
            "pinyin": "duàn"
          },
          {
            "number": 462,
            "word": "福",
            "pinyin": "fú"
          },
          {
            "number": 463,
            "word": "城",
            "pinyin": "chéng"
          },
          {
            "number": 464,
            "word": "故",
            "pinyin": "gù"
          },
          {
            "number": 465,
            "word": "历",
            "pinyin": "lì"
          },
          {
            "number": 466,
            "word": "惊",
            "pinyin": "jīng"
          },
          {
            "number": 467,
            "word": "脸",
            "pinyin": "liǎn"
          },
          {
            "number": 468,
            "word": "选",
            "pinyin": "xuǎn"
          },
          {
            "number": 469,
            "word": "包",
            "pinyin": "bāo"
          },
          {
            "number": 470,
            "word": "紧",
            "pinyin": "jǐn"
          },
          {
            "number": 471,
            "word": "争",
            "pinyin": "zhēng"
          },
          {
            "number": 472,
            "word": "另",
            "pinyin": "lìng"
          },
          {
            "number": 473,
            "word": "建",
            "pinyin": "jiàn"
          },
          {
            "number": 474,
            "word": "维",
            "pinyin": "wéi"
          },
          {
            "number": 475,
            "word": "绝",
            "pinyin": "jué"
          },
          {
            "number": 476,
            "word": "树",
            "pinyin": "shù"
          },
          {
            "number": 477,
            "word": "系",
            "pinyin": "xì"
          },
          {
            "number": 478,
            "word": "伤",
            "pinyin": "shāng"
          },
          {
            "number": 479,
            "word": "示",
            "pinyin": "shì"
          },
          {
            "number": 480,
            "word": "愿",
            "pinyin": "yuàn"
          },
          {
            "number": 481,
            "word": "持",
            "pinyin": "chí"
          },
          {
            "number": 482,
            "word": "千",
            "pinyin": "qiān"
          },
          {
            "number": 483,
            "word": "史",
            "pinyin": "shǐ"
          },
          {
            "number": 484,
            "word": "谁",
            "pinyin": "shuí"
          },
          {
            "number": 485,
            "word": "准",
            "pinyin": "zhǔn"
          },
          {
            "number": 486,
            "word": "联",
            "pinyin": "lián"
          },
          {
            "number": 487,
            "word": "妇",
            "pinyin": "fù"
          },
          {
            "number": 488,
            "word": "纪",
            "pinyin": "jì"
          },
          {
            "number": 489,
            "word": "基",
            "pinyin": "jī"
          },
          {
            "number": 490,
            "word": "买",
            "pinyin": "mǎi"
          },
          {
            "number": 491,
            "word": "志",
            "pinyin": "zhì"
          },
          {
            "number": 492,
            "word": "静",
            "pinyin": "jìng"
          },
          {
            "number": 493,
            "word": "阿",
            "pinyin": "ā"
          },
          {
            "number": 494,
            "word": "诗",
            "pinyin": "shī"
          },
          {
            "number": 495,
            "word": "独",
            "pinyin": "dú"
          },
          {
            "number": 496,
            "word": "复",
            "pinyin": "fù"
          },
          {
            "number": 497,
            "word": "痛",
            "pinyin": "tòng"
          },
          {
            "number": 498,
            "word": "消",
            "pinyin": "xiāo"
          },
          {
            "number": 499,
            "word": "社",
            "pinyin": "shè"
          },
          {
            "number": 500,
            "word": "算",
            "pinyin": "suàn"
          }
        ]
      },
      {
        "id": 11,
        "content": [
          {
            "number": 501,
            "word": "算",
            "pinyin": "suàn"
          },
          {
            "number": 502,
            "word": "义",
            "pinyin": "yì"
          },
          {
            "number": 503,
            "word": "竟",
            "pinyin": "jìng"
          },
          {
            "number": 504,
            "word": "确",
            "pinyin": "què"
          },
          {
            "number": 505,
            "word": "酒",
            "pinyin": "jiǔ"
          },
          {
            "number": 506,
            "word": "需",
            "pinyin": "xū"
          },
          {
            "number": 507,
            "word": "单",
            "pinyin": "dān"
          },
          {
            "number": 508,
            "word": "治",
            "pinyin": "zhì"
          },
          {
            "number": 509,
            "word": "卡",
            "pinyin": "qiǎ"
          },
          {
            "number": 510,
            "word": "幸",
            "pinyin": "xìng"
          },
          {
            "number": 511,
            "word": "兰",
            "pinyin": "lán"
          },
          {
            "number": 512,
            "word": "念",
            "pinyin": "niàn"
          },
          {
            "number": 513,
            "word": "举",
            "pinyin": "jǔ"
          },
          {
            "number": 514,
            "word": "仅",
            "pinyin": "jǐn"
          },
          {
            "number": 515,
            "word": "钟",
            "pinyin": "zhōng"
          },
          {
            "number": 516,
            "word": "怕",
            "pinyin": "pà"
          },
          {
            "number": 517,
            "word": "共",
            "pinyin": "gòng"
          },
          {
            "number": 518,
            "word": "毛",
            "pinyin": "máo"
          },
          {
            "number": 519,
            "word": "句",
            "pinyin": "jù"
          },
          {
            "number": 520,
            "word": "息",
            "pinyin": "xī"
          },
          {
            "number": 521,
            "word": "功",
            "pinyin": "gōng"
          },
          {
            "number": 522,
            "word": "官",
            "pinyin": "guān"
          },
          {
            "number": 523,
            "word": "待",
            "pinyin": "dài"
          },
          {
            "number": 524,
            "word": "究",
            "pinyin": "jiū"
          },
          {
            "number": 525,
            "word": "跟",
            "pinyin": "gēn"
          },
          {
            "number": 526,
            "word": "穿",
            "pinyin": "chuān"
          },
          {
            "number": 527,
            "word": "室",
            "pinyin": "shì"
          },
          {
            "number": 528,
            "word": "易",
            "pinyin": "yì"
          },
          {
            "number": 529,
            "word": "游",
            "pinyin": "yóu"
          },
          {
            "number": 530,
            "word": "程",
            "pinyin": "chéng"
          },
          {
            "number": 531,
            "word": "号",
            "pinyin": "hào"
          },
          {
            "number": 532,
            "word": "居",
            "pinyin": "jū"
          },
          {
            "number": 533,
            "word": "考",
            "pinyin": "kǎo"
          },
          {
            "number": 534,
            "word": "突",
            "pinyin": "tū"
          },
          {
            "number": 535,
            "word": "皮",
            "pinyin": "pí"
          },
          {
            "number": 536,
            "word": "哪",
            "pinyin": "nǎ"
          },
          {
            "number": 537,
            "word": "费",
            "pinyin": "fèi"
          },
          {
            "number": 538,
            "word": "倒",
            "pinyin": "dǎo"
          },
          {
            "number": 539,
            "word": "价",
            "pinyin": "jià"
          },
          {
            "number": 540,
            "word": "图",
            "pinyin": "tú"
          },
          {
            "number": 541,
            "word": "具",
            "pinyin": "jù"
          },
          {
            "number": 542,
            "word": "刚",
            "pinyin": "gāng"
          },
          {
            "number": 543,
            "word": "脑",
            "pinyin": "nǎo"
          },
          {
            "number": 544,
            "word": "永",
            "pinyin": "yǒng"
          },
          {
            "number": 545,
            "word": "歌",
            "pinyin": "gē"
          },
          {
            "number": 546,
            "word": "响",
            "pinyin": "xiǎng"
          },
          {
            "number": 547,
            "word": "商",
            "pinyin": "shāng"
          },
          {
            "number": 548,
            "word": "礼",
            "pinyin": "lǐ"
          },
          {
            "number": 549,
            "word": "细",
            "pinyin": "xì"
          },
          {
            "number": 550,
            "word": "专",
            "pinyin": "zhuān"
          }
        ]
      },
      {
        "id": 12,
        "content": [
          {
            "number": 551,
            "word": "黄",
            "pinyin": "huáng"
          },
          {
            "number": 552,
            "word": "块",
            "pinyin": "kuài"
          },
          {
            "number": 553,
            "word": "脚",
            "pinyin": "jiǎo"
          },
          {
            "number": 554,
            "word": "味",
            "pinyin": "wèi"
          },
          {
            "number": 555,
            "word": "灵",
            "pinyin": "líng"
          },
          {
            "number": 556,
            "word": "改",
            "pinyin": "gǎi"
          },
          {
            "number": 557,
            "word": "据",
            "pinyin": "jù"
          },
          {
            "number": 558,
            "word": "般",
            "pinyin": "bān"
          },
          {
            "number": 559,
            "word": "破",
            "pinyin": "pò"
          },
          {
            "number": 560,
            "word": "引",
            "pinyin": "yǐn"
          },
          {
            "number": 561,
            "word": "食",
            "pinyin": "shí"
          },
          {
            "number": 562,
            "word": "仍",
            "pinyin": "réng"
          },
          {
            "number": 563,
            "word": "存",
            "pinyin": "cún"
          },
          {
            "number": 564,
            "word": "众",
            "pinyin": "zhòng"
          },
          {
            "number": 565,
            "word": "注",
            "pinyin": "zhù"
          },
          {
            "number": 566,
            "word": "笔",
            "pinyin": "bǐ"
          },
          {
            "number": 567,
            "word": "甚",
            "pinyin": "shèn"
          },
          {
            "number": 568,
            "word": "某",
            "pinyin": "mǒu"
          },
          {
            "number": 569,
            "word": "沉",
            "pinyin": "chén"
          },
          {
            "number": 570,
            "word": "血",
            "pinyin": "xiě"
          },
          {
            "number": 571,
            "word": "备",
            "pinyin": "bèi"
          },
          {
            "number": 572,
            "word": "习",
            "pinyin": "xí"
          },
          {
            "number": 573,
            "word": "校",
            "pinyin": "xiào"
          },
          {
            "number": 574,
            "word": "默",
            "pinyin": "mò"
          },
          {
            "number": 575,
            "word": "务",
            "pinyin": "wù"
          },
          {
            "number": 576,
            "word": "土",
            "pinyin": "tǔ"
          },
          {
            "number": 577,
            "word": "微",
            "pinyin": "wēi"
          },
          {
            "number": 578,
            "word": "娘",
            "pinyin": "niáng"
          },
          {
            "number": 579,
            "word": "须",
            "pinyin": "xū"
          },
          {
            "number": 580,
            "word": "试",
            "pinyin": "shì"
          },
          {
            "number": 581,
            "word": "怀",
            "pinyin": "huái"
          },
          {
            "number": 582,
            "word": "料",
            "pinyin": "liào"
          },
          {
            "number": 583,
            "word": "调",
            "pinyin": "tiáo"
          },
          {
            "number": 584,
            "word": "广",
            "pinyin": "guǎng"
          },
          {
            "number": 585,
            "word": "蜖",
            "pinyin": "huí"
          },
          {
            "number": 586,
            "word": "苏",
            "pinyin": "sū"
          },
          {
            "number": 587,
            "word": "显",
            "pinyin": "xiǎn"
          },
          {
            "number": 588,
            "word": "赛",
            "pinyin": "sài"
          },
          {
            "number": 589,
            "word": "查",
            "pinyin": "chá"
          },
          {
            "number": 590,
            "word": "密",
            "pinyin": "mì"
          },
          {
            "number": 591,
            "word": "议",
            "pinyin": "yì"
          },
          {
            "number": 592,
            "word": "底",
            "pinyin": "dǐ"
          },
          {
            "number": 593,
            "word": "列",
            "pinyin": "liè"
          },
          {
            "number": 594,
            "word": "富",
            "pinyin": "fù"
          },
          {
            "number": 595,
            "word": "梦",
            "pinyin": "mèng"
          },
          {
            "number": 596,
            "word": "错",
            "pinyin": "cuò"
          },
          {
            "number": 597,
            "word": "座",
            "pinyin": "zuò"
          },
          {
            "number": 598,
            "word": "参",
            "pinyin": "cān"
          },
          {
            "number": 599,
            "word": "八",
            "pinyin": "bā"
          },
          {
            "number": 600,
            "word": "除",
            "pinyin": "chú"
          }
        ]
      },
      {
        "id": 13,
        "content": [
          {
            "number": 601,
            "word": "跑",
            "pinyin": "pǎo"
          },
          {
            "number": 602,
            "word": "亮",
            "pinyin": "liàng"
          },
          {
            "number": 603,
            "word": "假",
            "pinyin": "jiǎ"
          },
          {
            "number": 604,
            "word": "印",
            "pinyin": "yìn"
          },
          {
            "number": 605,
            "word": "设",
            "pinyin": "shè"
          },
          {
            "number": 606,
            "word": "线",
            "pinyin": "xiàn"
          },
          {
            "number": 607,
            "word": "温",
            "pinyin": "wēn"
          },
          {
            "number": 608,
            "word": "虽",
            "pinyin": "suī"
          },
          {
            "number": 609,
            "word": "掉",
            "pinyin": "diào"
          },
          {
            "number": 610,
            "word": "京",
            "pinyin": "jīng"
          },
          {
            "number": 611,
            "word": "初",
            "pinyin": "chū"
          },
          {
            "number": 612,
            "word": "养",
            "pinyin": "yǎng"
          },
          {
            "number": 613,
            "word": "香",
            "pinyin": "xiāng"
          },
          {
            "number": 614,
            "word": "停",
            "pinyin": "tíng"
          },
          {
            "number": 615,
            "word": "际",
            "pinyin": "jì"
          },
          {
            "number": 616,
            "word": "致",
            "pinyin": "zhì"
          },
          {
            "number": 617,
            "word": "阳",
            "pinyin": "yáng"
          },
          {
            "number": 618,
            "word": "纸",
            "pinyin": "zhǐ"
          },
          {
            "number": 619,
            "word": "李",
            "pinyin": "lǐ"
          },
          {
            "number": 620,
            "word": "纳",
            "pinyin": "nà"
          },
          {
            "number": 621,
            "word": "验",
            "pinyin": "yàn"
          },
          {
            "number": 622,
            "word": "助",
            "pinyin": "zhù"
          },
          {
            "number": 623,
            "word": "激",
            "pinyin": "jī"
          },
          {
            "number": 624,
            "word": "够",
            "pinyin": "gòu"
          },
          {
            "number": 625,
            "word": "严",
            "pinyin": "yán"
          },
          {
            "number": 626,
            "word": "证",
            "pinyin": "zhèng"
          },
          {
            "number": 627,
            "word": "帝",
            "pinyin": "dì"
          },
          {
            "number": 628,
            "word": "饭",
            "pinyin": "fàn"
          },
          {
            "number": 629,
            "word": "忘",
            "pinyin": "wàng"
          },
          {
            "number": 630,
            "word": "趣",
            "pinyin": "qù"
          },
          {
            "number": 631,
            "word": "支",
            "pinyin": "zhī"
          },
          {
            "number": 632,
            "word": "春",
            "pinyin": "chūn"
          },
          {
            "number": 633,
            "word": "集",
            "pinyin": "jí"
          },
          {
            "number": 634,
            "word": "丈",
            "pinyin": "zhàng"
          },
          {
            "number": 635,
            "word": "木",
            "pinyin": "mù"
          },
          {
            "number": 636,
            "word": "研",
            "pinyin": "yán"
          },
          {
            "number": 637,
            "word": "班",
            "pinyin": "bān"
          },
          {
            "number": 638,
            "word": "普",
            "pinyin": "pǔ"
          },
          {
            "number": 639,
            "word": "导",
            "pinyin": "dǎo"
          },
          {
            "number": 640,
            "word": "顿",
            "pinyin": "dùn"
          },
          {
            "number": 641,
            "word": "睡",
            "pinyin": "shuì"
          },
          {
            "number": 642,
            "word": "展",
            "pinyin": "zhǎn"
          },
          {
            "number": 643,
            "word": "跳",
            "pinyin": "tiào"
          },
          {
            "number": 644,
            "word": "获",
            "pinyin": "huò"
          },
          {
            "number": 645,
            "word": "艺",
            "pinyin": "yì"
          },
          {
            "number": 646,
            "word": "六",
            "pinyin": "liù"
          },
          {
            "number": 647,
            "word": "波",
            "pinyin": "bō"
          },
          {
            "number": 648,
            "word": "察",
            "pinyin": "chá"
          },
          {
            "number": 649,
            "word": "群",
            "pinyin": "qún"
          },
          {
            "number": 650,
            "word": "皇",
            "pinyin": "huáng"
          }
        ]
      },
      {
        "id": 14,
        "content": [
          {
            "number": 651,
            "word": "段",
            "pinyin": "duàn"
          },
          {
            "number": 652,
            "word": "急",
            "pinyin": "jí"
          },
          {
            "number": 653,
            "word": "庭",
            "pinyin": "tíng"
          },
          {
            "number": 654,
            "word": "创",
            "pinyin": "chuàng"
          },
          {
            "number": 655,
            "word": "区",
            "pinyin": "qū"
          },
          {
            "number": 656,
            "word": "奥",
            "pinyin": "ào"
          },
          {
            "number": 657,
            "word": "器",
            "pinyin": "qì"
          },
          {
            "number": 658,
            "word": "谢",
            "pinyin": "xiè"
          },
          {
            "number": 659,
            "word": "弟",
            "pinyin": "dì"
          },
          {
            "number": 660,
            "word": "店",
            "pinyin": "diàn"
          },
          {
            "number": 661,
            "word": "否",
            "pinyin": "fǒu"
          },
          {
            "number": 662,
            "word": "害",
            "pinyin": "hài"
          },
          {
            "number": 663,
            "word": "草",
            "pinyin": "cǎo"
          },
          {
            "number": 664,
            "word": "排",
            "pinyin": "pái"
          },
          {
            "number": 665,
            "word": "背",
            "pinyin": "bèi"
          },
          {
            "number": 666,
            "word": "止",
            "pinyin": "zhǐ"
          },
          {
            "number": 667,
            "word": "组",
            "pinyin": "zǔ"
          },
          {
            "number": 668,
            "word": "州",
            "pinyin": "zhōu"
          },
          {
            "number": 669,
            "word": "朝",
            "pinyin": "zhāo"
          },
          {
            "number": 670,
            "word": "封",
            "pinyin": "fēng"
          },
          {
            "number": 671,
            "word": "睛",
            "pinyin": "jīng"
          },
          {
            "number": 672,
            "word": "板",
            "pinyin": "bǎn"
          },
          {
            "number": 673,
            "word": "角",
            "pinyin": "jiǎo"
          },
          {
            "number": 674,
            "word": "况",
            "pinyin": "kuàng"
          },
          {
            "number": 675,
            "word": "曲",
            "pinyin": "qū"
          },
          {
            "number": 676,
            "word": "馆",
            "pinyin": "guǎn"
          },
          {
            "number": 677,
            "word": "育",
            "pinyin": "yù"
          },
          {
            "number": 678,
            "word": "忙",
            "pinyin": "máng"
          },
          {
            "number": 679,
            "word": "质",
            "pinyin": "zhì"
          },
          {
            "number": 680,
            "word": "河",
            "pinyin": "hé"
          },
          {
            "number": 681,
            "word": "续",
            "pinyin": "xù"
          },
          {
            "number": 682,
            "word": "哥",
            "pinyin": "gē"
          },
          {
            "number": 683,
            "word": "呼",
            "pinyin": "hū"
          },
          {
            "number": 684,
            "word": "若",
            "pinyin": "ruò"
          },
          {
            "number": 685,
            "word": "推",
            "pinyin": "tuī"
          },
          {
            "number": 686,
            "word": "境",
            "pinyin": "jìng"
          },
          {
            "number": 687,
            "word": "遇",
            "pinyin": "yù"
          },
          {
            "number": 688,
            "word": "雨",
            "pinyin": "yǔ"
          },
          {
            "number": 689,
            "word": "标",
            "pinyin": "biāo"
          },
          {
            "number": 690,
            "word": "姐",
            "pinyin": "jiě"
          },
          {
            "number": 691,
            "word": "充",
            "pinyin": "chōng"
          },
          {
            "number": 692,
            "word": "围",
            "pinyin": "wéi"
          },
          {
            "number": 693,
            "word": "案",
            "pinyin": "àn"
          },
          {
            "number": 694,
            "word": "伦",
            "pinyin": "lún"
          },
          {
            "number": 695,
            "word": "护",
            "pinyin": "hù"
          },
          {
            "number": 696,
            "word": "冷",
            "pinyin": "lěng"
          },
          {
            "number": 697,
            "word": "警",
            "pinyin": "jǐng"
          },
          {
            "number": 698,
            "word": "贝",
            "pinyin": "bèi"
          },
          {
            "number": 699,
            "word": "著",
            "pinyin": "zhù"
          },
          {
            "number": 700,
            "word": "雪",
            "pinyin": "xuě"
          }
        ]
      },
      {
        "id": 15,
        "content": [
          {
            "number": 701,
            "word": "索",
            "pinyin": "suǒ"
          },
          {
            "number": 702,
            "word": "剧",
            "pinyin": "jù"
          },
          {
            "number": 703,
            "word": "啊",
            "pinyin": "ā"
          },
          {
            "number": 704,
            "word": "船",
            "pinyin": "chuán"
          },
          {
            "number": 705,
            "word": "险",
            "pinyin": "xiǎn"
          },
          {
            "number": 706,
            "word": "烟",
            "pinyin": "yān"
          },
          {
            "number": 707,
            "word": "依",
            "pinyin": "yī"
          },
          {
            "number": 708,
            "word": "斗",
            "pinyin": "dǒu"
          },
          {
            "number": 709,
            "word": "值",
            "pinyin": "zhí"
          },
          {
            "number": 710,
            "word": "帮",
            "pinyin": "bāng"
          },
          {
            "number": 711,
            "word": "汉",
            "pinyin": "hàn"
          },
          {
            "number": 712,
            "word": "慢",
            "pinyin": "màn"
          },
          {
            "number": 713,
            "word": "佛",
            "pinyin": "fó"
          },
          {
            "number": 714,
            "word": "肯",
            "pinyin": "kěn"
          },
          {
            "number": 715,
            "word": "闻",
            "pinyin": "wén"
          },
          {
            "number": 716,
            "word": "唱",
            "pinyin": "chàng"
          },
          {
            "number": 717,
            "word": "沙",
            "pinyin": "shā"
          },
          {
            "number": 718,
            "word": "局",
            "pinyin": "jú"
          },
          {
            "number": 719,
            "word": "伯",
            "pinyin": "bó"
          },
          {
            "number": 720,
            "word": "族",
            "pinyin": "zú"
          },
          {
            "number": 721,
            "word": "低",
            "pinyin": "dī"
          },
          {
            "number": 722,
            "word": "玩",
            "pinyin": "wán"
          },
          {
            "number": 723,
            "word": "资",
            "pinyin": "zī"
          },
          {
            "number": 724,
            "word": "屋",
            "pinyin": "wū"
          },
          {
            "number": 725,
            "word": "击",
            "pinyin": "jī"
          },
          {
            "number": 726,
            "word": "速",
            "pinyin": "sù"
          },
          {
            "number": 727,
            "word": "顾",
            "pinyin": "gù"
          },
          {
            "number": 728,
            "word": "泪",
            "pinyin": "lèi"
          },
          {
            "number": 729,
            "word": "洲",
            "pinyin": "zhōu"
          },
          {
            "number": 730,
            "word": "团",
            "pinyin": "tuán"
          },
          {
            "number": 731,
            "word": "圣",
            "pinyin": "shèng"
          },
          {
            "number": 732,
            "word": "旁",
            "pinyin": "páng"
          },
          {
            "number": 733,
            "word": "堂",
            "pinyin": "táng"
          },
          {
            "number": 734,
            "word": "兵",
            "pinyin": "bīng"
          },
          {
            "number": 735,
            "word": "七",
            "pinyin": "qī"
          },
          {
            "number": 736,
            "word": "露",
            "pinyin": "lòu"
          },
          {
            "number": 737,
            "word": "园",
            "pinyin": "yuán"
          },
          {
            "number": 738,
            "word": "牛",
            "pinyin": "niú"
          },
          {
            "number": 739,
            "word": "哭",
            "pinyin": "kū"
          },
          {
            "number": 740,
            "word": "旅",
            "pinyin": "lǚ"
          },
          {
            "number": 741,
            "word": "街",
            "pinyin": "jiē"
          },
          {
            "number": 742,
            "word": "劳",
            "pinyin": "láo"
          },
          {
            "number": 743,
            "word": "型",
            "pinyin": "xíng"
          },
          {
            "number": 744,
            "word": "烈",
            "pinyin": "liè"
          },
          {
            "number": 745,
            "word": "姑",
            "pinyin": "gū"
          },
          {
            "number": 746,
            "word": "陈",
            "pinyin": "chén"
          },
          {
            "number": 747,
            "word": "莫",
            "pinyin": "mò"
          },
          {
            "number": 748,
            "word": "鱼",
            "pinyin": "yú"
          },
          {
            "number": 749,
            "word": "异",
            "pinyin": "yì"
          },
          {
            "number": 750,
            "word": "抱",
            "pinyin": "bào"
          }
        ]
      },
      {
        "id": 16,
        "content": [
          {
            "number": 751,
            "word": "宝",
            "pinyin": "bǎo"
          },
          {
            "number": 752,
            "word": "权",
            "pinyin": "quán"
          },
          {
            "number": 753,
            "word": "鲁",
            "pinyin": "lǔ"
          },
          {
            "number": 754,
            "word": "简",
            "pinyin": "jiǎn"
          },
          {
            "number": 755,
            "word": "态",
            "pinyin": "tài"
          },
          {
            "number": 756,
            "word": "级",
            "pinyin": "jí"
          },
          {
            "number": 757,
            "word": "票",
            "pinyin": "piào"
          },
          {
            "number": 758,
            "word": "怪",
            "pinyin": "guài"
          },
          {
            "number": 759,
            "word": "寻",
            "pinyin": "xún"
          },
          {
            "number": 760,
            "word": "杀",
            "pinyin": "shā"
          },
          {
            "number": 761,
            "word": "律",
            "pinyin": "lǜ"
          },
          {
            "number": 762,
            "word": "胜",
            "pinyin": "shèng"
          },
          {
            "number": 763,
            "word": "份",
            "pinyin": "fèn"
          },
          {
            "number": 764,
            "word": "汽",
            "pinyin": "qì"
          },
          {
            "number": 765,
            "word": "右",
            "pinyin": "yòu"
          },
          {
            "number": 766,
            "word": "洋",
            "pinyin": "yáng"
          },
          {
            "number": 767,
            "word": "范",
            "pinyin": "fàn"
          },
          {
            "number": 768,
            "word": "床",
            "pinyin": "chuáng"
          },
          {
            "number": 769,
            "word": "舞",
            "pinyin": "wǔ"
          },
          {
            "number": 770,
            "word": "秘",
            "pinyin": "mì"
          },
          {
            "number": 771,
            "word": "午",
            "pinyin": "wǔ"
          },
          {
            "number": 772,
            "word": "登",
            "pinyin": "dēng"
          },
          {
            "number": 773,
            "word": "楼",
            "pinyin": "lóu"
          },
          {
            "number": 774,
            "word": "贵",
            "pinyin": "guì"
          },
          {
            "number": 775,
            "word": "吸",
            "pinyin": "xī"
          },
          {
            "number": 776,
            "word": "责",
            "pinyin": "zé"
          },
          {
            "number": 777,
            "word": "例",
            "pinyin": "lì"
          },
          {
            "number": 778,
            "word": "追",
            "pinyin": "zhuī"
          },
          {
            "number": 779,
            "word": "较",
            "pinyin": "jiào"
          },
          {
            "number": 780,
            "word": "职",
            "pinyin": "zhí"
          },
          {
            "number": 781,
            "word": "属",
            "pinyin": "shǔ"
          },
          {
            "number": 782,
            "word": "渐",
            "pinyin": "jiàn"
          },
          {
            "number": 783,
            "word": "左",
            "pinyin": "zuǒ"
          },
          {
            "number": 784,
            "word": "录",
            "pinyin": "lù"
          },
          {
            "number": 785,
            "word": "丝",
            "pinyin": "sī"
          },
          {
            "number": 786,
            "word": "牙",
            "pinyin": "yá"
          },
          {
            "number": 787,
            "word": "党",
            "pinyin": "dǎng"
          },
          {
            "number": 788,
            "word": "继",
            "pinyin": "jì"
          },
          {
            "number": 789,
            "word": "托",
            "pinyin": "tuō"
          },
          {
            "number": 790,
            "word": "赶",
            "pinyin": "gǎn"
          },
          {
            "number": 791,
            "word": "章",
            "pinyin": "zhāng"
          },
          {
            "number": 792,
            "word": "智",
            "pinyin": "zhì"
          },
          {
            "number": 793,
            "word": "冲",
            "pinyin": "chōng"
          },
          {
            "number": 794,
            "word": "叶",
            "pinyin": "yè"
          },
          {
            "number": 795,
            "word": "胡",
            "pinyin": "hú"
          },
          {
            "number": 796,
            "word": "吉",
            "pinyin": "jí"
          },
          {
            "number": 797,
            "word": "卖",
            "pinyin": "mài"
          },
          {
            "number": 798,
            "word": "坚",
            "pinyin": "jiān"
          },
          {
            "number": 799,
            "word": "喝",
            "pinyin": "hē"
          },
          {
            "number": 800,
            "word": "肉",
            "pinyin": "ròu"
          }
        ]
      },
      {
        "id": 17,
        "content": [
          {
            "number": 801,
            "word": "遗",
            "pinyin": "yí"
          },
          {
            "number": 802,
            "word": "救",
            "pinyin": "jiù"
          },
          {
            "number": 803,
            "word": "修",
            "pinyin": "xiū"
          },
          {
            "number": 804,
            "word": "松",
            "pinyin": "sōng"
          },
          {
            "number": 805,
            "word": "临",
            "pinyin": "lín"
          },
          {
            "number": 806,
            "word": "藏",
            "pinyin": "cáng"
          },
          {
            "number": 807,
            "word": "担",
            "pinyin": "dān"
          },
          {
            "number": 808,
            "word": "戏",
            "pinyin": "xì"
          },
          {
            "number": 809,
            "word": "善",
            "pinyin": "shàn"
          },
          {
            "number": 810,
            "word": "卫",
            "pinyin": "wèi"
          },
          {
            "number": 811,
            "word": "药",
            "pinyin": "yào"
          },
          {
            "number": 812,
            "word": "悲",
            "pinyin": "bēi"
          },
          {
            "number": 813,
            "word": "敢",
            "pinyin": "gǎn"
          },
          {
            "number": 814,
            "word": "靠",
            "pinyin": "kào"
          },
          {
            "number": 815,
            "word": "伊",
            "pinyin": "yī"
          },
          {
            "number": 816,
            "word": "村",
            "pinyin": "cūn"
          },
          {
            "number": 817,
            "word": "戴",
            "pinyin": "dài"
          },
          {
            "number": 818,
            "word": "词",
            "pinyin": "cí"
          },
          {
            "number": 819,
            "word": "森",
            "pinyin": "sēn"
          },
          {
            "number": 820,
            "word": "耳",
            "pinyin": "ěr"
          },
          {
            "number": 821,
            "word": "差",
            "pinyin": "chà"
          },
          {
            "number": 822,
            "word": "短",
            "pinyin": "duǎn"
          },
          {
            "number": 823,
            "word": "祖",
            "pinyin": "zǔ"
          },
          {
            "number": 824,
            "word": "云",
            "pinyin": "yún"
          },
          {
            "number": 825,
            "word": "规",
            "pinyin": "guī"
          },
          {
            "number": 826,
            "word": "窗",
            "pinyin": "chuāng"
          },
          {
            "number": 827,
            "word": "散",
            "pinyin": "sàn"
          },
          {
            "number": 828,
            "word": "迷",
            "pinyin": "mí"
          },
          {
            "number": 829,
            "word": "油",
            "pinyin": "yóu"
          },
          {
            "number": 830,
            "word": "旧",
            "pinyin": "jiù"
          },
          {
            "number": 831,
            "word": "适",
            "pinyin": "shì"
          },
          {
            "number": 832,
            "word": "乡",
            "pinyin": "xiāng"
          },
          {
            "number": 833,
            "word": "架",
            "pinyin": "jià"
          },
          {
            "number": 834,
            "word": "恩",
            "pinyin": "ēn"
          },
          {
            "number": 835,
            "word": "投",
            "pinyin": "tóu"
          },
          {
            "number": 836,
            "word": "弹",
            "pinyin": "dàn"
          },
          {
            "number": 837,
            "word": "铁",
            "pinyin": "tiě"
          },
          {
            "number": 838,
            "word": "博",
            "pinyin": "bó"
          },
          {
            "number": 839,
            "word": "雷",
            "pinyin": "léi"
          },
          {
            "number": 840,
            "word": "府",
            "pinyin": "fǔ"
          },
          {
            "number": 841,
            "word": "压",
            "pinyin": "yā"
          },
          {
            "number": 842,
            "word": "超",
            "pinyin": "chāo"
          },
          {
            "number": 843,
            "word": "负",
            "pinyin": "fù"
          },
          {
            "number": 844,
            "word": "勒",
            "pinyin": "lè"
          },
          {
            "number": 845,
            "word": "杂",
            "pinyin": "zá"
          },
          {
            "number": 846,
            "word": "醒",
            "pinyin": "xǐng"
          },
          {
            "number": 847,
            "word": "洗",
            "pinyin": "xǐ"
          },
          {
            "number": 848,
            "word": "采",
            "pinyin": "cǎi"
          },
          {
            "number": 849,
            "word": "毫",
            "pinyin": "háo"
          },
          {
            "number": 850,
            "word": "嘴",
            "pinyin": "zuǐ"
          }
        ]
      },
      {
        "id": 18,
        "content": [
          {
            "number": 851,
            "word": "毕",
            "pinyin": "bì"
          },
          {
            "number": 852,
            "word": "九",
            "pinyin": "jiǔ"
          },
          {
            "number": 853,
            "word": "冰",
            "pinyin": "bīng"
          },
          {
            "number": 854,
            "word": "既",
            "pinyin": "jì"
          },
          {
            "number": 855,
            "word": "状",
            "pinyin": "zhuàng"
          },
          {
            "number": 856,
            "word": "乱",
            "pinyin": "luàn"
          },
          {
            "number": 857,
            "word": "景",
            "pinyin": "jǐng"
          },
          {
            "number": 858,
            "word": "席",
            "pinyin": "xí"
          },
          {
            "number": 859,
            "word": "珍",
            "pinyin": "zhēn"
          },
          {
            "number": 860,
            "word": "童",
            "pinyin": "tóng"
          },
          {
            "number": 861,
            "word": "顶",
            "pinyin": "dǐng"
          },
          {
            "number": 862,
            "word": "派",
            "pinyin": "pài"
          },
          {
            "number": 863,
            "word": "素",
            "pinyin": "sù"
          },
          {
            "number": 864,
            "word": "脱",
            "pinyin": "tuō"
          },
          {
            "number": 865,
            "word": "农",
            "pinyin": "nóng"
          },
          {
            "number": 866,
            "word": "疑",
            "pinyin": "yí"
          },
          {
            "number": 867,
            "word": "练",
            "pinyin": "liàn"
          },
          {
            "number": 868,
            "word": "野",
            "pinyin": "yě"
          },
          {
            "number": 869,
            "word": "按",
            "pinyin": "àn"
          },
          {
            "number": 870,
            "word": "犯",
            "pinyin": "fàn"
          },
          {
            "number": 871,
            "word": "拍",
            "pinyin": "pāi"
          },
          {
            "number": 872,
            "word": "征",
            "pinyin": "zhēng"
          },
          {
            "number": 873,
            "word": "坏",
            "pinyin": "huài"
          },
          {
            "number": 874,
            "word": "骨",
            "pinyin": "gǔ"
          },
          {
            "number": 875,
            "word": "余",
            "pinyin": "yú"
          },
          {
            "number": 876,
            "word": "承",
            "pinyin": "chéng"
          },
          {
            "number": 877,
            "word": "置",
            "pinyin": "zhì"
          },
          {
            "number": 878,
            "word": "臓",
            "pinyin": "zàng"
          },
          {
            "number": 879,
            "word": "彩",
            "pinyin": "cǎi"
          },
          {
            "number": 880,
            "word": "灯",
            "pinyin": "dēng"
          },
          {
            "number": 881,
            "word": "巨",
            "pinyin": "jù"
          },
          {
            "number": 882,
            "word": "琴",
            "pinyin": "qín"
          },
          {
            "number": 883,
            "word": "免",
            "pinyin": "miǎn"
          },
          {
            "number": 884,
            "word": "环",
            "pinyin": "huán"
          },
          {
            "number": 885,
            "word": "姆",
            "pinyin": "mǔ"
          },
          {
            "number": 886,
            "word": "暗",
            "pinyin": "àn"
          },
          {
            "number": 887,
            "word": "换",
            "pinyin": "huàn"
          },
          {
            "number": 888,
            "word": "技",
            "pinyin": "jì"
          },
          {
            "number": 889,
            "word": "翻",
            "pinyin": "fān"
          },
          {
            "number": 890,
            "word": "束",
            "pinyin": "shù"
          },
          {
            "number": 891,
            "word": "增",
            "pinyin": "zēng"
          },
          {
            "number": 892,
            "word": "忍",
            "pinyin": "rěn"
          },
          {
            "number": 893,
            "word": "餐",
            "pinyin": "cān"
          },
          {
            "number": 894,
            "word": "洛",
            "pinyin": "luò"
          },
          {
            "number": 895,
            "word": "塞",
            "pinyin": "sāi"
          },
          {
            "number": 896,
            "word": "缺",
            "pinyin": "quē"
          },
          {
            "number": 897,
            "word": "忆",
            "pinyin": "yì"
          },
          {
            "number": 898,
            "word": "判",
            "pinyin": "pàn"
          },
          {
            "number": 899,
            "word": "欧",
            "pinyin": "ōu"
          },
          {
            "number": 900,
            "word": "层",
            "pinyin": "céng"
          }
        ]
      },
      {
        "id": 19,
        "content": [
          {
            "number": 901,
            "word": "付",
            "pinyin": "fù"
          },
          {
            "number": 902,
            "word": "阵",
            "pinyin": "zhèn"
          },
          {
            "number": 903,
            "word": "玛",
            "pinyin": "mǎ"
          },
          {
            "number": 904,
            "word": "批",
            "pinyin": "pī"
          },
          {
            "number": 905,
            "word": "岛",
            "pinyin": "dǎo"
          },
          {
            "number": 906,
            "word": "项",
            "pinyin": "xiàng"
          },
          {
            "number": 907,
            "word": "狗",
            "pinyin": "gǒu"
          },
          {
            "number": 908,
            "word": "休",
            "pinyin": "xiū"
          },
          {
            "number": 909,
            "word": "懂",
            "pinyin": "dǒng"
          },
          {
            "number": 910,
            "word": "武",
            "pinyin": "wǔ"
          },
          {
            "number": 911,
            "word": "革",
            "pinyin": "gé"
          },
          {
            "number": 912,
            "word": "良",
            "pinyin": "liáng"
          },
          {
            "number": 913,
            "word": "恶",
            "pinyin": "è"
          },
          {
            "number": 914,
            "word": "恋",
            "pinyin": "liàn"
          },
          {
            "number": 915,
            "word": "委",
            "pinyin": "wěi"
          },
          {
            "number": 916,
            "word": "拥",
            "pinyin": "yōng"
          },
          {
            "number": 917,
            "word": "娜",
            "pinyin": "nà"
          },
          {
            "number": 918,
            "word": "妙",
            "pinyin": "miào"
          },
          {
            "number": 919,
            "word": "探",
            "pinyin": "tàn"
          },
          {
            "number": 920,
            "word": "呀",
            "pinyin": "yā"
          },
          {
            "number": 921,
            "word": "营",
            "pinyin": "yíng"
          },
          {
            "number": 922,
            "word": "退",
            "pinyin": "tuì"
          },
          {
            "number": 923,
            "word": "摇",
            "pinyin": "yáo"
          },
          {
            "number": 924,
            "word": "弄",
            "pinyin": "nòng"
          },
          {
            "number": 925,
            "word": "桌",
            "pinyin": "zhuō"
          },
          {
            "number": 926,
            "word": "熟",
            "pinyin": "shú"
          },
          {
            "number": 927,
            "word": "诺",
            "pinyin": "nuò"
          },
          {
            "number": 928,
            "word": "宣",
            "pinyin": "xuān"
          },
          {
            "number": 929,
            "word": "银",
            "pinyin": "yín"
          },
          {
            "number": 930,
            "word": "势",
            "pinyin": "shì"
          },
          {
            "number": 931,
            "word": "奖",
            "pinyin": "jiǎng"
          },
          {
            "number": 932,
            "word": "宫",
            "pinyin": "gōng"
          },
          {
            "number": 933,
            "word": "忽",
            "pinyin": "hū"
          },
          {
            "number": 934,
            "word": "套",
            "pinyin": "tào"
          },
          {
            "number": 935,
            "word": "康",
            "pinyin": "kāng"
          },
          {
            "number": 936,
            "word": "供",
            "pinyin": "gōng"
          },
          {
            "number": 937,
            "word": "优",
            "pinyin": "yōu"
          },
          {
            "number": 938,
            "word": "课",
            "pinyin": "kè"
          },
          {
            "number": 939,
            "word": "鸟",
            "pinyin": "niǎo"
          },
          {
            "number": 940,
            "word": "喊",
            "pinyin": "hǎn"
          },
          {
            "number": 941,
            "word": "降",
            "pinyin": "jiàng"
          },
          {
            "number": 942,
            "word": "夏",
            "pinyin": "xià"
          },
          {
            "number": 943,
            "word": "困",
            "pinyin": "kùn"
          },
          {
            "number": 944,
            "word": "刘",
            "pinyin": "liú"
          },
          {
            "number": 945,
            "word": "罪",
            "pinyin": "zuì"
          },
          {
            "number": 946,
            "word": "亡",
            "pinyin": "wáng"
          },
          {
            "number": 947,
            "word": "鞋",
            "pinyin": "xié"
          },
          {
            "number": 948,
            "word": "健",
            "pinyin": "jiàn"
          },
          {
            "number": 949,
            "word": "模",
            "pinyin": "mó"
          },
          {
            "number": 950,
            "word": "败",
            "pinyin": "bài"
          }
        ]
      },
      {
        "id": 20,
        "content": [
          {
            "number": 951,
            "word": "伴",
            "pinyin": "bàn"
          },
          {
            "number": 952,
            "word": "守",
            "pinyin": "shǒu"
          },
          {
            "number": 953,
            "word": "挥",
            "pinyin": "huī"
          },
          {
            "number": 954,
            "word": "鲜",
            "pinyin": "xiān"
          },
          {
            "number": 955,
            "word": "财",
            "pinyin": "cái"
          },
          {
            "number": 956,
            "word": "孤",
            "pinyin": "gū"
          },
          {
            "number": 957,
            "word": "枪",
            "pinyin": "qiāng"
          },
          {
            "number": 958,
            "word": "禁",
            "pinyin": "jīn"
          },
          {
            "number": 959,
            "word": "恐",
            "pinyin": "kǒng"
          },
          {
            "number": 960,
            "word": "伙",
            "pinyin": "huǒ"
          },
          {
            "number": 961,
            "word": "杰",
            "pinyin": "jié"
          },
          {
            "number": 962,
            "word": "迹",
            "pinyin": "jì"
          },
          {
            "number": 963,
            "word": "妹",
            "pinyin": "mèi"
          },
          {
            "number": 964,
            "word": "藸",
            "pinyin": "zhū"
          },
          {
            "number": 965,
            "word": "遍",
            "pinyin": "biàn"
          },
          {
            "number": 966,
            "word": "盖",
            "pinyin": "gài"
          },
          {
            "number": 967,
            "word": "副",
            "pinyin": "fù"
          },
          {
            "number": 968,
            "word": "坦",
            "pinyin": "tǎn"
          },
          {
            "number": 969,
            "word": "牌",
            "pinyin": "pái"
          },
          {
            "number": 970,
            "word": "江",
            "pinyin": "jiāng"
          },
          {
            "number": 971,
            "word": "顺",
            "pinyin": "shùn"
          },
          {
            "number": 972,
            "word": "秋",
            "pinyin": "qiū"
          },
          {
            "number": 973,
            "word": "萨",
            "pinyin": "sà"
          },
          {
            "number": 974,
            "word": "菜",
            "pinyin": "cài"
          },
          {
            "number": 975,
            "word": "划",
            "pinyin": "huá"
          },
          {
            "number": 976,
            "word": "授",
            "pinyin": "shòu"
          },
          {
            "number": 977,
            "word": "归",
            "pinyin": "guī"
          },
          {
            "number": 978,
            "word": "浪",
            "pinyin": "làng"
          },
          {
            "number": 979,
            "word": "听",
            "pinyin": "tīng"
          },
          {
            "number": 980,
            "word": "凡",
            "pinyin": "fán"
          },
          {
            "number": 981,
            "word": "预",
            "pinyin": "yù"
          },
          {
            "number": 982,
            "word": "奶",
            "pinyin": "nǎi"
          },
          {
            "number": 983,
            "word": "雄",
            "pinyin": "xióng"
          },
          {
            "number": 984,
            "word": "升",
            "pinyin": "shēng"
          },
          {
            "number": 985,
            "word": "碃",
            "pinyin": "qìng"
          },
          {
            "number": 986,
            "word": "编",
            "pinyin": "biān"
          },
          {
            "number": 987,
            "word": "典",
            "pinyin": "diǎn"
          },
          {
            "number": 988,
            "word": "袋",
            "pinyin": "dài"
          },
          {
            "number": 989,
            "word": "莱",
            "pinyin": "lái"
          },
          {
            "number": 990,
            "word": "含",
            "pinyin": "hán"
          },
          {
            "number": 991,
            "word": "盛",
            "pinyin": "shèng"
          },
          {
            "number": 992,
            "word": "济",
            "pinyin": "jì"
          },
          {
            "number": 993,
            "word": "蒙",
            "pinyin": "mēng"
          },
          {
            "number": 994,
            "word": "棋",
            "pinyin": "qí"
          },
          {
            "number": 995,
            "word": "端",
            "pinyin": "duān"
          },
          {
            "number": 996,
            "word": "腿",
            "pinyin": "tuǐ"
          },
          {
            "number": 997,
            "word": "招",
            "pinyin": "zhāo"
          },
          {
            "number": 998,
            "word": "释",
            "pinyin": "shì"
          },
          {
            "number": 999,
            "word": "介",
            "pinyin": "jiè"
          },
          {
            "number": 1000,
            "word": "烧",
            "pinyin": "shāo"
          }
        ]
      },
    ]
       
    return {chapters: chapters, contents: contents};
  }
}
