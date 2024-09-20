import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className="pl-5 pr-2 flex items-center justify-center" style={{ background: "#022040" }}>
            {/* Logo */}
            <Link to="/" className="flex items-center">
                <img
                    src={require("../../assets/logos/law-logo-1.png")}
                    alt="Law Logo"
                    style={{ height: "4rem", width: "8rem" }}
                    className="mr-2"
                />
            </Link>
        </div>
    );
}

export default Logo;
