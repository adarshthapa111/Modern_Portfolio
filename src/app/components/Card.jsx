
import Link from "next/link"

const Card = () => {
  return (
    <div>
      <div className="bg-[#f5f5f5] rounded-xl overflow-hidden shadow-lg w-full max-w-[500px]">
        <div className="bg-[#2c3e50] px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Gift Card</h2>
        </div>
        <div className="relative h-[300px] overflow-hidden">
          <img
            src="/img/herald.png"
            alt="Gift Card Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 space-y-4">
          <p className="text-lg font-medium">
            Wishing you a wonderful day, <span className="font-bold">Alex</span>
            !
          </p>
          <p className="text-gray-600">
            Enjoy this gift card and treat yourself to something special.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-[#2c3e50] text-white font-medium hover:bg-[#34495e] focus:outline-none focus:ring-2 focus:ring-[#2c3e50] focus:ring-opacity-50"
            prefetch={false}
          >
            Redeem Gift Card
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
