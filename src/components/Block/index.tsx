import styled from "styled-components";

export default function Block({ color, children }: any) {
  return <Sld color={color}>{children}</Sld>;
}

const Sld = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin: 25px;
  border-radius: 30px;
  border: 2px solid #FFF;
  background-color: ${(props) => props.color};
`;

interface Props {
  color: string;
}
