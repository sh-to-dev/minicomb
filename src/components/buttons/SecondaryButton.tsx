import * as React from "react";
import {
  Button
} from 'react-bootstrap';

type Props = {
  buttonText: string
}

const SecondaryButton = ({buttonText}: Props) => {
  return (
    <Button className="secondary-button" value={buttonText}>{buttonText}</Button>
  )
}

export default SecondaryButton;