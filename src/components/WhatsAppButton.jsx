import logoDT from "@/assets/logo-dt.png";

const WhatsAppButton = () => {
  const phoneNumber = "+923143219807";
  const message = "Hi, I'm interested in your products!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-background border border-primary/40 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl overflow-hidden"
      aria-label="Chat on WhatsApp"
    >
      <img src={logoDT} alt="Downtown Logo" className="w-12 h-12 object-contain" />
    </a>
  );
};

export default WhatsAppButton;
