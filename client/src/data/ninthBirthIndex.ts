export type NovelChapter = {
  id: string;
  number: number;
  title: string;
  partLabel: string;
  paragraphs: string[];
};

export type NovelPart = {
  id: string;
  number: number;
  title: string;
  start: number;
  end: number;
  status: string;
  description: string;
  chapters: NovelChapter[];
};

export const novelParts = [
  {
    "id": "part-1",
    "number": 1,
    "title": "第九門",
    "start": 1,
    "end": 9,
    "status": "已完結",
    "description": "從出生警報開始，林澈在第九次人生裡重新遇見母親、記憶署與那扇不該存在的門。",
    "chapters": [
      {
        "id": "chapter-1",
        "number": 1,
        "title": "第一章：出生警報",
        "partLabel": "第一部：第九門"
      },
      {
        "id": "chapter-2",
        "number": 2,
        "title": "第二章：母親的謊言",
        "partLabel": "第一部：第九門"
      },
      {
        "id": "chapter-3",
        "number": 3,
        "title": "第三章：最後一次",
        "partLabel": "第一部：第九門"
      },
      {
        "id": "chapter-4",
        "number": 4,
        "title": "第四章：死者醒來",
        "partLabel": "第一部：第九門"
      },
      {
        "id": "chapter-5",
        "number": 5,
        "title": "第五章：管道盡頭",
        "partLabel": "第一部：第九門"
      },
      {
        "id": "chapter-6",
        "number": 6,
        "title": "第六章：地下學校",
        "partLabel": "第一部：第九門"
      },
      {
        "id": "chapter-7",
        "number": 7,
        "title": "第七章：周嶺的殘響",
        "partLabel": "第一部：第九門"
      },
      {
        "id": "chapter-8",
        "number": 8,
        "title": "第八章：舊門",
        "partLabel": "第一部：第九門"
      },
      {
        "id": "chapter-9",
        "number": 9,
        "title": "第九章：第九門",
        "partLabel": "第一部：第九門"
      }
    ]
  },
  {
    "id": "part-2",
    "number": 2,
    "title": "黑河低語",
    "start": 10,
    "end": 18,
    "status": "已完結",
    "description": "門後的世界把記憶推進黑市、圖書館與名字法院，所有被保留或被刪除的事都開始索取代價。",
    "chapters": [
      {
        "id": "chapter-10",
        "number": 10,
        "title": "第十章：門後餘波",
        "partLabel": "第二部：黑河低語"
      },
      {
        "id": "chapter-11",
        "number": 11,
        "title": "第十一章：記憶黑市",
        "partLabel": "第二部：黑河低語"
      },
      {
        "id": "chapter-12",
        "number": 12,
        "title": "第十二章：名字法院",
        "partLabel": "第二部：黑河低語"
      },
      {
        "id": "chapter-13",
        "number": 13,
        "title": "第十三章：黑河圖書館",
        "partLabel": "第二部：黑河低語"
      },
      {
        "id": "chapter-14",
        "number": 14,
        "title": "第十四章：晶片壓制",
        "partLabel": "第二部：黑河低語"
      },
      {
        "id": "chapter-15",
        "number": 15,
        "title": "第十五章：母親的暗訊",
        "partLabel": "第二部：黑河低語"
      },
      {
        "id": "chapter-16",
        "number": 16,
        "title": "第十六章：白紙令擴散",
        "partLabel": "第二部：黑河低語"
      },
      {
        "id": "chapter-17",
        "number": 17,
        "title": "第十七章：集體崩潰",
        "partLabel": "第二部：黑河低語"
      },
      {
        "id": "chapter-18",
        "number": 18,
        "title": "第十八章：十八歲倒數",
        "partLabel": "第二部：黑河低語"
      }
    ]
  },
  {
    "id": "part-3",
    "number": 3,
    "title": "十八歲倒數",
    "start": 19,
    "end": 27,
    "status": "已完結",
    "description": "名字庫的真相逐步浮現；林澈必須在十八分鐘與十八年之間，找回被系統奪走的自我。",
    "chapters": [
      {
        "id": "chapter-19",
        "number": 19,
        "title": "第十九章：名字庫入口",
        "partLabel": "第三部：十八歲倒數"
      },
      {
        "id": "chapter-20",
        "number": 20,
        "title": "第二十章：被刪除的名字",
        "partLabel": "第三部：十八歲倒數"
      },
      {
        "id": "chapter-21",
        "number": 21,
        "title": "第二十一章：找回自我",
        "partLabel": "第三部：十八歲倒數"
      },
      {
        "id": "chapter-22",
        "number": 22,
        "title": "第二十二章：白司禮的晶片",
        "partLabel": "第三部：十八歲倒數"
      },
      {
        "id": "chapter-23",
        "number": 23,
        "title": "第二十三章：祈安的傷口",
        "partLabel": "第三部：十八歲倒數"
      },
      {
        "id": "chapter-24",
        "number": 24,
        "title": "第二十四章：嬰兒的呼吸",
        "partLabel": "第三部：十八歲倒數"
      },
      {
        "id": "chapter-25",
        "number": 25,
        "title": "第二十五章：名字的重量",
        "partLabel": "第三部：十八歲倒數"
      },
      {
        "id": "chapter-26",
        "number": 26,
        "title": "第二十六章：十八分鐘的盡頭",
        "partLabel": "第三部：十八歲倒數"
      },
      {
        "id": "chapter-27",
        "number": 27,
        "title": "第二十七章：第一次出生",
        "partLabel": "第三部：十八歲倒數"
      }
    ]
  },
  {
    "id": "part-4",
    "number": 4,
    "title": "第一次出生",
    "start": 28,
    "end": 30,
    "status": "連載中",
    "description": "黎明之後，第一張名單與自願整理站帶來新的選擇；第九次出生仍在持續展開。",
    "chapters": [
      {
        "id": "chapter-28",
        "number": 28,
        "title": "第二十八章：黎明後",
        "partLabel": "第四部：第一次出生"
      },
      {
        "id": "chapter-29",
        "number": 29,
        "title": "第二十九章：第一張名單",
        "partLabel": "第四部：第一次出生"
      },
      {
        "id": "chapter-30",
        "number": 30,
        "title": "第三十章：自願整理站",
        "partLabel": "第四部：第一次出生"
      }
    ]
  }
];

const partModules = import.meta.glob<{ novelPart: NovelPart }>("./ninthBirthPart*.ts");

export async function loadNovelPart(partNumber: number) {
  const modulePath = `./ninthBirthPart${partNumber}.ts`;
  const loader = partModules[modulePath];
  if (!loader) throw new Error(`Missing novel part: ${partNumber}`);
  return (await loader()).novelPart;
}

export function getPartForChapter(chapterNumber: number) {
  return novelParts.find((part) => chapterNumber >= part.start && chapterNumber <= part.end) ?? novelParts[0];
}
