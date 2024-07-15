import DesktopBg from "/pattern-hills.svg";
import StarBackground from "/bg-stars.svg";
import { useEffect, useState } from "react";
import "./App.css";
import DigitDisplay from "./components/DigitDisplay";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function App() {
    const [count, setCount] = useState(777341);
    const days = Math.floor(count / (3600 * 24));
    const hours = Math.floor((count - days * 24 * 3600) / 3600);
    const minutes = Math.floor((count - days * 24 * 3600 - hours * 3600) / 60);
    const seconds = count % 60;

    useEffect(() => {
        const intervalId = setTimeout(() => {
            setCount((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    });

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-c_black_blue to-c_purple">
            <div
                className="flex-grow flex flex-col items-center justify-center gap-24"
                style={{ backgroundImage: `url(${StarBackground})` }}
            >
                <h2 className="font-red_hat text-center px-4 text-white font-bold text-xl tracking-[0.45rem]">
                    WE'RE LAUNCHING SOON
                </h2>
                <div className="grid grid-cols-4 lg:gap-8 gap-4">
                    <div className="font-red_hat font-bold lg:w-36 w-[20vw] items-center gap-4 flex flex-col">
                        <DigitDisplay prev={days + 1} next={days} />
                        <span className="font-red_hat text-c_grayish_blue tracking-[0.25rem] lg:scale-100 scale-75 text-xs">
                            DAYS
                        </span>
                    </div>
                    <div className="font-red_hat font-bold lg:w-36 w-[20vw] items-center gap-4 flex flex-col">
                        <DigitDisplay
                            prev={hours + 1 === 24 ? 0 : hours + 1}
                            next={hours}
                        />
                        <span className="font-red_hat text-c_grayish_blue tracking-[0.25rem] lg:scale-100 scale-75 text-xs">
                            HOURS
                        </span>
                    </div>
                    <div className="font-red_hat font-bold lg:w-36 w-[20vw] items-center gap-4 flex flex-col">
                        <DigitDisplay
                            prev={minutes + 1 === 60 ? 0 : minutes + 1}
                            next={minutes}
                        />
                        <span className="font-red_hat text-c_grayish_blue tracking-[0.25rem] lg:scale-100 scale-75 text-xs">
                            MINUTES
                        </span>
                    </div>
                    <div className="font-red_hat font-bold lg:w-36 w-[20vw] items-center gap-4 flex flex-col">
                        <DigitDisplay
                            prev={seconds + 1 === 60 ? 0 : seconds + 1}
                            next={seconds}
                        />
                        <span className="font-red_hat text-c_grayish_blue tracking-[0.25rem] lg:scale-100 scale-75 text-xs">
                            SECONDS
                        </span>
                    </div>
                </div>
            </div>
            <div
                className="h-[33vh] bg-no-repeat bg-cover bg-bottom flex items-center justify-center gap-6"
                style={{ backgroundImage: `url(${DesktopBg})` }}
            >
                <button className="text-c_grayish_blue text-2xl transition hover:text-c_soft_red">
                    <FaSquareFacebook />
                    <span className="sr-only">link to facebook</span>
                </button>
                <button className="text-c_grayish_blue text-2xl transition hover:text-c_soft_red">
                    <FaPinterest />
                    <span className="sr-only">link to pinterest</span>
                </button>
                <button className="text-c_grayish_blue text-2xl transition hover:text-c_soft_red">
                    <FaInstagram />
                    <span className="sr-only">link to instagram</span>
                </button>
            </div>
        </div>
    );
}
