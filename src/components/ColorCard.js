export default function ColorCard({color, onClick, flash}){
  return ( 
    <div 
    onClick={onClick} // eslint-disable-next-line
    className={`colorCard ${color} ${flash ? "flash" : ""}`}
    ></div> 
  );
}