type Props = {
  clickHandler: () => void;
  text: string;
  style?: React.CSSProperties;
};

const style = {
  display: 'block',
  backgroundColor: 'lightblue',
  borderRadius: '0.6em',
  border: 'none',
  padding: '0.7em',
};

export const Button: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <button onClick={props.clickHandler} style={{ ...style, ...props.style }}>
      {props.text}
    </button>
  );
};
