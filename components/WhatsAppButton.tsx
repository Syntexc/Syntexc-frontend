"use client";

import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.module.scss";  

export default function WhatsAppButton() {
  const phoneNumber = "917895974133";  
  const message = "Hello! I would like to know more about your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}
