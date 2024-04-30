import styled from "styled-components";
import { InputProps } from "../../types";

export default function Input({label, value, setValue, min, max}:InputProps){
    const set = (e:any) => {
        if( e.target.value > max ){
            setValue(max);
        }
        else if( e.target.value < min ){
            setValue(min);
        }
        else{
            setValue(e.target.value);
        }
    };

    return (
        <WrapperSld>
            <LabelSld>{label}</LabelSld>
            <InputSld value={value} onChange={ set } />
        </WrapperSld>
    );
}

const WrapperSld = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 30px;
`;

const LabelSld = styled.label`
    color: #FFFFFF;
    margin: 30px 0px;
    margin: 15px 0px 5px 0px;
    font-size: 17px;
    font-weight: 500;
`;

const InputSld = styled.input.attrs({type:"text"})`
    border-radius: 12px;
    padding: 7px;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    width: 120px;
    text-align: right;
    background-color: #DCDADE;
`;