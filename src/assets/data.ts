
const colors = ['#5096ff', '#e60053', '#00ddb5', '#dde100', '#8458ff', '#ffa800'];

export const getColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};


export const participants = {
  Users: [
    { name: 'funkytallguy', color: '#e60053' },
    { name: 'HalfEntity', color: '#8458ff'},
    { name: 'homelessmango33', color: '#00ddb5'},
    { name: 'JijE34', color: '#ffa800'},
    { name: 'KingAhhRock', color: '#00ddb5'},
    { name: 'KSK999', color: '#dde100'},
    { name: 'Ladyprime91', color: '#ffa800'},
    { name: 'longshot123', color: '#8458ff'},
    { name: 'softpastel', color: '#00ddb5'},
    { name: 'NevRock', color: '#e60053'},
    { name: 'Sol_Invictus', color: '#5096ff'},
    { name: 'xzzeus', color: '#dde100'},
    { name: 'gotchasuckas', color: '#5096ff'},
    { name: 'FunRyder', color: '#00ddb5'},
  ],
};