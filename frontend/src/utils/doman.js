export default function getDoman(doman){
  return (url) =>{
    return `https://${url}.${doman}`
  }
}