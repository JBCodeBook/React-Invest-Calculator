import reactImg from "../../assets/investment-calculator-logo.png"

export default function Header() {
    return (
        <header id="header">
            <img src={reactImg} alt="Green bag with Dollar sign on it with stacks of gold coins" />
            <h1>React Investment Calculator</h1>
        </header>
    );
}