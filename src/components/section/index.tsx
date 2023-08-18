import { Date } from "../../hooks"
import s from './index.module.css'

type SectionProps = {
  date: Date,
  onDelete: (id: number) => void
}
const dat = new Date()
const nn = dat.getTime()
console.log(nn);
 
export function Section({date, onDelete}: SectionProps){

  

  return (
    <section className={s.section}>
      <strong>{date.name}</strong> {' '}
      <strong className={s.ss}>{date.validade}</strong>
      <button onClick={() => onDelete(date.id)}>
        apagar
      </button>
    </section>
  )
}