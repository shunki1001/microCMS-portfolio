import * as cheerio from "cheerio";

export interface h3array {
  id: string;
  title: string;
}

export interface ObjectArray {
  key: string;
  id: string;
  title: string;
  children: h3array[];
}

export const headingsList = (body: string) => {
  var idArray: ObjectArray[] = [];
  const $ = cheerio.load(body);
  $("h2, h3").each((i, elm) => {
    if (elm.name == "h2") {
      idArray.push({
        key: elm.name,
        id: elm.attribs.id,
        title: $(`${elm.name}[id=${elm.attribs.id}]`).text(),
        children: [],
      });
    } else if (elm.name == "h3") {
      // この時点でのh2リストを取得
      const parentIndexes = idArray.filter((item) => {
        return item.key == "h2";
      });
      // h2リストの最後=親のh2を取得
      const parentIndex = parentIndexes[parentIndexes.length - 1];
      // console.log(parentIndex);
      // 親のh2リストに、children要素としてh3のidを追加
      idArray.forEach((item, index) => {
        item.id == parentIndex.id &&
          idArray[index].children?.push({
            id: elm.attribs.id,
            title: $(`${elm.name}[id=${elm.attribs.id}]`).text(),
          });
      });
    }
  });
  //   $("h3").each((i, elm) => {
  //     idArray[i] = {
  //       key: "h3",
  //       id: elm.attribs.id,
  //       title: $(`h3[id=${elm.attribs.id}]`).text(),
  //     };
  //   });
  return idArray;
};
