const dateFormatter = new Intl.DateTimeFormat('pt-BR')
const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
  useGrouping: false,
})

export function localDateKey(value: Date) {
  const year = String(value.getFullYear())
  const month = String(value.getMonth() + 1).padStart(2, '0')
  const day = String(value.getDate()).padStart(2, '0')
  return [year, month, day].join('-')
}

export function modifiedText(date: string) {
  if (date === localDateKey(new Date())) return 'Hoje'
  return dateFormatter.format(new Date(date + 'T12:00:00'))
}

export function sizeText(bytes: number) {
  if (bytes >= 1e9) return decimalFormatter.format(bytes / 1e9) + ' GB'
  if (bytes >= 1e6) return decimalFormatter.format(bytes / 1e6) + ' MB'
  if (bytes >= 1e3) return String(Math.round(bytes / 1e3)) + ' KB'
  return String(bytes) + ' B'
}

export function extensionOf(name: string) {
  const dot = name.lastIndexOf('.')
  return dot > 0 ? name.slice(dot + 1).toUpperCase() : ''
}
