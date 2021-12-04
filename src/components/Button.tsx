export function Button(props: any) {
  return <button onClick={props.clickHandler} style={{...style, ...props.style}}>{props.text}</button>
}

const style = {
  display: 'block',
  backgroundColor: 'lightblue',
  borderRadius: '0.6em',
  border: 'none',
  padding: '0.7em',
  //margin: '0.2em'
}
