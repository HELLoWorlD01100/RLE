let str = 'aaaaaaaaaaaabbbbbbbbbbbbbbbbccc'
let result = [];
for (let i = 0; i < str.length; i++) {
    let count = 1;
    if (str[i] != '#') {
        while (i < str.length - 1 && str[i] == str[i + 1]) {
            count++;
            i++;
        }
        if (count > 3 && count < 256)
            result.push('#' + String.fromCharCode(count) + str[i])
        else if (count > 0 && count < 4) {
            for (let j = 0; j < count; j++) {
                result.push(str[i]);
            }
        } else if (count > 255) {
            while (count > 255) {
                result.push('#' + 255 + str[i])
                count - 255;
            }
            if (count > 3) {
                result.push('#' + String.fromCharCode(count) + str[i]);
            } else {
                for (let j = 0; j < count; j++) {
                    result.push(str[i]);
                }
            }
        }
    } else {
        while (i < str.length - 1 && str[i] == str[i + 1] && str[i] == '#') {
            count++;
            i++;
        }
        while (count > 255) {
            result.push('#' + String.fromCharCode(255) + str[i])
            count -= 255;
        }
        if (count > 0)
            result.push('#' + String.fromCharCode(count) + str[i])
    }
}
let finalStr = result.join('');
console.log(finalStr)
