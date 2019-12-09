export const typewriterApp = () => {
    const txt = [
        'a web developer.',
        'a lifelong learner.',
        'a problem solver.',
        'highly motivated.',
        'a team player.',
        'creative.',
        'a web developer.',
    ];

    let a = 0
    let b = txt[0].length;
    let arrOne = txt[0].split('');
    let c = 0
    let d = txt[1].length;
    let arrTwo = txt[1].split('');
    let e = 0
    let f = txt[2].length;
    let arrThree = txt[2].split('');
    let g = 0
    let h = txt[3].length;
    let arrFour = txt[3].split('');
    let i = 0
    let j = txt[4].length;
    let arrFive = txt[4].split('');
    let k = 0
    let l = txt[5].length;
    let arrSix = txt[5].split('');
    let m = 0
    let n = txt[6].length;
    let arrSeven = txt[6].split('');

    const speed = 100;
    let cursor = true;
    const cursorSpeed = 500;

    setInterval(() => {
        if (cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
        } else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
        }
    }, cursorSpeed);

    const typewriter = (i, x, word, txtArray, lastWord) => {

        const deleteLetter = () => {
            const newTxtArray = txtArray;
            newTxtArray.splice(-1, 1);
            document.getElementById('typewriter').innerHTML = newTxtArray.join('');
            x--;
        };

        if (i < txtArray.length) {
            document.getElementById('typewriter').innerHTML += txtArray[i];
            i++;
            setTimeout(() => {
                typewriter(i, x, word, txtArray, lastWord)
            }, speed);
        } else if (x === word.length && !lastWord) {
            setTimeout(() => {
                deleteLetter()
                typewriter(i, x, word, txtArray, lastWord)
            }, 1100);
        } else if (x > 0 && !lastWord) {
            setTimeout(() => {
                deleteLetter()
                typewriter(i, x, word, txtArray, lastWord)
            }, speed);
        }

    }

    setTimeout(() => {
        typewriter(a, b, txt[0], arrOne);
    }, 1000);
    setTimeout(() => {
        typewriter(c, d, txt[1], arrTwo);
    }, 6500);
    setTimeout(() => {
        typewriter(e, f, txt[2], arrThree);
    }, 12350);
    setTimeout(() => {
        typewriter(g, h, txt[3], arrFour);
    }, 18000);
    setTimeout(() => {
        typewriter(i, j, txt[4], arrFive);
    }, 23500);
    setTimeout(() => {
        typewriter(k, l, txt[5], arrSix);
    }, 28700);
    setTimeout(() => {
        typewriter(m, n, txt[6], arrSeven, true);
    }, 33100);
}
