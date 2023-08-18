import { useState } from "react";

export type Date = {
  id: number,
  name: string,
  validade: string
}

export function useDate() {

  const [date, setDate] = useState<Date[]>([])

  function handleAddChange(data: Date) {
    setDate([
      ...date,
      {
        id: data.id,
        name: data.name,
        validade: data.validade
      }
    ])

  }

  function handleDelete(id: number) {
    setDate(date.filter(dt => {
      return dt.id !== id
    }))
  }

  return {
    date,
    handleAddChange,
    handleDelete,
  }
}