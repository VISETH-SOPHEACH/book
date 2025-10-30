import img13 from "../assets/img/qr.JPG";
import { useNavigate } from "react-router-dom";

function Qr() {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="flex flex-col items-start">
        <img
          src={img13}
          alt="QR Code"
          className="rounded-lg shadow-lg w-[300px] sm:w-[400px]"
        />
        <button
          type="button"
          onClick={() => navigate("/cart")}
          className="mt-4 self-end px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
        >
          Back, don't buy, it's just a test site
        </button>
      </div>
    </div>
  );
}

export default Qr;