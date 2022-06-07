export function Boiling (props){
    const {celsius} = props;
    if(celsius>=100)return "L'eau bout"
    else return "L'eau ne bout pas"
}

/*function App() {
  const inputVal = 7260*1000;//1 * 2 * 60 * 60 * 1000;
  const timeNow = new Date().getTime();
  const difference = timeNow + inputVal;

  return (
    <div className='countdown'>
      <Clock />
      <CountdownTimer targetDate={difference} />
      <Input />
      <button>Clock</button>
      <Boiling celsius={11}/>
    </div>
  );
}
*/