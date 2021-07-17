import ss from "../styles/Sponsors.module.css";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

export default function Sponsors() {
    return (
        <main className={`${ss.main} ${ss.topAlign}`}>
            <div className={ss.wrapper}>
                <h1>Sponsors</h1>
                <p>Those who made this hackathon possible.</p>
                <motion.div
                    whileHover={{

                            scale: [1, 1.2, 1.2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                         
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    {/* "sponser us" form */}
                    <motion.a href="#">
                        <h2 className={ss.icon}>
                            Sponsor Us <FaChevronRight className={ss.arrow}/>
                        </h2>
                    </motion.a>
                </motion.div>
                <div>
                    {/* sponsor logos */}
                    <motion.a href="#">
                        <motion.img>

                        </motion.img>
                    </motion.a>

                    <motion.a href="#">
                        <motion.img>
                            
                        </motion.img>
                    </motion.a>

                    <motion.a href="#">
                        <motion.img>
                            
                        </motion.img>
                    </motion.a>
                </div>

            </div>
        </main>
    )
}