import fs from "fs";
import {parse} from 'csv-parse/sync';
 
export function readCSV_Util(filepath: string){
   
    //using readFileSync file system function parse CSV
    let csvFileContent = fs.readFileSync(filepath, "utf8");
    return parse(csvFileContent,
        {
            columns: true,
            skip_empty_lines: true,
            trim: true
        }
    );
}