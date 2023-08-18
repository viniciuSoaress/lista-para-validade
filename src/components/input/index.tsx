import { ChangeEvent, useState } from "react"
import { Date } from "../../hooks"


type InputProps = {
  onAdd: (data: Date) => void
}

let nextId = 1;

export function Inputs({ onAdd }: InputProps) {

  const [objDate, setObjDate] = useState<Date>({id: 0, name: '', validade: ''})


  function handleChange(
    e: ChangeEvent<HTMLInputElement>, 
    field: keyof Date
    ) {
    setObjDate({
      ...objDate,
      [field]: e.target.value,
    })
  }

  function handleAdd() {
    if(objDate.name.length < 3 || objDate.validade.length != 10){
      alert('nome deve conter mais de 3 letras, e a validade e da sequinte forma dd-mm-yyyy')
      return 
    }

    if (!/^\d{2}-\d{2}-\d{4}$/.test(objDate.validade)){
      alert('validade deve ser do sequinte formato dd-mm-aaaa')
      return
    }
    setObjDate({
      name: '',
      validade: '',
      id: ++nextId
    })

    onAdd(objDate)

  }
  

  return (
    <label htmlFor="">

      <input
        type="text"
        name="name"
        onChange={e => handleChange(e, 'name')}
        value={objDate.name}
        placeholder="nome"
      />

      <input
        type="text"
        name="validade"
        onChange={e => handleChange(e, 'validade')}
        value={objDate.validade}
        placeholder="validade"
      />
      
      <button onClick={handleAdd}>
        adicionar
      </button>

    </label>
  )
}