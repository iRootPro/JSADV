// TASK 1 

let line = '';
for (let i = 1; i <= 9; i++) {
    if (i === 1) line = ' '
    else line = i;
    for (let j = 1; j <= 9; j++) {
        let mut = String(i * j)
        if (mut.length === 1) line += '  ' + mut
        else line += ' ' + String(i * j)
    }
    console.log(line)
}