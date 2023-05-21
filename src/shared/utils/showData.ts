type showDataTypes = {
 ano?: number;
 mes?: number;
 autoData?: boolean
}

export const showData = ({ ano, mes, autoData }: showDataTypes) => {
 const autoDataFunc = () => {
  const anoAuto = new Date().getFullYear();
  const mesAuto = new Date().getDate();
  return {
   ano: anoAuto,
   mes: mesAuto,
  }
 }

 const data = new Date(ano ? ano : autoDataFunc().ano, mes ? mes : autoDataFunc().mes, 0);

 return {
  mes: data.getDate(),
  dia: data.getDay().toString(),
  ano: data.getFullYear().toString(),
 }
}