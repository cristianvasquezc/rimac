import { CardSummary } from '@/components/cards/card-summary';
import { Breadcrumb } from '@/components/ui/breadcrumb';

function SummaryPage() {
  return (
    <div className='font-lato bg-white pb-10'>
      <Breadcrumb
        currentStep={2}
        href='/planes'
      />

      <div className='w-full max-w-4xl space-y-5 px-6 mx-auto'>
        <h1 className='font-bold text-[28px] md:text-[40px] leading-10 md:leading-12 tracking-[-0.6px]'>
          Resumen del seguro
        </h1>

        <CardSummary />
      </div>
    </div>
  );
}

export default SummaryPage;
