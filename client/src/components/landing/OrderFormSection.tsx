// components/OrderOnlineEmbed.tsx
"use client";

import React, { useEffect } from "react";

export const OrderOnlineEmbed: React.FC = () => {
  useEffect(() => {
    const initEmbed = () => {
      // Define error logger
      if (typeof (window as any).xLogError !== "function") {
        (window as any).xLogError = function (error: any) {
          const req = new XMLHttpRequest();
          const payload = JSON.stringify({
            url: document.location.href,
            line: error.line,
            stack: error.stack,
          });
          const params =
            "message=" +
            encodeURIComponent(error.name) +
            "&payload=" +
            encodeURIComponent(payload) +
            "&type=embed&level=error";
          req.open("POST", "https://api.orderonline.id/log", true);
          req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          req.send(params);
        };
      }

      try {
        // Define embed script loader
        if (typeof (window as any).xEmbedScript !== "function") {
          (window as any).xEmbedScript = function () {
            (function (w: any, d: Document, e: string, v: string, id: string) {
              if (d.getElementById(id)) return;
              const t = d.createElement(e);
              t.async = true;
              t.src = v;
              t.id = id;
              const s = d.getElementsByTagName(e)[0];
              s.parentNode?.insertBefore(t, s);
            })(window, document, "script", "https://cdn.orderonline.id/js/embed-v2-slim.min.js?v=8.0.4", "oo-embed-js");
          };
        }

        // Define embed init
        if (typeof (window as any).xEmbedInit !== "function") {
          (window as any).xEmbedInit = function (w: any) {
            if (w.ooe) return;
            const n = (w.ooe = function () {
              // biome-ignore lint/suspicious/noExplicitAny: legacy embed
              (n as any).callMethod
                ? (n as any).callMethod.apply(n, arguments)
                : (n as any).queue.push(arguments);
            });
            if (!w._ooe) w._ooe = n;
            (n as any).push = n;
            (n as any).loaded = true;
            (n as any).version = "8.0.4";
            (n as any).queue = [];
          };
        }

        // Init OrderOnline embed
        (window as any).xEmbedInit(window);
        (window as any).ooe("setup", "redirect", "https://ruangbuku.orderonline.id");
        (window as any).ooe(
          "init",
          "6910c20cd5ff9a3ea005904f",
          "undefined",
          null,
          "oo-embed-form-undefined-3672",
          {
            mode: "page",
            action: "Klik untuk pemesanan",
            title: "Form Pemesanan",
            triggerPixel: true,
            triggerGtm: true,
          }
        );

        // Load jQuery if not present
        if (!(window as any).jQuery) {
          (function (w: any, d: Document, e: string, v: string, id: string) {
            if (d.getElementById(id)) return;
            const t = d.createElement(e);
            t.async = true;
            t.src = v;
            t.id = id;
            t.addEventListener("load", (window as any).xEmbedScript);
            const s = d.getElementsByTagName(e)[0];
            s.parentNode?.insertBefore(t, s);
          })(window, document, "script", "https://cdn.orderonline.id/js/vendor/jquery.min.js", "oo-embed-jquery");
        } else {
          (window as any).xEmbedScript();
        }
      } catch (e: any) {
        (window as any).xLogError(e);
        throw e;
      }
    };

    initEmbed();
  }, []);

  return (
    <div className="ooef">
      <form
        className="orderonline-embed-form"
        data-username="ruangbuku"
        data-product-slug="undefined"
        data-product-id="undefined"
        id="oo-embed-form-undefined-3672"
        data-origin="orderonline"
      >
        <div className="ooef-loader">
          <style>{`
            .ooef-loader {
              visibility: hidden;
              opacity: 0;
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              animation: ooLoadingIn 10s ease;
              -webkit-animation: ooLoadingIn 10s ease;
              animation-fill-mode: forwards;
              overflow: hidden;
            }
            @keyframes ooLoadingIn {
              0% {visibility: hidden;opacity: 0}
              20% {visibility: visible;opacity: 0}
              100% {visibility: visible;opacity: 1}
            }
            .ooef-loader>div,
            .ooef-loader>div:after {
              border-radius: 50%;
              width: 2.5rem;
              height: 2.5rem;
            }
            .ooef-loader>div {
              font-size: 10px;
              position: relative;
              text-indent: -9999em;
              border: .25rem solid #f5f5f5;
              border-left: .25rem solid #55c4cf;
              -webkit-transform: translateZ(0);
              -ms-transform: translateZ(0);
              transform: translateZ(0);
              -webkit-animation: ooLoading 1.1s infinite linear;
              animation: ooLoading 1.1s infinite linear;
            }
            .ooef-loader.error>div {
              border-left: .25rem solid #ff4500;
              animation-duration: 5s;
            }
            @keyframes ooLoading {
              0% {transform: rotate(0)}
              100% {transform: rotate(360deg)}
            }
          `}</style>
          <div aria-live="polite" role="status">
            <div>Loading...</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderOnlineEmbed;
