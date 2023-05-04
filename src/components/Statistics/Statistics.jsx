import styles from "./Statistics.module.css"
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
    
   const render = stats.map(stat => {
       return (
           <li key={stat.id} className={styles.item}>
               <span className={styles.label}>{stat.label}</span>
               <span className={styles.percentage}> {stat.percentage}%</span>
           </li>
       )  

    });
   
         return (
            <section className={styles.statistics}>
                <h2 className={styles.title}>{title}</h2>

                <ul className={styles.list}>
                  {render}
                </ul>
            </section>
        );


    }

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
   stats: PropTypes.array.isRequired,
}