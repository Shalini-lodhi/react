import { useState } from "react";
import { InputBox } from "./components/input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
        <div
            className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                backgroundSize: "cover",
            }}
        >
            <div className="w-full max-w-md mx-auto p-6 rounded-xl backdrop-blur-lg bg-white/10 border border-gray-100 shadow-lg">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    {/* FROM INPUT */}
                    <div className="w-full mb-4 bg-white/30 p-4 rounded-lg shadow-inner">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>

                    {/* SWAP BUTTON WITH LINE */}
                    <div className="relative w-full my-4 flex items-center">
                        <div className="flex-grow h-[2px] bg-gray-300"></div>
                        <button
                            type="button"
                            className="mx-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition shadow-md"
                            onClick={swap}
                        >
                            swap
                        </button>
                        <div className="flex-grow h-[2px] bg-gray-300"></div>
                    </div>

                    {/* TO INPUT */}
                    <div className="w-full mb-6 bg-white/30 p-4 rounded-lg shadow-inner">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>

                    {/* CONVERT BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition shadow-lg"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
