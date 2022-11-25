type Props = {
  value: string | number
}
const Screen = ({ value }: Props) => {
  return (
    <div className='equals'>{value}</div>
  )
}

export default Screen