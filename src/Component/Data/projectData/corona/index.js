import CoronaData from './coronaInfo'

const coronaData = [...CoronaData];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(coronaData);
export default coronaData;
