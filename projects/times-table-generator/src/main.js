const results = document.querySelector('.results');
const inputN = document.getElementById('input-number');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    createTable(inputN.value);
})

function createTable(num) {
    if (document.getElementById('table')) {
        document.getElementById('table').remove()
    }
    const tbl = document.createElement('table')
    tbl.classList.add('table')
    tbl.id = 'table'
    for (let i = 0; i < 2; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j <= 12; j++) {

                const td = tr.insertCell();
                td.appendChild(document.createTextNode(`Cell I${i}/J${j}`))
                td.style.border = '1px solid hsl(240, 30%, 61%)';

            if (i === 0) {
                const colors = ['#E0DFDF', '#40C2D9', '#33CC00', '#3298CB', '#EF689A', '#FFC31F', '#CBCB31', '#4475B9', '#81C241', '#6653A2', '#FFC31F', '#40C2D9', '#33CC00']
                if (j === 0) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[0]
                    td.textContent = 'x'
                }
                if (j === 1) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[1]
                    td.textContent = '1'
                }
                if (j === 2) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[2]
                    td.textContent = '2'
                }
                if (j === 3) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[3]
                    td.textContent = '3'
                }
                if (j === 4) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[4]
                    td.textContent = '4'
                }
                if (j === 5) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[5]
                    td.textContent = '5'
                }
                if (j === 6) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[6]
                    td.textContent = '6'
                }
                if (j === 7) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[7]
                    td.textContent = '7'
                }
                if (j === 8) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[8]
                    td.textContent = '8'
                }
                if (j === 9) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[9]
                    td.textContent = '9'
                }
                if (j === 10) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[10]
                    td.textContent = '10'
                }
                if (j === 11) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[11]
                    td.textContent = '11'
                }
                if (j === 12) {
                    td.classList.add('cell')
                    td.style.backgroundColor = colors[12]
                    td.textContent = '12'
                }
            }                

            if (i === 1 && j === 0) {
                switch (num) {
                    case '1':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#40C2D9'
                        break;
                    case '2':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#33CC00'
                        break;
                    case '3':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#3298CB'
                        break;
                    case '4':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#EF689A' 
                        break;
                    case '5':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#FFC31F'
                        break;
                    case '6':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#CBCB31' 
                        break;
                    case '7':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#4475B9'
                        break;
                    case '8':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#81C241'      
                        break;
                    case '9':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#6653A2'
                        break;
                    case '10':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#FFC31F' 
                        break;
                    case '11':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#40C2D9'
                        break;
                    case '12':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#33CC00'      
                        break;
                    default:
                        break;
                }
                td.textContent = num;
            } else if(i === 1 && j !== 0) {
                if (j === 1) td.textContent = multiplication(num)[0]
                if (j === 2) td.textContent = multiplication(num)[1]
                if (j === 3) td.textContent = multiplication(num)[2]
                if (j === 4) td.textContent = multiplication(num)[3]
                if (j === 5) td.textContent = multiplication(num)[4]
                if (j === 6) td.textContent = multiplication(num)[5]
                if (j === 7) td.textContent = multiplication(num)[6]
                if (j === 8) td.textContent = multiplication(num)[7]
                if (j === 9) td.textContent = multiplication(num)[8]
                if (j === 10) td.textContent = multiplication(num)[9]
                if (j === 11) td.textContent = multiplication(num)[10]
                if (j === 12) td.textContent = multiplication(num)[11]

                switch (num) {
                    case '1':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#66CCCC'
                        break;
                    case '2':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#6ABC45'
                        break;
                    case '3':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#0CA7C3'
                        break;
                    case '4':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#F398C0' 
                        break;
                    case '5':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#FFCC66'
                        break;
                    case '6':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#F7EC37' 
                        break;
                    case '7':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#558FCB'
                        break;
                    case '8':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#98CB98'      
                        break;
                    case '9':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#9797CA'
                        break;
                    case '10':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#FCCB98' 
                        break;
                    case '11':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#66CCCC'
                        break;
                    case '12':
                        td.classList.add('cell')
                        td.style.backgroundColor = '#6ABC45'      
                        break;
                    default:
                        break;
                }
            }
        }
    }
    results.appendChild(tbl);
}

function multiplication(num) {
    let result = [];
    for (let i = 1; i <= 12; i++) {
        result.push(i * num);
    }
    return result;
}
