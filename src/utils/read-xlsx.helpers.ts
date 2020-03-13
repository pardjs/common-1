import xlsx from 'node-xlsx';

export const readXlsxFile = (
  filePath: string,
  sheetIndex = 0,
): { name: string; data: any[] } => {
  const workSheetsFromFile = xlsx.parse(filePath);
  return workSheetsFromFile[sheetIndex];
};
