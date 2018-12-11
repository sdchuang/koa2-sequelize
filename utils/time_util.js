
// 时分秒格式转换成秒
export function timeToSecond(timeStr){
  var Temp = timeStr.split(':')
  var Seconds = 3600 * Number(Temp[0]) + 60 * Number(Temp[1]) + Number(Temp[2]);
  return Seconds;
}