export default function datetime(value: string): string {
  const datetime = new Date(value)

  return `${datetime.toLocaleDateString()} ${datetime.toLocaleTimeString()}`
}
