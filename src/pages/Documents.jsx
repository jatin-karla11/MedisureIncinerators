import React, { useEffect, useState } from 'react';
import ServerService from '../ServerService';
import { Col, Container, Row } from 'react-bootstrap';

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    ServerService.getDocuments()
      .then((res) => {
        console.log(res);
        setDocuments(res.data.documents);
      })
      .catch((err) => {
        console.log(err);
        alert('fail to fetch documents');
      });
  }, []);

  return (
    <div
      className='documents'
      id='documentid'
      style={{
        paddingTop: '70px',
        minHeight: '100vh',
      }}
    >
      <div className='page_title'>
        Documents
        <hr className='titlehr'></hr>
      </div>
      <h5 className='pl-4'>Manifesto Hazardous Waste</h5>
      <div className='documents_content'>
        {/* <div className="documents_content_pdf"><a href={bmwpdf} target="_blank">"EC"</a></div> */}
        {documents?.map((doc) => (
          <div key={`document${doc.id}`} className='documents_content_pdf'>
            <a href={doc.url} target='_blank'>
              {doc.name}
            </a>
          </div>
        ))}
      </div>
      <Container>
        <Row>
          {/* <div className="documents_content_pdf"><a href={bmwpdf} target="_blank">"EC"</a></div> */}
          {documents?.map((doc) => (
            <Col
              lg={3}
              key={`document${doc.id}`}
              style={{ margin: 0 }}
              className='documents_content_pdf'
            >
              <a href={doc.url} target='_blank'>
                {doc.name}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Documents;
