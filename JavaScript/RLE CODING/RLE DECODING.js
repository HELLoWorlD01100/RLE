var fso = new ActiveXObject("Scripting.FileSystemObject");
fh = fso.OpenTextFile("output.txt");
let str = fh.ReadAll();
fh.Close();
fso = new ActiveXObject("Scripting.FileSystemObject");
fh = fileAccess.OpenTextFile("codeEscape.txt", 2, true);
let result = [];
for (let i = 0; i < str.length; i++) {
    if (str[i] == '#'){
      let count = str[i+1].charCodeAt();
      for (let j = 0; j< count;j++){
        result.push(str[i+2]);
      }
      i += 2;
    } else {
      result.push(str[i]);
    }
}
let finalStr = result.join('');
fh.Write(finalStr);
fh.Close();