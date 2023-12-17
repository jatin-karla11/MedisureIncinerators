import React, { useEffect, useState } from 'react';
import ServerService from '../ServerService';
import { Col, Container, Row } from 'react-bootstrap';

const Documents = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    ServerService.getDocuments()
      .then((res) => {
        console.log(res);
        setResults(res.data.documents);
      })
      .catch((err) => {
        console.log(err, 'error');
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
      {/* <h5 className='pl-4 mt-2'>Manifesto Hazardous Waste</h5> */}
      {/* <div className='documents_content'> */}
      {/* <div className="documents_content_pdf"><a href={bmwpdf} target="_blank">"EC"</a></div> */}
      {/* {documents?.map((doc) => (
          <div key={`document${doc.id}`} className='documents_content_pdf'>
            <a href={doc.url} target='_blank'>
              {doc.name}
            </a>
          </div>
        ))} */}
      {/* </div> */}
      <Container fluid='sm'>
        {/* <div className="documents_content_pdf"><a href={bmwpdf} target="_blank">"EC"</a></div> */}
        {results?.map(({ id, title, documents = [], links = [] }) => (
          <Row key={`${id}-outerdoc`}>
            <h5 className='pl-4 mt-2'>{title}</h5>
            {documents.map((doc) => {
              return (
                <Col
                  lg={3}
                  sm={6}
                  key={`document-${id}${doc.id}`}
                  // className='m-2'
                  // style={{ border: '1px solid' }}
                >
                  <div
                    // className='border border-2 border-black px-2 py-2 overflow-hidden '
                    // style={{
                    //   border: '1px solid',
                    // }}
                    className='documents_content_pdf w-100 overflow-hidden text-nowrap '
                    style={{
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <a
                      title={doc.name}
                      href={doc.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {doc.name}
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Documents;
