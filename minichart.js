export function drawLine(canvasId, data){
  const c=document.getElementById(canvasId);const ctx=c.getContext('2d');
  const w=c.width,h=c.height;ctx.clearRect(0,0,w,h);
  const max=Math.max(...data), min=Math.min(...data);
  const sx=i=>i*(w/(data.length-1)), sy=v=>h-((v-min)/(max-min||1))*h;
  ctx.beginPath();data.forEach((v,i)=>{const x=sx(i),y=sy(v);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();
}
