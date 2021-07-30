const { readFileSync,writeFileSync } = require("fs")
console.log('start')
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt',
    'ughruygfyugf',{flag:'a'})
console.log('done with thse tasks')
console.log('starting with next one')