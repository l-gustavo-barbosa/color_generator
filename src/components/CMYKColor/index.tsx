import Input from "../Input";
import useCMYK from "../../hooks/useCMYK";
import Title from "../Title";
import Line from "../Line";
import Block from "../Block";

export default function CMYKColor() {
  const {
    cyan,
    magenta,
    yellow,
    key,
    setCyan,
    setMagenta,
    setYellow,
    setKey,
    color,
  } = useCMYK();

  return (
    <Block color={color}>
      <Title>CMYK - Cyan, Magenta, Yellow, Key</Title>
      <Line>
        <Input
          label="Ciano"
          value={cyan}
          setValue={setCyan}
          min={0}
          max={100}
        />
        <Input
          label="Magenta"
          value={magenta}
          setValue={setMagenta}
          min={0}
          max={100}
        />
        <Input
          label="Amarelo"
          value={yellow}
          setValue={setYellow}
          min={0}
          max={100}
        />
        <Input
          label="Preto"
          value={key}
          setValue={setKey}
          min={0}
          max={100}
        />
      </Line>
    </Block>
  );
}
