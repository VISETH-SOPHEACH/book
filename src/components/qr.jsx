import img13 from "../assets/img/qr.JPG";
import { useNavigate } from "react-router-dom";

function Qr() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 backdrop-blur-md light:bg-slate-100/80">
      <div className="glass-panel w-full max-w-md p-5 text-center md:p-6">
        <h2 className="text-2xl font-bold text-slate-50 light:text-slate-900">Scan to Checkout</h2>
        <p className="mt-2 text-sm text-slate-300 light:text-slate-700">Demo payment screen for this test website.</p>
        <img
          src={img13}
          alt="QR Code"
          className="mx-auto mt-4 w-full max-w-[320px] rounded-xl border border-white/20 light:border-slate-300/80"
        />
        <button
          type="button"
          onClick={() => navigate("/cart")}
          className="btn-secondary mt-5 w-full"
        >
          Back to Cart
        </button>
      </div>
    </div>
  );
}

export default Qr;
