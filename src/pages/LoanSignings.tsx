import { getServiceBySlug } from '@/data/services';
import ServiceHubEnhanced from '@/components/templates/ServiceHubEnhanced';
import { Navigate } from 'react-router-dom';

const LoanSignings = () => {
  const service = getServiceBySlug('loan-signings');
  
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return <ServiceHubEnhanced 
    service={service} 
    showBooking={true} 
    defaultService="loan-signings"
    quickAnswer={{
      question: "What happens during a loan signing?",
      answer: "A certified loan signing agent guides you through signing mortgage documents, reviews key terms, ensures proper notarization, and returns completed documents to your lender. We handle refinances, purchases, HELOCs, and reverse mortgages throughout Ohio."
    }}
  />;
};

export default LoanSignings;