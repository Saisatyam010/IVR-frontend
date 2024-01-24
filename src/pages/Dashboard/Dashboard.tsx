import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import CardFifth from '../../components/CartFifth.tsx';
import CardSixth from '../../components/CartSixth.tsx';
import { useAuth } from '../../context/auth.tsx';
// import ChartOne from '../../components/ChartOne.tsx';
// import ChartThree from '../../components/ChartThree.tsx';
// import ChartTwo from '../../components/ChartTwo.tsx';
// import ChatCard from '../../components/ChatCard.tsx';
// import MapOne from '../../components/MapOne.tsx';
// import TableOne from '../../components/TableOne.tsx';

const ECommerce = () => {
  const ctx = useAuth();
  console.log(ctx?.isAuthenticated+"isAuthenticated");
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFifth />
        <CardSixth />
      </div>

      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div> */}
    </>
  );
};

export default ECommerce;
