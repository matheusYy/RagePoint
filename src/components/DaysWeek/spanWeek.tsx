
type SpanWeekTypes = {
 text: string;
 textColor?: string
 className?: string
}

export const SpanWeek = ({ text, textColor }: SpanWeekTypes) => {
 const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
 const d = new Date();


 const styleColor = textColor == semana[d.getDay()] ? 'red' : '';
 return (
   <p style={{color: styleColor}}>{text[0] + text[1] + text[2]}</p>
 )
 }