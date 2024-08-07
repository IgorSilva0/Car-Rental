'use client'
import React, { useEffect } from "react";

const Footer = () => {
  
  useEffect(()=>{
    const currentYear = document.querySelector('#currentYear');
    if (currentYear) {
      currentYear.textContent = new Date().getFullYear().toString();
    }
  },[])

  return (
        <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-sm bg-slate-800">
        <p>&copy; <span id="currentYear"></span> Powered by{" "}
          <a
            href="https://igorsilva.me"
            target="_blank"
            className="font-bold hover:cursor-pointer"
            rel="noreferrer"
          >
            Igor Silva ❣️
          </a>
          All rights reserved.
        </p>
        </footer>
    )
}

export default Footer