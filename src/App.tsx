import { useDate } from "./hooks"
import { Inputs, Section } from "./components"
import './App.css'

export function App() {

  const { date, handleAddChange, handleDelete } = useDate()



  return (
    <>
    <h2>Validades</h2>
      <Inputs onAdd={handleAddChange} />

      <main>
        {
          date.map(d => (
            <Section
             key={d.id} 
             date={d} 
             onDelete={handleDelete}
             />
          ))
        }
      </main>
    </>
  )
}