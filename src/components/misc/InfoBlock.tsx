import * as React from "react";
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

type Props = {
  imgName: string,
  title: string,
  content: string,
  left?: boolean
}

const InfoBlock = ({imgName, title, content, left}: Props) => {
  return (
    <Container className="info-block">
      {!left && 
        <Row>
          <Col md={{span: 4 }} className="info-block-copy">
            <div className="title">{title}</div>
            <div className="content">{content}</div>
          </Col>
          <Col md={{span:6, offset: 2 }}>
            <Image src={(`static/images/${imgName}.png`)} />
          </Col>
        </Row>
      }
      {left && 
        <Row>
          <Col md={{span: 6}}>
            <Image src={(`static/images/${imgName}.png`)} />
          </Col>
          <Col md={{span: 4, offset: 2}} className="info-block-copy">
            <div className="title">{title}</div>
            <div className="content">{content}</div>
          </Col>
        </Row>
      } 
    </Container>
  )
}

export default InfoBlock;