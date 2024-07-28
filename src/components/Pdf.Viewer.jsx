import React from 'react';
import { Button, VStack, Icon, Box } from '@chakra-ui/react';
import { FaFilePdf } from 'react-icons/fa';

import examplePDF from './State wise MBBS Dunia Counselling Ebook.pdf';
import examplePDF2 from './article_23742.pdf';

const PdfViewer = () => {
  const handleDownload = (pdf) => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = pdf.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box width={'100vw'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <VStack spacing={4} align="center">
        <Icon as={FaFilePdf} boxSize={16} color="red.500" />
        <h1>PDF Viewer Example</h1>
        {examplePDF && (
          <Button colorScheme="blue" onClick={() => handleDownload(examplePDF)}>
            Download PDF 1
          </Button>
        )}
        {examplePDF2 && (
          <Button colorScheme="blue" onClick={() => handleDownload(examplePDF2)}>
            Download PDF 2
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default PdfViewer;




// import React from 'react';
// import { Button, VStack, Icon ,Box} from '@chakra-ui/react';
// import { FaFilePdf } from 'react-icons/fa';

// import examplePDF from './State wise MBBS Dunia Counselling Ebook.pdf';
// import examplePDF2 from "./article_23742.pdf"

// const PdfViewer = () => {
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = examplePDF;
//     link.download = 'State_wise_MBBS_Dunia_Counselling_Ebook.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//    <Box width={'100vw'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//     <VStack spacing={4} align="center">
//       <Icon as={FaFilePdf} boxSize={16} color="red.500" />
//       <h1>PDF Viewer Example</h1>
//       {examplePDF && (
//         <Button colorScheme="blue" onClick={handleDownload}>
//           Download PDF
//         </Button>
//       )}
//     </VStack>
//    </Box>

//   );
// };

// export default PdfViewer;
