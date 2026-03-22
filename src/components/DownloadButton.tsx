"use client";

import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface DownloadButtonProps {
  frontImage: string;
  templateName: string;
  fields: Record<string, string>;
  occasionLabel: string;
}

export default function DownloadButton({
  frontImage,
  templateName,
  fields,
  occasionLabel,
}: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);
  const [format, setFormat] = useState<"pdf" | "image">("pdf");

  async function handleDownload() {
    setLoading(true);

    try {
      // Create a hidden container to render both sides
      const container = document.createElement("div");
      container.style.cssText = `
        position: fixed;
        left: -9999px;
        top: 0;
        width: 600px;
        font-family: Georgia, serif;
        background: #fffaf5;
      `;

      // Front page HTML
      const frontPage = document.createElement("div");
      frontPage.style.cssText = `
        width: 600px;
        height: 800px;
        position: relative;
        overflow: hidden;
        background: #fff0f3;
      `;
      const frontImg = document.createElement("img");
      frontImg.src = frontImage;
      frontImg.crossOrigin = "anonymous";
      frontImg.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      `;
      frontPage.appendChild(frontImg);

      // Back page HTML
      const backPage = document.createElement("div");
      backPage.style.cssText = `
        width: 600px;
        height: 800px;
        background: #fffaf5;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0;
        box-sizing: border-box;
      `;

      const topBar = document.createElement("div");
      topBar.style.cssText = `
        height: 8px;
        background: linear-gradient(to right, #ffd6e7, #ffb3c1, #fff9d6);
      `;

      const backContent = document.createElement("div");
      backContent.style.cssText = `
        flex: 1;
        padding: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `;

      // To field
      if (fields.to) {
        const toSection = document.createElement("div");
        toSection.innerHTML = `
          <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#e8637a;margin:0 0 8px;font-family:DM Sans,sans-serif;">to</p>
          <p style="font-size:32px;color:#3d2a2a;margin:0;font-family:Georgia,serif;">${fields.to}</p>
        `;
        backContent.appendChild(toSection);
      }

      // Message field
      if (fields.message) {
        const msgSection = document.createElement("div");
        msgSection.style.cssText = `flex:1;display:flex;align-items:center;padding:40px 0;`;
        msgSection.innerHTML = `
          <p style="font-size:20px;color:#6b4545;line-height:1.7;margin:0;font-style:italic;font-family:Georgia,serif;white-space:pre-wrap;">${fields.message}</p>
        `;
        backContent.appendChild(msgSection);
      }

      // From field
      if (fields.from) {
        const fromSection = document.createElement("div");
        fromSection.style.textAlign = "right";
        fromSection.innerHTML = `
          <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#e8637a;margin:0 0 8px;font-family:DM Sans,sans-serif;">from</p>
          <p style="font-size:26px;color:#3d2a2a;margin:0;font-family:Georgia,serif;">${fields.from}</p>
        `;
        backContent.appendChild(fromSection);
      }

      // Any extra fields
      Object.entries(fields)
        .filter(([key]) => !["to", "message", "from"].includes(key))
        .forEach(([key, value]) => {
          const extraSection = document.createElement("div");
          extraSection.innerHTML = `
            <p style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#e8637a;margin:16px 0 4px;font-family:DM Sans,sans-serif;">${key}</p>
            <p style="font-size:18px;color:#3d2a2a;margin:0;font-family:Georgia,serif;">${value}</p>
          `;
          backContent.appendChild(extraSection);
        });

      const bottomBar = document.createElement("div");
      bottomBar.style.cssText = `
        height: 8px;
        background: linear-gradient(to right, #fff9d6, #ffb3c1, #ffd6e7);
      `;

      backPage.appendChild(topBar);
      backPage.appendChild(backContent);
      backPage.appendChild(bottomBar);

      container.appendChild(frontPage);
      document.body.appendChild(container);

      if (format === "pdf") {
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [600, 800],
        });

        // Render front
        const frontCanvas = await html2canvas(frontPage, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#fff0f3",
        });
        pdf.addImage(
          frontCanvas.toDataURL("image/jpeg", 0.95),
          "JPEG",
          0, 0, 600, 800
        );

        // Render back
        container.appendChild(backPage);
        const backCanvas = await html2canvas(backPage, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#fffaf5",
        });
        pdf.addPage();
        pdf.addImage(
          backCanvas.toDataURL("image/jpeg", 0.95),
          "JPEG",
          0, 0, 600, 800
        );

        pdf.save(`${templateName}-${occasionLabel}.pdf`);
      } else {
        // Image: stitch front + back vertically
        container.appendChild(backPage);

        const frontCanvas = await html2canvas(frontPage, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#fff0f3",
        });
        const backCanvas = await html2canvas(backPage, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#fffaf5",
        });

        const combined = document.createElement("canvas");
        combined.width = frontCanvas.width;
        combined.height = frontCanvas.height + backCanvas.height;
        const ctx = combined.getContext("2d")!;
        ctx.drawImage(frontCanvas, 0, 0);
        ctx.drawImage(backCanvas, 0, frontCanvas.height);

        const link = document.createElement("a");
        link.download = `${templateName}-${occasionLabel}.png`;
        link.href = combined.toDataURL("image/png");
        link.click();
      }
    } catch (err) {
      console.error("Download error:", err);
    } finally {
      // Cleanup
      const container = document.querySelector(
        "div[style*='-9999px']"
      ) as HTMLElement;
      if (container) document.body.removeChild(container);
      setLoading(false);
    }
  }

  return (
    <div className="bg-white border border-petal-100 rounded-3xl px-6 py-5 shadow-soft">
      <p className="text-xs font-medium tracking-widest uppercase text-rose-DEFAULT mb-4 text-center">
        save this card
      </p>

      {/* Format toggle */}
      <div className="flex gap-2 mb-4 bg-cream rounded-full p-1">
        <button
          onClick={() => setFormat("pdf")}
          className={`flex-1 text-sm py-2 rounded-full transition-all duration-200 ${
            format === "pdf"
              ? "bg-white text-rose-DEFAULT shadow-soft font-medium"
              : "text-[#9a7070] hover:text-rose-DEFAULT"
          }`}
        >
          PDF
        </button>
        <button
          onClick={() => setFormat("image")}
          className={`flex-1 text-sm py-2 rounded-full transition-all duration-200 ${
            format === "image"
              ? "bg-white text-rose-DEFAULT shadow-soft font-medium"
              : "text-[#9a7070] hover:text-rose-DEFAULT"
          }`}
        >
          Image
        </button>
      </div>

      {/* Download button */}
      <button
        onClick={handleDownload}
        disabled={loading}
        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-soft"
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-rose-DEFAULT/30 border-t-rose-DEFAULT rounded-full animate-spin" />
            Preparing your card...
          </>
        ) : (
          <>
            {format === "pdf" ? "Download as PDF" : "Download as Image"} ♡
          </>
        )}
      </button>

      <p className="text-xs text-center text-[#c4a0a0] mt-3">
        Front and back included
      </p>
    </div>
  );
}