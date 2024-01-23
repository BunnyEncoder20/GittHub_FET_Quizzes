import React, { useState } from 'react'

// Importing Styles 
import styles from './QuizPage.module.css';


const QuizOptions = ({ currentQuestionIndex, options, optionType }) => {

    const [answers, setAnswers] = useState([]);

    const handleAnswer = (optionIndex) => {
        setAnswers(prev => {
            const newAnswers = [...prev];
            newAnswers[currentQuestionIndex] = options[optionIndex];

            return newAnswers;
        })
    }

    console.log(answers);

    return (
        <div className={styles.optionTable}>
            <table>
                <tbody>
                    <tr className={styles.optionRow}>
                        {options[0] &&
                            <td className={styles.optionCol}>
                                <button
                                    className={answers[currentQuestionIndex] === options[0] ? `${styles.optionColBtn} ${styles.optionActive}` : `${styles.optionColBtn}`}
                                    onClick={() => handleAnswer(0)}>
                                    {
                                        optionType === 'text' ? (
                                            options[0].optionText
                                        ) : optionType === 'ImgURL' ? (
                                            <img src={options[0].optionImg} alt='' />
                                        ) : (
                                            <>
                                                {options[0].optionText}
                                                <img src={options[0].optionImg} alt='' />
                                            </>
                                        )
                                    }
                                </button>
                            </td>
                        }
                        {
                            options[1] &&
                            <td className={styles.optionCol}>
                                <button
                                    className={answers[currentQuestionIndex] === options[1] ? `${styles.optionColBtn} ${styles.optionActive}` : `${styles.optionColBtn}`}
                                    onClick={() => handleAnswer(1)}>
                                    {
                                        optionType === 'text' ? (
                                            options[1].optionText
                                        ) : optionType === 'ImgURL' ? (
                                            <img src={options[1].optionImg} alt='' />
                                        ) : (
                                            <>
                                                {options[1].optionText}
                                                <img src={options[1].optionImg} alt='' />
                                            </>
                                        )
                                    }
                                </button>
                            </td>
                        }
                    </tr>
                    <tr className={styles.optionRow}>
                        {
                            options[2] &&
                            <td className={styles.optionCol}>
                                <button
                                    className={answers[currentQuestionIndex] === options[2] ? `${styles.optionColBtn} ${styles.optionActive}` : `${styles.optionColBtn}`}
                                    onClick={() => handleAnswer(2)}>
                                    {
                                        optionType === 'text' ? (
                                            options[2].optionText
                                        ) : optionType === 'ImgURL' ? (
                                            <img src={options[2].optionImg} alt='' />
                                        ) : (
                                            <>
                                                {options[2].optionText}
                                                <img src={options[2].optionImg} alt='' />
                                            </>
                                        )
                                    }
                                </button>
                            </td>
                        }
                        {
                            options[3] &&
                            <td className={styles.optionCol}>
                                <button
                                    className={answers[currentQuestionIndex] === options[3] ? `${styles.optionColBtn} ${styles.optionActive}` : `${styles.optionColBtn}`}
                                    onClick={() => handleAnswer(3)}>
                                    {
                                        optionType === 'text' ? (
                                            options[3].optionText
                                        ) : optionType === 'ImgURL' ? (
                                            <img src={options[3].optionImg} alt='' />
                                        ) : (
                                            <>
                                                {options[3].optionText}
                                                <img src={options[3].optionImg} alt='' />
                                            </>
                                        )
                                    }
                                </button>
                            </td>
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default QuizOptions