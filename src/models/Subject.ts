export class Subject {
    name: string; // 실험체 이름
    alias: string; // 줄인말 (별명)
    englishName: string; // 영문명 (JSON 검색용)
    icon: string; // 아이콘 파일명
  
    constructor(name: string, alias: string, englishName: string, icon: string) {
      this.name = name;
      this.alias = alias;
      this.englishName = englishName;
      this.icon = icon;
    }
  }
  
  