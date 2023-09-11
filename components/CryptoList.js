import Link from "next/link";
import styles from "../styles/CryptoList.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import Search from "./Search";

export const formatNumbers = (numbers) => {
  return numbers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// ! to change the colors of the price
export const checkPrice = (p) => {
  const priceChange = Math.sign(p);

  if (priceChange === -1) {
    return "red"; // ! display red color when the number is NEGATIVE
  } else {
    return "green"; // * display green color when the number is POSITIVE
  }
};
const CryptoList = ({ coins }) => {
  const [search, setSearch] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // ! Search Coins
  useEffect(() => {
    setFilteredCoins(
      coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, coins]);

  return (
    <section className="coin-list">
      <div className="container">
        <div className={styles.table}>
          <Search value={search} onChange={handleSearch} />
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Coin</th>
                <th>Price</th>
                <th>Change 24H</th>
                <th>Market Cap</th>
              </tr>
            </thead>

            <tbody>
              {filteredCoins.map((coin, index) => {
                const {
                  id,
                  name,
                  icon,
                  symbol,
                  price,
                  priceChange1d,
                  marketCap,
                } = coin;
                return (
                  <tr>
                    <td>{index + 1}</td>

                    <td>
                      <Image src={icon} alt={name} width="20" height="20" />
                      &nbsp;
                      {symbol}
                    </td>

                    <td>${formatNumbers(price.toFixed(2))}</td>

                    <td className={checkPrice(priceChange1d)}>
                      {priceChange1d}
                    </td>

                    <td>${formatNumbers(marketCap.toFixed(2))}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

{
  /* <Link href={"/" + id} key={id}>

</Link> */
}

export default CryptoList;
