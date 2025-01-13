import CustomerSay from '@/react/sections/main-page/customer-say';
import Dashboard from '@/react/sections/main-page/dashboard';
import { FunctionComponent } from 'react';
const Pricing: FunctionComponent = () => {
  return (
    <div>
      <Dashboard />
      <CustomerSay />
    </div>
  );
};

export default Pricing;
