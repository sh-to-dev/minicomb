import * as React from "react";
import {
  Button
} from 'react-bootstrap';

type Props = {
  buttonText: string
}

const PrimaryButton = ({buttonText, buttonClass}: Props) => {
  return (
    <Button className="primary-button" value={buttonText}>{buttonText}</Button>
  )
}

export default PrimaryButton;