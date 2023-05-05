import styles from './TransactionHistory.module.css'
import PropTypes from "prop-types";


export const TransactionHistory = ({items}) => (
<table className={styles.table}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
            {
                items.map(({id,type,amount,currency}) => (
                    <tr className={styles.row} key={id}>
                    <td className={styles.line}>{type }</td>
                    <td className={styles.line}>{amount }</td>
                    <td className={styles.line}>{currency }</td>
                     </tr>
                ))
            }
  </tbody>
</table>
)

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}