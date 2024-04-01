const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomMonthData = () => {
  const totalEarning = getRandomNumber(100000, 200000);
  const orders = getRandomNumber(1000, 3000);
  const balance = getRandomNumber(1000, 3000);
  const sales = getRandomNumber(80000, 100000);
  const newCustomers = getRandomNumber(50, 100); 

  return {
    totalEarning,
    orders,
    balance,
    sales,
    newCustomers 
  };
};

export const Earning = Array.from({ length: 12 }, getRandomMonthData);

