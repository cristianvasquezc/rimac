import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardSummary } from '../components/cards/card-summary';
import { Breadcrumb } from '../components/ui/breadcrumb';
import { useAppStore } from '../store/useAppStore';

function SummaryPage() {
  const navigate = useNavigate();
  const { user, quoteFormData, selectedPlan, userType } = useAppStore();

  useEffect(() => {
    if (!user || !quoteFormData || !selectedPlan) {
      navigate('/');
    }
  }, [user, quoteFormData, selectedPlan, navigate]);

  if (!user || !quoteFormData || !selectedPlan) {
    return null;
  }

  return (
    <div className='font-lato bg-white pb-10'>
      <Breadcrumb
        currentStep={2}
        href='/planes'
        hidden
      />

      <div className='w-full max-w-4xl space-y-5 px-6 mx-auto'>
        <h1 className='font-bold text-[28px] md:text-[40px] leading-10 md:leading-12 tracking-[-0.6px]'>
          Resumen del seguro
        </h1>

        <CardSummary
          user={user}
          formData={quoteFormData}
          selectedPlan={selectedPlan}
          userType={userType}
        />
      </div>
    </div>
  );
}

export default SummaryPage;
